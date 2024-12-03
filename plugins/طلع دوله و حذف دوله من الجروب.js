/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`‏ ┈─── • ◞☆◜ • ───┈ ⋅\n\n*نــسـيـت كـود الــدوله اللي هـــــتدوࢪ عـلـيها*\n\n‏ ┈─── • ◞☆◜ • ───┈ ⋅`) 
if (isNaN(args[0])) return m.reply(`‏ ┈─── • ◞☆◜ • ───┈ ⋅\n\n*نــسـيـت كـود الــدوله اللي هـــــتدوࢪ عـلـيها*\n\n‏ ┈─── • ◞☆◜ • ───┈ ⋅`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`‏ ┈─── • ◞☆◜ • ───┈ ⋅\n\n  *مـــفــــيش اࢪقـام في الــــجـروب لـــيها نفس كــود الدوله هذا* *˼${lol}+˹*\n\n‏ ┈─── • ◞☆◜ • ───┈ ⋅`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "ارقام_دوله": 
conn.reply(m.chat, `⚡ *قـائمه الأࢪقـام اللتي تـحتوي عـــلي كـــود الـــدولـه* \n       ｢${lol}+｣\n*فـي هـــذه الـمـجموعـه*⚡\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "طلع_دوله":  
if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsSoloOwner']()}`) 
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoAG']()} ${lenguajeGB['smsAllAdmin']()}`)          
conn.reply(m.chat, `*بـدا الـبـوت فـي حـذف الاࢪقـام الـلـتـي تـحـتـوي عـلي كـود الــدوله* ˼${lol}+˹,*سـوف يـتـم حـذف عـضو كـل عـشـࢪ ثواني*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} 𝙔𝘼 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙊 𝙃𝘼 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝘼𝘿𝙊 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 :v`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
break            
}}
handler.command = /^(ارقام_دوله|طلع_دوله)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
