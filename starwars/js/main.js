import { films } from '../data/films.js'
import { people } from '../data/people.js'
console.log(films[0].opening_crawl)

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')



people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let height = document.createElement('h3')
    let gender = document.createElement('h3')
    let mass = document.createElement('h3')
    let birth_year = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(pic)
    personDiv.appendChild(gender)
    personDiv.appendChild(birth_year)
    personDiv.appendChild(height)  
    personDiv.appendChild(mass)
    

    let charNum = getCharNumber(person.url)
   
    name.textContent = person.name
    gender.textContent = `GENDER: ${person.gender}`
    birth_year.textContent = `BORN: ${person.birth_year}`
    height.textContent = `HEIGHT: ${person.height}cm`
    mass.textContent = `MASS: ${person.mass}kg`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    
    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if(charID.indexOf('/') !== -1 ) {
    return charID.slice(1,2)
  } else {
    return charID
  }
}

const allDivs = Array.from(mainArea.querySelectorAll('div'))


let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  femaleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  otherCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"

femaleButton.addEventListener('click', event => {
femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  otherCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let otherButton = document.createElement('button')
otherButton.textContent = "Other Characters"

otherButton.addEventListener('click', event => {
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
  femaleCharacters.forEach(elt => {  
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "display: none;")
  })
});


let allButton = document.createElement('button')
allButton.textContent = "All Characters"

allButton.addEventListener('click', () => {
    femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
        return element.firstChild.textContent === elt.name
    })
      console.log(matchedDiv)
      matchedDiv[0].setAttribute("style", "visibility: visibile;")
  })
})

mainHeader.appendChild(allButton)
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' & person.gender !== 'male')
console.log(maleCharacters)
console.log(femaleCharacters)
console.log(otherCharacters)















/*import { people } from '/data/people.js'
import { removeChildren, getLastNumber } from '../utils/index.js'

const mainContent = document.querySelector('#main')

populateDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'none' ||
        person.gender === 'hermaphrodite') {
        return person
    }
})

maleButton.addEventListener('click', (event) => {
   populateDOM(maleCharacters)
})

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true) // genius level
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
}
*/



















































/*
import {films}     from "../data/films.js";
import {people}    from "../data/people.js";
import {planets}   from "../data/planets.js";
import {species}   from "../data/species.js";
import {starships} from "../data/starships.js";
import {vehicles}  from "../data/vehicles.js";

const wiki_films        = document.querySelector("#wiki-films");
const wiki_people       = document.querySelector("#wiki-people");
const wiki_planets      = document.querySelector("#wiki-planets");
const wiki_species      = document.querySelector("#wiki-species");
const wiki_starships    = document.querySelector("#wiki-starships");
const wiki_vehicles     = document.querySelector("#wiki-vehicles");
const films_button      = document.querySelector("#films-button");
const people_button     = document.querySelector("#people-button");
const planets_button    = document.querySelector("#planets-button");
const species_button    = document.querySelector("#species-button");
const starships_button  = document.querySelector("#starships-button");
const vehicles_button   = document.querySelector("#vehicles-button");

function createCards(wiki, data) {
    var number;
    switch (data) {
        case films:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="episode-${entry.episode_id}">
                        <h3>${entry.title}</h3>
                        <img src="/img/films/${number}.jpg" onerror="this.style.display='none'" />
                        <ul>
                            <li>Episode:        ${entry.episode_id}</li>
                            <li>Director:       ${entry.director}</li>
                            <li>Producers:      ${entry.producer}</li>
                            <li>Release Date:   ${entry.release_date}</li>
                        </ul>
                    </div>`;
                });
            break;
        case people:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <h3>${entry.name}</h3>
                        <img src="/img/characters/${number}.jpg" onerror="this.style.display='none'" />
                        <ul>
                            <li>Height:     ${entry.height}</li>
                            <li>Birth Year: ${entry.birth_year}</li>
                            <li>Gender:     ${entry.gender}</li>
                        </ul>
                    </div>`;
            });
            break;
        case planets:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <h3>${entry.name}</h3>
                        <img src="/img/planets/${number}.jpg" onerror="this.style.display='none'" />
                        <ul>
                            <li>Diameter:   ${entry.diameter}</li>
                            <li>Terrain:    ${entry.terrain}</li>
                            <li>Population: ${entry.population}</li>
                        </ul>
                    </div>`;
            });
            break;
        case species:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <h3>${entry.name}</h3>
                        <img src="/img/species/${number}.jpg" onerror="this.style.display='none'" />
                        <ul>
                            <li>Classification:     ${entry.classification}</li>
                            <li>Designation:        ${entry.designation}</li>
                            <li>Skin Colors:        ${entry.skin_colors}</li>
                            <li>Average Height:     ${entry.average_height}</li>
                            <li>Average Lifespan:   ${entry.average_lifespan}</li>
                        </ul>
                    </div>`;
            });
            break;
        case starships:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <h3>${entry.name}</h3>
                        <img src="/img/starships/${number}.jpg" onerror="this.style.display='none'" />
                        <ul>
                            <li>Manufacturer:       ${entry.manufacturer}</li>
                            <li>Cost in Credits:    ${entry.cost_in_credits}</li>
                            <li>Length:             ${entry.length}</li>
                            <li>Crew:               ${entry.crew}</li>
                            <li>Passengers:         ${entry.passengers}</li>
                            <li>Hyperdrive Rating:  ${entry.hyperdrive_rating}</li>
                            <li>Starship Class:     ${entry.starship_class}</li>
                        </ul>
                    </div>`;
            });
            break;
        case vehicles:
            data.forEach(function (entry) {
                number = entry.url.match(/[0-9]+/g);
                console.log(number);
                wiki.innerHTML += `
                    <div class="project-tile" id="person-${entry.name.replace(/\s/g, "")}">
                        <h3>${entry.name}</h3>
                        <img src="/img/vehicles/${number}.jpg" onerror="this.style.display='none'"/>
                        <ul>
                            <li>Manufacturer:       ${entry.manufacturer}</li>
                            <li>Cost in Credits:    ${entry.cost_in_credits}</li>
                            <li>Length:             ${entry.length}</li>
                            <li>Crew:               ${entry.crew}</li>
                            <li>Passengers:         ${entry.passengers}</li>
                            <li>Max Speed:          ${entry.max_atmosphering_speed}</li>
                            <li>Vehicle Class:      ${entry.vehicle_class}</li>
                        </ul>
                    </div>`;
            });
            break;
    }
    return;
}

function changeWiki (new_button, new_wiki) {
    wiki_films.classList.add("hidden");
    wiki_people.classList.add("hidden");
    wiki_planets.classList.add("hidden");
    wiki_species.classList.add("hidden");
    wiki_starships.classList.add("hidden");
    wiki_vehicles.classList.add("hidden");
    new_wiki.classList.remove("hidden");

    films_button.classList.remove("active");
    people_button.classList.remove("active");
    planets_button.classList.remove("active");
    species_button.classList.remove("active");
    starships_button.classList.remove("active");
    vehicles_button.classList.remove("active");
    new_button.classList.add("active");
}

createCards(wiki_films,      films);
createCards(wiki_people,     people);
createCards(wiki_planets,    planets);
createCards(wiki_species,    species);
createCards(wiki_starships,  starships);
createCards(wiki_vehicles,   vehicles);

films_button.addEventListener("click", function () {
    changeWiki(films_button, wiki_films);
});
people_button.addEventListener("click", function () {
    changeWiki(people_button, wiki_people);
});
planets_button.addEventListener("click", function () {
    changeWiki(planets_button, wiki_planets);
});
species_button.addEventListener("click", function () {
    changeWiki(species_button, wiki_species);
});
starships_button.addEventListener("click", function () {
    changeWiki(starships_button, wiki_starships);
});
vehicles_button.addEventListener("click", function () {
    changeWiki(vehicles_button, wiki_vehicles);
});
*/