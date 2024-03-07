import { http } from 'msw'

export const handlers = [
  http.get('http://localhost:4000/auth/login', (req, res, context) => {
    return res(
      context.status(200),
      context.json([
        {
          name: 'mytheeswaran',
        },
        {
          name: 'Baskaran',
        },
      ])
    )
  }),
]
