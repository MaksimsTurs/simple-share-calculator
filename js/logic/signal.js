class Signal {
  data = undefined
  #subscribers = []

  constructor(constructorOption) {
    this.data = constructorOption.defaultValue
  }

  connect(callback) {
    this.#subscribers.push(callback)
    return this
  }

  emit(callback) {
    this.#subscribers.forEach(subscriber => {
      if(callback) {
        this.data = callback(this.data) 
        subscriber(this.data)
        return
      }

      subscriber(this.data)        
    })
  }
}

export default Signal