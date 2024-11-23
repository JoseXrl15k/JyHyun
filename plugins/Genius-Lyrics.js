
//GENIUS  -  LYRICS
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
if (!args[0]) return m.reply(`Ingresa una url de una cancion de genius para obtener su letra`)

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/lyrics?url=${args[0]}&parse=false`)
let json = await api.json()
let { lyrics:letra } = json
m.reply(letra)
} catch (error) {
console.error(error)
}}

handler.command = /^(geniuslyrics)$/i

export default handler
