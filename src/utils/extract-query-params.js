// ?search=mateus&page=2
// ['search', 'mateus']
// ['page', '2']

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => { // 'reduce' is method of JS that walks the array and transform he in other thing
    const [key, value] = param.split('=')
    queryParams[key] = value // queryParams is a object that is build in end of reduce
    return queryParams
  }, {}) // to delete the first character - method 'split' creates an array separating elements from '&'
}