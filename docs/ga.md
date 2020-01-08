* seed a population (random)
* score the fitness of the specimens
* breed the top two specimens
* apply subtle mutation to the child specimens

Hello World

genes = A-Z, a-z, space, ', -, ., ?, !

const letters = 'abcdefghijklmnopqrstuvwxyz'

const genes = [
  ...letters.split(''),
  ...letters.split('').map(letter => letter.toUpperCase()),
  ...',.?! '.split(')
]
