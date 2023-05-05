import { Readable } from 'node:stream'

class OneToHundredStream extends Readable { // creating stream of reading
  index = 1

  _read() { // this method return that data of stream
    const i = this.index++

    setTimeout(() => { // we let's show data in terminal part by part before finish
      if (i > 5) {
        this.push(null) // we let's saying that not there information more to are send there stream
      } else {
        const buf = Buffer.from(String(i)) // we let's use variable 'i' to transform this variable in buffer - buffer not accept numbers
        this.push(buf) // push return something to user
      }
    }, 1000)
  }
}

fetch('http://localhost:3334', { // we let's simulation a backend and do a request using fetch - input of data
  method: 'POST', // we let's use method 'post' because we let's send a information
  body: new OneToHundredStream(), // content of request - we let's send a stream - send data slowly, the connection of 'fetch' don't to will close
}).then(response => {
  return response.text()
}).then(data => {
  console.log(data)
})