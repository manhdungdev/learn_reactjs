import { deleteStudent, getStudent, getStudents } from 'apis/students.apis'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { Students as StudentsType } from 'types/Student.type'
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useQueryString } from 'utils/utils'
import { toast } from 'react-toastify'

const LIMIT = 10

export default function Students() {
  // const [isLoading, setIsLoading] = useState<boolean>(false)
  // const [students, setStudents] = useState<StudentsType>([])
  // useEffect(() => {
  //   setIsLoading(true)
  //   getStudents(1, 10)
  //     .then((res: any) => {
  //       setStudents(res.data)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  // })
  // }, [])

  const queryString: { page?: string } = useQueryString()
  const queryClient = useQueryClient()

  const page = Number(queryString.page) || 1
  const studentsQuery = useQuery({
    queryKey: ['students', page],
    queryFn: ({ signal }) => {
      // const controller = new AbortController()
      // setTimeout(() => {
      //   controller.abort()
      // }, 5000)
      return getStudents(page, LIMIT, signal)
    },
    placeholderData: keepPreviousData,
    staleTime: 6 * 1000,
    gcTime: 3 * 1000,
    refetchOnWindowFocus: false
  })
  const totalStudents = Number(studentsQuery.data?.headers['x-total-count']) || 0
  const totalPages = Math.ceil(totalStudents / LIMIT)

  const deleteStudentMutation = useMutation({
    mutationFn: (id: string | number) => deleteStudent(id)
  })
  const handleDelete = (id: string | number) => {
    deleteStudentMutation.mutate(id, {
      onSuccess: (_, id) => {
        queryClient.invalidateQueries({ queryKey: ['students', page] })
        toast.success(`Delete student successfully id ${id}!`)
      }
    })
  }

  // const handlePrefetchStudent = (id: number) => {
  //   queryClient.prefetchQuery({
  //     queryKey: ['student', String(id)],
  //     queryFn: () => getStudent(id),
  //     staleTime: 10 * 1000
  //   })
  // }

  const handlePrefetchStudent = (seconds: number) => {
    const id = '6'
    queryClient.prefetchQuery({
      queryKey: ['student', id],
      queryFn: () => getStudent(id),
      staleTime: seconds * 1000
    })
  }

  const refetchStudents = () => {
    studentsQuery.refetch()
  }

  const cancelRequestStudents = () => {
    queryClient.cancelQueries({ queryKey: ['students', page] })
  }

  return (
    <div>
      <h1 className='text-lg'>Students</h1>

      <Link
        to='/students/add'
        type='button'
        className=' mb-2 mt-6 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Add student
      </Link>

      <button onClick={() => handlePrefetchStudent(10)} className='5 rounded bg-blue-500 px-5 py-2'>
        Click 10s
      </button>
      <button onClick={() => handlePrefetchStudent(2)} className='5 rounded bg-blue-500 px-5 py-2'>
        Click 10s
      </button>
      <button onClick={refetchStudents} className='5 rounded bg-pink-500 px-5 py-2'>
        Refetch Students
      </button>
      <button onClick={cancelRequestStudents} className='5 rounded bg-red-500 px-5 py-2'>
        Cancel query
      </button>

      {studentsQuery.isLoading && (
        <>
          <div role='status' className='mt-6 animate-pulse'>
            <div className='mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <div className='h-10  rounded bg-gray-200 dark:bg-gray-700' />
            <span className='sr-only'>Loading...</span>
          </div>
        </>
      )}
      {!studentsQuery.isLoading && (
        <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  #
                </th>
                <th scope='col' className='py-3 px-6'>
                  Avatar
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
                <th scope='col' className='py-3 px-6'>
                  <span className='sr-only'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {studentsQuery.data?.data.map((student) => (
                <tr
                  key={student.id}
                  // onMouseEnter={() => handlePrefetchStudent(student.id)}
                  className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
                >
                  <td className='py-4 px-6'>{student.id}</td>
                  <td className='py-4 px-6'>
                    <img src={student.avatar} alt='student' className='h-5 w-5' />
                  </td>
                  <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'>
                    {student.last_name}
                  </th>
                  <td className='py-4 px-6'>{student.email}</td>
                  <td className='py-4 px-6 text-right'>
                    <Link
                      to={`/students/${student.id}`}
                      className='mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Edit
                    </Link>
                    <button
                      className='font-medium text-red-600 dark:text-red-500'
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className='mt-6 flex justify-center'>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex -space-x-px'>
            <li>
              {page === 1 ? (
                <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Previous
                </span>
              ) : (
                <Link
                  to={`/students?page=${page - 1}`}
                  className=' rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                >
                  Previous
                </Link>
              )}
            </li>
            {Array(totalPages)
              .fill(0)
              .map((_, index) => {
                const pageIndex = index + 1
                const isActive = pageIndex === page
                return (
                  <li key={pageIndex}>
                    <NavLink
                      className={`border border-gray-300  py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100  hover:text-gray-700 ${
                        isActive ? 'bg-gray-100 text-gray-700' : ''
                      }`}
                      to={`/students?page=${pageIndex}`}
                    >
                      {pageIndex}
                    </NavLink>
                  </li>
                )
              })}

            <li>
              {page === totalPages ? (
                <span className=' cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  Next
                </span>
              ) : (
                <Link
                  className='rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  to={`/students?page=${page + 1}`}
                >
                  Next
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
