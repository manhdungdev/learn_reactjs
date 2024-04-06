import axios, { AxiosError } from 'axios'
import { FormError } from 'pages/AddStudent/AddStudent'

export const isAxiosError = (
  error: unknown
): error is {
  response: {
    data: {
      error: FormError
    }
    status: number
  }
} => {
  return axios.isAxiosError(error) && error !== null && 'response' in error
}
