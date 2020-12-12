
import { pokemon } from 'data/pokemon.js'

const mainContainer = document.querySelector('.container')

function cardFront(pokeData) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face'
  let figure = document.createElement('figure')
  let caption = document.createElement('figcaption')
  let image = document.createElement('img')

  caption.textContent = pokeData.name
  if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
  } else {
    image.src = `../images/pokeball.png`
  }

  figure.appendChild(image)
  figure.appendChild(caption)
  cardFront.appendChild(figure)
  return cardFront
}

function cardBackInfo(pokeData) {
  let infoDiv = document.createElement('div')
  infoDiv.className = 'infoDiv'
  let moveOne = document.createElement('p')
  let moveTwo = document.createElement('p')
  let moveThree = document.createElement('p')
  let moveFour = document.createElement('p')
  moveOne.textContent = pokeData.moves[0].move.name
  moveTwo.textContent = pokeData.moves[1].move.name
  moveThree.textContent = pokeData.moves[2].move.name
  moveFour.textContent = pokeData.moves[3].move.name
  infoDiv.appendChild(moveOne)
  infoDiv.appendChild(moveTwo)
  infoDiv.appendChild(moveThree)
  infoDiv.appendChild(moveFour)
  return infoDiv
}

function cardBack(pokeData) {
  let cardBack = document.createElement('div')
  let backImage = document.createElement('img')
  backImage.className = 'backImage'
  backImage.src = `../images/pokeball.png`
  cardBack.className = 'card__face card__face--back'
  cardBack.appendChild(backImage)
  cardBack.appendChild(cardBackInfo(pokeData))
  return cardBack
}

function createPokeCard(pokeData) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'

  card.appendChild(cardFront(pokeData))
  card.appendChild(cardBack(pokeData))

  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped')
  })

  scene.appendChild(card)
  mainContainer.appendChild(scene)
}

const allFetchedPokemon = []

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
        allFetchedPokemon.push(myJson)
      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
  if (aPokemon.id === 0) {
    aPokemon.imageID = 0
  }
  if (aPokemon.id < 10) {
    aPokemon.imageID = '00' + aPokemon.id
  }
  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = '0' + aPokemon.id
  }
  if (aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id
  }
  if(aPokemon.name === "mr-mime") {
      aPokemon.name = "mr. Mime"
  }
  let dash = aPokemon.name.indexOf('-')
  if(dash !== -1) {
      aPokemon.name = aPokemon.name.slice(0,dash)
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function(response) {
      return response.json()
    })
    .then(function(retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon))
    })
}

class Pokemon {
    constructor(name) {
        this.id = 0,
        this.name = name,
        this.moves = [
          {
            move: {
              name: prompt('Enter the first move:'),
            },
          },
          {
            move: {
              name: prompt('Enter the second move:'),
            },
          },
          {
            move: {
              name: prompt('Enter the third move:'),
            },
          },
          {
            move: {
              name: prompt('Enter the fourth move:'),
            },
          },
        ]
    }
  }

/*
class Pokemon {
  constructor(name) {
      this.id = 0,
      this.name = name,
      this.moves = [
        {
          move: {
            name: 'Genius',
          },
        },
        {
          move: {
            name: 'Brilliance',
          },
        },
        {
          move: {
            name: 'Hammer',
          },
        },
        {
          move: {
            name: 'Thunder',
          },
        },
      ]
  }
}
*/


const alimonButton = document.querySelector('#alimon')
const selectPokemonButton = document.querySelector('#fetchPokemon')
const poketypeButton = document.querySelector('#poketype')

alimonButton.addEventListener('click', function() {
  let pokeName = prompt('Create a new Pokemon!:')
      createPokeCard(new Pokemon(pokeName))
  /*createPokeCard(matchIdToImage(new Pokemon('alimon')))*/
})

selectPokemonButton.addEventListener('click', function() {
    let pokemonID = prompt('Enter an ID of an existing pokemon:')
    fetchSinglePokemon(pokemonID)
})



poketypeButton.addEventListener('click', function() {
    const poisonTypes = allFetchedPokemon.filter(pokemon => pokemon.types[0].type.name === "poison")

console.log(poisonTypes)
})









































/*
export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

export function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`
        element.appendChild(star)
    }
}

export function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}
*/




/*const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    populatePokePage(data)
}

function populatePokePage(data) {
    const allPokemon = data.results
    for (const pokemon of allPokemon) {
        let pokeCard = document.createElement('div')
        pokeCard.className = 'pokecard'
        let pokeName = document.createElement('h3')
        pokeName.textContent = pokemon.pokeName

        pokeCard.appendChild(pokeName)
        pokeGrid.appendChild(pokeCard)
    }
}

loadData()
*/






/*
export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
}

export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

export function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px`
        element.appendChild(star)
    }
}

export function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}
*/