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


  