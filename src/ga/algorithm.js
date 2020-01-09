import Gene from './gene'
import Specimen from './specimen'

class GeneticAlgorithm {
  constructor(target) {
    this.target = target
    const letters = 'abcdefghijklmnopqrtuvwxyz'.split('')
    const punctuation = " ,.?!-".split('')

    this.genePool = [
      ...letters,
      ...letters.map(letter => letter.toUpperCase()),
      ...punctuation,
    ]
  }

  randomGene = () => new Gene({
    value: this.genePool[
      Math.floor(Math.random() * this.genePool.length)
    ]
  })

  seed = (n) => {
    const population = []
    for(let i = 0; i<n; i++) {
      const specimen = new Specimen()
      for(let j=0; j<this.target.length; j++) {
        specimen.genes.push(this.randomGene())
      }
      population.push(specimen)
      this.scorePopulation(population)
    }
    return population
  }

  crossover = (a, b) => {
    const child = new Specimen()
    for(let i=0; i<a.genes.length; i++)
      child.genes.push( Math.random() >= 0.5 ? a.genes[i] : b.genes[i] )
    return this.mutate(child)
  }

  mutate = (specimen) => {
    const rate = 0.99
    for(let i=0; i<specimen.genes.length; i++) {
      if(Math.random() >= rate) specimen.genes[i] = this.randomGene()
    }
    return specimen
  }

  score = (specimen) => {
    for(let i=0; i<specimen.genes.length; i++)
      specimen.genes[i].fitness = specimen.genes[i].value === this.target[i] ? 1 : 0
  }

  scorePopulation = (population) => {
    for(let i=0; i<population.length; i++) {
      this.scoreSpecimen(population[i])
    }
    return population
  }

  scoreSpecimen = (specimen) => {
    for(let i=0; i<specimen.genes.length; i++) {
      specimen.genes[i].fitness = specimen.genes[i].value === this.target[i] ? 1 : 0
    }
  }

  bestInPopulation = (population) =>
    population.sort((a, b) => b.fitness() - a.fitness())[0]

  breedGeneration = (population) => {
    this.scorePopulation(population)
    const a = this.bestInPopulation(population)
    const b = this.bestInPopulation(population.filter(specimen => specimen !== a))

    const newPopulation = []
    for(let i=0; i<population.length; i++)
      newPopulation.push(this.crossover(a, b))

    return newPopulation
  }
}

export default GeneticAlgorithm