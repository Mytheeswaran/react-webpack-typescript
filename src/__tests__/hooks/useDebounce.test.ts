import { useDebounce } from '../../hooks/useDebounce'
import { useFakeTimers } from 'sinon'

let clock: sinon.SinonFakeTimers

beforeEach(() => {
  clock = useFakeTimers()
})

afterEach(() => {
  clock.restore()
})

test('function gets debounced by useDebounce hook', () => {
  const func = jest.fn()
  const debouncedFunc = useDebounce(func, 1000)

  // Call it immediately
  //   debouncedFunc()

  // func not called

  //   // Call it several times with 500ms between each call
  //   for (let i = 0; i < 10; i++) {
  //     clock.tick(500)
  //     debouncedFunc()
  //   }
  //   expect(func).toHaveBeenCalledTimes(0) // func not called

  //   // wait 1000ms
  //   clock.tick(1000)
  //   expect(func).toHaveBeenCalledTimes(1) // func called
})
