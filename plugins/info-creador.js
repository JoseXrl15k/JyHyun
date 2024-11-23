const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*Hola Lesbiana Aqui te dejo la imformación del pendejo de mi creador 😉*
╭─ׂ┄──ׂ┄┄ׅ─ ┄ׂ─ ┄ׅ*
┆   https://www.atom.bio/xrljose_jyhyunbot
╰─ׂ┄─ׅ─ׂ┄ˎˊ˗`;
  const buttonMessage= {
    'document': {url: `https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D`},
    'mimetype': `application/${document}`,
    'fileName': `「  J y ＿ H y u n － B o T 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'La Bot Más Linda 🌸',
        'body': wm,
        'thumbnail': imagen0,
        'sourceUrl': 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['infoowner', 'infocreador'];
export default handler;
