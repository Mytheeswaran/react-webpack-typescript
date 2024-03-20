import { useEffect, useState, useRef } from 'react'

export function useThrottle(input: any, delay: number) {
  const [throttled, setThrottled] = useState('')
  const lastExecuted = useRef(Date.now()) // check Date.now is giving false ms check on date function
  console.log('diff', Date.now() - lastExecuted.current)

  // if (Date.now() - lastExecuted.current > delay) {
  //   setThrottled(input)
  //   // lastExecuted.current = Date.now()
  // }
  // return throttled
}

// take ref: https://www.youtube.com/watch?v=VDKMODA168A
