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
      this.score(population)
    }
    return population
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
}

export default GeneticAlgorithm