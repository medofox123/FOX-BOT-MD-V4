import { promises } from 'fs'
import { join } from 'path'
import { prepareWAMessageMedia, generateWAMessageFromContent } from '@whiskeysockets/baileys'
let handler = async (m, { conn, text }) => {

       let dev = 'ほ𝐘𝐔𝐌𝐈𝐊𝐎 𝐌𝐃〆' // رابط القناة

const defaultMenu = {
  before: `*. ⋅ᘛ⁐̤ᕐ⩺┈•༶ ☁️ :･ﾟ✧:･ﾟ✧･ﾟ✧*\n*. ⋅⊰ꕤ┆الألــعـــــــــــــاب. ⋅⊰ꕤ ┆ ・・・・・・・・・・・*`.trimStart(),
  after: `> ${dev}`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let name = await conn.getName(m.sender)

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.command) ? plugin.command.map(cmd => {
          // إذا كان الكوماند بالصورة المطلوبة ./^هاري$/i سيحول إلى ['هاري']
          if (typeof cmd === 'string' && /^\.\/\^(.+)\$\/i$/.test(cmd)) {
            return cmd.match(/^\.\/\^(.+)\$\/i$/)[1]; // تحويل الأمر إلى 'هاري'
          }
          return cmd;
        }) : [plugin.command],
        prefix: 'customPrefix' in plugin,
        tags: plugin.tags || [],
      }
    })

    // تصفية الأوامر التي تحتوي على tag 'games'
    let gamesHelp = help.filter(menu => menu.tags.includes('الاوامر'))
    let thumbnailUrl = 'https://qu.ax/qyTn.jpg' 

    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let after = conn.menu.after || defaultMenu.after

    // إعداد الصورة المصغرة
    let joanimiimg = await prepareWAMessageMedia({ image: { url: thumbnailUrl } }, { upload: conn.waUploadToServer });

    // إعداد الأقسام لكل الأوامر
    let sections = gamesHelp.map(menu => ({
      title: 'الأوامر المتاحة',
      rows: menu.help.map(help => ({
        title: `${_p}${help}`, // اسم الأمر
        description: `تشغيل ${_p}${help}`, // الوصف
        id: `${_p}${help}` // المعرف الخاص بالأمر
      }))
    }))

    // إعداد رسالة تفاعلية مع الأزرار
    const interactiveMessage = {
      body: { text: before },
      footer: { text: `*: ©2024-𝗗𝗫.𝗧𝗘𝗔𝗠*`.trim() },
      header: {
        hasMediaAttachment: true,
        imageMessage: joanimiimg.imageMessage,
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: '☇⚛⃯𝗬𝗨𝗠𝗜𝗞𝗢༱⃝𝗩𝗜𝗣༗᪾',
              sections: sections, // الأوامر كخيارات
            })
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: '◞تـحـديـثـات الـبـوت◜',
              url: 'https://whatsapp.com/channel/0029VaoIlUJ1NCrMSnP8hB1K'
            })
          }
        ]
      }
    };

    // إنشاء الرسالة التفاعلية
    let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage,
        },
      },
    }, { userJid: conn.user.jid, quoted: m });

    // تعديل معلومات التحويل
    msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = {
      mentionedJid: [m.sender],
      isForwarded: true,
      forwardingScore: 1,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363301959563781@newsletter', // Channel ID
        newsletterName: 'Channel Name', // Channel name
        serverMessageId: 100
      }
    };
    
    // إرسال الرسالة
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

  } catch (e) {
    conn.reply(m.chat, '❌ حدث خطأ في القائمة', m);
    throw e;
  }
}}

handler.help = ['menu']
handler.tags = ['gox']
handler.command = ['gox'] 
handler.register = true

export default handler