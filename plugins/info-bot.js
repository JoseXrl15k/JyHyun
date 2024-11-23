import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `🛍 ¡Hola! Soy Jy Hyun, en que puedo ayudarte hoy?\n\n✰ Usa *.menu* para ver mis comandos.`, m, rcanal, )
}
/*if (/^que|q$/i.test(m.text)) {
conn.reply(m.chat, `*so*`, m, rcanal, )
}*/
if (/^English$/i.test(m.text)) {
conn.reply(m.chat, `*The first one to speak is gay*`, m, rcanal, )
}

if (/^Bot de mierda/i.test(m.text)) {
conn.reply(m.chat, `*No digas mamadas, Meriyein*`, m, rcanal, )
}

if (/^destroy|Wilker|Destroy$/i.test(m.text)) {
conn.reply(m.chat, `*Jose 🔥 es la perrita de mi creador* 🥵🥵`, m, rcanal, )
}

if (/^IJose|jose$/i.test(m.text)) {
conn.reply(m.chat, `*Dioneibi 🔥 es la pajeadora de mi creador* 🥵🥵`, m, rcanal, )
}

if (/^porno|xxx|gore/i.test(m.text)) {
conn.reply(m.chat, `*Escucha maldita sabandija ni se te ocurra enviar ese tipo de contenido 🤬*`, m, rcanal, )
}

if (/^a$/i.test(m.text)) {
conn.reply(m.chat, `*rroz y pollo* 😋👌`, m, rcanal, )
}

if (/^Bot Perzonalizado Simple/i.test(m.text)) {
conn.reply(m.chat, `*Claro, El Bot Perzonalizado Simple Cuesta 14$ Con Server Incluído y comisión, trae comandos básicos.[🌠]*`, m, rcanal, )
}

if (/^Quiero Un Bot/i.test(m.text)) {
conn.reply(m.chat, `*¡Claro!, Vendemos Bots A Buen Precio Y Accesibles a tus Necesidades [🛍]*
> Más Información 
https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD`, m, rcanal, )
}

if (/^Bot de mrd/i.test(m.text)) {
conn.reply(m.chat, `*Ya te dieron De Comer?🥵🍆*`, m, rcanal, )
}

if (/^Vendes Bot|Venden Bot|Quiero Comprar Bot|Quiero Comprar un bot/i.test(m.text)) {
conn.reply(m.chat, `*No gay , aqui vende tu culo*`, m, rcanal, )
}

if (/^Conoces a Legendary/i.test(m.text)) { 
conn.reply(m.chat, `*Si Lo conozco, Es Una Zorra caliente 🥵❤️‍🔥*`, m, rcanal, )
}

if (/^Lan/i.test(m.text)) {
conn.reply(m.chat, `*Lan se la chupa 3 veces seguidas en 5 minutos a mí creador🥵🔥*`, m, rcanal, )
}

if (/^Nodoka/i.test(m.text)) { 
conn.reply(m.chat, `*Nodoka Mi Amor, Culona 🥵❤️‍🔥*`, m, rcanal, )
}

if (/^Como uno al bot en mi grupo|cómo puedo tener un bot en mi grupo|Bot Para Grupo|botgp/i.test(m.text)) {
conn.reply(m.chat, `*¡Contacta Al Creador!*
> *wa.me/51946509137*`, m, rcanal, )
}

if (/^Bot en decadencia/i.test(m.text)) {
conn.reply(m.chat, `*Calla 🍆🥵*`, m, rcanal, )
}

if (/^Elber/i.test(m.text)) {
conn.reply(m.chat, `*Elber Es Mi Creador, Respeta!*`, m, rcanal, )
}

if (/^hyun$/i.test(m.text)) {
conn.reply(m.chat, `*Hola Eres Fan De* *Jy Hyun*
*Entonces Sigue El Canal Oficial!*
> https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D
 *Gracias por utilizar JyHyun* `, m, rcanal, )
}
if (/^reglas$/i.test(m.text)) {
conn.reply(m.chat, `Solo respeta a tu papi`, m, rcanal, )
}
return !0;
};
export default handler;