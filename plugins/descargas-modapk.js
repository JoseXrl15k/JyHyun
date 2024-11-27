import axios from 'axios';
import cheerio from 'cheerio';
//import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix, command, text}) => {
const apkpureApi = 'https://apkpure.com/api/v2/search?q=';
const apkpureDownloadApi = 'https://apkpure.com/api/v2/download?id=';
if (!text) return conn.reply(m.chat,  `⚠️ *𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝘼𝙋𝙆*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: `Powered By Jose ☆`, body: `J y ＿ H y u n － B o T`, previewType: 0, thumbnail: imagen0, sourceUrl: canal}}})   
m.react("🌺") 
try {   
const res = await fetch(`https://deliriussapi-oficial.vercel.app/download/apk?query=${text}`);
const data = await res.json();
if (!data.status || !data.data) {
return conn.reply(m.chat, `⚠️ No se pudo encontrar el APK solicitado. Intenta con otro nombre.`, m);
}
const apkData = data.data;
const response = `*乂  JYHYUN - DESCARGAS* 乂

♡ ∩_∩ 
  („• ֊ •„)♡
|￣U U￣￣￣￣￣￣￣￣￣|
|    𝗔ρƙ 𝗯ყ 𝗝у 𝗛уυ𝗻
￣￣￣￣￣￣￣￣￣￣￣￣
| 𝙉𝙊𝙈𝘽𝙍𝙀: ${apkData.name}
| 𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝙇𝙊: ${apkData.developer}
| 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉: ${apkData.publish}
| 𝙋𝙀𝙎𝙊: ${apkData.size}
╰─ׄ─⭒─ׄׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

> *𝗘ѕρҽ𝗿ҽ 𝘂ɳ мσм𝗲ит𝗼 𝘀υ α𝗽ƙ 𝘀ҽ ҽ𝘀ƚα ҽɳ𝘃ιαɳ𝗱σ...*`
await conn.sendFile(m.chat, apkData.image, 'error,jpg', response, m, null);
if (apkData.size.includes('GB') || parseFloat(apkData.size.replace(' MB', '')) > 999) {
return await m.reply('*𝙀𝙡 𝙖𝙥𝙠 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤.*') 
}

await conn.sendMessage(m.chat, {document: { url: apkData.download }, mimetype: 'application/vnd.android.package-archive', fileName: `${apkData.name}.apk`, caption: null }, { quoted: m });
await m.react("✅") 
} catch (error) {
try {
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `*乂  JYHYUN - DESCARGAS* 乂

♡ ∩_∩ 
  („• ֊ •„)♡
|￣U U￣￣￣￣￣￣￣￣￣|
|    𝗔ρƙ 𝗯ყ 𝗝у 𝗛уυ𝗻
￣￣￣￣￣￣￣￣￣￣￣￣
| 𝙉𝙊𝙈𝘽𝙍𝙀: ${data5.name}
| 𝙋𝘼𝘾𝙆𝘼𝙂𝙀: ${data5.package}
| 𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉: ${data5.lastup}
| 𝙋𝙀𝙎𝙊: ${data5.size}
╰─ׄ─⭒─ׄׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒

> *𝗘ѕρҽ𝗿ҽ 𝘂ɳ мσм𝗲ит𝗼 𝘀υ α𝗽ƙ 𝘀ҽ ҽ𝘀ƚα ҽɳ𝘃ιαɳ𝗱σ...*`
await conn.sendFile(m.chat, data5.icon, 'akp.jpg', response, m, false)   
//conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await m.reply('*𝙀𝙡 𝙖𝙥𝙠 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤.*')}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
m.react("✅") 
handler.limit = 2
} catch (e) {
m.react(`❌`) 
console.log(e)
handler.limit = false
}}}
handler.help = ['apk', 'apkmod'];
handler.tags = ['downloader'];
handler.command = /^(apkmod|apk|modapk|dapk2|aptoide|aptoidedl)$/i;
handler.register = true
//handler.limit = 2
export default handler;

async function searchApk(text) {
  const response = await axios.get(`${apkpureApi}${encodeURIComponent(text)}`);
  const data = response.data;
  return data.results;
}

async function downloadApk(id) {
  const response = await axios.get(`${apkpureDownloadApi}${id}`);
  const data = response.data;
  return data;
  }
