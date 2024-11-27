import fetch from 'node-fetch'
import moment from 'moment-timezone'

var handler = async (m, { conn, usedPrefix }) => {

let res = await fetch('https://api.github.com/repos/JoseXrl15k/JyHyun')
let json = await res.json()
 
let git = `*乂  B O T  -  S C R I P T*\n\n◦ *Nombre* : ${json.name}\n◦ *Visitantes* : ${json.watchers_count}\n◦ *Peso* : ${(json.size / 1024).toFixed(2)} MB\n◦ *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n◦ *Url* : ${json.html_url}\n\n	   ${json.forks_count} Forks · ${json.stargazers_count} Stars · ${json.open_issues_count}`
await conn.reply(m.chat, git, m, { externalAdReply: { mediaType: 1, renderLargerThumbnail: true, thumbnail: imagen0, thumbnailUrl: imagen0, title: '\t\t\t\t\t\t᭡͡ᩬ😊✩̣̣̣̣̣ͯJy Hyun᭡͡ᩬ😊✩̣̣̣̣̣ͯ', }})
 
}
handler.tags =['info'] 
handler.help = ['script'] 
handler.command = ['sc', 'script', 'codigo', 'git', 'github']

handler.register = true

export default handler
