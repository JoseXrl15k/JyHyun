const handler = async (m, _2, msg, pickRandom, isOwner ) => {
  const {conn} = _2;
  
  if (m.key.remoteJid && m.key.remoteJid.includes('@newsletter')) {
    const newsletterJid = m.key.remoteJid; // Este es el JID del newsletter
    await conn.reply(m.chat, `El JID del newsletter es: ${newsletterJid}`, m);
  } else {
    await conn.reply(m.chat, 'Este mensaje no proviene de un newsletter.', m);
  }
};

handler.help = ['getNewsletterJid'];
handler.tags = ['owner'];
handler.command = /^getnewsletterjid$/i;
export default handler;
