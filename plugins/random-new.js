import axios from "axios"  
import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command, conn, text}) => {

if (command == 'chica') {
let pp = 'https://source.unsplash.com/featured/?girl,woman'
//conn.sendFile(m.chat, pp, 'error.jpg', m)}
conn.sendButton(m.chat, wm, null, pp, [
['الــــــــــتالــي', `.chica`],
['ولــــــــــد', `.chico`],
['الـــــــــقائــــــمه', '/الاوامر']
], null, null, m)}
  
  
if (command == 'chico') {
 let pp = 'https://source.unsplash.com/featured/?boy,man'
// conn.sendFile(m.chat, pp, 'error.jpg', m)}
conn.sendButton(m.chat, wm, null, pp, [
['الــــــــــــــتالــي', `.chico`],
['بـــــــنـــت', `.chica`],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/الاوامر']
], null, null, m)}

  
if (command == 'الطقس') {
 if (!text) return conn.reply(m.chat, `*اكــــــتــــب اســـــــم الــــبلد اللي عــاوز تـــــعـــــࢪف الطــــــقـس بــــتاعــها*\nمـــــثال\n*${usedPrefix + command} Egypt cairo*\n\n*اكتب اسم الدوله والعاصمه ب اللغه الانجليزيه لضمان التوقع الصحيح*`, m)  
//const clima = await axios.get(`https://es.wttr.in/${text}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)

let pp=`https://image.thum.io/get/width/800/crop/580/https://ar.wttr.in/${text}?m`
//let pp = `https://api.screenshotmachine.com/?key=c04d3a&url=https://es.wttr.in/${text}&screenshotmachine.com&dimension=1000x600`
//conn.sendFile(m.chat, pp, 'error.jpg', `✨ *AQUÍ TIENE EL CLIMA EN ESPAÑOL*`, m)}
conn.sendButton(m.chat, `✨ *هـذه هـــــيا حــــاله الطقس الــــمࢪصوده وكـذب الـــــمـنـجـمـون ولـــو صــدقــو*`, wm, pp, [
['💜 الــــــطـقـس بـــــالانـــــــــجليزي', `.الطقس2 ${text}`],
['الــقـائـــمه', '/الاوامر']
], [['𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇', md]], m)}
  
if (command == 'الطقس2') {
 if (!text) return conn.reply(m.chat, `𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙐𝙉𝙏𝙍𝙔 𝘼𝙉𝘿 𝘾𝙄𝙏𝙔 𝙏𝙊 𝙆𝙉𝙊𝙒 𝙏𝙃𝙀 𝙒𝙀𝘼𝙏𝙃𝙀𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Egypt cairo*`, m)  
let pp=`https://image.thum.io/get/width/800/crop/580/https://en.wttr.in/${text}?m`
//let pp = `https://api.screenshotmachine.com/?key=c04d3a&url=https://en.wttr.in/${text}&screenshotmachine.com&dimension=1000x600`
//conn.sendFile(m.chat, pp, 'error.jpg', `✨ *HERE IS THE WEATHER IN ENGLISH*`, m)}
conn.sendButton(m.chat, `✨ *HERE IS THE WEATHER IN ENGLISH*`, wm, pp, [
['💙 الـــــطـقـس بـــالـعࢪبي', `.الطقس ${text}`],
['الــقـائـــــــمه', '/الاوامر']
], [['𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇', md]], m)}

if (command == 'clima3') {
 if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙋𝘼𝙄𝙎 𝙔 𝘾𝙄𝙐𝘿𝘼𝘿 𝙋𝘼𝙍𝘼 𝙎𝘼𝘽𝙀𝙍 𝙀𝙇 𝘾𝙇𝙄𝙈𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Ecuador Quito*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝘾𝙊𝙐𝙉𝙏𝙍𝙔 𝘼𝙉𝘿 𝘾𝙄𝙏𝙔 𝙏𝙊 𝙆𝙉𝙊𝙒 𝙏𝙃𝙀 𝙒𝙀𝘼𝙏𝙃𝙀𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Francia París*`, m)  

let pp=`https://image.thum.io/get/width/800/crop/580/https://pt.wttr.in/${text}?m`
//let pp = `https://api.screenshotmachine.com/?key=c04d3a&url=https://pt.wttr.in/${text}&screenshotmachine.com&dimension=1000x600`
//conn.sendFile(m.chat, pp, 'error.jpg', `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, m)}
conn.sendButton(m.chat, `✨ *AQUI ESTÁ O TEMPO EM PORTUGUÊS*`, wm, pp, [
['💙 الــــطـــقـس بالـــعࢪبــــي', `.الطقس ${text}`],
['💜 𝙀𝙣𝙜𝙡𝙞𝙨𝙝 𝙫𝙚𝙧𝙨𝙞𝙤𝙣', `.الطقس2 ${text}`],  
['القـــــائــــــمه', '/الاوامر']
], [['𝐹𝛩𝑋 𝑊𝐴 𝐵𝛩𝑇', md]], m)}   
} 
handler.help = ['chica', 'chico', 'clima', 'clima2', 'clima3'] 
handler.command = ['chica', 'chico', 'الطقس', 'الطقس2'] 
export default handler

