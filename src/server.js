import  http from 'node:http' // module that exists inside Node - this module http have several options for build applications http - APIs - we let's can create routes, how get, put, etc.
import { json } from './middlewares/json.js'

// CommonJs -> default import that use 'require'
// ESmodules -> default import that use the default 'import/export' - 'Node' by default not support this default - we let's append in file package.json the option to use this default import in 'Node'

const users = []

const server = http.createServer(async (req, res) => { // in 'req' we have all information about the request that into in server - 'res' sends the response to whoever is calling our server
  const { method, url } = req // 'method' and 'url' are elements more important of req - we can get them - method HTTP more common: get, post, put, patch, delete

  await json(req, res)
  
  if (method === 'GET' && url ===  '/users') { // testing which method comes in the request
    return res
    .end(JSON.stringify(users)) // we don't can send this response how a array - that's why we let's use the 'json = javascript object notation'
  }
  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body
    users.push({
      id: 1,
      name,
      email,
    })
    return res.writeHead(201).end() // we let's send a status code to client know the result of your request
  }
  return res.writeHead(404).end() //notfound
})

server.listen(3333) // our server 'Node' to will listen the port '3333'