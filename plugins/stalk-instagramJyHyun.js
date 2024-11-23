
// *[ IGSTALK ]*
import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command, conn }) => {
if (!text) return m.reply("ingresa el usuario de una persona de ig")
    
try {
let api = await fetch(`https://tools.betabotz.eu.org/tools/stalk-ig?q=${text}`)
let json = await api.json()
let { user_info } = json.result    
let { username, full_name, biography, profile_pic_url, is_private, is_verified, posts, followers, following } = user_info
let JT = `*Nombre :* ${username}
*Pronombre :* ${full_name}
*Descripcion :* ${biography}
*Cuenta privada :* ${is_private ? '✅' : '❌'}
*Cuenta verificada :* ${is_verified ? '✅' : '❌'}
*Publicaciones totales :* ${posts}
*Seguidores :* ${followers}
*Siguiendo :* ${following}`
await conn.sendFile(m.chat, profile_pic_url, 'HasumiBotFreeCodes.jpg', JT, m)
} catch (error) {
console.error(error)
}}

handler.command = ['igstalk']

export default handler
