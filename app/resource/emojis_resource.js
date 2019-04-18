import { emojiService } from "../service/emojis_service";

export const emojiType = `
    type Emoji {
        name: String!
        url: String!
    }
`

export const emojisQuerySchema = `
    emojis: [Emoji!]
    emoji(name: String!): Emoji
`

export const emojisResource = {
    emojis: () => emojiService.getAll(),
    emoji: ({name}) => emojiService.getByName(name),
}