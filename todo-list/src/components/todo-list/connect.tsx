import { debug, log } from './constant'

export interface ExtraInforType {
  log: (value: any) => void
  debug: boolean
}

export interface InjecredType{
    user: any
}

// export default function connect<T>(Component: React.ComponentType<T>) {
//   return function (props: Omit<T, keyof ExtraInforType>) {
//     return <Component {...(props as T)} debug={debug} log={log} />
//   }
// }

export default function connect<P>(injectedProps: P) {
  return function connect<T>(Component: React.ComponentType<T>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...injectedProps} />
    }
  }
}
