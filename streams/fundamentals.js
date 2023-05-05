// Streams

/* process.stdin // process is a variable global of nodejs
  .pipe(process.stdout) // stdin is the data entry in the terminal (stream readable)- stdout is the data output in the terminal (stream writeable) - pipe send the entry data to output */

  import { Readable, Transform, Writable } from 'node:stream'

  class OneToHundredStream extends Readable { // creating stream of reading
    index = 1

    _read() { // this method return that data of stream
      const i = this.index++

      setTimeout(() => { // we let's show data in terminal part by part before finish
        if (i > 100) {
          this.push(null) // we let's saying that not there information more to are send there stream
        } else {
          const buf = Buffer.from(String(i)) // we let's use variable 'i' to transform this variable in buffer - buffer not accept numbers
          this.push(buf) // push return something to user
        }
      }, 1000)
    }
  }

  class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
      const transformed = Number(chunk.toString()) * -1 // warning - we let's use variable to transform data
      callback(null, Buffer.from(String(transformed))) // the first parameter is a error null in case not happening error
    }
  }

  class MultiplyByTenStream extends Writable { // this class will to receive a number and multiply this number, after to will write result - in this 'class' we let's process the data while he is read, never we let's transform this data
    _write(chunk, encoding, callback) { // in this stream we have use this method   
      console.log(Number(chunk.toString()) * 10)
      callback()
    }
  }

  new OneToHundredStream() // to read data
    .pipe(new InverseNumberStream()) // to read data of something place and write data to other place - interface between stream readable and stream writeable 
    .pipe(new MultiplyByTenStream()) // while the stream is processed it will be written to the terminal