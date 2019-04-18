import { buildSchema } from 'graphql'
import { emojisQuerySchema, emojiType, emojisResource } from './emojis_resource';
import { pokedexType, pokedexQuerySchema, pokedexResource, pokedexModifySchema } from './pokedex_resource';
  
export const schema = buildSchema(`
  ${emojiType}
  ${pokedexType}
  type Query {
    ${emojisQuerySchema}
    ${pokedexQuerySchema}
    test: String
  }
  type Mutation {
    ${pokedexModifySchema}
  }
`)

export const root = {
  emojis: emojisResource.emojis,
  emoji: emojisResource.emoji,
  pokedex: pokedexResource.pokedex,
  pokemon: pokedexResource.pokemon,
  changePokemonsName: pokedexResource.changePokemonsName,
  test: () => 'Hello world!',
};