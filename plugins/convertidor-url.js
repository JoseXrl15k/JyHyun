import fs from "fs"
import fetch from "node-fetch"
import FormData from "form-data"

let handler = async m => {
  try {
    const q = m.quoted || m
    const mime = q.mediaType || ""    
    if (!/image|video|audio|sticker|document/.test(mime)) 
      throw "¡No se proporcionan medios!"
    const media = await q.download(true)
    const fileSizeInBytes = fs.statSync(media).size    
    if (fileSizeInBytes === 0) {
      await m.reply("archivo vacio")
      await fs.promises.unlink(media)
      return
    }   
    if (fileSizeInBytes > 1073741824) {
      await m.reply("El archivo es demasiado grande, el tamaño máximo es 1 GB")
      await fs.promises.unlink(media)
      return
    }    
    const { files } = await uploadUguu(media)
    const caption = `*Link:*\n${files[0]?.url}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${e}`)
  }
}

handler.help = ['tourl']
handler.tags = ['convertir']
handler.command = /^(tourl4|upload4)$/i
export default handler

async function uploadUguu(path) {
  try {
    const form = new FormData()
    form.append("files[]", fs.createReadStream(path))   
    const res = await fetch("https://uguu.se/upload.php", {
      method: "POST",
      headers: form.getHeaders(),
      body: form
    })    
    const json = await res.json()
    await fs.promises.unlink(path)   
    return json
  } catch (e) {
    await fs.promises.unlink(path)
    throw "Upload failed"
  }
}
