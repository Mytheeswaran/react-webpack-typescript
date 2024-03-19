// import { http } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

const server = setupServer(...handlers)
export { server }

// ref: https://mswjs.io/docs/api/setup-server
