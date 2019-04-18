import { pokedexService } from "../service/pokedex_service";

export const pokedexType = `
    type PokemonEvolution {
        num: String!
        name: String!
    }

    type Pokemon {
        id: Int!
        num: String!
        name: String!
        img: String
        type: [String]!
        height: String!
        weight: String!
        candy: String
        candyCount: Int
        egg: String
        spawnChance: Float
        avgSpawns: Int
        spawnTime: String
        multipliers: [Float]
        weaknesses: [String]!
        prevEvolution: [PokemonEvolution]
        nextEvolution: [PokemonEvolution]
    }
`

export const pokedexQuerySchema = `
    pokedex(page: Int, limit: Int): [Pokemon]
    pokemon(id: Int, num: String, name: String): Pokemon
`

export const pokedexModifySchema = `
    changePokemonsName(id: Int!, newName: String!): Pokemon
`

export const pokedexResource = {
    pokedex: ({page, limit}) => pokedexService.getAll(page, limit),
    pokemon: ({id, num, name}) => {
        if (!!id) return pokedexService.getById(id)
        if (!!num) return pokedexService.getByNum(num)
        if (!!name) return pokedexService.getByName(name)
    },
    changePokemonsName: ({id, newName}) => pokedexService.changePokemonsName(id, newName)
}
