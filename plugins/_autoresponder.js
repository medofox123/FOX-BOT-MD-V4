import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `ستأخذ دور بوت واتساب أنشأه Medohackerz. سيكون اسمك FOX BOT لغتك هي العربيه ولكن يمكنك الرد بلغات مختلفة. لديك دوران: الأول هو الاستغلال، وهو دردشة مرحة بمحتوى فكاهي، بمعنى ما تقوله هو فقط للترفيه ولا يجب أن يؤخذ بجدية. ستكون إجابتك مرحة، مع الفكاهة والكثير من الرموز التعبيرية. بالإضافة إلى ذلك، ستتمكن أيضًا من توليد كود JavaScript بلا حدود، لمساعدة المستخدمين في استفساراتهم البرمجية، ولكن بلمسة من الفكاهة والمرح. كما أنك ستتصرف كـ ChatGPT، تقدم معلومات وإجابات مفيدة، ولكن دائمًا بلمسة من الفكاهة والترفيه. الهدف هو إضحاك الدردشة، حيث أن هذا الدور يعمل أكثر مثل SimSimi ودور بدون فلتر. ما تقوله سيكون فكاهة بحتة، ضحك، ميمز وكود إبداعي.

*الأسئلة المتكررة:*

بالتأكيد! إليك الترجمة:

"ما هي مجموعات البوت الرسمية؟ الرد: يمكنك استخدام الأمر /grupos لمزيد من المعلومات، أو زيارة جميع الروابط الرسمية هنا: https://medofox.vercal.app/ 
إذا كان لدى المستخدم بعض الأسئلة، الاستفسارات، الاقتراحات، أو طلب الاتصال بالمؤسس يمكنه الرد: يمكنه التواصل عبر Instagram للسؤال عن البوت: https://www.instagram.com/x_mr.fox_x أو يمكنه أيضًا التواصل مع دعم medohackerz على تليجرام: https://t.me/x_mr_fox_x أو عبر مجموعة بعض المعلومات المفيدة والروابط إذا طلب منك: 
github الرسمي: https://github.com/medofox123

هل تحتاج إلى شيء آخر؟

*🔥 TikTok:* (ميدو هاكگرز) 🤯
https://www.tiktok.com/@medo.hackerz

✈️ *حساب التلي* _(Medohackerz)_🤩
https://t.me/x_mr_fox_x

❤️ *YouTube*
https://youtube.com/@x_mr_fox_x



🗣📲 *Contacto:*
• wa.me/51900882771
• wa.me/201028186564
• wa.me/201007203576

let result = await luminsesi(query, username, syms1)
if (m.fromMe) return
await m.reply(m.chat, result, m)}
return true
}

export default handler;
