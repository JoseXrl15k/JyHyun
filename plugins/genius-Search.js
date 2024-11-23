
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return m.reply(`Ingresa una petición`)

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/genius?q=${encodeURIComponent(text)}`)
let json = await api.json()
let JT = 'Genius  -  Search'
json.forEach((video, index) => {
JT += `\n\n`
JT += `*Nro* : ${index + 1}\n`
JT += `*Título* : ${video.title}\n`
JT += `*Título Completo* : ${video.fullTitle}\n`
JT += `*Publicado* : ${video.publish || 'No disponible'}\n`
JT += `*Autor* : ${video.artist.name} ( ${video.artist.url} )\n`
JT += `*URL* : ${video.url}\n`
JT += `*ID* : ${video.id}\n`
JT += `*Instrumental* : ${video.instrumental ? 'Sí' : 'No'}\n`
JT += `*Verificado* : ${video.artist.verified ? 'Sí' : 'No'}`
})

await conn.sendFile(m.chat, json[0].thumbnail, 'hasumiBotFreeCodes.jpg', JT, m);
} catch (error) {
console.error(error)
}}

handler.command = /^(geniussearch)$/i
export default handler