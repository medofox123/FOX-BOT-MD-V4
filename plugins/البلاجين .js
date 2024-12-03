
import fs from 'fs'

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `*${mg}\nادخــل اسـم الplugin\nمـــثال:\n${usedPrefix + command} menu`
    if (!ar1.includes(text)) return m.reply(`'${text}' لم يتم العثور عليه!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(بحث_المكون|gp)$/i

handler.rowner = true

export default handler
