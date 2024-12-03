let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`❃━✦ ${lenguajeGB['smsGI1']()}✦━❃

⇢ ${lenguajeGB['smsGI2']()}
・ ${groupMetadata.id}
nm
⇢ ${lenguajeGB['smsGI3']()}
・ ${groupMetadata.subject}

⇢ ${lenguajeGB['smsGI4']()}
・ ${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}

⇢ ${lenguajeGB['smsGI6']()}
・ ${participants.length} ${lenguajeGB['smsGI7']()}

⇢ ${lenguajeGB['smsGI8']()}
・ @${owner.split('@')[0]}

⇢ ${lenguajeGB['smsGI9']()}
${listAdmin}

*❃━═✦•〘🦊〙•✦═━❃*
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeGB.smsGI10(), '.on'], [lenguajeGB.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(معلومات_المجموعه|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
