// Powered by Jose Elber

let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
const user = `@${m.sender.split`@`[0]}`;
//let textodem = m.text;
if (chat.isBanned) return
if (m.fromMe) return
if (m.isBot || m.sender.includes('bot') || m.sender.includes('Bot')) {
return true; 
}
    
let vn = 'https://qu.ax/eGdW.mp3'
let bot = `${pickRandom([`*Hola ${user} soy un bot el que puedo ayudar? 👉👈*`, `Aqui estoy`, `bot tu abuela`, `que quiere?`, `No dispoble 🫣`, `Hola aqui estoy soy tu botsito sexy el que puedo ayudar uwu`])}
`.trim()//`


//if (m.text.includes(`Bot`) || m.text.includes(`simi`) || m.text.includes(`alexa`)) {   

if (/^bot|simi|alexa$/i.test(m.text)) {   
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') ||  m.text.includes('infobot')) return
try {
await conn.sendPresenceUpdate('composing', m.chat)
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;

let syms1 = `Tomarás el rol de un bot de Whatsapp creado por Jose Elber. Tu nombre sera Jy Hyun Bot, Tu idioma es el español, pero puedes responder en diferentes idiomas. tiene este rol que chat divertido con exploit incluido osea los quiere dices es que este rol solo es humor, divertido, no que tome nada real, tu respuesta sera divertida, humor, y usar mucho emojis el tu respuesta.

"general risa el chat por que este rol actúal más como simsimi" Chatbot no chatgpt. 

los quiere dices que tu respuesta sera humor puro, risa, memes.

si pregunta donde aloja el bot 24/7 tu recomienda el hosting "Boxmine host", alojamiento de bot de WhatsApp, Telegram, discord, todos con etono JavaScript, ofrecemos server gratis y de pago, a precios asequibles, barato, todos puede comprar mas información: (https://dash.boxmine.com). 
para actualizaciónes/novedades sobre el bot o nuesro hosting seguir nuestro canal de WhatsApp: (https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D).`;  

let result = await luminsesi(query, username, syms1);
await conn.reply(m.chat, result, m, rcanal)
} catch {
try {
let gpt = await fetch(`https://deliriussapi-oficial.vercel.app/tools/simi?text=${m.text}`)
let res = await gpt.json()
await m.reply(res.data.message)
} catch (e) {
return m.reply([`Simsimi esta durmiendo no molesta 🥱`, `Callarte`, `Api simsimi caida`, `Simsimi esta ocupado cojieron con tu hermana vuelva mas tarde 🥵`, `NO MOLESTE PUTA`, `No hay señar`, `No estoy disponible`].getRandom());
console.log(e) 
}}
}

    
if (/^todo bien$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `𝑩𝒊𝒆𝒏 𝒄𝒂𝒑𝒐 😎 𝒚 𝒕𝒖`, m, rcanal) }

if (/^e$/i.test(m.text) ) { //sem prefixo
conn.reply(m.chat, `𝑸𝒖𝒆 𝒃𝒖𝒆𝒏𝒐 𝒔𝒂𝒃𝒆𝒓 𝒍𝒂 𝒍𝒆𝒕𝒓𝒂 𝒆`, m, rcanal)}

if (/^@51946509137|@51950148255$/i.test(m.text) ) {
conn.reply(m.chat, `*_[ ⚠ ️] No etiquetes a mi creador, si tiene alguna consulta o dudas, hablarle el pv solo por tema del bot_*`, m, rcanal) }


if (/^reglas|normas|Reglas$/i.test(m.text) ) {
conn.reply(m.chat, `\`⚠️ 𝙍𝙀𝙂𝙇𝘼𝙎 ⚠️\`

* 𝐏ʀᴏʜɪʙɪᴅᴏ ʟʟᴀᴍᴀʀ ᴀʟ ʙᴏᴛ
* 𝐏ʀᴏʜɪʙɪᴅᴏ sᴘᴀᴍ ᴀʟ ʙᴏᴛ
* 𝐍ᴏ ᴀɢʀᴇɢᴀʀ ᴀʟ ʙᴏᴛ
* 𝐑ᴇsᴘᴇᴛᴀʀ ʟᴏs ᴛᴇʀᴍɪɴᴏs ʏ ᴄᴏɴᴅɪᴄɪᴏɴᴇs

𝗝ʏ 𝗛ʏᴜɴ 𝗕ᴏᴛ 𝗠ᴅ - 𝐁ʏ 𝗝ᴏsᴇ`, m, rcanal)}


if (/^¿que es un bot?|Que es un bot?|que es un bot?|que es un bot$/i.test(m.text) ) {
conn.reply(m.chat, `\`☆::¿𝙌𝙐𝙀 𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋?::☆\`

> 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨.
> 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu

> 𝗝𝘆 𝗛𝘆𝘂𝗻 𝗕𝗼𝘁 𝗠𝗗`, m, rcanal)}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
