const handler = async (m, { conn, isROwner, text }) => {
const datas = global

if (!process.send) throw 'متجيش جنب ال main.js\n ممكن يبقا index.js'
const { key } = await conn.sendMessage(m.chat, {text: `🚀🚀`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀🚀🚀`, edit: key})
await conn.sendMessage(m.chat, {text: `اعـــــاده تــشـــغيل`, edit: key})
process.send('reset')}
handler.help = ['restart'] 
handler.tags = ['owner']
handler.command = ['اعاده_تشغيل','reiniciar'] 
handler.rowner = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
