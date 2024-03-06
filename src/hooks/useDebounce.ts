import { useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce(input: any, delay: number) {
  const [debounced, setDebounced] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(input)
    }, delay)

    return () => clearTimeout(timer)
  }, [input])

  return debounced
}

{
  /* =========================old code=========================

    export function debounce(cb: (...args: any[]) => void, delay: number) {
      let timer: number = 0

      return (...args: unknown[]) => {
        clearInterval(timer)
        timer = window.setTimeout(() => {
          cb(...args)
        }, delay)
      }
    }

    ref for the working code: https://www.youtube.com/watch?v=gwIkg1acujU

  */
}
