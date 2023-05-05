// /users/:id
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g //here we let's write a regular expression - form find text that follow a format specific inside text big for find the two point inside of text (regex) - 'g' is for specify that this regex is global 

  console.log(Array.from(path.matchAll(routeParametersRegex)))
}