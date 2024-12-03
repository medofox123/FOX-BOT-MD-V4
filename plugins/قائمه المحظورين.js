import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5]
let gata = [img5, img6, img7, img8, img9]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `*📛 قـائــــــمه المحظـورين :محــوࢪين*\n\n*المـجموع :* ${data.length}\n\n╭━━━[ *🦊* ]━━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣\n\n*من فضلك لا تتصل ب البوت لتحنب الحظر وشكرا لك."
return conn.reply(m.chat, txt, fkontak, m, { mentions: await conn.parseMention(txt) })
/*conn.sendButton(m.chat, txt, `*Por favor no llame para evitar ser Bloqueado, Gracias.*\n\n*Please do not call to avoid being Blocked, Thank you.*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(txt) })*/
}).catch(err => {
console.log(err);
return conn.reply(m.chat, `*لـــم يــتم حــظر احـــــــد*`, gata, m) 
/*conn.sendButton(m.chat, `${rg}𝙉𝘼𝘿𝙄𝙀 𝙃𝘼 𝙎𝙄𝘿𝙊 𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊\n\n𝙉𝙊 𝙊𝙉𝙀 𝙃𝘼𝙎 𝘽𝙀𝙀𝙉 𝘽𝙇𝙊𝘾𝙆𝙀𝘿`, wm, gata, [
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], os.getRandom())*/
})} 
handler.command = ['bloqueados', 'قائمه_المحظورين', 'المحظورين', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
