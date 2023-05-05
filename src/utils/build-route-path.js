// /users/:id
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g //here we let's write a regular expression - form find text that follow a format specific inside text big for find the two point inside of text (regex) - 'g' is for specify that this regex is global 
  
  const pathWithParams  = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)') // we let's to replace the parameter name by the content of parameter

  // console.log(pathWithParams) // /users/([a-z0-9-_]+)
  // console.log(Array.from(path.matchAll(routeParametersRegex)))
  const pathRegex = new RegExp(`^${pathWithParams}`) // let let's create new reg - all regex have method to called 'test' that return true or false case the 'string' to be valid in this regex

  return pathRegex
}