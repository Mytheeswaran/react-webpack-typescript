// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottle(cb: (...args: any[]) => void, delay: number) {
  let shouldWait = false
  // console.log('usethrottle invoking')

  return (...args: any[]) => {
    // console.log('=====Entering the function==========')
    if (shouldWait === true) {
      // console.log('checking returning is happening')
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(() => {
      shouldWait = false
    }, 1000)
  }
}
