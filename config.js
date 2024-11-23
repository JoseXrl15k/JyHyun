import { watchFile, unwatchFile } from 'fs'
import * as cheerio from 'cheerio'
import { getDevice } from '@whiskeysockets/baileys'
import yts from 'yt-search'
//import Scraper from '@SumiFX/Scraper'
import * as Scraper from 'ruhend-scraper'
import axios from 'axios'
import https from 'https'
import chalk from 'chalk'
import { ytmp4, ytmp3 } from 'ruhend-scraper'
import fg from 'api-dylux'
import fs from 'fs'
import yt from 'ytdl-core'
import ytdl from 'ytdl-core'
import fetch from 'node-fetch'
import * as fileType from 'file-type'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import * as scrapers from '@bochilteam/scraper'
import { es } from "./lib/total-idiomas.js"
//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = "";
global.confirmCode = "";

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.owner = [
  ['51950148255', 'Jose Elber', true],
  ['51946509137', 'JoXry.zZ', true]
] //𝑵𝑼𝑴𝑬𝑹𝑶𝑺 𝑫𝑬 𝑶𝑾𝑵𝑬𝑹
global.colabs = [
  ['18294868853', 'Dioneibi', true]
  ['595992667005', 'Elias Ivan', true]
] //𝑪𝑶𝑳𝑨𝑩𝑶𝑹𝑨𝑫𝑶𝑹
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.mods = ['595972157130', '51950148255', '51946509137', '18294868853', '51922659543', '595992667005']
global.prems = ['18294868853', '51989762428', '5353477306', '51949948491', '51946509137', '573045999331', '595992667005']
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
  fzteis: 'https://api--fzteis.repl.co',
  fz: 'https://fz-api.fzteis.repl.co'
}
global.fgapis = ['ELhI4IG6', 'Ys3CfFTU', '6IbiVq6V', 'dEBWvxCY']
global.fgkey = fgapis[Math.floor(fgapis.length * Math.random())];
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': `${fgkey}` //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.packsticker = `\n႟ᩣJose Xrl 🍀᳕ᩳ ᩔ*\n`
global.packname = 'Jy | Hyun - Multi Device' 
global.author = `\n႟ᩣJose Xrl 🍀᳕ᩳ ᩔ*\n`
global.wm = '\n🌹◌*̥₊ JʏʜʏᴜɴBᴏᴛ ◌❐🎋\n႟ᩣJose Xrl 🍀᳕ᩳ ᩔ*\n'
global.dev = '© Poweres By Jose'
global.namechannel = 'Jy Hyun MultiDevice Canal'
global.textbot = '\n🌹◌*̥₊ JʏʜʏᴜɴBᴏᴛ ◌❐🎋\n'
global.fgig = 'https://instagram.com/xrljose' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f' 
global.botName = '🌹◌*̥₊ JʏʜʏᴜɴBᴏᴛ ◌❐🎋'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.id_canal = '120363337523216426@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D'
global.bgp = 'https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD'
global.bgp2 = 'https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD'
global.bgp3 = 'https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.insta = 'https://www.instagram.com/xrljose'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.imagen0 = fs.readFileSync('./src/Jyhyun_logo.jpg');
global.imagen = fs.readFileSync('./src/Jyhyun.jpg');
global.imagen3 = 'https://i.imgur.com/xhLmpcZ.jpeg';
//--info
global.botname = '🌹◌*̥₊ JʏʜʏᴜɴBᴏᴛ ◌❐🎋'
global.fglog = 'https://i.imgur.com/Qo0nXdY.jpeg' 
global.link_ = 'https://chat.whatsapp.com/EyIKeHl16JNB4J6O4KMjpD'
global.canal = 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.colab1 = 'ᴅɪᴏɴᴇɪʙɪ'
global.colab2 = 'ɪᴠᴀɴ ᴍᴏᴅs'
global.colab3 = 'Katharsis'
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda Mañana'; break; case 1: hour = 'Linda Mañana'; break; case 2: hour = 'Linda Mañana'; break; case 3: hour = 'Linda Mañana'; break; case 4: hour = 'linda mañana'; break; case 5: hour = 'Linda Mañana'; break; case 6: hour = 'Linda Mañana'; break; case 7: hour = 'Linda Mañana'; break; case 8: hour = 'Linda Mañana'; break; case 9: hour = 'Linda Mañana'; break; case 10: hour = 'Lindo Dia'; break; case 11: hour = 'Lindo Dia'; break; case 12: hour = 'Lindo Dia'; break; case 13: hour = 'Lindo Dia'; break; case 14: hour = 'Linda Tarde'; break; case 15: hour = 'Linda Tarde'; break; case 16: hour = 'Linda Tarde'; break; case 17: hour = 'Linda Tarde'; break; case 18: hour = 'Linda Noche'; break; case 19: hour = 'Linda Noche'; break; case 20: hour = 'Linda Noche'; break; case 21: hour = 'Linda Noche'; break; case 22: hour = 'Linda Noche'; break; case 23: hour = 'Linda Noche'; break;}
global.saludo = '🍭' + hour;
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.getDevice = getDevice
global.axios = axios 
global.fs = fs
global.cheerio = cheerio
global.fg = fg
global.path = path
global.yts = yts
global.fetch = fetch
global.fileType = fileType
global.Scraper = Scraper
global.scrapers = scrapers
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.ytdl = ytdl
global.yt = yt
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.wait = '❀  𝗉𖹭ꭇ ẜ⍺ѵ𖹭ꭇ   𐙞   esƥ𐐩ꭇа   𓈒𓈒    ⍰     ꛁ𐑼'
global.wait = '❀  𝗉𖹭ꭇ ẜ⍺ѵ𖹭ꭇ   𐙞   esƥ𐐩ꭇа   𓈒𓈒    ⍰     ꛁ𐑼';
global.waitt = '❀  𝗉𖹭ꭇ ẜ⍺ѵ𖹭ꭇ   𐙞   esƥ𐐩ꭇа   𓈒𓈒    ⍰     ꛁ𐑼';
global.waittt = '❀  𝗉𖹭ꭇ ẜ⍺ѵ𖹭ꭇ   𐙞   esƥ𐐩ꭇа   𓈒𓈒    ⍰     ꛁ𐑼';
global.waitttt = '❀  𝗉𖹭ꭇ ẜ⍺ѵ𖹭ꭇ   𐙞   esƥ𐐩ꭇа   𓈒𓈒    ⍰     ꛁ𐑼';
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.rwait = '🕒'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.facebookDl = async function facebookDl(t) {
  return new Promise(async (e, a) => {
    const i = await fetch("https://www.getfvid.com/downloader", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: "https://www.getfvid.com/",
        },
        body: new URLSearchParams(Object.entries({ url: t })),
      }),
      o = cheerio.load(await i.text());
    e({
      result: {
        url: t,
        title: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a"
        ).text(),
        time: o("#time").text(),
        hd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a"
        ).attr("href"),
        sd: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a"
        ).attr("href"),
        audio: o(
          "body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a"
        ).attr("href"),
      },
    });
  });
}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.DOWNLOAD_YT = async function DOWNLOAD_YT(input) {
    let ytSearch = await yts(input)
    let { title, url, thumbnail, description, views, ago, duration } = ytSearch.videos[0]

    let { video, quality, size } = await ytmp4(url)

    let { audio } = await ytmp3(url)

    let resultados = {
        Status: true,
        Creator: "JoXry.zZ",
        title: title,
        description: description,
        views: views,
        ago: ago,
        duration: duration,
        url: url,
        video: {
            dl_link: video,
            size: size,
            quality: quality
        },
        audio: {
            dl_link: audio
        }

    }

    return resultados

}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
 global.igDown = async function igDown(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        creator: 'Jose',
        media_link: mediaURL
      }
      
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})