import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*⚠️ Ejemplo:* ${usedPrefix + command} Lesbianas como tu ex`;
try {
const json = await pinterest(text);
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `_🔎 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚: ${text}_`, m, null);
} catch (error1) {
try {
const response=await fetch(`https://deliriussapi-oficial.vercel.app/search/pinterest?text=${text}`)
const dataR = await response.json()
const json = dataR.result
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `_🔎 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙙𝙚: ${text}_`, m, null);
} catch (e) {
console.log(e) 
}}}
handler.help = ['pinterestimg <keyword>'];
handler.tags = ['buscadores'];
handler.command = /^(pinterestimg)$/i;
handler.register = true 
export default handler;
