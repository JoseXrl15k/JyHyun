import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import os from 'os';
import path from 'path';

let handler = async (m, { args, command, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `_\`🌻 ${mssg.replyImg}\`_`;
 // if (!args[0]) throw ` \`\`\`[ 🌺 ] Ingresa un texto para guardar la imagen. Ejemplo:\n${usedPrefix + command} Sylph\`\`\``

  let media = await q.download();
  let tempFilePath = path.join(os.tmpdir(), 'Jyhyun');
  fs.writeFileSync(tempFilePath, media);

  let form = new FormData();
  form.append('image', fs.createReadStream(tempFilePath));

  try {
    let response = await axios.post('https://api.imgbb.com/1/upload?key=1f55ea75f24df783643940f3eacbbc96', form, {
      headers: {
        ...form.getHeaders()
      }
    });

    if (!response.data || !response.data.data || !response.data.data.url) throw '❌ Error al subir el archivo';
    
    let link = response.data.data.url;
    fs.unlinkSync(tempFilePath);

    m.reply(`_\`Jy Hyun 🌵\`_ ${media.length} Byte(s)

_\`🌸 (Archivo subido a ImgBB)\`_
_\`🍂 *URL\`_ :* ${link}
    `);
  } catch (error) {
    console.error('Error al subir el archivo:', error.message);
    throw '❌ Error al subir el archivo a ImgBB';
  }
}

handler.help = ['tourl'];
handler.tags = ['tools'];
handler.command = ['upload', 'tourl'];

export default handler;