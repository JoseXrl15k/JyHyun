import { promises } from 'fs'
import fs from 'fs'
import moment from 'moment-timezone'
import { join } from 'path'
import fetch from 'node-fetch'
import os from 'os'
import { getDevice } from '@whiskeysockets/baileys'
import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname }) => {
let ucpn = `${ucapan()}`
let user = global.db.data.users[m.sender]
let xx = '```'
let jose = '51946509137'
let jyhyun = '51922659543'
let HJyhyunPeru = moment.tz("America/Lima").format("HH:mm:ss")
let tags = {
  'main': 'ᴀᴄᴇʀᴄᴀ ᴅᴇ ',
  'bebot': 'sᴜʙ - ʙᴏᴛs',
  'game': 'ᴊᴜᴇɢᴏs',
  'econ': 'ʟᴇᴠᴇʟ ᴀɴᴅ ᴇᴄᴏɴᴏᴍʏ',
  'rg': 'ʀᴇɢɪsᴛʀᴏ',
  'sticker': 'sᴛɪᴄᴋᴇʀs',
  'img': 'ɪᴍᴀɢᴇ',
  'maker': 'ᴍᴀᴋᴇʀ',
  'prem': 'ᴘʀᴇᴍɪᴜᴍ',
  'group': 'ɢᴇsᴛɪóɴ ᴅᴇ ɢʀᴜᴘᴏs',
  'nable': 'ᴇɴ/ᴅɪsᴀʙʟᴇ ᴏᴘᴄɪᴏɴᴇs', 
  'nime': 'ᴀɴɪᴍᴇ',
  'rnime': 'ᴀɴɪᴍᴇʀᴇᴀᴄᴛ',
  'dl': 'ᴅᴏɴᴡʟᴏᴀᴅs',
  'tools': 'ᴛᴏᴏʟs',
  'fun': 'ғᴜɴ/ʀᴀɴᴅᴏᴍ',
  'cmd': 'ᴅᴀᴛᴀʙᴀsᴇ',
  'nsfw': 'ɴsғᴡ +18',
  'ansfw': 'ɴsғᴡ ᴀɴɪᴍᴇ', 
  'owner': 'ᴅᴇᴠᴇʟᴏᴘᴇʀ', 
  'advanced': 'ᴀᴅᴠᴀɴᴄᴇᴅ'
}
const defaultMenu = {
  before: `
 _\`☆ ʜᴏʟᴀ @${m.sender.split`@`[0]}\`_ , _\`${ucpn}\`_
 
  ⏤͟͟͞͞🤍    *U S U A R I O*   🤍͟͟͞͞⏤
  
   ⏣ •_\`ɴᴀᴍᴇ\`_ : %name
   ⏣ •_\`ᴄᴏɪɴs\`_ : %coin
   ⏣ •_\`ʀᴏʟᴇ\`_ : %role
   ⏣ •_\`ʟᴇᴠᴇʟ\`_ : %level
   ⏣ •_\`xᴘ\`_ : %exp / %maxexp
   ⏣ •_\`ᴛᴏᴛᴀʟ xᴘ\`_ : %totalexp
   ⏣ •_\`¿ᴠɪᴘ\`_ : *${global.db.data.users[m.sender].premiumTime > 1 ? 'Si': 'No'}*
 
  ⏤͟͟͞͞🍒    *I N F O   B O T*   🍒͟͟͞͞⏤
  
   ⏣ •_\`ʙᴏᴛ ɴᴀᴍᴇ\`_ : ${botName}
   ⏣ •_\`ᴘʟᴀᴛғᴏʀᴍ\`_ : %platform
   ⏣ •_\`ᴛʏᴘᴇ\`_ : NodeJs
   ⏣ •_\`Hora\`_ : ${HJyhyunPeru}
   ⏣ •_\`ᴄʀᴇᴀᴅᴏʀ\`_ : @${jose}
   ⏣ •_\`ʙᴀɪʟᴇʏs\`_ : Multi - Device
   ⏣ •_\`ᴘᴇғɪx\`_ : [ *%_p* ]
   ⏣ •_\`ᴜᴘᴛɪᴍᴇ\`_ : %muptime
   ⏣ •_\`ᴊʏ ʜʏᴜɴ sᴛᴀᴛᴜs\`_ : %mode
   ⏣ •_\`ᴅᴀᴛᴀʙᴀsᴇ\`_ : %rtotalreg - %totalreg
   ⏣ •_\`sᴛᴀᴛᴜs\`_ : ${m.sender.split`@`[0] == jose  ? 'Developer' : m.sender.split`@`[0] == jyhyun ? 'Official bot (In development)' :  (user.premiumTime >= 1 ? 'VIP User' : 'Free User')}
  
  %sbot
  
     ⏤͟͟͞͞🌹   *I N F O   C M D*   🌹͟͟͞͞⏤
     
  • \`%totalfeatures\` _Commands available for use_
  
  
     ⏤͟͟͞͞🚩    *C O M A N D O S*   🚩͟͟͞͞⏤
     
`.trimStart(),
  header: `╭─(❀)❝┊ *\`%category\`* ┊❝(❀)`,
  body: `┊ ❀ • *%cmd* %isdiamond %isPremium\n`,
  footer: `╰─❑\n`,
  after: `_\`🍟 Powered by Jose\`_`,
}
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
  
   let {
 age,
 exp,
 diamond,
 level,
 role,
 registered,
 coin
   } = glb[m.sender]
   let {
 min,
 xp,
 max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
       let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        diamond: plugin.diamond,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `• Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%isdiamond/g, menu.diamond ? '💎' : '')
                .replace(/%isPremium/g, menu.premium ? '🪙' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    
    let replace = {
    '%': '%',
    uptime,
 muptime,
 me: conn.getName(conn.user.jid),
 npmname: _package.name,
 npmdesc: _package.description,
 version: _package.version,
 exp: exp - min,
 maxexp: xp,
 totalexp: exp,
 xp4levelup: max - exp,
 sbot: (conn.user.jid == global.conn.user.jid ? '' : ` [🌹] Sub-Bot de:\nwa.me/${global.conn.user.jid.split`@`[0]}`), 
 tag,
 ucpn,
 platform,
 mode,
 _p,
 coin,
 age,
 tag,
 name,
 prems,
 level,
 diamond,
 name,
 totalreg,
 rtotalreg,
 totalfeatures,
 role,
 readmore: readMore
    }
    
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
conn.sendMessage(m.chat, { video: { url: `https://files.catbox.moe/zvs46t.mp4`, rcanal }, gifPlayback: true, caption: text.trim(),
contextInfo: {
mentionedJid: conn.parseMention(text.trim()),
isForwarded: true,
forwardingScore: 999,
externalAdReply: {
title: conn.getName(m.sender) + ', Gracias por usar Jy Hyun MultiDevice.',
body: author,
thumbnailUrl: 'https://i.imgur.com/Qo0nXdY.jpeg',
sourceUrl: canal,
newsletterJid: id_canal,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
    m.react('🍟') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}
handler.command = ['menu', 'help', 'menú', 'commands', 'comandos', '?']
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd ', h, 'h ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
function ucapan() {
const time = moment.tz('America/Lima').format('HH')
let res = ""
if (time >= 4) {
res = "Good morning. ⛅"
}
if (time >= 10) {
res = "Good afternoon. 🌇"
}
if (time >= 15) {
res = "Good afternoon. 🌇"
}
if (time >= 18) {
res = "Good night. 🌃"
}
return res
}
