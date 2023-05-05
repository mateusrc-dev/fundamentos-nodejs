export async function json(req, res) {
  const buffers = [] // parts which we let's to receive of stream
  for await (const chunk of req) { // we let's get each part of 'req' and put in array buffers - 'await' is for await while don't finish this 'for'
    buffers.push(chunk)
  } // we let's process all content to after handle with this content

  try { // does not always come body in req
    req.body = JSON.parse(Buffer.concat(buffers).toString()) // to join all parts of buffers - this data are in format text, we let's use 'parse' for transform this data in object - creating new property in req that called 'body'
  } catch (err) {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json') // we let's send in header which type of content the response 
}