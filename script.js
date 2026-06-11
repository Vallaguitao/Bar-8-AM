const STORAGE_KEY = "bar8am-language";

// Simple text content sanitizer to prevent XSS
function sanitizeText(text) {
  if (typeof text !== 'string') return text;
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const site = {
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar%208AM%20Omiya%20Saitama",
  instagramUrl: "#",
  categories: ["cocktails", "mocktails", "wines", "beers"],
  bestSellers: ["margarita", "virginMojito", "cabernetSauvignon", "craftIpa"],
  filters: ["all", "signature", "light", "strong", "sweet", "bitter", "fruity", "nonalcoholic", "sparkling", "red", "white", "craft"],
};

const i18n = {
  ja: {
    meta: {
      homeTitle: "Bar 8 AM - 大宮のバイリンガルメニュー",
      homeDescription: "大宮の Bar 8 AM。カクテル、モクテル、ワイン、ビールを日本語と英語で見られるオンラインメニューです。",
      aboutTitle: "Bar 8 AM - 店舗情報",
      aboutDescription: "Bar 8 AM の店舗情報、アクセス、営業時間、オーナー紹介。",
      cocktailsTitle: "Bar 8 AM - カクテル",
      cocktailsDescription: "Bar 8 AM のカクテルメニュー。価格、味わい、材料、アルコール目安を掲載。",
      mocktailsTitle: "Bar 8 AM - モクテル",
      mocktailsDescription: "Bar 8 AM のノンアルコールメニュー。価格、味わい、材料を掲載。",
      winesTitle: "Bar 8 AM - ワイン",
      winesDescription: "Bar 8 AM のワインメニュー。グラス、ボトル、味わいの目安を掲載。",
      beersTitle: "Bar 8 AM - ビール",
      beersDescription: "Bar 8 AM のビールメニュー。クラフトビール、ラガー、黒ビールなどを掲載。",
    },
    nav: {
      home: "ホーム",
      cocktails: "カクテル",
      mocktails: "モクテル",
      wines: "ワイン",
      beers: "ビール",
      about: "店舗情報",
    },
    home: {
      eyebrow: "大宮駅東口から徒歩圏内",
      title: "Bar 8 AM",
      intro: "仕事帰りの一杯から、友人との夜まで。定番カクテル、ノンアルコール、ワイン、ビールを日本語と英語で見られるオンラインメニューです。",
      ctaMenu: "メニューを見る",
      ctaAccess: "アクセス",
      statusLabel: "本日の案内",
      statusValue: "18:00-翌 2:00 / 不定休",
      addressLabel: "アクセス",
      addressValue: "大宮駅東口エリア",
      languageNote: "JP / EN 切替対応",
      recommendations: "おすすめ",
      recommendationsIntro: "初めての方にも選びやすい人気メニューです。",
      quickInfoTitle: "ご来店前に",
      quickInfoHours: "営業時間：18:00-翌 2:00（不定休）",
      quickInfoAddress: "場所：大宮駅東口エリア",
      quickInfoContact: "予約・最新情報は Instagram をご確認ください。",
      recommendationsEyebrow: "人気メニュー",
    },
    menu: {
      searchLabel: "メニュー検索",
      searchPlaceholder: "名前、材料、味わいで探す",
      noResults: "条件に合うメニューがありません。",
      priceLabel: "価格",
      sizeLabel: "サイズ",
      abvLabel: "ABV",
      ingredientsLabel: "材料",
      recommendationLabel: "おすすめ",
      bestSeller: "人気",
      staffPick: "スタッフ推し",
      taxNote: "価格は目安です。正式な価格は店舗でご確認ください。",
    },
    categories: {
      cocktails: {
        title: "カクテル",
        subtitle: "定番から華やかな一杯まで。味わいタグで気分に合うものを探せます。",
      },
      mocktails: {
        title: "モクテル",
        subtitle: "お酒が苦手な方や休肝日にも楽しめる、香り豊かなノンアルコールドリンク。",
      },
      wines: {
        title: "ワイン",
        subtitle: "軽めの白からしっかりした赤、乾杯用のスパークリングまで。",
      },
      beers: {
        title: "ビール",
        subtitle: "軽快なラガーから香ばしい黒ビールまで、食前にも二軒目にも合うラインアップ。",
      },
    },
    filters: {
      all: "すべて",
      signature: "おすすめ",
      light: "軽め",
      strong: "しっかり",
      sweet: "甘め",
      bitter: "ビター",
      fruity: "フルーティ",
      nonalcoholic: "ノンアル",
      sparkling: "泡",
      red: "赤",
      white: "白",
      craft: "クラフト",
    },
    about: {
      title: "店舗情報",
      introTitle: "Bar 8 AM へようこそ",
      introBody: "Bar 8 AM は、大宮で落ち着いた時間を楽しめるバーです。カクテル、モクテル、ワイン、ビールを、常連のお客様にも初めてのお客様にも選びやすくご案内します。",
      accessTitle: "アクセス",
      access1: "大宮駅東口を出ます",
      access2: "駅前通りを目印に徒歩約 5 分進みます",
      access3: "ローソン付近を左折します",
      access4: "Hotel Omiya 付近、右手側の店舗をお探しください",
      contactTitle: "基本情報",
      hoursLabel: "営業時間",
      hoursValue: "18:00-翌 2:00（不定休）",
      addressLabel: "住所",
      addressValue: "大宮駅東口エリア / Google Maps で Bar 8 AM を検索",
      socialLabel: "最新情報",
      socialValue: "Instagram で営業日・イベント情報をご確認ください",
      ownerTitle: "オーナー紹介",
      ownerEyebrow: "ストーリー",
      ownerBody1: "オーナーの Akira は、15 年以上ミクソロジーに携わってきました。東京のカクテルバーでの経験を活かし、大宮でクラフトドリンクの魅力を届けています。",
      ownerBody2: "一杯のドリンクには物語があります。お客様に一口ごとに新しい体験を楽しんでいただきたいと考えています。",
      mapsCta: "Google Maps を開く",
      instagramCta: "Instagram",
    },
    footer: {
      copyright: "© 2026 Bar 8 AM. All rights reserved.",
      note: "大宮のバー / 日本語・英語メニュー対応",
    },
    language: {
      toggle: "EN",
      label: "Switch to English",
    },
    images: {
      background: "Bar 8 AM の店内背景",
      logo: "Bar 8 AM ロゴ",
      map: "Bar 8 AM 周辺地図",
      owner: "Bar 8 AM オーナー",
    },
  },
  en: {
    meta: {
      homeTitle: "Bar 8 AM - Bilingual Bar Menu in Omiya",
      homeDescription: "Bar 8 AM in Omiya. A bilingual online menu for cocktails, mocktails, wines, and beers.",
      aboutTitle: "Bar 8 AM - About and Access",
      aboutDescription: "About Bar 8 AM, access, opening hours, and owner story.",
      cocktailsTitle: "Bar 8 AM - Cocktails",
      cocktailsDescription: "Bar 8 AM cocktail menu with price, flavor, ingredients, and alcohol guide.",
      mocktailsTitle: "Bar 8 AM - Mocktails",
      mocktailsDescription: "Bar 8 AM non-alcoholic menu with price, flavor, and ingredients.",
      winesTitle: "Bar 8 AM - Wines",
      winesDescription: "Bar 8 AM wine menu with glass, bottle, and flavor guide.",
      beersTitle: "Bar 8 AM - Beers",
      beersDescription: "Bar 8 AM beer menu with craft beer, lager, stout, and more.",
    },
    nav: {
      home: "Home",
      cocktails: "Cocktails",
      mocktails: "Mocktails",
      wines: "Wines",
      beers: "Beers",
      about: "About",
    },
    home: {
      eyebrow: "Near Omiya Station East Exit",
      title: "Bar 8 AM",
      intro: "From an after-work drink to a night out with friends, browse our cocktails, non-alcoholic drinks, wines, and beers in Japanese or English.",
      ctaMenu: "View Menu",
      ctaAccess: "Access",
      statusLabel: "Today",
      statusValue: "6:00 PM-2:00 AM / Irregular holidays",
      addressLabel: "Access",
      addressValue: "Omiya Station East Exit area",
      languageNote: "JP / EN supported",
      recommendations: "Recommendations",
      recommendationsIntro: "Popular picks that are easy to choose on your first visit.",
      quickInfoTitle: "Before You Visit",
      quickInfoHours: "Hours: 6:00 PM-2:00 AM (irregular holidays)",
      quickInfoAddress: "Area: Omiya Station East Exit",
      quickInfoContact: "For reservations and latest updates, check Instagram.",
      recommendationsEyebrow: "Popular Picks",
    },
    menu: {
      searchLabel: "Search menu",
      searchPlaceholder: "Search by name, ingredient, or flavor",
      noResults: "No menu items match your filters.",
      priceLabel: "Price",
      sizeLabel: "Size",
      abvLabel: "ABV",
      ingredientsLabel: "Ingredients",
      recommendationLabel: "Recommended for",
      bestSeller: "Popular",
      staffPick: "Staff pick",
      taxNote: "Prices are guide prices. Please confirm final pricing at the bar.",
    },
    categories: {
      cocktails: {
        title: "Cocktails",
        subtitle: "From classics to bright, expressive drinks. Use flavor tags to find what fits your mood.",
      },
      mocktails: {
        title: "Mocktails",
        subtitle: "Aromatic non-alcoholic drinks for guests who want flavor without spirits.",
      },
      wines: {
        title: "Wines",
        subtitle: "Light whites, fuller reds, and sparkling choices for a toast.",
      },
      beers: {
        title: "Beers",
        subtitle: "From crisp lagers to roasted dark beers, suited for a first drink or a second stop.",
      },
    },
    filters: {
      all: "All",
      signature: "Recommended",
      light: "Light",
      strong: "Strong",
      sweet: "Sweet",
      bitter: "Bitter",
      fruity: "Fruity",
      nonalcoholic: "Non-alcoholic",
      sparkling: "Sparkling",
      red: "Red",
      white: "White",
      craft: "Craft",
    },
    about: {
      title: "About",
      introTitle: "Welcome to Bar 8 AM",
      introBody: "Bar 8 AM is a relaxed bar in Omiya. We make cocktails, mocktails, wines, and beers easy to browse for regulars and first-time guests.",
      accessTitle: "Access",
      access1: "Leave from Omiya Station East Exit",
      access2: "Walk along the main station street for about 5 minutes",
      access3: "Turn left near the Lawson convenience store",
      access4: "Look for us on the right near Hotel Omiya",
      contactTitle: "Details",
      hoursLabel: "Hours",
      hoursValue: "6:00 PM-2:00 AM (irregular holidays)",
      addressLabel: "Address",
      addressValue: "Omiya Station East Exit area / Search Bar 8 AM on Google Maps",
      socialLabel: "Latest updates",
      socialValue: "Check Instagram for business days and event updates",
      ownerTitle: "Meet the Owner",
      ownerEyebrow: "Story",
      ownerBody1: "Owner Akira has worked in mixology for more than 15 years. After training in Tokyo cocktail bars, he opened Bar 8 AM to share craft drinks with the Omiya community.",
      ownerBody2: "Every drink tells a story. We want guests to discover something new with every sip.",
      mapsCta: "Open Google Maps",
      instagramCta: "Instagram",
    },
    footer: {
      copyright: "© 2026 Bar 8 AM. All rights reserved.",
      note: "Omiya bar / Japanese and English menu",
    },
    language: {
      toggle: "JP",
      label: "日本語に切り替え",
    },
    images: {
      background: "Bar 8 AM bar background",
      logo: "Bar 8 AM logo",
      map: "Map near Bar 8 AM",
      owner: "Owner of Bar 8 AM",
    },
  },
};

// Drinks data loaded from external file for better caching
const drinks = [
  {
    id: "margarita",
    category: "cocktails",
    image: "images/Margarita.jpg",
    price: "¥1,100",
    size: { ja: "グラス", en: "Glass" },
    abv: "18%",
    tags: ["signature", "fruity", "strong"],
    badge: "bestSeller",
    name: { ja: "マルガリータ", en: "Margarita" },
    description: {
      ja: "テキーラ、ライム、トリプルセックの爽やかな定番。塩のアクセントでキレよく楽しめます。",
      en: "A refreshing tequila classic with lime and triple sec, sharpened by a salted rim.",
    },
    ingredients: { ja: "テキーラ、ライム、トリプルセック、塩", en: "Tequila, lime, triple sec, salt" },
    recommendation: { ja: "爽やかでしっかりした一杯が好きな方", en: "Guests who like bright, crisp, stronger drinks" },
  },
  {
    id: "oldFashioned",
    category: "cocktails",
    image: "images/Old_Fashioned.jpg",
    price: "¥1,200",
    size: { ja: "ロック", en: "Rocks" },
    abv: "32%",
    tags: ["strong", "bitter", "signature"],
    badge: "staffPick",
    name: { ja: "オールドファッションド", en: "Old Fashioned" },
    description: {
      ja: "ウイスキーの香りを引き立てる、甘さ控えめのクラシックカクテル。",
      en: "A spirit-forward classic that keeps the whiskey aroma at the center.",
    },
    ingredients: { ja: "バーボン、ビターズ、シュガー、オレンジピール", en: "Bourbon, bitters, sugar, orange peel" },
    recommendation: { ja: "ウイスキーをゆっくり楽しみたい方", en: "Whiskey drinkers who want a slow sipper" },
  },
  {
    id: "mojito",
    category: "cocktails",
    image: "images/Mojito.jpg",
    price: "¥1,000",
    size: { ja: "ロング", en: "Long glass" },
    abv: "13%",
    tags: ["light", "fruity"],
    name: { ja: "モヒート", en: "Mojito" },
    description: {
      ja: "ミントとライムの香りが広がる、軽快で飲みやすいロングカクテル。",
      en: "Fresh mint and lime make this long cocktail crisp and easy to enjoy.",
    },
    ingredients: { ja: "ホワイトラム、ミント、ライム、ソーダ", en: "White rum, mint, lime, soda water" },
    recommendation: { ja: "すっきり軽めの一杯を探している方", en: "Guests looking for something light and refreshing" },
  },
  {
    id: "martini",
    category: "cocktails",
    image: "images/Martini.jpg",
    price: "¥1,200",
    size: { ja: "カクテルグラス", en: "Cocktail glass" },
    abv: "30%",
    tags: ["strong", "bitter"],
    name: { ja: "マティーニ", en: "Martini" },
    description: {
      ja: "ドライで洗練された味わい。ジンまたはウォッカでお作りします。",
      en: "Dry, clean, and elegant. Made with gin or vodka.",
    },
    ingredients: { ja: "ジンまたはウォッカ、ドライベルモット、オリーブ", en: "Gin or vodka, dry vermouth, olive" },
    recommendation: { ja: "辛口の定番を楽しみたい方", en: "Guests who prefer dry classics" },
  },
  {
    id: "cosmopolitan",
    category: "cocktails",
    image: "images/Cosmopolitan.jpg",
    price: "¥1,100",
    size: { ja: "カクテルグラス", en: "Cocktail glass" },
    abv: "18%",
    tags: ["fruity", "sweet"],
    name: { ja: "コスモポリタン", en: "Cosmopolitan" },
    description: {
      ja: "クランベリーとライムの酸味が映える、華やかなピンクカクテル。",
      en: "A bright pink cocktail with cranberry and lime acidity.",
    },
    ingredients: { ja: "ウォッカ、トリプルセック、クランベリー、ライム", en: "Vodka, triple sec, cranberry, lime" },
    recommendation: { ja: "フルーティで写真映えする一杯が好きな方", en: "Guests who like fruity, photogenic drinks" },
  },
  {
    id: "whiskeySour",
    category: "cocktails",
    image: "images/Whiskey_Sour.jpg",
    price: "¥1,100",
    size: { ja: "ロック", en: "Rocks" },
    abv: "20%",
    tags: ["fruity", "strong"],
    name: { ja: "ウイスキーサワー", en: "Whiskey Sour" },
    description: {
      ja: "レモンの酸味とウイスキーのコクを、なめらかな口当たりで。",
      en: "Whiskey depth with lemon brightness and a silky texture.",
    },
    ingredients: { ja: "ウイスキー、レモン、シュガー、卵白", en: "Whiskey, lemon, sugar, egg white" },
    recommendation: { ja: "酸味とコクのバランスを楽しみたい方", en: "Guests who like a balance of citrus and depth" },
  },
  {
    id: "pinaColada",
    category: "cocktails",
    image: "images/Pina_Colada.jpg",
    price: "¥1,100",
    size: { ja: "ロング", en: "Long glass" },
    abv: "12%",
    tags: ["sweet", "fruity"],
    name: { ja: "ピニャコラーダ", en: "Piña Colada" },
    description: {
      ja: "パイナップルとココナッツの甘く南国らしい味わい。",
      en: "A tropical blend of pineapple and coconut with a soft sweetness.",
    },
    ingredients: { ja: "ラム、ココナッツクリーム、パイナップル", en: "Rum, coconut cream, pineapple juice" },
    recommendation: { ja: "甘くクリーミーなカクテルが好きな方", en: "Guests who enjoy sweet, creamy cocktails" },
  },
  {
    id: "maiTai",
    category: "cocktails",
    image: "images/Mai_Tai.jpg",
    price: "¥1,200",
    size: { ja: "ロック", en: "Rocks" },
    abv: "22%",
    tags: ["fruity", "strong"],
    name: { ja: "マイタイ", en: "Mai Tai" },
    description: {
      ja: "ラムの奥行きと柑橘の香りが重なる、トロピカルな一杯。",
      en: "Layered rum and citrus aromas in a tropical classic.",
    },
    ingredients: { ja: "ラム、ライム、オルジェ、オレンジキュラソー", en: "Rum, lime, orgeat, orange curaçao" },
    recommendation: { ja: "ラムベースの華やかな味が好きな方", en: "Guests who like layered rum cocktails" },
  },
  {
    id: "negroni",
    category: "cocktails",
    image: "images/Negroni.jpg",
    price: "¥1,100",
    size: { ja: "ロック", en: "Rocks" },
    abv: "24%",
    tags: ["bitter", "strong"],
    name: { ja: "ネグローニ", en: "Negroni" },
    description: {
      ja: "ジン、カンパリ、ベルモットが作る、苦味の美しい定番。",
      en: "A beautifully bitter classic built from gin, Campari, and sweet vermouth.",
    },
    ingredients: { ja: "ジン、カンパリ、スイートベルモット", en: "Gin, Campari, sweet vermouth" },
    recommendation: { ja: "ビターで大人っぽい味わいが好きな方", en: "Guests who like bitter, grown-up flavors" },
  },
  {
    id: "virginMojito",
    category: "mocktails",
    image: "images/Virgin_Mojito.jpg",
    price: "¥800",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "light", "fruity", "signature"],
    badge: "bestSeller",
    name: { ja: "バージンモヒート", en: "Virgin Mojito" },
    description: {
      ja: "ミントとライムを爽やかに楽しめる、人気のノンアルコールドリンク。",
      en: "A popular non-alcoholic drink with refreshing mint and lime.",
    },
    ingredients: { ja: "ミント、ライム、シュガー、ソーダ", en: "Mint, lime, sugar, soda water" },
    recommendation: { ja: "お酒なしでもバー気分を楽しみたい方", en: "Guests who want the bar experience without alcohol" },
  },
  {
    id: "shirleyTemple",
    category: "mocktails",
    image: "images/Shirley_Temple.jpg",
    price: "¥800",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "sweet"],
    name: { ja: "シャーリーテンプル", en: "Shirley Temple" },
    description: {
      ja: "ジンジャーエールとグレナデンの甘く親しみやすい一杯。",
      en: "A sweet, friendly mix of ginger ale and grenadine.",
    },
    ingredients: { ja: "ジンジャーエール、グレナデン、チェリー", en: "Ginger ale, grenadine, cherry" },
    recommendation: { ja: "甘めで飲みやすいノンアルを探している方", en: "Guests looking for an easy sweet mocktail" },
  },
  {
    id: "nojito",
    category: "mocktails",
    image: "images/Nojito.jpg",
    price: "¥800",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "light", "fruity"],
    name: { ja: "ノヒート", en: "Nojito" },
    description: {
      ja: "モヒート風の香りに、りんごとジンジャーの軽い刺激を合わせました。",
      en: "A mojito-style mocktail with apple and ginger brightness.",
    },
    ingredients: { ja: "ライム、ミント、りんご、ジンジャービア", en: "Lime, mint, apple juice, ginger beer" },
    recommendation: { ja: "すっきりした香りを楽しみたい方", en: "Guests who like crisp herbal flavors" },
  },
  {
    id: "citrusFizz",
    category: "mocktails",
    image: "images/Citruz_Fizz.jpg",
    price: "¥800",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "fruity", "sparkling"],
    name: { ja: "シトラスフィズ", en: "Citrus Fizz" },
    description: {
      ja: "柑橘の酸味と泡が心地よい、軽やかなノンアルコールドリンク。",
      en: "Citrus acidity and bubbles make this mocktail clean and lively.",
    },
    ingredients: { ja: "オレンジ、グレープフルーツ、レモン、炭酸水", en: "Orange, grapefruit, lemon, sparkling water" },
    recommendation: { ja: "甘すぎないフルーツ系が好きな方", en: "Guests who prefer fruit without too much sweetness" },
  },
  {
    id: "berrySmash",
    category: "mocktails",
    image: "images/Berry_Smash.jpg",
    price: "¥850",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "sweet", "fruity"],
    name: { ja: "ベリースマッシュ", en: "Berry Smash" },
    description: {
      ja: "ベリーの甘酸っぱさにバジルの香りを重ねた、華やかな一杯。",
      en: "Mixed berries with basil aroma for a bright sweet-tart drink.",
    },
    ingredients: { ja: "ミックスベリー、バジル、レモン、ハニー", en: "Mixed berries, basil, lemon, honey" },
    recommendation: { ja: "果実感のある甘酸っぱさが好きな方", en: "Guests who like berry-forward mocktails" },
  },
  {
    id: "sunsetCooler",
    category: "mocktails",
    image: "images/Sunset_Cooler.jpg",
    price: "¥850",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "sweet", "fruity"],
    name: { ja: "サンセットクーラー", en: "Sunset Cooler" },
    description: {
      ja: "オレンジとパイナップルの明るい甘みで、見た目も楽しい一杯。",
      en: "Orange and pineapple sweetness in a colorful sunset-style drink.",
    },
    ingredients: { ja: "オレンジ、グレナデン、パイナップル、ライム", en: "Orange, grenadine, pineapple, lime" },
    recommendation: { ja: "華やかで飲みやすいノンアルが欲しい方", en: "Guests who want a bright, easy-drinking mocktail" },
  },
  {
    id: "virginPinaColada",
    category: "mocktails",
    image: "images/Virgin_Pina_Colada.webp",
    price: "¥850",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "sweet", "fruity"],
    name: { ja: "バージンピニャコラーダ", en: "Virgin Piña Colada" },
    description: {
      ja: "ココナッツとパイナップルの濃厚な甘みをノンアルで。",
      en: "Rich coconut and pineapple sweetness, served alcohol-free.",
    },
    ingredients: { ja: "ココナッツクリーム、パイナップル、クリーム", en: "Coconut cream, pineapple juice, cream" },
    recommendation: { ja: "クリーミーなデザート系が好きな方", en: "Guests who enjoy creamy dessert-style drinks" },
  },
  {
    id: "appleSpritzer",
    category: "mocktails",
    image: "images/Apple_Spritzer.jpg",
    price: "¥800",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "light", "sparkling"],
    name: { ja: "アップルスプリッツァー", en: "Apple Spritzer" },
    description: {
      ja: "りんごの香りと炭酸の軽さに、シナモンを少し効かせました。",
      en: "Apple aroma, gentle bubbles, and a touch of cinnamon.",
    },
    ingredients: { ja: "アップルサイダー、炭酸水、シナモン", en: "Apple cider, sparkling water, cinnamon" },
    recommendation: { ja: "軽く香りのある一杯を飲みたい方", en: "Guests who want something light and aromatic" },
  },
  {
    id: "tropicalPunch",
    category: "mocktails",
    image: "images/Tropical_Punch.webp",
    price: "¥850",
    size: { ja: "ロング", en: "Long glass" },
    abv: "0%",
    tags: ["nonalcoholic", "sweet", "fruity"],
    name: { ja: "トロピカルパンチ", en: "Tropical Punch" },
    description: {
      ja: "マンゴー、パッション、グアバの南国感をまとめたフルーツパンチ。",
      en: "Mango, passion fruit, and guava in a tropical fruit punch.",
    },
    ingredients: { ja: "マンゴー、パッションフルーツ、グアバ、ライム", en: "Mango, passion fruit, guava, lime" },
    recommendation: { ja: "果物の甘さをしっかり楽しみたい方", en: "Guests who want full tropical fruit flavor" },
  },
  {
    id: "cabernetSauvignon",
    category: "wines",
    image: "images/Cabernet_Sauvignon.jpg",
    price: "¥950 / ¥5,800",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "14%",
    tags: ["red", "strong", "signature"],
    badge: "bestSeller",
    name: { ja: "カベルネ・ソーヴィニヨン", en: "Cabernet Sauvignon" },
    description: {
      ja: "黒すぐりやオークのニュアンスを感じる、しっかりした赤ワイン。",
      en: "A full-bodied red with blackcurrant and subtle oak notes.",
    },
    ingredients: { ja: "赤ワイン", en: "Red wine" },
    recommendation: { ja: "濃いめの赤や食後の一杯が好きな方", en: "Guests who like richer reds or a later-night glass" },
  },
  {
    id: "merlot",
    category: "wines",
    image: "images/Merlot.jpg",
    price: "¥900 / ¥5,500",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "13.5%",
    tags: ["red", "fruity"],
    name: { ja: "メルロー", en: "Merlot" },
    description: {
      ja: "プラムやチェリーを思わせる、なめらかな赤ワイン。",
      en: "A smooth red with plum and cherry flavors.",
    },
    ingredients: { ja: "赤ワイン", en: "Red wine" },
    recommendation: { ja: "やわらかい赤ワインを飲みたい方", en: "Guests who prefer soft, approachable reds" },
  },
  {
    id: "pinotNoir",
    category: "wines",
    image: "images/Pinot_Noir.jpg",
    price: "¥950 / ¥5,800",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "13%",
    tags: ["red", "light", "fruity"],
    name: { ja: "ピノ・ノワール", en: "Pinot Noir" },
    description: {
      ja: "ラズベリーの香りと軽やかな土っぽさがある、繊細な赤。",
      en: "A lighter red with raspberry and gentle earthy notes.",
    },
    ingredients: { ja: "赤ワイン", en: "Red wine" },
    recommendation: { ja: "軽めの赤をゆっくり楽しみたい方", en: "Guests who enjoy lighter red wines" },
  },
  {
    id: "chardonnay",
    category: "wines",
    image: "images/Chardonnay.jpg",
    price: "¥900 / ¥5,500",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "13.5%",
    tags: ["white", "strong"],
    name: { ja: "シャルドネ", en: "Chardonnay" },
    description: {
      ja: "柑橘とバニラの余韻がある、ふくよかな白ワイン。",
      en: "A fuller white with citrus, vanilla, and a rounded finish.",
    },
    ingredients: { ja: "白ワイン", en: "White wine" },
    recommendation: { ja: "コクのある白ワインが好きな方", en: "Guests who like richer white wines" },
  },
  {
    id: "sauvignonBlanc",
    category: "wines",
    image: "images/Sauvignon_Blanc.jpg",
    price: "¥900 / ¥5,500",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "12.5%",
    tags: ["white", "light", "fruity"],
    name: { ja: "ソーヴィニヨン・ブラン", en: "Sauvignon Blanc" },
    description: {
      ja: "柑橘とハーブの香りがすっきり広がる白ワイン。",
      en: "A crisp white with citrus and herbal aromas.",
    },
    ingredients: { ja: "白ワイン", en: "White wine" },
    recommendation: { ja: "爽やかな白を飲みたい方", en: "Guests who want a crisp white" },
  },
  {
    id: "riesling",
    category: "wines",
    image: "images/Riesling.jpg",
    price: "¥900 / ¥5,500",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "11.5%",
    tags: ["white", "sweet", "fruity"],
    name: { ja: "リースリング", en: "Riesling" },
    description: {
      ja: "桃や蜂蜜のような香りを感じる、やや甘口の白。",
      en: "An aromatic white with peach and honey notes.",
    },
    ingredients: { ja: "白ワイン", en: "White wine" },
    recommendation: { ja: "香り高く少し甘い白が好きな方", en: "Guests who like aromatic, slightly sweet whites" },
  },
  {
    id: "rose",
    category: "wines",
    image: "images/Rose.jpg",
    price: "¥900 / ¥5,500",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "12.5%",
    tags: ["fruity", "light"],
    name: { ja: "ロゼ", en: "Rosé" },
    description: {
      ja: "いちごと柑橘を思わせる、軽やかなピンクワイン。",
      en: "A light pink wine with strawberry and citrus notes.",
    },
    ingredients: { ja: "ロゼワイン", en: "Rosé wine" },
    recommendation: { ja: "軽く華やかなワインを飲みたい方", en: "Guests who want something light and bright" },
  },
  {
    id: "prosecco",
    category: "wines",
    image: "images/Prosecco.jpg",
    price: "¥950 / ¥5,800",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "11%",
    tags: ["sparkling", "light", "fruity"],
    name: { ja: "プロセッコ", en: "Prosecco" },
    description: {
      ja: "りんごや洋梨の香りが軽やかな、乾杯に合うスパークリング。",
      en: "A lively sparkling wine with apple and pear notes.",
    },
    ingredients: { ja: "スパークリングワイン", en: "Sparkling wine" },
    recommendation: { ja: "乾杯や最初の一杯に", en: "A good first glass or toast" },
  },
  {
    id: "malbec",
    category: "wines",
    image: "images/Malbec.jpg",
    price: "¥950 / ¥5,800",
    size: { ja: "グラス / ボトル", en: "Glass / Bottle" },
    abv: "14%",
    tags: ["red", "strong"],
    name: { ja: "マルベック", en: "Malbec" },
    description: {
      ja: "濃い果実味とスモーキーな余韻がある、力強い赤。",
      en: "A rich red with dark fruit and a smoky finish.",
    },
    ingredients: { ja: "赤ワイン", en: "Red wine" },
    recommendation: { ja: "しっかり濃い赤を楽しみたい方", en: "Guests who like deep, bold reds" },
  },
  {
    id: "craftIpa",
    category: "beers",
    image: "images/Craft_Beer.jpg",
    price: "¥900",
    size: { ja: "パイント", en: "Pint" },
    abv: "6.5%",
    tags: ["craft", "bitter", "signature"],
    badge: "bestSeller",
    name: { ja: "クラフトIPA", en: "Craft IPA" },
    description: {
      ja: "柑橘と松の香り、心地よい苦味を楽しめるクラフトビール。",
      en: "A hoppy craft beer with citrus, pine, and balanced bitterness.",
    },
    ingredients: { ja: "クラフトビール", en: "Craft beer" },
    recommendation: { ja: "香りと苦味をしっかり楽しみたい方", en: "Guests who like aromatic, bitter beer" },
  },
  {
    id: "pilsner",
    category: "beers",
    image: "images/Pilsner.jpg",
    price: "¥800",
    size: { ja: "パイント", en: "Pint" },
    abv: "5%",
    tags: ["light", "bitter"],
    name: { ja: "ピルスナー", en: "Pilsner" },
    description: {
      ja: "花のようなホップ香とキレのある飲み口のラガー。",
      en: "A crisp lager with floral hop character.",
    },
    ingredients: { ja: "ラガービール", en: "Lager beer" },
    recommendation: { ja: "最初の一杯にすっきり飲みたい方", en: "A crisp first beer" },
  },
  {
    id: "stout",
    category: "beers",
    image: "images/Stout.jpg",
    price: "¥850",
    size: { ja: "パイント", en: "Pint" },
    abv: "6%",
    tags: ["strong", "bitter"],
    name: { ja: "スタウト", en: "Stout" },
    description: {
      ja: "コーヒーやチョコレートのような香ばしさがある黒ビール。",
      en: "A rich dark beer with coffee and chocolate notes.",
    },
    ingredients: { ja: "黒ビール", en: "Dark beer" },
    recommendation: { ja: "香ばしく濃いビールが好きな方", en: "Guests who like roasted dark beers" },
  },
  {
    id: "wheatBeer",
    category: "beers",
    image: "images/Wheat_Beer.jpg",
    price: "¥850",
    size: { ja: "パイント", en: "Pint" },
    abv: "5.2%",
    tags: ["light", "fruity"],
    name: { ja: "ウィートビール", en: "Wheat Beer" },
    description: {
      ja: "小麦のやわらかさと柑橘のニュアンスがある軽やかなビール。",
      en: "A light wheat beer with soft citrus notes.",
    },
    ingredients: { ja: "小麦ビール", en: "Wheat beer" },
    recommendation: { ja: "軽くフルーティなビールが好きな方", en: "Guests who like light, fruity beer" },
  },
  {
    id: "amberAle",
    category: "beers",
    image: "images/Amber_Ale.jpg",
    price: "¥850",
    size: { ja: "パイント", en: "Pint" },
    abv: "5.5%",
    tags: ["craft", "sweet"],
    name: { ja: "アンバーエール", en: "Amber Ale" },
    description: {
      ja: "カラメルの甘みと麦芽のバランスが心地よいエール。",
      en: "Balanced malt and caramel sweetness in an amber ale.",
    },
    ingredients: { ja: "エールビール", en: "Ale beer" },
    recommendation: { ja: "香ばしい甘みを楽しみたい方", en: "Guests who enjoy malty sweetness" },
  },
  {
    id: "lager",
    category: "beers",
    image: "images/Lager.jpg",
    price: "¥800",
    size: { ja: "パイント", en: "Pint" },
    abv: "5%",
    tags: ["light"],
    name: { ja: "ラガー", en: "Lager" },
    description: {
      ja: "すっきりした飲み口と穏やかな苦味の定番ビール。",
      en: "Clean and crisp with mild hop bitterness.",
    },
    ingredients: { ja: "ラガービール", en: "Lager beer" },
    recommendation: { ja: "迷ったときの定番を選びたい方", en: "A simple, reliable first choice" },
  },
  {
    id: "porter",
    category: "beers",
    image: "images/Porter.jpg",
    price: "¥850",
    size: { ja: "パイント", en: "Pint" },
    abv: "5.8%",
    tags: ["bitter", "strong"],
    name: { ja: "ポーター", en: "Porter" },
    description: {
      ja: "ロースト麦芽の香ばしさとやわらかなコクがある黒系エール。",
      en: "A dark ale with roasted malt flavor and a rounded body.",
    },
    ingredients: { ja: "黒系エール", en: "Dark ale" },
    recommendation: { ja: "黒ビールを飲みやすく楽しみたい方", en: "Guests who want an approachable dark beer" },
  },
  {
    id: "blondeAle",
    category: "beers",
    image: "images/Blonde_Ale.jpg",
    price: "¥850",
    size: { ja: "パイント", en: "Pint" },
    abv: "5%",
    tags: ["light", "craft"],
    name: { ja: "ブロンドエール", en: "Blonde Ale" },
    description: {
      ja: "軽やかで飲みやすく、ほんのり果実感のあるエール。",
      en: "Easy-drinking with subtle fruitiness.",
    },
    ingredients: { ja: "エールビール", en: "Ale beer" },
    recommendation: { ja: "クラフト入門の一杯に", en: "A gentle entry into craft beer" },
  },
  {
    id: "hefeweizen",
    category: "beers",
    image: "images/Hefeweizen.jpg",
    price: "¥900",
    size: { ja: "パイント", en: "Pint" },
    abv: "5.4%",
    tags: ["fruity", "craft"],
    name: { ja: "ヘーフェヴァイツェン", en: "Hefeweizen" },
    description: {
      ja: "バナナやクローブのような香りが特徴のドイツ小麦ビール。",
      en: "A German wheat beer with banana and clove aromas.",
    },
    ingredients: { ja: "ドイツ小麦ビール", en: "German wheat beer" },
    recommendation: { ja: "香りの個性を楽しみたい方", en: "Guests who like expressive beer aromas" },
  },
];

let currentLanguage = getInitialLanguage();
let activeFilter = "all";

function getInitialLanguage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "ja" || saved === "en") {
    return saved;
  }
  return navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "ja";
}

function translate(path, lang = currentLanguage) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), i18n[lang]) || "";
}

function localize(value) {
  if (value && typeof value === "object") {
    return value[currentLanguage] || value.ja || value.en || "";
  }
  return value || "";
}

function setLanguage(lang) {
  currentLanguage = lang === "en" ? "en" : "ja";
  localStorage.setItem(STORAGE_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.body.classList.toggle("is-ja", currentLanguage === "ja");
  document.body.classList.toggle("is-en", currentLanguage === "en");
  applyTranslations();
  updateMetadata();
  renderPageContent();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });
}

function updateMetadata() {
  const page = document.body.dataset.page || "home";
  const category = document.body.dataset.category;
  const key = category ? `${category}Title` : `${page}Title`;
  const descriptionKey = category ? `${category}Description` : `${page}Description`;
  const title = translate(`meta.${key}`);
  const description = translate(`meta.${descriptionKey}`);
  const metaDescription = document.querySelector('meta[name="description"]');

  if (title) {
    document.title = title;
  }
  if (metaDescription && description) {
    metaDescription.setAttribute("content", description);
  }
}

function renderPageContent() {
  const page = document.body.dataset.page;
  const category = document.body.dataset.category;

  if (page === "home") {
    renderRecommendations();
  }

  if (category) {
    renderMenu(category);
  }
}

function getDrink(id) {
  return drinks.find((drink) => drink.id === id);
}

function renderRecommendations() {
  const container = document.querySelector("[data-recommendations]");
  if (!container) {
    return;
  }

  container.innerHTML = site.bestSellers
    .map(getDrink)
    .filter(Boolean)
    .map((drink) => renderFeaturedDrink(drink))
    .join("");
}

function renderFeaturedDrink(drink) {
  return `
    <article class="feature-card">
      <img src="${sanitizeText(drink.image)}" alt="${sanitizeText(localize(drink.name))}" loading="lazy" decoding="async">
      <div class="feature-card-body">
        <div class="card-badge">${sanitizeText(translate(`menu.${drink.badge || "staffPick"}`))}</div>
        <h3>${sanitizeText(localize(drink.name))}</h3>
        <p>${sanitizeText(localize(drink.description))}</p>
        <div class="drink-meta-line">
          <span>${sanitizeText(drink.price)}</span>
          <span>${sanitizeText(localize(drink.size))}</span>
          <span>${sanitizeText(drink.abv)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderFilters(category) {
  const filtersContainer = document.querySelector("[data-filters]");
  if (!filtersContainer) {
    return;
  }

  const availableTags = new Set(drinks.filter((drink) => drink.category === category).flatMap((drink) => drink.tags));
  const filters = site.filters.filter((filter) => filter === "all" || availableTags.has(filter));
  filtersContainer.innerHTML = filters
    .map((filter) => {
      const active = filter === activeFilter ? " active" : "";
      return `<button class="filter-chip${active}" type="button" data-filter="${sanitizeText(filter)}">${sanitizeText(translate(`filters.${filter}`))}</button>`;
    })
    .join("");

  filtersContainer.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderMenu(category);
    });
  });
}

function renderMenu(category) {
  const title = document.querySelector("[data-category-title]");
  const subtitle = document.querySelector("[data-category-subtitle]");
  const grid = document.querySelector("[data-menu-grid]");
  const noResults = document.querySelector("[data-no-results]");
  const searchInput = document.querySelector("[data-menu-search]");

  if (!grid) {
    return;
  }

  if (title) {
    title.textContent = translate(`categories.${category}.title`);
  }
  if (subtitle) {
    subtitle.textContent = translate(`categories.${category}.subtitle`);
  }

  renderFilters(category);

  const query = (searchInput && searchInput.value ? searchInput.value : "").trim().toLowerCase();
  const visibleDrinks = drinks.filter((drink) => {
    if (drink.category !== category) {
      return false;
    }
    if (activeFilter !== "all" && !drink.tags.includes(activeFilter)) {
      return false;
    }
    if (!query) {
      return true;
    }
    const searchable = [
      localize(drink.name),
      localize(drink.description),
      localize(drink.ingredients),
      localize(drink.recommendation),
      ...drink.tags.map((tag) => translate(`filters.${tag}`)),
    ]
      .join(" ")
      .toLowerCase();
    return searchable.includes(query);
  });

  grid.innerHTML = visibleDrinks.map((drink) => renderDrinkCard(drink)).join("");
  if (noResults) {
    noResults.hidden = visibleDrinks.length !== 0;
  }
}

function renderDrinkCard(drink) {
  const badge = drink.badge ? `<span class="card-badge">${sanitizeText(translate(`menu.${drink.badge}`))}</span>` : "";
  const tags = drink.tags.map((tag) => `<span class="drink-tag">${sanitizeText(translate(`filters.${tag}`))}</span>`).join("");

  return `
    <article class="drink-card">
      <img src="${sanitizeText(drink.image)}" alt="${sanitizeText(localize(drink.name))}" class="drink-card-image" loading="lazy" decoding="async">
      <div class="drink-card-content">
        <div class="drink-card-topline">
          ${badge}
          <span class="drink-price">${sanitizeText(drink.price)}</span>
        </div>
        <h3 class="drink-card-title">${sanitizeText(localize(drink.name))}</h3>
        <p class="drink-card-desc">${sanitizeText(localize(drink.description))}</p>
        <dl class="drink-details">
          <div>
            <dt>${sanitizeText(translate("menu.sizeLabel"))}</dt>
            <dd>${sanitizeText(localize(drink.size))}</dd>
          </div>
          <div>
            <dt>${sanitizeText(translate("menu.abvLabel"))}</dt>
            <dd>${sanitizeText(drink.abv)}</dd>
          </div>
        </dl>
        <p class="drink-ingredients"><strong>${sanitizeText(translate("menu.ingredientsLabel"))}:</strong> ${sanitizeText(localize(drink.ingredients))}</p>
        <p class="drink-recommendation"><strong>${sanitizeText(translate("menu.recommendationLabel"))}:</strong> ${sanitizeText(localize(drink.recommendation))}</p>
        <div class="drink-tags">${tags}</div>
      </div>
    </article>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(currentLanguage === "ja" ? "en" : "ja");
    });
  });

  document.querySelectorAll("[data-menu-search]").forEach((input) => {
    input.addEventListener("input", () => {
      renderMenu(document.body.dataset.category);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  setLanguage(currentLanguage);
});
