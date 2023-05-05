import  http from 'node:http' // module that exists inside Node - this module http have several options for build applications http - APIs - we let's can create routes, how get, put, etc.
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// CommonJs -> default import that use 'require'
// ESmodules -> default import that use the default 'import/export' - 'Node' by default not support this default - we let's append in file package.json the option to use this default import in 'Node'


const server = http.createServer(async (req, res) => { // in 'req' we have all information about the request that into in server - 'res' sends the response to whoever is calling our server
  const { method, url } = req // 'method' and 'url' are elements more important of req - we can get them - method HTTP more common: get, post, put, patch, delete
  
  await json(req, res)
  
  const route = routes.find(route => { // 'find' to iterate
    return route.method === method && route.path === url
  })

  if (route) {
    return route.handler(req, res) // let's we called the function that are in route with the parameter
  }

  return res.writeHead(404).end() //notfound
})

server.listen(3333) // our server 'Node' to will listen the port '3333'