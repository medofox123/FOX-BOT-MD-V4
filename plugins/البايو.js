let handler = async (m, { conn, text }) => {
   if (!text) throw `${lenguajeGB['smsAvisoMG']()}ادخـــــــل نــــــــــصًا`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}*تــــــم تــغـــــــيࢪ البـايــــو بنـجاح* ✅️`, m)
} catch {
       throw 'حسنا خطا اخي ...'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^بايو|setbotbio$/i
handler.owner = true

export default handler
