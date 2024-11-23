
import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `_\`😊 ɪɴɢʀᴇsᴇ ᴜɴ ɴᴏᴍʙʀᴇ ᴅᴇ ᴜsᴜᴀʀɪᴏ\`_\n_\`📌ᴇᴊᴇᴍᴘʟᴏ\`_ : *${usedPrefix + command}* auronplay`
  m.react(rwait)
  let res = await fg.igstory(args[0])
  for (let { url, type } of res.results) {
    conn.sendFile(m.chat, url, 'igstory.bin', `✅ Historia de *${res.username}*`, m)
  }

  m.react(done)
}
handler.help = ['igstory']
handler.tags = ['dl']
handler.command = ['igstory', 'ighistoria'] 
handler.diamond = true

export default handler
