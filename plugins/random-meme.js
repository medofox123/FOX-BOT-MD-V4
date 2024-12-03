/*   Creditos - ig : https://www.instagram.com/fg98._/    */
import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
conn.sendFile(m.chat, url, 'error.jpg', `😂😂😂`, m)}
//conn.sendButton(m.chat, `_🤣 ${command} 🤣_`.trim(), wm, url, [['كــــــمان كــــــمان ', `/${command}`]],  m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|ميمز)$/i
export default handler
