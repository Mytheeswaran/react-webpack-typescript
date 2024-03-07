import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)

// ref: https://mswjs.io/docs/api/setup-server
