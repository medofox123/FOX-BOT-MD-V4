//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
let crime = 500
let diamante = 10
const handler = async (m, {conn, usedPrefix, command, groupMetadata, participants, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`『🚓︎』𝙇𝘼 𝙋𝙊𝙇𝙄𝘾𝙄𝘼 𝙀𝙎𝙏𝘼 𝙑𝙄𝙂𝙄𝙇𝘼𝙉𝘿𝙊 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 : ${msToTime(date - new Date())}`)
let randow
if (m.isGroup) randow = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else randow = m.chat
try {
let ps = groupMetadata.participants.map(v => v.id)
let randow = ps.getRandom()
let users = global.db.data.users[randow]
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)

if (global.db.data.users[m.sender].exp < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${diamond} 💎 Diamante`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`《💰》${pickRandom(global.robar)} ${money} 🪙 GataCoins`).catch(global.db.data.users[m.sender].money += money) 
  
let or = ['text', 'text2', 'text3', 'text4', 'text5']; 
let media = or[Math.floor(Math.random() * 5)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') return m.reply(`《💰》${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') return m.reply(`《🚓》${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'text3') return m.reply(`《💰》${pickRandom(global.robar)}\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🐈 𝐆𝐀𝐓𝐀𝐂𝐎𝐈𝐍𝐒`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'text4') return m.reply(`《🚓》${pickRandom(global.robmal)}\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🐈 𝐆𝐀𝐓𝐀𝐂𝐎𝐈𝐍𝐒`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money)
if (media === 'text5') return conn.reply(m.chat, `《💰》Le has robado a @${randow.split`@`[0]} una cantidad de ${exp} XP`, m, {contextInfo: {mentionedJid: [randow]}}).catch(global.db.data.users[m.sender].exp += exp).catch(global.db.data.users[randow].exp -= crime) 
} catch (e) {
console.log(e)}}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(خطه|خطتتي)$/i
handler.register = true
handler.group = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['سرقت بنكًا وحصلت على',
'تفاوضت مع زعيم المافيا وحصلت على:',
'كادت الشرطة أن تمسك بك ولكنك تمكنت من سرقة كمية ثمينة من . احذر في المرة القادمة! حصلت على:',
'دفعتك المافيا:',
'لقد سرقت من مدير المجموعة',
'سرقت من رئيسك مبلغ:',
'سرقت من شخصية مشهورة قيمة:',
'دخلت بهدوء إلى المتحف وسرقت عملًا فنيًا ثمينًا:',
'تسللت إلى متجر المجوهرات وحصلت على غنيمة رائعة:',
'أصبحت اللص الأكثر طلبًا في البلاد، حصلت على:',
'سرقت شاحنة محملة بمنتجات ثمينة وحصلت على',
'اقتحمت قطارًا وحصلت على',
'سرقت طائرة محملة بالبضائع وحصلت على',
'تظاهرت بأنك مليونير لسرقة جوهرة فريدة، حصلت على',
'دخلت إلى منزل جامع فنون وسرقت قطعة لا تقدر بثمن، حصلت على',
'اختطفت رجل أعمال وحصلت على فدية كبيرة:',
'هددت سياسيًا وحصلت على مبلغ كبير من المال:',
'رشوت ضابط شرطة للحصول على معلومات قيمة، حصلت على'];
global.robmal = ['رأتك الشرطة ♂️ خسرت',
'ذهبت لسرقة بنك وباعك مساعدك للشرطة، خسرت',
'لم تستطع الهرب من الشرطة، خسرت:',
'حاولت سرقة كازينو ولكن تم اكتشافك، خسرت',
'تم القبض عليك وأنت تحاول سرقة متجر، خسرت:',
'دقت الإنذار عندما كنت تحاول سرقة مستودع، خسرت',
'أمسك بك صاحب المكان متلبسًا، خسرت',
'حاولت اختراق حساب بنكي ولكن تم تتبعك، خسرت',
'تم اكتشافك وأنت تحاول رشوة ضابط، خسرت',
'خطة ابتزازك لرجل أعمال باءت بالفشل، خسرت']
