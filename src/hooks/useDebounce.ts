// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce(cb: (...args: any[]) => void, delay: number) {
  let timer: number = 0

  return (...args: unknown[]) => {
    clearInterval(timer)
    timer = window.setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
