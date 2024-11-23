let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `_\`Gʀᴜᴘᴏs Oғɪᴄɪᴀʟᴇs Dᴇ Jʏ Hʏᴜɴ\`_

   _\`🍏 ɢʀᴜᴘᴏ ᴊʏ ʜʏᴜɴ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\`_
┃🧸❏ https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD
   
   _\`🍟 ᴄᴀɴᴀʟ ᴊʏ ʜʏᴜɴ ᴏғɪᴄɪᴀʟ 🍟\`_
┃🧸❏ https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D

*_╰━━━━━━━━━━━━━━━━⊜_*`.trim() 
conn.reply(m.chat, info, m, rcanal) 
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.register = true 
export default handler
