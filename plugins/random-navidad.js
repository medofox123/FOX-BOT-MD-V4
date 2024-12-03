import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/navidad.json`)).data  
let mystic = await res[Math.floor(res.length * Math.random())]
const meme = hispamemes.meme()
conn.sendFile(m.chat, meme, 'error.jpg', `عيد سعيد`, m)}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(عيد)$/i
export default handler
