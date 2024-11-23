function handler(m, { text }) {
if (!text) return conn.reply(m.chat, '🚩 Ingresa tu nombre junto al comando.', m, rcanal)
conn.reply(m.chat, '🚩 Buscando El Nombre....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: wm,
previewType: 0, thumbnail: imagen0,
sourceUrl: canal }}})
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
m.reply(teks.replace(/[a-z]/gi, v => {
return {
'a': 'كا',
'b': 'تسو',
'c': 'مي',
'd': 'تي',
'e': 'كو',
'f': 'هي',
'g': 'جي',
'h': 'ري',
'i': 'كي',
'j': 'زو',
'k': 'مي',
'l': 'تا',
'm': 'رين',
'n': 'تو',
'o': 'مو',
'p': 'نو',
'q': 'كي',
'r': 'شي',
's': 'اري',
't': 'تشي',
'u': 'دو',
'v': 'رو',
'w': 'مий',
'x': 'نا',
'y': 'فو',
'z': 'موري',
}[v.toLowerCase()] || v }))}

handler.help = ['nombrearabe *<texto>*']
handler.tags = ['fun']
handler.command = ['nombrearabe']
handler.group = true;
handler.register = true

export default handler