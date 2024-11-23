
//TIKTOK  -  SEARCH 0
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) return m.reply(`Ingresa el texto de lo que quieras buscar en tiktok`)

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/search/tiktoksearch?query=${text}`)
let json = await api.json()
let video = json.meta[Math.floor(Math.random() * json.meta.length)]
let { title, region, hd, duration, play, coment, share, like, download, url, author, music } = video

let JT = `*Título:* ${title}\n`;
    JT += `*Región:* ${region}\n`;
    JT += `*Duración:* ${duration} segundos\n`;
    JT += `*Reproducciones:* ${play}\n`;
    JT += `*Comentarios:* ${coment}\n`;
    JT += `*Compartidos:* ${share}\n`;
    JT += `*Likes:* ${like}\n`;
    JT += `*Descargas:* ${download}\n`;
    JT += `*URL del Video:* ${url}\n\n`;
    JT += `*Autor:* ${author.nickname} [ ${author.username} ]\n`;
    JT += `*Título de la Música:* ${music.title}\n`;
    JT += `*Autor de la Música:* ${music.author}\n`;
    JT += `*URL de la Música:* ${music.play}\n`;

await conn.sendFile(m.chat, hd, 'hasumiBotFreeCodes.mp4', JT, m)
await conn.sendFile(m.chat, music.play, 'hasumiBotFreeCodes.mp3', null, m)
} catch (error) {
console.error(error)
}}

handler.command = /^(tiktoksearch0)$/i

export default handler
