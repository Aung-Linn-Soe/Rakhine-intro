// ラカイン州 紹介サイトのデータ
// 原稿・座標は uploads/rakhine-site-requirements.md と design canvas から移植。
// ▼ 追加・修正は SPOTS 配列だけを編集すればよい。my（ビルマ語）は必須。en / ja が空なら my を表示する。

export const TOWNS = [
  { id: "sittwe", my: "စစ်တွေ", en: "Sittwe", ja: "シットウェ", x: 605.8, y: 428.2 },
  { id: "maungdaw", my: "မောင်တော", en: "Maungdaw", ja: "マウンドー", x: 484.3, y: 250.1 },
  { id: "buthidaung", my: "ဘူးသီးတောင်", en: "Buthidaung", ja: "ブーティーダウン", x: 517.9, y: 238.0 },
  { id: "rathedaung", my: "ရသေ့တောင်", en: "Rathedaung", ja: "ラテーダウン", x: 574.3, y: 339.9 },
  { id: "ponnagyun", my: "ပုဏ္ဏားကျွန်း", en: "Ponnagyun", ja: "ポンナジュン", x: 635.5, y: 379.2 },
  { id: "pauktaw", my: "ပေါက်တော", en: "Pauktaw", ja: "パウットー", x: 653.9, y: 413.9 },
  { id: "kyauktaw", my: "ကျောက်တော်", en: "Kyauktaw", ja: "チャウットー", x: 631.8, y: 239.1 },
  { id: "mraukU", my: "မြောက်ဦး", en: "Mrauk U", ja: "ミャウー", x: 679.9, y: 311.0 },
  { id: "minbya", my: "မင်းပြား", en: "Minbya", ja: "ミンブラ", x: 701.0, y: 372.0 },
  { id: "myebon", my: "မြေပုံ", en: "Myebon", ja: "ミェボン", x: 732.7, y: 453.0 },
  { id: "kyaukphyu", my: "ကျောက်ဖြူ", en: "Kyaukphyu", ja: "チャオピュー", x: 768.6, y: 615.7 },
  { id: "ramree", my: "ရမ်းဗြဲ", en: "Ramree", ja: "ヤンビェ", x: 846.2, y: 703.0 },
  { id: "manaung", my: "မာန်အောင်", en: "Manaung", ja: "マナウン", x: 802.4, y: 773.0 },
  { id: "ann", my: "အမ်း", en: "Ann", ja: "アン", x: 891.0, y: 518.1 },
  { id: "taungup", my: "တောင်ကုတ်", en: "Taungup", ja: "タウンゴップ", x: 937.7, y: 766.1 },
  { id: "thandwe", my: "သံတွဲ", en: "Thandwe", ja: "タンドゥエ", x: 970.5, y: 866.1 },
  { id: "gwa", my: "ဂွ", en: "Gwa", ja: "グワ", x: 1023.5, y: 1091.5 },
];

export const CATS = [
  { id: "pagoda", my: "ဘုရား", en: "Pagodas", ja: "パゴダ", scope: "town" },
  { id: "sea", my: "ပင်လယ်", en: "Sea", ja: "海", scope: "town" },
  { id: "waterfall", my: "ရေတံခွန်", en: "Waterfalls", ja: "滝", scope: "town" },
  { id: "other", my: "အခြားနေရာများ", en: "Other places", ja: "その他の名所", scope: "town" },
  { id: "food", my: "အစားအစာ", en: "Food", ja: "食べ物", scope: "state" },
  { id: "dress", my: "ရိုးရာဝတ်စုံ", en: "Dress", ja: "伝統衣装", scope: "state" },
];

export const SPOTS = [
  {
    id: "shittaung", category: "pagoda", town: "mraukU",
    name: { my: "ရှိတ်သောင်ဘုရား", en: "Shittaung Pagoda", ja: "シットゥタウン寺院" },
    why: { my: "ကျောက်လမ်းကြားထဲ လမ်းလျှောက်ရင် ရာစုနှစ်များကို ဖြတ်သွားရသလို ခံစားရသည်။", en: "", ja: "石の回廊を歩くと、何百年もの時間をそのまま通り抜けるよう。" },
    body: { my: "မြောက်ဦးရှေးမြို့တော်ရှိ ရှိတ်သောင်ဘုရားကို ၁၆ ရာစုတွင် တည်ထားခဲ့သည်။ ဘုရားပတ်လည်ရှိ ကျောက်လမ်းကြားများတွင် ရုပ်ပွားတော်များနှင့် ကမ္ဗည်းစာများကို တွေ့နိုင်သည်။", en: "", ja: "ミャウー旧都のシットゥタウン寺院は16世紀に築かれた。石の回廊には多数の仏像と碑文が残る。" },
    note: { my: "မနက်ပိုင်း အလင်းရောင် အကောင်းဆုံး။", en: "", ja: "朝の光がいちばんきれい。" },
    photo: "images/pagoda-shittaung-01.jpg", credit: "",
  },
  {
    id: "koethaung", category: "pagoda", town: "mraukU",
    name: { my: "ကိုးသောင်းဘုရား", en: "Koe Thaung Pagoda", ja: "コータウン寺院" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/pagoda-koethaung-01.jpg", credit: "Go-Myanmar / Wikimedia Commons (CC BY-SA 3.0)",
  },
  {
    id: "andaw", category: "pagoda", town: "mraukU",
    name: { my: "အံတော်ဘုရား", en: "Andaw Pagoda", ja: "アンドー寺院" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/pagoda-andaw-01.jpg", credit: "Go-Myanmar / Wikimedia Commons (CC BY-SA 3.0)",
  },
  {
    id: "mahamuni", category: "pagoda", town: "kyauktaw",
    name: { my: "မဟာမုနိဘုရား", en: "Mahamuni Pagoda", ja: "マハムニ寺院" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/pagoda-mahamuni-01.jpg", credit: "",
  },
  {
    id: "ngapali", category: "sea", town: "thandwe",
    name: { my: "ငပလီကမ်းခြေ", en: "Ngapali Beach", ja: "ンガパリ海岸" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/sea-ngapali-01.jpg", credit: "Stefan Fussan (DerFussi) / Wikimedia Commons (CC BY-SA 2.0)",
  },
  {
    id: "kanthaya", category: "sea", town: "gwa",
    name: { my: "ကန်သာယာကမ်းခြေ", en: "Kanthaya Beach", ja: "カンタヤ海岸" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/sea-kanthaya-01.jpg", credit: "",
  },
  {
    id: "mraukU-museum", category: "other", town: "mraukU",
    name: { my: "မြောက်ဦး ရှေးဟောင်းသုတေသနပြတိုက်", en: "Mrauk U Archaeological Museum", ja: "ミャウー考古博物館" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/other-mraukumuseum-01.jpg", credit: "",
  },
  {
    id: "sittwe-point", category: "other", town: "sittwe",
    name: { my: "စစ်တွေ ဗျူးပွိုင့်", en: "Sittwe View Point", ja: "シットウェ・ビューポイント" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/other-sittweviewpoint-01.jpg", credit: "",
  },
  {
    id: "montdi", category: "food", town: "sittwe",
    name: { my: "ရခိုင်မုန့်တီ", en: "Rakhine mont di", ja: "ラカイン・モンティ" },
    why: { my: "မနက်စာအဖြစ် ဆိုင်ငယ်များတွင် စားရသည်။", en: "", ja: "朝、小さな店で食べるのがいちばん。" },
    body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/food-montdi-01.jpg", credit: "",
  },
  {
    id: "ngapiyay", category: "food", town: "sittwe",
    name: { my: "ငါးပိရည်", en: "Ngapi yay", ja: "ンガピー・イェ（魚醤のスープ）" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/food-ngapiyay-01.jpg", credit: "",
  },
  {
    id: "seafood", category: "food", town: "thandwe",
    name: { my: "ပင်လယ်စာ ကင်", en: "Grilled seafood", ja: "海の焼きもの" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/food-seafood-01.jpg", credit: "",
  },
  {
    id: "longyi", category: "dress", town: "mraukU",
    name: { my: "ရခိုင်လုံချည်", en: "Rakhine longyi", ja: "ラカインのロンジー" },
    why: { my: "", en: "", ja: "" }, body: { my: "", en: "", ja: "" }, note: { my: "", en: "", ja: "" },
    photo: "images/dress-longyi-01.jpg", credit: "",
  },
];

export const UI = {
  my: {
    brand: "ရခိုင်ပြည်နယ်", seeTitle: "ကြည့်ရမည့် နေရာများ", seeLead: "ဘုရားဟောင်းများ၊ ကမ်းခြေများ၊ ရေတံခွန်များနှင့် အခြားနေရာများ။", seeDesc: "ဘုရား၊ ပင်လယ်၊ ရေတံခွန်နှင့် အခြားနေရာများကို ဤနေရာတွင် စုစည်းထားသည်။", tasteTitle: "အစားအစာ", tasteLead: "ရခိုင်တစ်ပြည်နယ်လုံးတွင် စားရသော အစားအစာများ။", tasteDesc: "မုန့်တီမှ ငါးပိရည်အထိ။", dressTitle: "ရိုးရာဝတ်စုံ", dressLead: "ရခိုင်ရိုးရာ ဝတ်စုံနှင့် လုံချည်များ။", dressDesc: "ရခိုင်လုံချည်နှင့် ရိုးရာဝတ်စုံများ။", more: "ဆက်ကြည့်ရန် →",
    catch: "ကျောက်ဘုရားဟောင်းများနှင့် ကမ်းခြေရှည်များ၏ ပြည်နယ်",
    kicker: "Stone, sea, and a thousand years",
    statement: "ကျောက်ဆောင်ပေါ်က ဘုရားဟောင်းများ၊ ရှည်လျားသော ကမ်းခြေများ၊ တောကြားက ရေတံခွန်များ။ ရခိုင်ပြည်နယ်၏ လှပသောနေရာများကို တစ်နေရာစီ လိုက်ကြည့်ကြရအောင်။",
    mapTitle: "မြေပုံမှ မြို့နယ်ကို ရွေးပါ", mapHint: "မြေပုံပေါ်ရှိ မြို့နယ်ကို နှိပ်ပါ။ သို့မဟုတ် ဘေးရှိ စာရင်းမှ ရွေးပါ။",
    mapAlt: "ရခိုင်ပြည်နယ် မြေပုံ", notReady: "ပြင်ဆင်နေသည်", note: "မှတ်ချက်", back: "မြေပုံသို့ ပြန်သွားရန်",
    pagodaIntro: "ရခိုင်ပြည်နယ်တွင် ဘုရားဟောင်းများ အများဆုံး တွေ့နိုင်သည်။ အလှဆုံးနေရာများကို ဤနေရာတွင် အဓိကထား ပြသထားသည်။",
    seaIntro: "ကမ်းခြေတစ်လျှောက် နေဝင်ချိန်သည် ရခိုင်၏ အလှဆုံး အချိန်ဖြစ်သည်။",
    footer: "ဤစာမျက်နှာ၏ စာများနှင့် ဓာတ်ပုံများကို စာရေးသူကိုယ်တိုင် ရေးသား၊ ရိုက်ကူးထားသည်။",
    all: "အားလုံး", capital: "မြို့တော်", area: "အကျယ်အဝန်း", districts: "ခရိုင်", townships: "မြို့နယ်",
  },
  en: {
    brand: "Rakhine State", seeTitle: "Places to see", seeLead: "Old pagodas, long beaches, waterfalls and other places worth the trip.", seeDesc: "Pagodas, the sea, waterfalls and other places, gathered here.", tasteTitle: "Food", tasteLead: "What people eat across Rakhine.", tasteDesc: "From mont di to ngapi yay.", dressTitle: "Traditional dress", dressLead: "The longyi and the clothes people wear in Rakhine.", dressDesc: "The Rakhine longyi and traditional dress.", more: "Explore →",
    catch: "A land of stone pagodas and long, quiet shores",
    kicker: "Stone, sea, and a thousand years",
    statement: "Old pagodas on sandstone ridges, beaches that run for miles, waterfalls hidden in the hills. Let us walk through the beautiful places of Rakhine, one at a time.",
    mapTitle: "Choose a township on the map", mapHint: "Tap a township on the map, or pick one from the list.",
    mapAlt: "Map of Rakhine State", notReady: "Coming soon", note: "NOTE", back: "Back to the map",
    pagodaIntro: "Rakhine is, above all, a land of old pagodas. The most beautiful of them come first.",
    seaIntro: "Along this coast, the hour before sunset is the most beautiful hour in Rakhine.",
    footer: "Text and photographs on this page are by the author.",
    all: "All", capital: "Capital", area: "Area", districts: "Districts", townships: "Townships",
  },
  ja: {
    brand: "ラカイン州", seeTitle: "見る — 仏塔・海・滝・名所", seeLead: "古い仏塔、長い海岸、森の滝。州の見どころをまとめました。", seeDesc: "パゴダ・海・滝・その他の名所をまとめて。", tasteTitle: "味わう — 食べ物", tasteLead: "州のどこでも食べられるもの。", tasteDesc: "モンティからンガピー・イェまで。", dressTitle: "装う — 伝統衣装", dressLead: "ラカインのロンジーと伝統の装い。", dressDesc: "ラカインのロンジーと伝統衣装。", more: "見てみる →",
    catch: "石の仏塔と、長い海岸の州",
    kicker: "石と海と、千年の時間",
    statement: "砂岩の丘に立つ古い仏塔、どこまでも続く海岸、森のおくの滝。ラカイン州の美しい場所を、ひとつずつ見てまわりませんか。",
    mapTitle: "地図から町を選ぶ", mapHint: "地図の町を押すか、右の一覧から選べます。",
    mapAlt: "ラカイン州の地図", notReady: "準備中", note: "メモ", back: "地図に戻る",
    pagodaIntro: "ラカイン州は、なによりも古い仏塔の多い土地です。いちばん美しいものから紹介します。",
    seaIntro: "海岸沿いの、日が落ちる前のひととき。ラカインでいちばん美しい時間です。",
    footer: "このページの文章と写真は本人によるものです。",
    all: "すべて", capital: "州都", area: "面積", districts: "郡", townships: "町",
  },
};

export const STATE_INFO = { capital: { my: "စစ်တွေ", en: "Sittwe", ja: "シットウェ" }, area: "36,778 km²", districts: 7, townships: 17 };

export function pick(obj, lang) {
  if (!obj) return "";
  return (obj[lang] && obj[lang].trim()) || obj.my || "";
}

export function townById(id) {
  return TOWNS.find((t) => t.id === id) || null;
}

export function catById(id) {
  return CATS.find((c) => c.id === id) || null;
}
