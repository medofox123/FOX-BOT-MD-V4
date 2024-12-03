
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `*ادخــل الرقم التــســـلــــسلي اذا كـــنت لا تــــــعـرف الــــــࢪقم التــســـلــــسلي استــــخـــــــدم الامـــࢪ*\n\n *.الرمز*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw `*ادخــل الرقم التــســـلــــسلي اذا كـــنت لا تــــــعـرف الــــــࢪقم التــســـلــــسلي استــــخـــــــدم الامـــࢪ*\n\n *.الرمز*`

global.db.data.users[m.sender]['registroC'] = false
global.db.data.users[m.sender]['registroR'] = false
user.name = 0
user.age = 0
user.genero = 0
user.identidad = 0
user.pasatiempo = 0
user.premLimit = 1
user.tiempo = 0
user.descripcion = 0
user.registered = false
m.reply(`*｢لـقـد تــم تـــسـجـيـل خـࢪوجـك*｣\n\nمــع الـــــســــــلامـه الـمــــࢪكــب الــلـي تــــــودي😂🖐🏻`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^تسجيل_الخروج|الغاء_الخدمه?$/i
handler.register = true
export default handler
