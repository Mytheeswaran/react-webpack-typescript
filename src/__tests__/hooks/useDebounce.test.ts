import { useDebounce } from '../../hooks/useDebounce'

afterEach(() => {
  jest.useRealTimers()
})

test('debounce', async () => {
  jest.useFakeTimers()

  const func = jest.fn()
  const debouncedFunc = useDebounce(func, 1000)

  // Call it immediately
  debouncedFunc()
  expect(func).toHaveBeenCalledTimes(0) // func not called

  // Call it several times with 500ms between each call
  for (let i = 0; i < 10; i++) {
    jest.advanceTimersByTime(500)
    debouncedFunc()
  }
  expect(func).toHaveBeenCalledTimes(0) // func not called

  // wait 600ms
  jest.advanceTimersByTime(600)
  expect(func).toHaveBeenCalledTimes(0) // func should not have been called even after 600 ms

  // wait 1000ms
  jest.advanceTimersByTime(1000)
  expect(func).toHaveBeenCalledTimes(1) // func should have been called only once after 1000 ms

  expect(func).not.toHaveBeenCalledTimes(2) // func should not have been called 2 times after 1000 ms
})

{
  /*
    Above setup is using the ref: 
      https://stackoverflow.com/questions/52224447/jest-unit-test-for-a-debounce-function
    as sinon was not working, replaced with jest.advanceTimersByTime(500)

    Example:2 --> https://stackoverflow.com/questions/65838387/testing-debounced-function-react-react-testing-library
  */
}
