import { emojiRepository } from "../database/emojis_repository";

const getAll = () => {
    const emojis = emojiRepository.get()
    return Object.keys(emojis).map((key, _) => { return { name: key, url: emojis[key] } } )
}

const getByName = (name) => getAll().filter(e => e.name === name)[0]

export const emojiService = { getAll, getByName }