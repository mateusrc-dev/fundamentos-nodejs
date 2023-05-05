import fs from 'node:fs/promises' // for module for to work with physicist file

const databasePath = new URL('../db.json', import.meta.url) // class that is part of 'Node' - send two parameter, file name and path of file
// database = { "users": [...] }
export class Database {
  #database = {} // this property to will are private - don't possible use this property that class outside this file

  constructor() {  // this method is executed when this class is instantiated
    fs.readFile(databasePath, 'utf8').then(data => {
      this.#database = JSON.parse(data)
    }).catch(() => {this.#persist()})
  }

  #persist() { // this method will to write our database in physicist file
    fs.writeFile(databasePath, JSON.stringify(this.#database)) // the method 'fs' accept just text
  }

  select(table) {
    const data = this.#database[table] ?? [] // we let's find if exist a key inside database with the name of parameter

    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist();

    return data;
  }
}