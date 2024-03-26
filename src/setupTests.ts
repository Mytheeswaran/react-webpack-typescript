import '@testing-library/jest-dom'
import './setupDomTests'
import { TextEncoder } from 'node:util'

global.TextEncoder = TextEncoder
