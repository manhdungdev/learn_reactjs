import React, { startTransition, useDeferredValue, useEffect, useState, useTransition } from 'react'
// const products: string[] = [
//   'Nhan duyen tram nam',
//   'Hoa Duc',
//   'San Mo - Thong Thien La Thanh',
//   'Tu tran huyen linh',
//   'Suong khoi Dong Kinh',
//   'Thuong Duong',
//   'Duoi canh dai bang',
//   'Trang tan day nuoc',
//   'Nhu so'
// ]

// const fetchAPI = () => {
//   return new Promise<string[]>((resolve) => {
//     setTimeout(() => {
//       resolve(products)
//     }, 2000)
//   })
// }
export default function DeferValue() {
  const [val, setVal] = useState<string>('')

  //   const [productList, setProductList] = useState<string[]>([])
  // const deferName = useDeferredValue(val)
  const [deferredName, setDeferredName] = useState<string>('')
  const [pending, startTransition] = useTransition()

  //   useEffect(() => {
  //     fetchAPI().then((res) => {
  //       setProductList(res)
  //     })
  //   }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
    startTransition(() => {
      setDeferredName(e.target.value)
    })
  }
  console.log(pending)
  return (
    <div>
      <h2>Product List</h2>
      <input value={val} type='text' placeholder='Input value' autoFocus onChange={handleChange} />
      {pending && <span>Loading</span>}
      {!pending && <List defName={deferredName} />}
      {/* <h3>{deferName}</h3> */}
    </div>
  )
}

const List = (props: any) => {
  const { defName } = props
  //   const [list, setList] = useState<string[]>([])

  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log(defName)
    const SIZE = 19999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(defName)
    }
    setProducts(result)
  }, [defName])

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
}
