import React, { Component } from 'react';
import GeneticAlgorithm from './ga/algorithm'

class App extends Component {
  // render() {
  //   const ga = new GeneticAlgorithm("Hello world")
  //   return <div>
  //     {
  //       ga.seed(100).map(specimen => <div>
  //         {
  //           specimen.fitness()
  //         }
  //       </div>)
  //     }
  //   </div>
  // }

  state = {
    target: "the infinite monkey theorem states that given an infinite amount time, an infinite number of monkeys hitting keys at random could recreate any work such as the complete volumes of William Shakespeare.",
    solution: null,
  }

  componentDidMount() {
    this.ga = new GeneticAlgorithm(this.state.target)
    this.setState({
      population: this.ga.seed(1000)
    })
    this.solve()
  }

  renderSolution = () => {
    if(!this.state.solution) return
    return this.state.solution.genes.map(gene => <span key={Math.random()}>
      {
        gene.value
      }
    </span>)
  }

  solve = () => {
    const { target } = this.state

    setTimeout(() => {
      this.setState(prevState => ({
        population: this.ga.breedGeneration(prevState.population),
        solution: this.ga.bestInPopulation(prevState.population)
      }), () => {
        this.resolve(target)
      })
    }, 1)
  }

  resolve = (target) => {
    const solution = this.state.solution.genes.map(gene => gene.value).join('')
    if(solution !== target) {
      this.solve()
    }
  }

  render() {
    return <div
      key={Math.random()}
    >
      {
        this.renderSolution()
      }
    </div>
  }
}

export default App;
