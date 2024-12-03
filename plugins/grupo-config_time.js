/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
try{
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'فتح': 'not_announcement',
'فتح': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'غلق': 'announcement',
'غلق': 'announcement',	
'cerrado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let nombre = [ 
lenguajeGB.smsGrupoTime9() + '1' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '1' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '2' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '2' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '3' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '3' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '4' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '4' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '5' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '5' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '6' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '6' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '7' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '7' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '10' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '10' + lenguajeGB.smsGrupoTime11(),

lenguajeGB.smsGrupoTime9() + '12' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '12' + lenguajeGB.smsGrupoTime11(),

lenguajeGB.smsGrupoTime9() + '24' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '24' + lenguajeGB.smsGrupoTime11()]

let descripción = [ 
lenguajeGB.smsGrupoTime12() + '1' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '1' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '2' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '2' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '3' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '3' + lenguajeGB.smsGrupoTime11() + '\n',  
	
lenguajeGB.smsGrupoTime12() + '4' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '4' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '5' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '5' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '6' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '6' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '7' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '7' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '10' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '10' + lenguajeGB.smsGrupoTime11() + '\n', 

lenguajeGB.smsGrupoTime12() + '12' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '12' + lenguajeGB.smsGrupoTime11() + '\n', 

lenguajeGB.smsGrupoTime12() + '24' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '24' + lenguajeGB.smsGrupoTime11()]

let comando = [ 
"فتح 1", "غلق 1", 
"فتح 2", "غلق 2",
"فتح 3", "غلق 3",
"فتح 4", "غلق 4",
"فتح 5", "غلق 5",
"فتح 6", "غلق 6",
"فتح 7", "غلق 7",
"فتح 10", "غلق 10",
"فتح 12", "غلق 12",
"فتح 24", "غلق 24"]

let sections = Object.keys(nombre, descripción, comando).map((v, index) => ({ title: `${lenguajeGB.smsParaAdmins()}`,
rows: [{ title: `${nombre[v]}`, description: `${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let caption = `${lenguajeGB['smsAvisoMG']()}
${lenguajeGB['smsMalused']()}
${lenguajeGB['smsGrupoTime1']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'فتح' : 'فتح'} 1*
${lenguajeGB['smsGrupoTime2']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'غلق' : 'غلق'} 1*`

const listMessage = {
text: `${wm}`,
footer: `${caption}`,
title: null,
buttonText: `⚙️ ${lenguajeGB.smsConfi1()} ⚙️`,
sections }

await conn.reply(m.chat, ` `, fkontak, m)
//await conn.sendMessage(m.chat, caption, {quoted: fkontak})
throw false
}
let timeoutset = 86400000 * args[1] / 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${isClose == 'announcement' ? lenguajeGB.smsGrupoTime4() : lenguajeGB.smsGrupoTime5()} ${args[1] ? `${lenguajeGB['smsGrupoTime6']()} ${clockString(timeoutset)}` : ''}`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? lenguajeGB.smsGrupoTime7() : lenguajeGB.smsGrupoTime8()}!!`)
})
}, timeoutset)}

} catch (e) {
await conn.reply(m.chat, ``, fkontak, m)
console.log(``)
console.log(e)
}}
handler.command = /^(وقت_المجموعه|gctime|grupotiempo)$/i
handler.botAdmin = true
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
