// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce(cb: (...args: any[]) => void, delay: number) {
  let timer: number = 0
  console.log('usedebounce invoking')

  return (...args: unknown[]) => {
    console.log('=====Entering the function==========')
    clearInterval(timer)
    timer = window.setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
