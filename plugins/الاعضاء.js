let handler = async(m, { conn, text }) => { 
    let code = { 
        "61": "أستراليا", 
        "674": "ناورو", 
        "675": "بابوا غينيا الجديدة", 
        "677": "جزر سليمان", 
        "678": "فانواتو", 
        "679": "فيجي", 
        "680": "بالاو", 
        "681": "واليس وفوتونا", 
        "682": "جزر كوك", 
        "683": "نيوي", 
        "684": "ساموا", 
        "685": "ساموا الأمريكية", 
        "686": "كيريباتي", 
        "687": "كاليدونيا الجديدة", 
        "688": "توفالو", 
        "689": "بولينيزيا الفرنسية", 
        "690": "توكيلاو", 
        "691": "ميكرونيزيا", 
        "692": "جزر مارشال", 
        "63": "الفلبين", 
        "93": "أفغانستان", 
        "54": "الأرجنتين", 
        "242": "باهاماس", 
        "246": "باربادوس", 
        "501": "بليز", 
        "229": "بنين", 
        "55": "البرازيل", 
        "56": "تشيلي", 
        "57": "كولومبيا", 
        "506": "كوستاريكا", 
        "53": "كوبا", 
        "1767": "دومينيكا", 
        "1809": "جمهورية الدومينيك", 
        "593": "الإكوادور", 
        "503": "السلفادور", 
        "500": "جزر فوكلاند", 
        "299": "غرينلاند", 
        "1473": "غرينادا", 
        "502": "غواتيمالا", 
        "592": "غيانا", 
        "509": "هايتي", 
        "504": "هندوراس", 
        "1876": "جامايكا", 
        "52": "المكسيك", 
        "505": "نيكاراغوا", 
        "507": "بنما", 
        "595": "باراغواي", 
        "51": "بيرو", 
        "1787": "بورتو ريكو", 
        "869": "سانت كيتس ونيفيس", 
        "1758": "سانت لوسيا", 
        "1784": "سانت فنسنت والغرينادين", 
        "597": "سورينام", 
        "1869": "ترينيداد وتوباغو", 
        "1": "الولايات المتحدة الأمريكية", 
        "598": "أوروغواي", 
        "58": "فنزويلا", 
        "213": "الجزائر", 
        "244": "أنغولا", 
        "267": "بوتسوانا", 
        "226": "بوركينا فاسو", 
        "257": "بوروندي", 
        "237": "الكاميرون", 
        "238": "الرأس الأخضر", 
        "236": "جمهورية أفريقيا الوسطى", 
        "235": "تشاد", 
        "269": "جزر القمر", 
        "243": "الكونغو", 
        "253": "جيبوتي", 
        "20": "مصر", 
        "240": "غينيا الاستوائية", 
        "291": "إريتريا", 
        "251": "إثيوبيا", 
        "241": "الغابون", 
        "220": "غامبيا", 
        "233": "غانا", 
        "224": "غينيا", 
        "245": "غينيا بيساو", 
        "254": "كينيا", 
        "266": "ليسوتو", 
        "231": "ليبيريا", 
        "218": "ليبيا", 
        "261": "مدغشقر", 
        "265": "مالاوي", 
        "223": "مالي", 
        "222": "موريتانيا", 
        "230": "موريشيوس", 
        "212": "المغرب", 
        "258": "موزمبيق", 
        "264": "ناميبيا", 
        "227": "النيجر", 
        "234": "نيجيريا", 
        "250": "رواندا", 
        "239": "ساو تومي وبرينسيبي", 
        "221": "السنغال", 
        "248": "سيشيل", 
        "232": "سيراليون", 
        "252": "الصومال", 
        "27": "جنوب أفريقيا", 
        "211": "جنوب السودان", 
        "249": "السودان", 
        "268": "سوازيلاند", 
        "255": "تنزانيا", 
        "228": "توغو", 
        "216": "تونس", 
        "256": "أوغندا", 
        "260": "زامبيا", 
        "263": "زيمبابوي", 
        "355": "ألبانيا", 
        "376": "أندورا", 
        "43": "النمسا", 
        "32": "بلجيكا", 
        "387": "البوسنة والهرسك", 
        "359": "بلغاريا", 
        "385": "كرواتيا", 
        "357": "قبرص", 
        "420": "التشيك", 
        "45": "الدنمارك", 
        "372": "استونيا", 
        "358": "فنلندا", 
        "33": "فرنسا", 
        "49": "ألمانيا", 
        "30": "اليونان", 
        "36": "المجر", 
        "354": "آيسلندا", 
        "353": "أيرلندا", 
        "39": "إيطاليا", 
        "383": "كوسوفو", 
        "371": "لاتفيا", 
        "423": "ليختنشتاين", 
        "370": "ليتوانيا", 
        "352": "لوكسمبورغ", 
        "389": "مقدونيا الشمالية", 
        "356": "مالطا", 
        "373": "مولدوفا", 
        "377": "موناكو", 
        "382": "الجبل الأسود", 
        "31": "هولندا", 
        "47": "النرويج", 
        "48": "بولندا", 
        "351": "البرتغال", 
        "40": "رومانيا", 
        "7": "روسيا", 
        "378": "سان مارينو", 
        "381": "صربيا", 
        "421": "سلوفاكيا", 
        "386": "سلوفينيا", 
        "34": "إسبانيا", 
        "46": "السويد", 
        "41": "سويسرا", 
        "90": "تركيا", 
        "380": "أوكرانيا", 
        "44": "المملكة المتحدة", 
        "379": "مدينة الفاتيكان", 
        "994": "أذربيجان", 
        "973": "البحرين", 
        "880": "بنغلاديش", 
        "975": "بوتان", 
        "673": "بروناي", 
        "95": "ميانمار (بورما)", 
        "855": "كمبوديا", 
        "86": "الصين", 
        "995": "جورجيا", 
        "91": "الهند", 
        "62": "إندونيسيا", 
        "98": "إيران", 
        "964": "العراق", 
        "972": "إسرائيل", 
        "81": "اليابان", 
        "962": "الأردن", 
        "7": "كازاخستان", 
        "850": "كوريا الشمالية", 
        "82": "كوريا الجنوبية", 
        "965": "الكويت", 
        "996": "قرغيزستان", 
        "856": "لاوس", 
        "961": "لبنان", 
        "60": "ماليزيا", 
        "960": "المالديف", 
        "976": "منغوليا", 
        "977": "نيبال", 
        "968": "عمان", 
        "92": "باكستان", 
        "970": "فلسطين", 
        "974": "قطر", 
        "966": "السعودية", 
        "65": "سنغافورة", 
        "94": "سريلانكا", 
        "963": "سوريا", 
        "886": "تايوان", 
        "992": "طاجيكستان", 
        "66": "تايلاند", 
        "670": "تيمور الشرقية",
"670": "تيمور الشرقية", 
    "993": "تركمانستان", 
    "971": "الإمارات العربية المتحدة", 
    "998": "أوزبكستان", 
    "84": "فيتنام", 
    "967": "اليمن"
} 

let participants = (await conn.groupMetadata(m.chat)).participants.map(v => v.id) 
let result = {} 
let other = [] 
let tags = [] 
for(let user of participants) { 
	let from = Object.keys(code).filter(v => user.startsWith(v)) 
	let region = result[code[from[0]]] || [] 
	if(from.length) { 
		region.push(user) 
		result[code[from[0]]] = region 
		} else { other.push(user) } 
	} 

  let teks = `『 *منطقة الأعضاء* 』\n\n` +
    (Object.keys(result).map(v => `${v} (${result[v].length}):\n${result[v].map(v => "- @" + v.split("@")[0]).join("\n")}`)).join("\n\n") +
    (other.length ? (`\n\nأخرى (${other.length}):\n` + other.map(v => "- @" + v.split("@")[0]).join("\n")) : '');

  // Removed sendMediaWithFooter

  conn.reply(m.chat, teks, m);
};

handler.command = handler.help = "الاعضاء";
handler.tags = "tools";
handler.group = true;
handler.admin = true;

export default handler;
