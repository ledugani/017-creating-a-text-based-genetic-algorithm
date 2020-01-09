* seed a population (random)
* score the fitness of the specimens
* breed the top two specimens
* apply subtle mutation to the child specimens

Hello World

genes = [all lowercase letter, all uppercase letters, all punctuation]

# seed & score
aehjsd ojdd => 3
... 1000 random specimens
Hfloo oordd => 5

# breeding
const m = 'aehjsd ojdd'
const f = 'Hfloo oordd'

m.split(').map((letter, i) => {
  return Math.random() >= 0.5 ? m[i] : f[i]
})

# mutation

child = 'Hehoss ojrd'
Math.random() > 0.999
child.split('').map((lett, i) => {
  return Math.random > 0.999 ? getRandomGene() : child[i]
})

# iteration, score, breed, mutation
