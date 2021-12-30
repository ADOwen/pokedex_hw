// const button = document.createElement('button');
// button.innerHTML = 'Search';
// document.body.append(button);

// button.addEventListener('click', ()=>{

// })


const getPokemon = async name =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const res = await fetch(url)
    const pokemon = await res.json() 
    pokemonName = pokemon.name
    image = pokemon.sprites.front_default
    ability1 =pokemon.abilities[0].ability.name 
    ability2 = pokemon.abilities[1].ability.name
    createElement(pokemonName, image, ability1, ability2)
}

const form1 = document.querySelector('#pokemonDataForm')
console.log(form1)

form1.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
    const pokeName = event.path[0][0].value
    console.log(pokeName, 'event')
    getPokemon(pokeName)
})

const createElement= (name,image, ab1, ab2)=>{
    const html1 = document.createElement('a')
    const html2 = document.createElement('img')
    const html3 = document.createElement('p')
    const html4 = document.createElement('p')
    html1.innerHTML = name
    html1.className = 'card-header'
    html2.src = image
    html3.innerHTML = `Ability 1 : ${ab1}`
    html4.innerHTML = `Ability 2 : ${ab2}`
    document.querySelector('.pokemon-name').insertAdjacentElement('beforeend', html1)
    document.querySelector('.pokemon-content').insertAdjacentElement('beforeend', html2)
    document.querySelector('.pokemon-content').insertAdjacentElement('beforeend', html3)
    document.querySelector('.pokemon-content').insertAdjacentElement('beforeend', html4)
}

// const loadData = async (pokemon)=>{
//     const data = await getPokemon()
//     pokemonName = data.name
//     console.log(pokeName)
//     createElement(pokeName)
// }
