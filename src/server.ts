import { createRequestHandler } from '@tanstack/react-start/server'
import { getRouter } from './router'

export default {
  async fetch(request: Request, env: any, ctx: any) {
    return createRequestHandler({
      createRouter: getRouter,
      request,
    })
  },
}
