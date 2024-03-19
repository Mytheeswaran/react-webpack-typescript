import '@testing-library/jest-dom'
import './setupDomTests'
import { server } from './mocks/server'
import { TextEncoder } from 'node:util'

global.TextEncoder = TextEncoder

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
