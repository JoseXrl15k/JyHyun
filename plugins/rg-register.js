import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|+] *?)([0-9]*)([.|+] *?)([MFNO])?$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => './src/avatar_contact.png')
 if (user.registered === true) throw `*🌸 Ya estás registrado*\n\n*¿Quiere volver a registrarse?*\n\n*🍟 Use este comando para eliminar su registro*\n\n*${usedPrefix}unreg <sn>*`

  let te = `*[ ✰ ] Por favor, ingresa tu nombre de usuario edad y Género para proceder con el registro.*\n\n*🍟 Ejem. de Uso* : *${usedPrefix + command}* *Jose.15.M*\n\n*✰ Géneros disponibles:*\n\n*- M* = Hombre\n*- F* Mujer\n*- N* = Otros\n\n*Si eres gay o Lesbiana usa Otros*`
  if (!Reg.test(text)) throw te
  let [_, name, splitter, age, splitter2, gen] = text.match(Reg)
  if (!name) throw te
  if (!age) throw te
  if (name.length >= 30) throw `🌸 El nombre es demasiando largo`
  age = parseInt(age)
  if (age > 60) throw `👴🏻 ${mssg.oldReg}`
  if (age < 10) throw '🚼 Vaya a ver la vaca lola'
  let genStr = gen && gen.toUpperCase() === 'M' ? `🙆🏻‍♂️ ${mssg.man}` : (gen && gen.toUpperCase() === 'F' ? `🤵🏻‍♀️ ${mssg.woman}` : (gen && gen.toUpperCase() === 'N' ? `⚧ ${mssg.other}` : null))
  if (!genStr) throw `🌸 ${mssg.genderList}: M, F o N\n\n*- M* = ${mssg.man}\n*- F*- ${mssg.woman}\n*- N* = ${mssg.other}`
  user.name = name.trim()
  user.age = age
  user.genero = genStr
  user.regTime = + new Date
  user.coin += 8400
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let regi = `
*\`—  R E G I S T R O  〤  U S E R\`*

	*» Nombre* : *${name}*
	*» Edad* : *${age}*
	*» Genero* : *${genStr}*
	*» Tag* : *${sn}*
	
> Escribe *#profile* para ver tu perfil.

❀⊱┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊰❀

 \`Como bono de registro, se te han añadido 8400 coins a tu cuenta de banco\`
`
  conn.sendFile(m.chat, pp, 'Jyhyun.jpg', regi, m, rcanal)
}

handler.help = ['reg'].map(v => v + ' <nombre.edad.género>')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'register', 'registrar', 'verificar'] 

export default handler