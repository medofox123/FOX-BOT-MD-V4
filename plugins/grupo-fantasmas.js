//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, areJidsSameUser, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}الـــمـجموعه نــــــشـطه ولـــــيـس بـها اشــباح ولا وهمين`, m) 
m.reply(`⚠️_*مـنـشـن جـمـاعي*_⚠️\n\nالـمجمـوعـه: ${await conn.getName(m.chat)}\n*اعـضـاء الـجـࢪوب:* ${sum}\n\n*[ 👻 قـائـــــمه الاشــــــــبـاح 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*مــلاحــظه: قـــد لا يــــــكگـون البــــــــوت دقـــــيــق بـــــــنسبه ℅100 حــــيــث يـــبـدا الـــــــࢪوبوت الـــعــــد فــــقـط بـــــعــد تــــنـــصــــيـبه *`, null, { mentions: sider }) 
  break   
case "kickfantasmas":  
        if(total == 0) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙊 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 :D`, m) 
       await m.reply(`⚠️ 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊𝙎 ⚠️\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙍𝙏𝙀: ${sum}\n\n[ 👻 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 👻 ]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*يــــقـوم الـــــبوت بــــــــحـذف الــــࢪســــــائــــل بـــدا مــن
       20 ثــــــانــيه , وكـــــــــل 10 ثـــــوانـي يـــــحـذف الـــــــــࢪســائل*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
        chat.welcome = true
       }
break            
}}
handler.command = /^(منشن|منشن-جماعي)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


