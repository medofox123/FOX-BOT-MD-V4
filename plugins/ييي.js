import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2mp4 } from '../lib/webp2mp4.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let stiker = false
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        
        // *『📷🎥』 التحقق إذا كانت الرسالة تحتوي على صورة أو فيديو.*
        if (/webp|image|video/g.test(mime)) {
            
            // *『⏳』 التأكد أن مدة الفيديو لا تتجاوز 7 ثوانٍ.*
            if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*لا يمكن أن يزيد الفيديو عن 7 ثوانٍ*')

            let img = await q.download?.()

            // *『🚨』 إذا لم يتم استلام الصورة أو الفيديو، إرسال رسالة تنبيه.*
            if (!img) throw `*أجب على مقطع فيديو أو صورة أو أدخل رابط إنهاء صورة. ‏jpg والتي سيتم تحويلها إلى ملصق ، يجب عليك الإجابة أو استخدام الأمر ${usedPrefix + command}*`

            let out
            try {
                // *『🖼️』 محاولة إنشاء الملصق.*
                stiker = await sticker(img, false, global.packname, global.author)
            } catch (e) {
                console.error(e)
            } finally {
                // *『🔄』 في حال فشل المحاولة، يتم اللجوء لخطة بديلة لرفع الصورة أو الفيديو.*
                if (!stiker) {
                    if (/webp/g.test(mime)) out = await webp2mp4(img)
                    else if (/image/g.test(mime)) out = await uploadImage(img)
                    else if (/video/g.test(mime)) out = await uploadFile(img)

                    if (typeof out !== 'string') out = await uploadImage(img)
                    stiker = await sticker(false, out, global.packname, global.author)
                }
            }
        } else if (args[0]) {
            // *『🌐』 إذا كان هناك رابط، يتم التحقق من صحته.*
            if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
            else return m.reply('*عنوان URL / الرابط غير صالح ، يجب أن يكون إنهاء الرابط / URL / الرابط هو ‏jpg ، على سبيل المثال .ملصق https://telegra.ph/file/5f6d20951b3930d99b306.jpg*')
        }
    } catch (e) {
        console.error(e)
        if (!stiker) stiker = e
    } finally {
        // *『📩』 يتم إرسال الملصق إلى المستخدم إذا تم إنشاؤه بنجاح.*
        if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
        else throw '*خطأ ، يرجى المحاولة مرة أخرى. لا تنسي الرد على مقطع فيديو أو صورة أو إدراج رابط إنهاء الصورة.jpg‏ الذي سيتم تحويله الي ملصق*'
    }
}

handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['الاوامر']
handler.command = /^ستيك|ملصق?$/i
export default handler

// *『🌐』 التأكد من صلاحية الرابط المستخدم.*
const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}