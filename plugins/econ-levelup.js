import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let pp = await conn
    .profilePictureUrl(m.sender, 'image')
    .catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
  let user = global.db.data.users[m.sender]
  let background = 'https://files.catbox.moe/pzxc4y.jpg' // Fixed background URL

  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let txt = `
_\`╔══ ❀•° LEVEL °•❀ ══╗\`_
_\`🧸 Number\`_ : *${name}*
_\`🔮 Level\`_ : *${user.level}*
_\`🪁 XP\` : *${user.exp - min}/${xp}*
_\`🪆 Role\`_ : *${user.role}*
_\`◇───────◇───────◇\`_

_\`Hey there, ${name}! You're not ready to level up just yet. It seems like you need to munch up *${max - user.exp}* more XP to level up and reach new heights! Keep going, and the bots will be singing your praises soon! 🚀\`_
`.trim()

    try {
      let imgg = `https://wecomeapi.onrender.com/rankup-image?username=${encodeURIComponent(name)}&currxp=${user.exp - min}&needxp=${xp}&level=${user.level}&rank=${encodeURIComponent(pp)}&avatar=${encodeURIComponent(pp)}&background=${encodeURIComponent(background)}`
      conn.sendFile(m.chat, imgg, 'level.jpg', txt, m, rcanal)
    } catch (e) {
      m.reply(txt)
    }
  } else {
    let str = `
_\`╔═ ❀•° LEVEL UP °•❀ ═╗\`_
_\`🎀 Previous level\`_ : *${user.level - 1}*
_\`🎎 Current level\`_ : *${user.level}*
_\`🔮 Role\`_ : *${user.role}*
_\`✧═════•❁❀❁•═════✧\`_

_\`Woo-hoo, ${name}! You've soared to new heights and reached level ${user.level}! 🎉 Time to celebrate! 🎊\`_
_\`Your newfound power will strike fear into the hearts of trolls, and the bots will bow before your command! Keep up the incredible work, and who knows what epic adventures await you next! 🌟\`_
`.trim()

    try {
      let img = `https://wecomeapi.onrender.com/levelup-image?avatar=${encodeURIComponent(pp)}`
      conn.sendFile(m.chat, background, 'levelup.jpg', str, m, rcanal)
    } catch (e) {
      m.reply(str)
    }
  }
}

handler.help = ['levelup']
handler.tags = ['economy']
handler.command = ['lvl', 'levelup', 'level']

export default handler
