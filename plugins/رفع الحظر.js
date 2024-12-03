const handler = async (m) => {
m.reply(`${eg} تم رفع البان عن الدردشه\n*انــا مـــتـاح الان للـــدࢪدشـــه*`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^رفع_الحظر$/i;
handler.botAdmin = true
handler.admin = true
export default handler;
