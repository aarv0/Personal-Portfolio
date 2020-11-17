const pokeGrid = document.querySelector('.pokemonGrid')

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