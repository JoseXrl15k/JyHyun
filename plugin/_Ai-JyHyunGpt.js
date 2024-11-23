import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
const username = `${conn.getName(m.sender)}`
const basePrompt = `Tu nombre es JyHyunBot-MD y parece haber sido creado por Jose Elber actualmente tiene 15 años. Tu versión actual es 3.0.0, Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertida, y te encanta aprender.Enviaras tus respuestas con emogis y si te preguntan sobre los colaboradores diles que es Elias Ivan, Dioneibi y Katharsis sobre todo daras todo tipo de información  como también, si te insultan tambien insultales . Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}`
if (isQuotedImage) {
const q = m.quoted
const img = await q.download?.()
if (!img) {
console.error('✿ Error: No image buffer available')
return conn.reply(m.chat, 'No pude descargar la imagen.', m, rcanal)}
const content = '✿ ¿Qué se observa en la imagen?'
try {
const imageAnalysis = await fetchImageBuffer(content, img)
const query = '❀ Descríbeme la imagen y detalla por qué actúan así. También dime quién eres'
const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
const description = await luminsesi(query, username, prompt)
await conn.reply(m.chat, description, m, rcanal)
} catch {
await m.react(error)
await conn.reply(m.chat, 'No pude analizar la imagen.', m, rcanal)}
} else {
if (!text) { return conn.reply(m.chat, `❀ Ingrese una petición.`, m)}
await m.react(rwait)
try {
const { key } = await conn.sendMessage(m.chat, {text: `❀ tu petición, espera unos segundos.`}, {quoted: m})
const query = text
const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
const response = await luminsesi(query, username, prompt)
await conn.sendMessage(m.chat, {text: response, edit: key})
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, 'No puedo responder a esa pregunta.', m, rcanal)}}}

handler.help = ['ia', 'aijyhun']
handler.tags = ['ai']
handler.register = false
handler.command = ['ia', 'aijyhyun']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
try {
const response = await axios.post('https://Luminai.my.id', {
content: content,
imageBuffer: imageBuffer 
}, {
headers: {
'Content-Type': 'application/json' 
}})
return response.data
} catch (error) {
console.error('Error:', error)
throw error }}
// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://Luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: false
})
return response.data.result
} catch (error) {
console.error('✘ Error al obtener:', error)
throw error }}
