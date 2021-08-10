const characterInfo = document.getElementById('character-info');
const buttonGetCharacterInfo = document.getElementById('getCharacterInfo');
const planetInfo = document.getElementById('planet-info');
const buttonGetPlanetInfo = document.getElementById('getPlanetInfo');
const buttonNext = document.getElementById('next');
const buttonPrev = document.getElementById('prev');

async function getAboutFilmCharacterInfo(url) {
    request(url)
        .then(({ characters }) => {
            characterInfo.innerHTML = '';
            planetInfo.innerHTML = '';
            return characters.map (e => getCharacterInfo(e))
        })
}

async function getAboutPlanetInfo(url) {
    request(url)
        .then(data => {
            return data.results;
        })
        .then(results => {
            characterInfo.innerHTML = '';
            planetInfo.innerHTML = '';
            return results.map(e => getPlanetInfo(e));
        });
}

async function getCharacterInfo(url) {
    request(url).then(({ name, birth_year, gender }) => {
        return (
            characterInfo.innerHTML += `<div class="character-info">
            <p>${name}</p><img src="img/${name}.jpg"/> 
			<p>Birth_year ${birth_year}</p>
			<p>Gender ${gender} </p></div>`
        );
    });
}

async function getPlanetInfo(info) {
    return planetInfo.innerHTML += `<li class="planet-info"><p> ${info.name}</p></li>`;
}

async function request(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(console.log);
}

buttonGetCharacterInfo.addEventListener('click', () => {
    getAboutFilmCharacterInfo(`https://swapi.dev/api/films/2`);
});

buttonGetPlanetInfo.addEventListener('click', () => {
    getAboutPlanetInfo(`https://swapi.dev/api/planets/`);
});

let page = 1;
buttonNext.addEventListener('click', e => {
    page += 1;
    if (page > 6) {
        page = 6;
    }
    getAboutPlanetInfo(`https://swapi.dev/api/planets/?page=${page}`);
});

buttonPrev.addEventListener('click', () => {
    page -= 1;
    if (page < 1) {
        page = 1;
    }
    getAboutPlanetInfo(`https://swapi.dev/api/planets/?page=${page}`);
});