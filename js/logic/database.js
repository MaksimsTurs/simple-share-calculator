import is from "../tool/is.js"

class Database {
  #name = ''

  constructor(database) {
    this.#name = database.name

    if(!is.isDefined(database.name)) {
      throw new TypeError('Name of database is not defined!')
    }
    
    if(!this.get()) {
      localStorage.setItem(this.#name, JSON.stringify(database.defaultValue))
    }    
  }

  get() {
    return JSON.parse(localStorage.getItem(this.#name))
  }

  #set(data) {
    localStorage.setItem(this.#name, JSON.stringify(data))
  }

  update(callback) {
    this.#set(callback(this.get()))
  }
}

export default Database