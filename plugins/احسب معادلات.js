let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('😨 𝙉𝙊 𝙃𝘼𝙂𝘼𝙎 𝙏𝙍𝘼𝙈𝙋𝘼!!\n𝘿𝙊 𝙉𝙊𝙏 𝘾𝙃𝙀𝘼𝙏!!')
}
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw `‏ ┈─── • ◞☆◜ • ───┈ \n\n   *ادخل الـعـملـيه الـحـسابـيه اللتي تـــرࢪيـد مـني حـلـهـا*\n\n‏ ┈─── • ◞☆◜ • ───┈ `
throw `${fg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘿𝙈𝙄𝙏𝙀𝙉 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝙔 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝙉𝘿 𝙎𝙔𝙈𝘽𝙊𝙇𝙎 𝘼𝙍𝙀 𝘼𝙇𝙇𝙊𝙒𝙀𝘿 -, +, * , /, ×, ÷, π, e, (, )*`
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(احسب(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
