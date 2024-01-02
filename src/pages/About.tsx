import { Form } from 'react-bootstrap'
import React, { useState } from 'react'

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
