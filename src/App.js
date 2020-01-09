import React, { Component } from 'react';
import GeneticAlgorithm from './ga/algorithm'

class App extends Component {
  render() {
    const ga = new GeneticAlgorithm("Hello world")
    return <div>
      {
        ga.seed(100).map(specimen => <div>
          {
            specimen.genes.map(gene => <span> { gene.fitness} </span>)
          }
        </div>)
      }
    </div>
  }
}

export default App;
