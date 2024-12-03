let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}
let pesan = args.join` `
let oi = `*اصــــحــو:* ${pesan}`
let teks = `⬣━〔 *مـــنــشـن جــــمــاعـي* 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃➥ @${mem.id.split('@')[0]}\n`}
teks += ` ⬣━━━━━━[ *🦊* ]━━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(صحصح|صحصحو|اصحا)$/i
handler.group = true
export default handler
