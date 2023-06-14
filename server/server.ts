import './init-aliases'
import express from 'express'
import initializeApolloServer from './initGraphQLServer'
import cors from 'cors'
import { json } from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
import { config } from 'dotenv'
import { BaseContext } from '@apollo/server'
import dbConnect from './database'
export type Context = BaseContext & {
  user
}
// const context = async ({ req, res }): Promise<ResolverCtx> => {
//   parseJwt(req)

//   return {
//     req,
//     res,
//     user: req.user,
//   }
// }
const init = async () => {
  const app: express.Application = express()
  const PORT = 8080
  app.use(express.static('uploads'))
  app.use(express.urlencoded({ extended: true }))

  config()
  app.listen(PORT, async () => {
    dbConnect()
    const apolloServer = initializeApolloServer()
    await apolloServer.start()
    app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(apolloServer),
    )
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}/graphql \n`,
    )
  })
}
init()
