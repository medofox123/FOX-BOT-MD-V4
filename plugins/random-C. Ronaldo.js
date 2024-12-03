import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let cristiano = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json`)).data  
let ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())]
//conn.sendFile(m.chat, ronaldo, 'error.jpg', `*Siiiuuuuuu*`, m)}
conn.sendButton(m.chat, "*Siiiuuuuuu*", wm, ronaldo, [['كــــــمان كــــــمان ', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['الدون', 'كرستيانو','رونالدو','cr7']
handler.tags = ['internet']
handler.command = /^(كرستيانو|رونالدو|الدون|cr7)$/i
export default handler
