// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle(cb: (...args: any[]) => void, delay: number) {
  let throttle = true

  return (...args: unknown[]) => {
    if (throttle === true) {
      console.log('throttled')
      cb(...args)
      throttle = false
      console.log('throttle value ', throttle)
      setTimeout(() => {
        console.log('checking set timeout')
        throttle = true
      }, delay)
      return
    }
  }
}
