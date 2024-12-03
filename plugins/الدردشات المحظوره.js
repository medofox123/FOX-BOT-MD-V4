let handler = async (m, { conn }) => {
let ban = global.db.data.chats    
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    
let caption = `*╭•·––| 💬 الــــشـاتـــات الــــمـحظوره : محــــظوره |––·•*
│ *المـجـموع: ${chats.length} دࢪدشـه* ${chats ? '\n│\n' + chats.map(([jid], i) =>`
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'لا توجد دردشات محظوره' : `*الدردشات المحظوره*`}
│ ${jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*await conn.sendButton(m.chat, caption, wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^الشاتات_المحظوره|الدردشات_المحظوره$/i

export default handler
