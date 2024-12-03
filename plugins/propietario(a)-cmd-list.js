let handler = async (m, { conn }) => {
conn.reply(m.chat, `ღ قـائــــــــــمه الاوامـــࢪ /و النــــصوص المخصصة

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*ღ كــود:* ${value.locked ? `*(مـــحظور)* ${key}` : key}\n*ღ الاوامر/النصوص* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['قائمه_الاوامر', 'cmdlist']
handler.rowner = true
export default handler
