import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
//conn.sendFile(m.chat, url, 'error.jpg', `*Messi 🇦🇷*`, m)}
conn.sendButton(m.chat, "*Messi 🇦🇷*", wm, url, [['اضـــــغــــط للــمزيد', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi|مسي|ميسي)$/i
export default handler
