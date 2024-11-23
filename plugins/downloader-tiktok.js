
//TIKTOK  DL
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
if (!args[0]) return m.reply(`Ingresa un enlace de tiktok`)

try {
let api = await fetch(`https://deliriussapi-oficial.vercel.app/download/tiktok?url=${args[0]}`)
let json = await api.json()
let { data, process } = json

let JT = `*Proceso:* ${process}
*Título:* ${data.title || "No disponible"}
*Duración:* ${data.duration} segundos
*Reproducciones:* ${data.repro}
*Likes:* ${data.like}
*Compartidos:* ${data.share}
*Comentarios:* ${data.comment}
*Descargas:* ${data.download}
*Fecha de publicación:* ${data.published}

*[ INFO DEL AUTOR ]*\n
*Username:* ${data.author.username}
*Apodo:* ${data.author.nickname}

*[ MÚSICA ]*\n
*Título de la música:* ${data.music.title}
*Autor de la música:* ${data.music.author}
*Duración de la música:* ${data.music.duration} segundos`

let tipoArchivo = data.meta.media[0].type

if (tipoArchivo === "video") {
await conn.sendFile(m.chat, data.meta.media[0].hd, 'video.mp4', JT, m)
} else if (tipoArchivo === "image") {
let images = data.meta.media[0].images
for (let i = 0; i < images.length; i++) {
await conn.sendFile(m.chat, images[i], `image${i + 1}.jpeg`, `*Imagen :* ${i + 1}`, m)
}}

//Calidad Normal: ${data.meta.media[0].org} Tamaño: ${data.meta.media[0].size_org}
//Calidad Media: ${data.meta.media[0].wm} Tamaño: ${data.meta.media[0].size_wm}
//HD: ${data.meta.media[0].hd} Tamaño: ${data.meta.media[0].size_hd}
} catch (error) {
console.error(error)
}}

handler.command = /^(tiktok)$/i;

export default handler