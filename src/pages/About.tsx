import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
// import { useThrottle } from '../hooks/useThrottle'

export const About = () => {
  const [defaultInput, setDefaultInput] = useState<string>('')
  const debouncedInput = useDebounce(defaultInput, 1000)

  const handleChange = (e) => {
    setDefaultInput(e.target.value)
  }

  return (
    <>
      <div>About-Page</div>
      <Form.Group className="mb-3">
        <Form.Label>Search about</Form.Label>
        <Form.Control onChange={handleChange}></Form.Control>
      </Form.Group>

      {/* <div>Default Input: {defaultInput}</div> */}
      <div>Debounced Input: {debouncedInput}</div>
    </>
  )
}

{
  /* 
    https://www.developerway.com/posts/debouncing-in-react 
    https://dev.to/brettthurs10/prevent-re-renders-with-useref-1fgf -- useRef for rerendering issue
    
    Older versions of debounce before the top code
    =======================================hook that updates state inside main component==============
      export const About = () => {
        const [defaultInput, setDefaultInput] = useState('')
        const [debouncedInput, setDebouncedInput] = useState('')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any, react-hooks/exhaustive-deps
        const debouncedChange = debounce((...args: any[]) => {
          setDebouncedInput(args[0])
        }, 1000)

        const handleChange = (e) => {
          debouncedChange(e.target.value)
        }

        return (
          <>
            <div>About-Page</div>
            <Form.Group className="mb-3">
              <Form.Label>Search about</Form.Label>
              <Form.Control onChange={handleChange}></Form.Control>
            </Form.Group>

            <div>Default Input: {defaultInput}</div>
            <div>Debounced Input: {debouncedInput}</div>
          </>
        )
      }

    ==========================================before useDebounce custom hook==============
      export function About(): JSX.Element {
        const [defaultInput, setDefaultInput] = useState('')
        const [debouncedInput, setDebouncedInput] = useState('')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const debounce = function (cb: (...args: any[]) => void) {
          let timer: number = 0

          return (...args: unknown[]) => {
            clearInterval(timer)
            timer = window.setTimeout(() => {
              cb(...args)
            }, 1000)
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange = debounce((...args: any[]) => {
          setDebouncedInput(args[0])
        })

        return (
          <>
            <div>About-Page</div>
            <Form.Group className="mb-3">
              <Form.Label>Search about</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <div>Default Input: {defaultInput}</div>
            <div>Debounced Input: {debouncedInput}</div>
          </>
        )
      }

    ==========================================Non-generic debounce function==============
      export function About(): JSX.Element {
        const [defaultInput, setDefaultInput] = useState('')
        const [debouncedInput, setDebouncedInput] = useState('')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const debounce = function () {
          let timer: number = 0

          return (...args: unknown[]) => {
            clearInterval(timer)
            timer = window.setTimeout(() => {
              setDebouncedInput(args[0])
            }, 1000)
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange = debounce()

        return (
          <>
            <div>About-Page</div>
            <Form.Group className="mb-3">
              <Form.Label>Search about</Form.Label>
              <Form.Control
                onChange={(e) => handleChange(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <div>Default Input: {defaultInput}</div>
            <div>Debounced Input: {debouncedInput}</div>
          </>
        )
      }

    =============================================generic debounce function using callback=========
      export function About(): JSX.Element {
        const [defaultInput, setDefaultInput] = useState('')
        const [debouncedInput, setDebouncedInput] = useState('')

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const debounce = function (cb) {
          let timer: number = 0

          return (...args: unknown[]) => {
            clearInterval(timer)
            timer = window.setTimeout(() => {
              cb(...args)
            }, 1000)
          }
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange = debounce((...args) => {
          setDebouncedInput(args[0])
        })

        return (
          <>
            <div>About-Page</div>
            <Form.Group className="mb-3">
              <Form.Label>Search about</Form.Label>
              <Form.Control onChange={(e) => handleChange(e.target.value)}></Form.Control>
            </Form.Group>

            <div>Default Input: {defaultInput}</div>
            <div>Debounced Input: {debouncedInput}</div>
          </>
        )
      }
  */
}
