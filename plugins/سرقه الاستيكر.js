import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '❗غــــــــــلـــــــــط❗\n\n اعـــــــمـــــل ريـــبــــلاي عــــــلـــي الــمــــلـــصـق\nالــــــــــمــــࢪاد ســـــــࢪقــــتـه او مــــــــحـو بــــــــيانـاتـه \nمـــثـال:  .سرقه بوت|فوكس الخارق'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '❗غــــــــــلـــــــــط❗\n\n اعـــــــمـــــل ريـــبــــلاي عــــــلـــي الــمــــلـــصـق\nالــــــــــمــــࢪاد ســـــــࢪقــــتـه او مــــــــحـو بــــــــيانـاتـه \nمـــثـال:  .سرقه بوت|فوكس الخارق'
let img = await m.quoted.download()
if (!img) throw '❗غــــــــــلـــــــــط❗\n\n اعـــــــمـــــل ريـــبــــلاي عــــــلـــي الــمــــلـــصـق\nالــــــــــمــــࢪاد ســـــــࢪقــــتـه او مــــــــحـو بــــــــيانـاتـه \nمـــثـال:  .سرقه بوت|فوكس الخارق
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `𝗙𝗢𝗫 𝗪𝗛𝗔𝗧"𝗦𝗔𝗣𝗣 𝗕𝗢𝗧`, mediaType: 2, sourceUrl: canal1, thumbnail: imagen1}}}, { quoted: m })
else throw '❗حـــــــدث خـــــطـــا❗\n\nبــــــــࢪاحــه عــــــل الــــــبوت يــسطا\n كـــــــࢪر الامـــــــࢪ تـــــــــانــي وهـــــــــيـتـغل'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|سرقه$/i
export default handler
