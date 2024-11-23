
import fg from 'api-dylux';
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `_\`🚩 ${mssg.example}: *${usedPrefix + command}* Billie Eilish\`_`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
✅ ${mssg.result}`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = true

export default handler
