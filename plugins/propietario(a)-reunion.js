let handler = async(m, { conn, command }) => {

let text = `*🥏 المالـك @${m.sender.split`@`[0]}طُلب حضورك في فريق العمل، يُرجى التوجه بأسرع وقت ممكن إلى فريق العمل*

*طـــاقـــم عـــــــمل بـوت فــوكس*`
m.reply('*⚠️ارسال ࢪساله اللي جميع المالكين*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
