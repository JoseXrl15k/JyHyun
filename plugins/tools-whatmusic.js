import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || '';
if (/audio|video/.test(mime)) {
if ((q.msg || q).seconds > 20) return m.reply('⚠️ ᴇʟ ᴀʀᴄʜɪᴠᴏ ǫᴜᴇ ᴄᴀʀɢᴀ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ɢʀᴀɴᴅᴇ, ʟᴇ sᴜɢᴇʀɪᴍᴏs ǫᴜᴇ ᴄᴏʀᴛᴇ ᴇʟ ᴀʀᴄʜɪᴠᴏ ɢʀᴀɴᴅᴇ ᴀ ᴜɴ ᴀʀᴄʜɪᴠᴏ ᴍᴀ́s ᴘᴇǫᴜᴇɴ̃ᴏ, 10-20 sᴇɢᴜɴᴅᴏs ʟᴏs ᴅᴀᴛᴏs ᴅᴇ ᴀᴜᴅɪᴏ sᴏɴ sᴜғɪᴄɪᴇɴᴛᴇs ᴘᴀʀᴀ ɪᴅᴇɴᴛɪғɪᴄᴀʀ');
const media = await q.download();
const ext = mime.split('/')[1];
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
const {code, msg} = res.status;
if (code !== 0) throw msg;
const {title, artists, album, genres, release_date} = res.metadata.music[0];
const txt = `


ׅ                              𔓕
                𔓕                           𔓕
           ̇          Ᏼι̇ᥱᥒ᥎ᥱᥒι̇ძ᥊  !              ̇
                   ───────
        𑁯       ׅ         𝘑𝘺 𝘩𝘺𝘶𝘯        ׅ         ᰍ
︵ׄ⏜︵ׄ⠑ ⏜ 𓊈  🍟  𓊉 ⏜ ⠊︵ׄ⏜︵ׄ
  ❀ᩘ ׅ🍒 ֺ *𝗥υʅƚα𝗱σѕ 𝗱є ʅ𝗮 в𝘂ѕqυ𝗲∂α* ֺ🌸ᩞ⠳
  
• 📌 𝘁ιт𝘂ʅσ: ${title}
• 👨‍🎤 𝗮ɾƚι𝘀ƚα: ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'No encontrado'}
• 💾 𝗮ʅв𝘂м: ${album.name || 'No encontrado'}
• 🌐 𝗴єиє𝗿σ: ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado'}
• 📆 fєƈ𝗵α 𝗱ҽ 𝗹αɳȥα𝗺ιҽ𝗻ƚσ: ${release_date || 'No encontrado'}
  ࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛  .  ࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛࿙⃛࿚⃛
ִ    ㅤֺㅤㅤ۪ㅤㅤׄㅤㅤִㅤㅤ۫ ㅤㅤִㅤㅤ۫ ㅤㅤִ ㅤ۫ 

`.trim();
fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
m.reply(txt);
} else throw '*⚠️ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐚𝐮𝐝𝐢𝐨*';
};
handler.help = ['quemusica']
handler.tags = ['tools']
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
handler.register = true 
export default handler;
