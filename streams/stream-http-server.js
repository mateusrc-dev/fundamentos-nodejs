import http from 'node:http' // we let's to understand how the 'http node' connect with streams
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1 // warning - we let's use variable to transform data
    
    console.log(transformed)

    callback(null, Buffer.from(String(transformed))) // the first parameter is a error null in case not happening error
  }
}

const server = http.createServer(async (req, res) => { // req and res are streams, all in node is streams - req is a ReadableStream and res is a WriteStream
  const buffers = [] // parts which we let's to receive of stream

  for await (const chunk of req) { // we let's get each part of 'req' and put in array buffers - 'await' is for await while don't finish this 'for'
    buffers.push(chunk)
  } // we let's process all content to after handle with this content

  const fullStreamContent = Buffer.concat(buffers).toString() // to join all parts of buffers

  console.log(fullStreamContent)

  return res.end(fullStreamContent)

  // return req // we let's to receive information slowly
  // .pipe(new InverseNumberStream()) // send to stream of transform
  // .pipe(res) // send to stream of response
})

server.listen(3334) 