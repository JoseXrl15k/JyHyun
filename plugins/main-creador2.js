function handler(m) {
let name = conn.getName('51950148255@s.whatsapp.net')
let ownerN = '51950148255'
conn.sendContact(m.chat, [[`${ownerN}@s.whatsapp.net`, `${name}`]], m, {
 contextInfo: { 
 forwardingScore: 2023,
isForwarded: false, 
 externalAdReply: {  
 title: `¡Hi! This is my developer's number, just shoot me a message if you have any questions or want to chat about a potential collab.`, 
 body: botName, 
 sourceUrl: 'https://whatsapp.com/channel/0029VaoRpDF5PO190ZCItg3D',
 thumbnail: imagen,
 thumbnailUrl: 'https://i.imgur.com/Qo0nXdY.jpeg', 
 mediaType: 1,
 showAdAttribution: true, 
 renderLargerThumbnail: true 
 }
   }
     },
       {
         quoted: fkontak
           }
             );

}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner2', 'creator2', 'creador2', 'dueño2', 'fgowner2'] 

export default handler