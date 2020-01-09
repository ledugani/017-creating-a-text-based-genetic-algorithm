class Gene {
  constructor(attr={}) {
    this.fitness = attr.fitness || -1
    this.value = attr.value
  }
}

export default Gene