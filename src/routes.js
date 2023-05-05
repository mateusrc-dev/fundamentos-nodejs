import { Database } from './database.js' // we let's put extension because are using type module
import { randomUUID } from 'node:crypto' // UUID - Unique Universal ID
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const users = database.select('users') // we let's use a methods of class that we create
      return res.end(JSON.stringify(users)) // we don't can send this response how a array - that's why we let's use the 'json = javascript object notation'
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/users'),
    handler: (req, res) => {
      const { name, email } = req.body
      const user = {
        id: randomUUID(), // generate random a 'id' unique
        name,
        email,
      }
      database.insert('users', user) // we let's send in parameter the table name and the data
      return res.writeHead(201).end() // we let's send a status code to client know the result of your request
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/users/:id'), // here the parameter have that to be dynamic - we let's identify the parameter 'id' with two point
    handler: (req, res) => {
      return res.end()
    },
  },
]