import { planets } from '../data/planets.js'
 


let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')



planets.forEach((planet) => {

    let planetDiv = document.createElement('div')
    let pic = document.createElement('img')
    let name = document.createElement('h1')
    pic.setAttribute('class', 'planetPic')
    name.textContent = planet.name
    let planetNum = getPlanetNum(planet.url)
    mainArea.appendChild(planetDiv)
    planetDiv.appendChild(name)
    planetDiv.appendChild(pic)
    
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
     
    

    planetDiv.setAttribute('class', 'planetDiv')
    name.setAttribute('class', 'planetName')
    function getPlanetNum(planetURL) {
        console.log(planetURL)
        let end = planetURL.lastIndexOf('/')
        let planetID = (planetURL.substring(end - 2, end))
        if (planetID.indexOf('/') !== -1) {
            return (planetID.slice(1, 2))
        } else {
            return planetID
        }
    
    }

    
})








/*
planets.forEach(function(planet) {

        let planetDiv = document.createElement('div')
        let planetName = document.createElement('h1')
        let planetPic = document.createElement('img')

        
        planetDiv.appendChild(name)
        planetDiv.appendChild(pic)


        let planetNum = getPlanetNumber(planet.url)

        planetName.textContent = planet.name
        /*planetPic.src = `https://swapi.dev/api/planets/${planetNum}.jpg`*/

        /*pic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`*/
       
       
        /*pic.setAttribute('class', 'card')

       

        mainArea.appendChild(planetDiv)

    })



console.log(planets)


let planetButton = document.createElement('button')
planetButton.textContent = 'Planets'

planetButton.addEventListener('click', () => {
    planets.forEach(planet => {
        let matchedDiv = allDivs.find(oneDiv => {
          return oneDiv.firstChild.textContent === planet.name
        })
        matchedDiv[0].setAttribute("style", "display: none;")
        /*matchedDiv.classList.add("animated", "fadeOut")
        })
    }) 

mainHeader.appendChild(planetButton)


 






planets.forEach((planet)=> {

    let planetDiv = document.createElement ('div')
    let name = document.createElement ('h1')
    let pic = document.createElement('img')
    

    name.textContent = planet.name
    pic.src = planet.url

    pic.setAttribute('class', 'card')

    planetDiv.appendChild(name)
    planetDiv.appendChild(pic)

    mainArea.appendChild(planetDiv)

})



console.log(planets)


let planetButton = document.createElement('button')
planetButton.textContent = "Planets"

planetButton.addEventListener('click', () => {

    planetDiv.forEach(planet => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === planet.name
        }) 
        console.log(matchedDiv)
        matchedDiv[0].setAttribute("style", "display: none;")

    }) 
 })
   

 mainHeader.appendChild(planetButton)


*/



/*

const mainHeader = document.querySelector('header')
const allDivs = Array.from(document.querySelectorAll('div'));



let planetsButton = document.createElement('button')
planetsButton.textContent = 'Planets'
mainHeader.appendChild(planetsButton)
planetsButton.addEventListener('click', () => {
    planets.forEach(planet => {
        let matchedDiv = allDivs.find((oneDiv) => {
           return oneDiv.firstChild.textContent === planet.name
        })
        matchedDiv.setAttribute("style", "display: block;")
    })

  
  
  
  
  */
  
  