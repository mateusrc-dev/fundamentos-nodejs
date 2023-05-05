const buf = Buffer.from("ok") // for create a buffer with a string

console.log(buf.toJSON()) // return a hexadecimal that represents 'ok' - this format is better for the pc to work with data in memory - toJSON transform data in numbers decimals