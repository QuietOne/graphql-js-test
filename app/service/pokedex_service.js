import { pokedexRepository } from "../database/pokedex_repository";

const getAll = (page, limit) => {
    const pokedex = pokedexRepository.get()
    const newPage = (!page || page < 0) ? 0 : page
    const newLimit = (!limit || limit < 0) ? 10 : limit
    return pokedex.slice(newPage * newLimit, (newPage + 1) * newLimit)
}

const getById = (id) => pokedexRepository.get().filter(e => e.id === id)[0]

const getByNum = (num) => pokedexRepository.get().filter(e => e.num === num)[0]

const getByName = (name) => pokedexRepository.get().filter( e => e.name === name)[0]

const changePokemonsName = (id, newName) => {
    const pokedex = pokedexRepository.get()
    const pokemon = pokedexRepository.get().filter(e => e.id === id)[0]
    pokemon.name = newName
    //update evolution names
    pokedex.forEach(pok => {
        if (!!pok.prevEvolution) {
            const prevPokemon = pok.prevEvolution.filter(e => e.num === pokemon.num)[0]
            if (!!prevPokemon) prevPokemon.name = newName
        }
        if (!!pok.nextEvolution) {
            const nextPokemon = pok.nextEvolution.filter(e => e.num === pokemon.num)[0]
            if (!!nextPokemon) nextPokemon.name = newName
        }
    })

    pokedexRepository.overwritePokedex(pokedex)
    return pokemon
}

export const pokedexService = { 
    getAll, getById, getByNum, getByName,
    changePokemonsName,
}