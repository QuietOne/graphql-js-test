import { db } from './database/connection'
import { schema, root } from './resource/schema';

const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')

const port = 8080
db.initData()

app.get('/ping', (req, res) => res.send('Hello World!'))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`healthcheck on {{host}:${port}/ping`)
  console.log(`graphql enabled on {{host}}:${port}/graphql`)
})
