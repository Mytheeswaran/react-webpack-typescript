import { useEffect, useState, useRef } from 'react'

export function useThrottle(input: any, delay: number) {
  const [throttled, setThrottled] = useState('')
  const lastExecuted = useRef(new Date())

  useEffect(() => {
    const now = new Date()
    const diff = now.getTime() - lastExecuted.current.getTime()
    if (diff > delay) {
      setThrottled(input) // need to check the last elements are not printing
      lastExecuted.current = new Date()
    }
  }, [input, delay])

  return throttled
}

// ref: https://www.youtube.com/watch?v=VDKMODA168A
// Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.: https://prathapreddy-mudium.medium.com/react-js-react-dom-development-js-16317-5000c75a64e7
