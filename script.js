const STORAGE_KEY = "bar8am-language";

// Simple text content sanitizer to prevent XSS
function sanitizeText(text) {
  if (typeof text !== 'string') return text;
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const site = {
  "mapsUrl": "https://www.google.com/maps/search/?api=1&query=Bar%208AM%20Omiya%20Saitama",
  "instagramUrl": "#",
  "categories": [
    "cocktails",
    "mocktails",
    "wines",
    "beers",
    "whisky",
    "champagne",
    "food"
  ],
  "bestSellers": [
    "cocktail-margarita",
    "non-alcoholic-shirley-temple",
    "wine-red-glass",
    "beer-premium-malts-draft"
  ],
  "filters": [
    "all",
    "signature",
    "light",
    "strong",
    "sweet",
    "bitter",
    "fruity",
    "nonalcoholic",
    "sparkling",
    "red",
    "white",
    "craft",
    "islay",
    "speyside",
    "bourbon",
    "japanese",
    "blended"
  ]
};

const i18n = {
  "ja": {
    "meta": {
      "homeTitle": "Bar 8 AM - 大宮のバイリンガルメニュー",
      "homeDescription": "大宮の Bar 8 AM。カクテル、モクテル、ワイン、ビールを日本語と英語で見られるオンラインメニューです。",
      "aboutTitle": "Bar 8 AM - 店舗情報",
      "aboutDescription": "Bar 8 AM の店舗情報、アクセス、営業時間、オーナー紹介。",
      "cocktailsTitle": "Bar 8 AM - カクテル",
      "cocktailsDescription": "Bar 8 AM のカクテルメニュー。価格、味わい、材料、アルコール目安を掲載。",
      "mocktailsTitle": "Bar 8 AM - モクテル",
      "mocktailsDescription": "Bar 8 AM のノンアルコールメニュー。価格、味わい、材料を掲載。",
      "winesTitle": "Bar 8 AM - ワイン",
      "winesDescription": "Bar 8 AM のワインメニュー。グラス、ボトル、味わいの目安を掲載。",
      "beersTitle": "Bar 8 AM - ビール",
      "beersDescription": "Bar 8 AM のビールメニュー。クラフトビール、ラガー、黒ビールなどを掲載。",
      "whiskyTitle": "Bar 8 AM - ウイスキー",
      "whiskyDescription": "Bar 8 AM のウイスキーメニュー。アイラ、スペイサイド、ジャパニーズウイスキーなどを掲載。",
      "champagneTitle": "Bar 8 AM - シャンパン",
      "champagneDescription": "Bar 8 AM のシャンパンメニュー。特別な夜を彩る最高級のボトルをラインアップ。",
      "foodTitle": "Bar 8 AM - フード",
      "foodDescription": "Bar 8 AM のフードメニュー。お酒に合うおつまみや軽食をご用意しております。"
    },
    "nav": {
      "home": "ホーム",
      "cocktails": "カクテル",
      "mocktails": "モクテル",
      "wines": "ワイン",
      "beers": "ビール",
      "about": "店舗情報",
      "whisky": "ウイスキー",
      "champagne": "シャンパン",
      "food": "フード"
    },
    "home": {
      "eyebrow": "大宮駅東口から徒歩圏内",
      "title": "Bar 8 AM",
      "intro": "仕事帰りの一杯から、友人との夜まで。定番カクテル、ノンアルコール、ワイン、ビールを日本語と英語で見られるオンラインメニューです。",
      "ctaMenu": "メニューを見る",
      "ctaAccess": "アクセス",
      "statusLabel": "本日の案内",
      "statusValue": "18:00-翌 2:00 / 不定休",
      "addressLabel": "アクセス",
      "addressValue": "大宮駅東口エリア",
      "languageNote": "JP / EN 切替対応",
      "recommendations": "おすすめ",
      "recommendationsIntro": "初めての方にも選びやすい人気メニューです。",
      "quickInfoTitle": "ご来店前に",
      "quickInfoHours": "営業時間：18:00-翌 2:00（不定休）",
      "quickInfoAddress": "場所：大宮駅東口エリア",
      "quickInfoContact": "予約・最新情報は Instagram をご確認ください。",
      "recommendationsEyebrow": "人気メニュー"
    },
    "menu": {
      "searchLabel": "メニュー検索",
      "searchPlaceholder": "名前、材料、味わいで探す",
      "noResults": "条件に合うメニューがありません。",
      "priceLabel": "価格",
      "sizeLabel": "サイズ",
      "abvLabel": "ABV",
      "ingredientsLabel": "材料",
      "recommendationLabel": "おすすめ",
      "bestSeller": "人気",
      "staffPick": "スタッフ推し",
      "taxNote": "価格は目安です。正式な価格は店舗でご確認ください。"
    },
    "categories": {
      "cocktails": {
        "title": "カクテル",
        "subtitle": "定番から華やかな一杯まで。味わいタグで気分に合うものを探せます。"
      },
      "mocktails": {
        "title": "モクテル",
        "subtitle": "お酒が苦手な方や休肝日にも楽しめる、香り豊かなノンアルコールドリンク。"
      },
      "wines": {
        "title": "ワイン",
        "subtitle": "軽めの白からしっかりした赤、乾杯用のスパークリングまで。"
      },
      "beers": {
        "title": "ビール",
        "subtitle": "軽快なラガーから香ばしい黒ビールまで、食前にも二軒目にも合うラインアップ。"
      },
      "whisky": {
        "title": "ウイスキー",
        "subtitle": "世界各国の銘酒をセレクト。個性豊かな味わいをお楽しみください。"
      },
      "champagne": {
        "title": "シャンパン",
        "subtitle": "特別な瞬間を彩る、贅沢な泡立ち。祝いの席や華やかな夜に。"
      },
      "food": {
        "title": "フード",
        "subtitle": "ドリンクを引き立てる、こだわりのマリアージュ。"
      }
    },
    "filters": {
      "all": "すべて",
      "signature": "おすすめ",
      "light": "軽め",
      "strong": "しっかり",
      "sweet": "甘め",
      "bitter": "ビター",
      "fruity": "フルーティ",
      "nonalcoholic": "ノンアル",
      "sparkling": "泡",
      "red": "赤",
      "white": "白",
      "craft": "クラフト",
      "islay": "アイラ",
      "speyside": "スペイサイド",
      "bourbon": "バーボン",
      "japanese": "ジャパニーズ",
      "blended": "ブレンデッド"
    },
    "about": {
      "title": "店舗情報",
      "introTitle": "Bar 8 AM へようこそ",
      "introBody": "Bar 8 AM は、大宮で落ち着いた時間を楽しめるバーです。カクテル、モクテル、ワイン、ビールを、常連のお客様にも初めてのお客様にも選びやすくご案内します。",
      "accessTitle": "アクセス",
      "access1": "大宮駅東口を出ます",
      "access2": "駅前通りを目印に徒歩約 5 分進みます",
      "access3": "ローソン付近を左折します",
      "access4": "Hotel Omiya 付近、右手側の店舗をお探しください",
      "contactTitle": "基本情報",
      "hoursLabel": "営業時間",
      "hoursValue": "18:00-翌 2:00（不定休）",
      "addressLabel": "住所",
      "addressValue": "大宮駅東口エリア / Google Maps で Bar 8 AM を検索",
      "socialLabel": "最新情報",
      "socialValue": "Instagram で営業日・イベント情報をご確認ください",
      "ownerTitle": "オーナー紹介",
      "ownerEyebrow": "ストーリー",
      "ownerBody1": "オーナーの Akira は、15 年以上ミクソロジーに携わってきました。東京のカクテルバーでの経験を活かし、大宮でクラフトドリンクの魅力を届けています。",
      "ownerBody2": "一杯のドリンクには物語があります。お客様に一口ごとに新しい体験を楽しんでいただきたいと考えています。",
      "mapsCta": "Google Maps を開く",
      "instagramCta": "Instagram"
    },
    "footer": {
      "copyright": "© 2026 Bar 8 AM. All rights reserved.",
      "note": "大宮のバー / 日本語・英語メニュー対応"
    },
    "language": {
      "toggle": "EN",
      "label": "Switch to English"
    },
    "images": {
      "background": "Bar 8 AM の店内背景",
      "logo": "Bar 8 AM ロゴ",
      "map": "Bar 8 AM 周辺地図",
      "owner": "Bar 8 AM オーナー"
    }
  },
  "en": {
    "meta": {
      "homeTitle": "Bar 8 AM - Bilingual Bar Menu in Omiya",
      "homeDescription": "Bar 8 AM in Omiya. A bilingual online menu for cocktails, mocktails, wines, and beers.",
      "aboutTitle": "Bar 8 AM - About and Access",
      "aboutDescription": "About Bar 8 AM, access, opening hours, and owner story.",
      "cocktailsTitle": "Bar 8 AM - Cocktails",
      "cocktailsDescription": "Bar 8 AM cocktail menu with price, flavor, ingredients, and alcohol guide.",
      "mocktailsTitle": "Bar 8 AM - Mocktails",
      "mocktailsDescription": "Bar 8 AM non-alcoholic menu with price, flavor, and ingredients.",
      "winesTitle": "Bar 8 AM - Wines",
      "winesDescription": "Bar 8 AM wine menu with glass, bottle, and flavor guide.",
      "beersTitle": "Bar 8 AM - Beers",
      "beersDescription": "Bar 8 AM beer menu with craft beer, lager, stout, and more.",
      "whiskyTitle": "Bar 8 AM - Whisky",
      "whiskyDescription": "Bar 8 AM whisky menu featuring Islay, Speyside, bourbon, and Japanese whiskies.",
      "champagneTitle": "Bar 8 AM - Champagne",
      "champagneDescription": "Bar 8 AM champagne menu featuring premium bottles for special occasions.",
      "foodTitle": "Bar 8 AM - Food",
      "foodDescription": "Bar 8 AM food menu with selection of dishes and snacks matching our drinks."
    },
    "nav": {
      "home": "Home",
      "cocktails": "Cocktails",
      "mocktails": "Mocktails",
      "wines": "Wines",
      "beers": "Beers",
      "about": "About",
      "whisky": "Whisky",
      "champagne": "Champagne",
      "food": "Food"
    },
    "home": {
      "eyebrow": "Near Omiya Station East Exit",
      "title": "Bar 8 AM",
      "intro": "From an after-work drink to a night out with friends, browse our cocktails, non-alcoholic drinks, wines, and beers in Japanese or English.",
      "ctaMenu": "View Menu",
      "ctaAccess": "Access",
      "statusLabel": "Today",
      "statusValue": "6:00 PM-2:00 AM / Irregular holidays",
      "addressLabel": "Access",
      "addressValue": "Omiya Station East Exit area",
      "languageNote": "JP / EN supported",
      "recommendations": "Recommendations",
      "recommendationsIntro": "Popular picks that are easy to choose on your first visit.",
      "quickInfoTitle": "Before You Visit",
      "quickInfoHours": "Hours: 6:00 PM-2:00 AM (irregular holidays)",
      "quickInfoAddress": "Area: Omiya Station East Exit",
      "quickInfoContact": "For reservations and latest updates, check Instagram.",
      "recommendationsEyebrow": "Popular Picks"
    },
    "menu": {
      "searchLabel": "Search menu",
      "searchPlaceholder": "Search by name, ingredient, or flavor",
      "noResults": "No menu items match your filters.",
      "priceLabel": "Price",
      "sizeLabel": "Size",
      "abvLabel": "ABV",
      "ingredientsLabel": "Ingredients",
      "recommendationLabel": "Recommended for",
      "bestSeller": "Popular",
      "staffPick": "Staff pick",
      "taxNote": "Prices are guide prices. Please confirm final pricing at the bar."
    },
    "categories": {
      "cocktails": {
        "title": "Cocktails",
        "subtitle": "From classics to bright, expressive drinks. Use flavor tags to find what fits your mood."
      },
      "mocktails": {
        "title": "Mocktails",
        "subtitle": "Aromatic non-alcoholic drinks for guests who want flavor without spirits."
      },
      "wines": {
        "title": "Wines",
        "subtitle": "Light whites, fuller reds, and sparkling choices for a toast."
      },
      "beers": {
        "title": "Beers",
        "subtitle": "From crisp lagers to roasted dark beers, suited for a first drink or a second stop."
      },
      "whisky": {
        "title": "Whisky",
        "subtitle": "A curated selection of the world's finest whiskies. Enjoy their rich and unique profiles."
      },
      "champagne": {
        "title": "Champagne",
        "subtitle": "Luxurious bubbles to light up your special moments. Perfect for celebrations."
      },
      "food": {
        "title": "Food",
        "subtitle": "Specially curated pairings to complement your drinks."
      }
    },
    "filters": {
      "all": "All",
      "signature": "Recommended",
      "light": "Light",
      "strong": "Strong",
      "sweet": "Sweet",
      "bitter": "Bitter",
      "fruity": "Fruity",
      "nonalcoholic": "Non-alcoholic",
      "sparkling": "Sparkling",
      "red": "Red",
      "white": "White",
      "craft": "Craft",
      "islay": "Islay",
      "speyside": "Speyside",
      "bourbon": "Bourbon",
      "japanese": "Japanese",
      "blended": "Blended"
    },
    "about": {
      "title": "About",
      "introTitle": "Welcome to Bar 8 AM",
      "introBody": "Bar 8 AM is a relaxed bar in Omiya. We make cocktails, mocktails, wines, and beers easy to browse for regulars and first-time guests.",
      "accessTitle": "Access",
      "access1": "Leave from Omiya Station East Exit",
      "access2": "Walk along the main station street for about 5 minutes",
      "access3": "Turn left near the Lawson convenience store",
      "access4": "Look for us on the right near Hotel Omiya",
      "contactTitle": "Details",
      "hoursLabel": "Hours",
      "hoursValue": "6:00 PM-2:00 AM (irregular holidays)",
      "addressLabel": "Address",
      "addressValue": "Omiya Station East Exit area / Search Bar 8 AM on Google Maps",
      "socialLabel": "Latest updates",
      "socialValue": "Check Instagram for business days and event updates",
      "ownerTitle": "Meet the Owner",
      "ownerEyebrow": "Story",
      "ownerBody1": "Owner Akira has worked in mixology for more than 15 years. After training in Tokyo cocktail bars, he opened Bar 8 AM to share craft drinks with the Omiya community.",
      "ownerBody2": "Every drink tells a story. We want guests to discover something new with every sip.",
      "mapsCta": "Open Google Maps",
      "instagramCta": "Instagram"
    },
    "footer": {
      "copyright": "© 2026 Bar 8 AM. All rights reserved.",
      "note": "Omiya bar / Japanese and English menu"
    },
    "language": {
      "toggle": "JP",
      "label": "日本語に切り替え"
    },
    "images": {
      "background": "Bar 8 AM bar background",
      "logo": "Bar 8 AM logo",
      "map": "Map near Bar 8 AM",
      "owner": "Owner of Bar 8 AM"
    }
  }
};

// Drinks data loaded from external file for better caching
var drinks = [
  {
    "id": "cocktail-gin-and-tonic",
    "category": "cocktails",
    "image": "images/gin-and-tonic.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "10%",
    "tags": [
      "light",
      "fruity"
    ],
    "name": {
      "ja": "ジントニック",
      "en": "Gin and Tonic"
    },
    "description": {
      "ja": "ジンの清涼感溢れる香りとトニックウォーターの苦味が引き立つ、定番中の定番ロングカクテル。",
      "en": "A classic, refreshing long drink highlighting the crisp notes of gin and tonic."
    },
    "ingredients": {
      "ja": "ジン、トニックウォーター、ライム",
      "en": "Gin, tonic water, lime"
    },
    "recommendation": {
      "ja": "最初の一杯や、爽やかで飲みやすいカクテルをお探しの方に。",
      "en": "Great as a first drink or for those who enjoy clean, crisp flavors."
    }
  },
  {
    "id": "cocktail-gin-buck",
    "category": "cocktails",
    "image": "images/gin-buck.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "11%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "ジンバック",
      "en": "Gin Buck"
    },
    "description": {
      "ja": "ジンにジンジャーエールとレモンを合わせた、すっきりとした甘みと酸味のバランスが抜群の一杯。",
      "en": "A bubbly blend of gin, ginger ale, and fresh lemon for a sweet and tangy balance."
    },
    "ingredients": {
      "ja": "ジン、ジンジャーエール、レモンジュース",
      "en": "Gin, ginger ale, lemon juice"
    },
    "recommendation": {
      "ja": "少し甘めでありながら、のどごし爽快なドリンクが好きな方に。",
      "en": "For guests seeking a slightly sweeter, highly carbonated cocktail."
    }
  },
  {
    "id": "cocktail-gimlet",
    "category": "cocktails",
    "image": "images/gimlet.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "25%",
    "tags": [
      "strong",
      "fruity"
    ],
    "name": {
      "ja": "ギムレット",
      "en": "Gimlet"
    },
    "description": {
      "ja": "ジンとライムジュースがシャープに調和した、すっきりとした辛口のクラシックショートカクテル。",
      "en": "A sharp, clean short cocktail featuring a classic balance of gin and lime."
    },
    "ingredients": {
      "ja": "ジン、ライムジュース、シロップ",
      "en": "Gin, lime juice, simple syrup"
    },
    "recommendation": {
      "ja": "キリッとした柑橘の酸味とジンの深みを楽しみたい方に。",
      "en": "For guests who appreciate sharp citrus acidity and deep botanical notes."
    }
  },
  {
    "id": "cocktail-white-lady",
    "category": "cocktails",
    "image": "images/white-lady.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "26%",
    "tags": [
      "strong",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "ホワイトレディ",
      "en": "White Lady"
    },
    "description": {
      "ja": "ジンをベースに、オレンジのリキュールとレモンを合わせた、白濁した上品で甘酸っぱい一杯。",
      "en": "An elegant, silky cocktail with gin, orange liqueur, and lemon juice."
    },
    "ingredients": {
      "ja": "ジン、コアントロー、レモンジュース",
      "en": "Gin, Cointreau, lemon juice"
    },
    "recommendation": {
      "ja": "柑橘香るまろやかでエレガントなショートカクテルが飲みたい方に。",
      "en": "Perfect for those who enjoy a smooth, citrus-scented short drink."
    }
  },
  {
    "id": "cocktail-martini",
    "category": "cocktails",
    "image": "images/martini.jpg",
    "price": "¥1,600",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "30%",
    "tags": [
      "strong",
      "bitter",
      "signature"
    ],
    "name": {
      "ja": "マティーニ",
      "en": "Martini"
    },
    "description": {
      "ja": "「カクテルの王様」と呼ばれる一杯。ジンの深いボタニカル香とドライベルモットのキレ。",
      "en": "Often called the 'King of Cocktails'. A dry, sophisticated mix of gin and vermouth."
    },
    "ingredients": {
      "ja": "ジン、ドライベルモット、オリーブ",
      "en": "Gin, dry vermouth, olive"
    },
    "recommendation": {
      "ja": "バーの真髄を味わいたい辛口派の方に。",
      "en": "For purists who want to savor a dry, botanical bar standard."
    }
  },
  {
    "id": "cocktail-salty-dog",
    "category": "cocktails",
    "image": "images/salty-dog.webp",
    "price": "¥1,100",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "13%",
    "tags": [
      "light",
      "fruity",
      "bitter"
    ],
    "name": {
      "ja": "ソルティドッグ",
      "en": "Salty Dog"
    },
    "description": {
      "ja": "ウォッカにグレープフルーツを合わせ、グラスの縁の塩がフルーティな酸味を引き締める名作。",
      "en": "Vodka and grapefruit juice, enhanced and framed by a salted rim."
    },
    "ingredients": {
      "ja": "ウォッカ、グレープフルーツジュース、塩",
      "en": "Vodka, grapefruit juice, salt rim"
    },
    "recommendation": {
      "ja": "さっぱりとした柑橘系の果実感と塩味のコンビを楽しみたい方に。",
      "en": "For fruit lovers who enjoy a savory, salty edge."
    }
  },
  {
    "id": "cocktail-screwdriver",
    "category": "cocktails",
    "image": "images/screwdriver.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "12%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "スクリュードライバー",
      "en": "Screwdriver"
    },
    "description": {
      "ja": "ウォッカとオレンジジュースのシンプルな組み合わせ。ジューシーでとても飲みやすい定番カクテル。",
      "en": "A classic, approachable combination of vodka and sweet orange juice."
    },
    "ingredients": {
      "ja": "ウォッカ、オレンジジュース",
      "en": "Vodka, orange juice"
    },
    "recommendation": {
      "ja": "アルコール感が優しく、ジュース感覚で楽しみたい方に。",
      "en": "Ideal for those seeking an easy-drinking, fruit-juice-forward cocktail."
    }
  },
  {
    "id": "cocktail-kamikaze",
    "category": "cocktails",
    "image": "images/kamikaze.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "26%",
    "tags": [
      "strong",
      "fruity"
    ],
    "name": {
      "ja": "カミカゼ",
      "en": "Kamikaze"
    },
    "description": {
      "ja": "ウォッカ、トリプルセック、ライムが織りなす、シャープで切れ味鋭いショートカクテル。",
      "en": "A bold, sharp shot of vodka, triple sec, and fresh lime juice."
    },
    "ingredients": {
      "ja": "ウォッカ、トリプルセック、ライムジュース",
      "en": "Vodka, triple sec, lime juice"
    },
    "recommendation": {
      "ja": "甘酸っぱさの中に力強い刺激を求める辛口派の方に。",
      "en": "For guests seeking citrus tartness with a high-strength kick."
    }
  },
  {
    "id": "cocktail-balalaika",
    "category": "cocktails",
    "image": "images/balalaika.webp",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "26%",
    "tags": [
      "strong",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "バラライカ",
      "en": "Balalaika"
    },
    "description": {
      "ja": "ロシアの民族楽器から名付けられた、レモンの酸味とホワイトキュラソーの甘みが心地よいショート。",
      "en": "A balanced vodka short drink named after the Russian string instrument, flavored with lemon and Cointreau."
    },
    "ingredients": {
      "ja": "ウォッカ、ホワイトキュラソー、レモンジュース",
      "en": "Vodka, white curaçao, lemon juice"
    },
    "recommendation": {
      "ja": "すっきりしつつも甘みを感じる上品なウォッカベースが飲みたい方に。",
      "en": "For guests who want a clean yet sweet, lemon-tinted vodka short."
    }
  },
  {
    "id": "cocktail-yukiguni",
    "category": "cocktails",
    "image": "images/yukiguni.jpg",
    "price": "¥1,600",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "20%",
    "tags": [
      "strong",
      "sweet",
      "signature"
    ],
    "name": {
      "ja": "雪国",
      "en": "Yukiguni"
    },
    "description": {
      "ja": "日本生まれの傑作カクテル。雪景色に見立てた砂糖のグラスに、青リンゴリキュールとチェリーのアクセント。",
      "en": "A famous Japanese cocktail. Features a sugar-rimmed glass, green apple liqueur, and a red cherry."
    },
    "ingredients": {
      "ja": "ウォッカ、ホワイトキュラソー、ライム、グリーンアップルリキュール、チェリー、砂糖",
      "en": "Vodka, white curaçao, lime, green apple liqueur, cherry, sugar rim"
    },
    "recommendation": {
      "ja": "日本の美しいカクテル文化を堪能したい方に。",
      "en": "Recommended for guests wishing to experience a sweet, historic Japanese creation."
    },
    "badge": "bestSeller"
  },
  {
    "id": "cocktail-cuba-libre",
    "category": "cocktails",
    "image": "images/cuba-libre.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "11%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "キューバリブレ",
      "en": "Cuba Libre"
    },
    "description": {
      "ja": "ラムのコクとコーラの甘みに、ライムの爽やかさを絞った人気の炭酸カクテル。",
      "en": "A highly popular blend of rich rum, sweet cola, and fresh lime."
    },
    "ingredients": {
      "ja": "ラム、コーラ、フレッシュライム",
      "en": "Rum, cola, fresh lime"
    },
    "recommendation": {
      "ja": "カジュアルでコーラベースの飲みやすいロングカクテルを求める方に。",
      "en": "Great for fans of cola who want a satisfying, classic rum refresher."
    }
  },
  {
    "id": "cocktail-daiquiri",
    "category": "cocktails",
    "image": "images/daiquiri.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "25%",
    "tags": [
      "strong",
      "fruity"
    ],
    "name": {
      "ja": "ダイキリ",
      "en": "Daiquiri"
    },
    "description": {
      "ja": "ホワイトラム、ライム、砂糖だけの究極のシンプルさ。バーテンダーの技量が試される一杯。",
      "en": "A refined, simple combination of rum, fresh lime, and sugar."
    },
    "ingredients": {
      "ja": "ホワイトラム、ライムジュース、シュガーシロップ",
      "en": "White rum, lime juice, simple syrup"
    },
    "recommendation": {
      "ja": "ラムの甘酸っぱい調和をダイレクトに楽しみたい方に。",
      "en": "For those who appreciate clean, sour-style rum classics."
    }
  },
  {
    "id": "cocktail-mojito",
    "category": "cocktails",
    "image": "images/mojito.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "13%",
    "tags": [
      "light",
      "fruity",
      "signature"
    ],
    "name": {
      "ja": "モヒート",
      "en": "Mojito"
    },
    "description": {
      "ja": "フレッシュミントとライムがたっぷり入った、爽快極まりないキューバ発祥のロングカクテル。",
      "en": "A classic Cuban long drink packed with fresh muddled mint leaves, lime, and soda."
    },
    "ingredients": {
      "ja": "ホワイトラム、ミント、ライム、砂糖、ソーダ",
      "en": "White rum, mint, lime, sugar, soda water"
    },
    "recommendation": {
      "ja": "すっきりとした清涼感を満喫したい方に一押し。",
      "en": "Highly recommended for guests seeking ultimate minty freshness."
    }
  },
  {
    "id": "cocktail-xyz",
    "category": "cocktails",
    "image": "images/xyz.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "26%",
    "tags": [
      "strong",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "XYZ",
      "en": "XYZ"
    },
    "description": {
      "ja": "「これ以上ない究極」を意味するアルファベットの終端。ラムベースに柑橘が優しく調和。",
      "en": "Named after the last letters of the alphabet to mean 'the ultimate'. Rum with lemon and orange."
    },
    "ingredients": {
      "ja": "ホワイトラム、ホワイトキュラソー、レモンジュース",
      "en": "White rum, white curaçao, lemon juice"
    },
    "recommendation": {
      "ja": "今夜の最後を飾る一杯をお探しの方に。",
      "en": "Perfect as a final drink to wrap up a memorable evening."
    }
  },
  {
    "id": "cocktail-pina-colada",
    "category": "cocktails",
    "image": "images/pina-colada.png",
    "price": "¥1,600",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "12%",
    "tags": [
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "ピニャコラーダ",
      "en": "Piña Colada"
    },
    "description": {
      "ja": "パイナップルとココナッツミルクのまろやかで南国情緒溢れるスイートカクテル。",
      "en": "A creamy tropical blend of rum, pineapple, and coconut milk."
    },
    "ingredients": {
      "ja": "ラム、ココナッツミルク、パイナップルジュース",
      "en": "Rum, coconut milk, pineapple juice"
    },
    "recommendation": {
      "ja": "フルーティで甘くクリーミーなカクテルがお好きな方に。",
      "en": "Great for guests who prefer sweet, dessert-like cocktails."
    }
  },
  {
    "id": "cocktail-tequila-buck",
    "category": "cocktails",
    "image": "images/tequila-buck.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "12%",
    "tags": [
      "light",
      "fruity"
    ],
    "name": {
      "ja": "テキーラバック",
      "en": "Tequila Buck"
    },
    "description": {
      "ja": "テキーラにジンジャーエールとレモンの爽快さを掛け合わせた、のどごし爽やかなカクテル。",
      "en": "A fizzy and exciting combination of tequila, ginger ale, and lemon juice."
    },
    "ingredients": {
      "ja": "テキーラ、ジンジャーエール、レモンジュース",
      "en": "Tequila, ginger ale, lemon juice"
    },
    "recommendation": {
      "ja": "テキーラをすっきりとカジュアルに飲みたい方に。",
      "en": "Recommended for guests who want an easy-drinking, bubbly tequila drink."
    }
  },
  {
    "id": "cocktail-tequila-sunrise",
    "category": "cocktails",
    "image": "images/tequila-sunrise.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "12%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "テキーラサンライズ",
      "en": "Tequila Sunrise"
    },
    "description": {
      "ja": "朝焼けの空を表現した美しい色彩。オレンジのフルーティな味わいの中にテキーラのコクが溶け合います。",
      "en": "Visually mimics a sunrise. A sweet, fruity cocktail featuring tequila, orange, and grenadine."
    },
    "ingredients": {
      "ja": "テキーラ、オレンジジュース、グレナデンシロップ",
      "en": "Tequila, orange juice, grenadine syrup"
    },
    "recommendation": {
      "ja": "見た目も華やかで、フルーティな甘みのドリンクがお好きな方に。",
      "en": "Perfect for guests who enjoy sweet fruit flavors and striking presentations."
    }
  },
  {
    "id": "cocktail-margarita",
    "category": "cocktails",
    "image": "images/margarita.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "18%",
    "tags": [
      "strong",
      "fruity",
      "signature"
    ],
    "name": {
      "ja": "マルガリータ",
      "en": "Margarita"
    },
    "description": {
      "ja": "テキーラ、ライム、トリプルセックの完璧な甘酸っぱさに、グラスの縁の塩が抜群の相乗効果をもたらします。",
      "en": "A refreshing tequila classic balanced with lime, triple sec, and a salt-rimmed glass."
    },
    "ingredients": {
      "ja": "テキーラ、トリプルセック、ライムジュース、塩",
      "en": "Tequila, triple sec, lime juice, salt"
    },
    "recommendation": {
      "ja": "テキーラベースの決定版。甘みと塩味の絶妙な調和を楽しみたい方に。",
      "en": "The definitive tequila cocktail. For those who enjoy dynamic sour and salty profiles."
    }
  },
  {
    "id": "cocktail-matador",
    "category": "cocktails",
    "image": "images/matador.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "13%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "マタドール",
      "en": "Matador"
    },
    "description": {
      "ja": "闘牛士の名を冠した一杯。テキーラにパイナップルの濃厚な甘みとライムの酸味が融合。",
      "en": "Named after the bullfighter. A bold mix of tequila, sweet pineapple, and tart lime."
    },
    "ingredients": {
      "ja": "テキーラ、パイナップルジュース、ライムジュース",
      "en": "Tequila, pineapple juice, lime juice"
    },
    "recommendation": {
      "ja": "テキーラの力強さとトロピカルフルーツの甘さを一緒に楽しみたい方に。",
      "en": "Ideal for guests who love tropical fruit and spirits combined."
    }
  },
  {
    "id": "cocktail-el-diablo",
    "category": "cocktails",
    "image": "images/el-diablo.webp",
    "price": "¥1,300",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "12%",
    "tags": [
      "light",
      "sweet",
      "bitter",
      "fruity"
    ],
    "name": {
      "ja": "エル・ディアブロ",
      "en": "El Diablo"
    },
    "description": {
      "ja": "「悪魔」の意味を持つカクテル。カシスの芳醇なコクとジンジャーエールのスパイシーさがテキーラに調和。",
      "en": "Meaning 'The Devil'. A deep red drink combining tequila, rich cassis, and spicy ginger ale."
    },
    "ingredients": {
      "ja": "テキーラ、カシスリキュール、ジンジャーエール、ライム",
      "en": "Tequila, cassis liqueur, ginger ale, lime juice"
    },
    "recommendation": {
      "ja": "少しダークでカシス感のある、爽やかな炭酸ドリンクがお好きな方に。",
      "en": "Great for guests seeking a berry-flavored, bubbly cocktail with a bite."
    }
  },
  {
    "id": "cocktail-godfather",
    "category": "cocktails",
    "image": "images/godfather.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロック",
      "en": "Rocks"
    },
    "abv": "33%",
    "tags": [
      "strong",
      "sweet"
    ],
    "name": {
      "ja": "ゴッドファザー",
      "en": "Godfather"
    },
    "description": {
      "ja": "ウイスキーの重厚感と、アマレット（杏仁）の甘く芳醇なアーモンド香が交差する男気ある一杯。",
      "en": "A heavy, spirit-forward cocktail matching Scotch whisky with sweet amaretto liqueur."
    },
    "ingredients": {
      "ja": "スコッチウイスキー、アマレット",
      "en": "Scotch whisky, amaretto liqueur"
    },
    "recommendation": {
      "ja": "ウイスキーのコクと濃厚な甘みが絡み合うロックを楽しみたい方に。",
      "en": "For whiskey lovers who enjoy a sweet, nutty, slow-sipping glass."
    }
  },
  {
    "id": "cocktail-rusty-nail",
    "category": "cocktails",
    "image": "images/rusty-nail.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "ロック",
      "en": "Rocks"
    },
    "abv": "35%",
    "tags": [
      "strong",
      "sweet"
    ],
    "name": {
      "ja": "ラスティネイル",
      "en": "Rusty Nail"
    },
    "description": {
      "ja": "「錆びた釘」の名を持つ。スコッチウイスキーと、ハチミツ・ハーブ香るドランブイリキュールの深い琥珀色カクテル。",
      "en": "Meaning 'rusty nail'. Scotch whisky stirred with honeyed, herbal Drambuie."
    },
    "ingredients": {
      "ja": "スコッチウイスキー、ドランブイ",
      "en": "Scotch whisky, Drambuie liqueur"
    },
    "recommendation": {
      "ja": "甘口でありながら、極めて重厚な余韻を楽しみたいウイスキーファンに。",
      "en": "Recommended for guests who want Scotch with a complex, sweet herbal finish."
    }
  },
  {
    "id": "cocktail-old-fashioned",
    "category": "cocktails",
    "image": "images/old-fashioned.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "ロック",
      "en": "Rocks"
    },
    "abv": "32%",
    "tags": [
      "strong",
      "bitter",
      "signature"
    ],
    "name": {
      "ja": "オールドファッションド",
      "en": "Old Fashioned"
    },
    "description": {
      "ja": "アメリカの長い歴史を感じるカクテル。バーボン、ビターズ、ほのかな砂糖とオレンジの香り。",
      "en": "A legendary, spirit-forward classic that highlights bourbon, bitters, and orange peel."
    },
    "ingredients": {
      "ja": "バーボン、アンゴスチュラビターズ、角砂糖、オレンジピール",
      "en": "Bourbon, Angostura bitters, sugar, orange peel"
    },
    "recommendation": {
      "ja": "アメリカンウイスキーの奥深さをじっくり紐解きたい方に。",
      "en": "A must-try for guests who appreciate a slow, classic whiskey sipper."
    }
  },
  {
    "id": "cocktail-manhattan",
    "category": "cocktails",
    "image": "images/manhattan.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "28%",
    "tags": [
      "strong",
      "sweet",
      "bitter"
    ],
    "name": {
      "ja": "マンハッタン",
      "en": "Manhattan"
    },
    "description": {
      "ja": "「カクテルの女王」と称される一杯。ライウイスキーの辛口さとスイートベルモットの優雅な甘み。",
      "en": "Known as the 'Queen of Cocktails'. Elegant and rich with rye whiskey and sweet vermouth."
    },
    "ingredients": {
      "ja": "ライウイスキー、スイートベルモット、アロマチックビターズ、チェリー",
      "en": "Rye or Canadian whisky, sweet vermouth, Angostura bitters, cherry"
    },
    "recommendation": {
      "ja": "甘みとスパイシーさの洗練されたショートカクテルを堪能したい方に。",
      "en": "Perfect for guests who want a refined, aromatic whisky classic."
    }
  },
  {
    "id": "cocktail-sidecar",
    "category": "cocktails",
    "image": "images/sidecar.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "カクテルグラス",
      "en": "Cocktail glass"
    },
    "abv": "26%",
    "tags": [
      "strong",
      "fruity"
    ],
    "name": {
      "ja": "サイドカー",
      "en": "Sidecar"
    },
    "description": {
      "ja": "ブランデーまたはウイスキーベース。柑橘の酸味とスピリッツの調和が素晴らしい人気のカクテル。",
      "en": "A classic blend of brandy or whisky, orange liqueur, and lemon juice."
    },
    "ingredients": {
      "ja": "ブランデーまたはウイスキー、コアントロー、レモンジュース",
      "en": "Brandy or whisky, Cointreau, lemon juice"
    },
    "recommendation": {
      "ja": "柑橘の風味が豊かな、極めてバランスの良いショートカクテルをお探しの方に。",
      "en": "For those who want a harmonious, citrus-driven traditional short drink."
    }
  },
  {
    "id": "cocktail-american-lemonade",
    "category": "cocktails",
    "image": "images/american-lemonade.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "6%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "アメリカンレモネード",
      "en": "American Lemonade"
    },
    "description": {
      "ja": "レモネードの上に赤ワインを優しく浮かべた、美しい二層仕立ての低アルコールカクテル。",
      "en": "A beautiful layered drink with rich red wine floated over tart lemonade."
    },
    "ingredients": {
      "ja": "赤ワイン、レモンジュース、シロップ、冷水",
      "en": "Red wine, lemon juice, simple syrup, water"
    },
    "recommendation": {
      "ja": "アルコール度数が低めで、フルーティで甘酸っぱい赤ワインベースが好きな方に。",
      "en": "Great for guests seeking a low-alcohol, beautiful, and fruity wine cooler."
    }
  },
  {
    "id": "cocktail-wine-cooler",
    "category": "cocktails",
    "image": "images/wine-cooler.webp",
    "price": "¥1,300",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "7%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "ワインクーラー",
      "en": "Wine Cooler"
    },
    "description": {
      "ja": "ロゼや白ワインに、オレンジやベリージュースを合わせた爽快なサマーカクテル。",
      "en": "A cooling, fruity wine cocktail combining wine with fresh citrus juice."
    },
    "ingredients": {
      "ja": "ワイン、オレンジジュース、グレナデンシロップ、キュラソー",
      "en": "Wine, orange juice, grenadine syrup, triple sec"
    },
    "recommendation": {
      "ja": "ワインをよりカジュアルかつジューシーに楽しみたい方に。",
      "en": "Recommended for wine drinkers seeking a juicy, refreshing alternative."
    }
  },
  {
    "id": "cocktail-spritzer",
    "category": "cocktails",
    "image": "images/spritzer.png",
    "price": "¥1,300",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "6%",
    "tags": [
      "light",
      "fruity",
      "sparkling"
    ],
    "name": {
      "ja": "スプリッツァー",
      "en": "Spritzer"
    },
    "description": {
      "ja": "白ワインをソーダで割った極めてシンプルなカクテル。食事を邪魔しないドライな味わい。",
      "en": "A light and bubbly mix of white wine and carbonated soda water."
    },
    "ingredients": {
      "ja": "白ワイン、ソーダ",
      "en": "White wine, club soda"
    },
    "recommendation": {
      "ja": "甘くない、すっきり軽いスパークリング感がお好きな方に。",
      "en": "Perfect for guests who want a dry, refreshing, low-abv wine highball."
    }
  },
  {
    "id": "cocktail-kitty",
    "category": "cocktails",
    "image": "images/kitty.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "6%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "キティ",
      "en": "Kitty"
    },
    "description": {
      "ja": "赤ワインをジンジャーエールで割ったカクテル。赤ワインの渋みが和らぎ、甘酸っぱく楽しめます。",
      "en": "A sweet, easy-drinking combination of red wine and ginger ale."
    },
    "ingredients": {
      "ja": "赤ワイン、ジンジャーエール",
      "en": "Red wine, ginger ale"
    },
    "recommendation": {
      "ja": "赤ワインの重さが苦手な方でも、飲みやすく甘いカクテルをお探しの方に。",
      "en": "For guests who find red wine too heavy but want a sweet grape experience."
    }
  },
  {
    "id": "cocktail-kir",
    "category": "cocktails",
    "image": "images/kir.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "12%",
    "tags": [
      "light",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "キール",
      "en": "Kir"
    },
    "description": {
      "ja": "辛口白ワインにカシスリキュールを合わせた、フランス発祥の優雅でフルーティなカクテル。",
      "en": "A classic French aperitif combining dry white wine with sweet crème de cassis."
    },
    "ingredients": {
      "ja": "白ワイン、カシスリキュール",
      "en": "White wine, crème de cassis"
    },
    "recommendation": {
      "ja": "フルーティなカシスと白ワインのすっきりとしたキレのバランスを楽しみたい方に。",
      "en": "An excellent aperitif for those who love berries and wine."
    }
  },
  {
    "id": "non-alcoholic-cinderella",
    "category": "mocktails",
    "image": "images/cinderella.jpg",
    "price": "¥900",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "シンデレラ",
      "en": "Cinderella"
    },
    "description": {
      "ja": "オレンジ、パイン、レモンジュースをシェイクした、フルーティで甘酸っぱいトロピカルノンアルコール。",
      "en": "A tropical, alcohol-free blend of orange, pineapple, and lemon juices."
    },
    "ingredients": {
      "ja": "オレンジジュース、パイナップルジュース、レモンジュース",
      "en": "Orange, pineapple, and lemon juices"
    },
    "recommendation": {
      "ja": "お酒が飲めない時でも、シェーカーで作る本格的なバーの雰囲気を楽しみたい方に。",
      "en": "For non-drinkers who want a professionally shaken fruit cocktail."
    }
  },
  {
    "id": "non-alcoholic-shirley-temple",
    "category": "mocktails",
    "image": "images/shirley-temple.jpg",
    "price": "¥900",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sweet"
    ],
    "name": {
      "ja": "シャーリーテンプル",
      "en": "Shirley Temple"
    },
    "description": {
      "ja": "ジンジャーエールにザクロ（グレナデン）シロップの甘みを加え、チェリーを添えた大人気モクテル。",
      "en": "A sweet and fizzy combination of ginger ale and pomegranate syrup, topped with a cherry."
    },
    "ingredients": {
      "ja": "ジンジャーエール、グレナデンシロップ、チェリー",
      "en": "Ginger ale, grenadine syrup, cherry"
    },
    "recommendation": {
      "ja": "甘口で喉越しの良い、すっきりした炭酸モクテルをお探しの方に。",
      "en": "A classic sweet and bubbly alcohol-free drink loved by everyone."
    }
  },
  {
    "id": "non-alcoholic-sunset-peach",
    "category": "mocktails",
    "image": "images/sunset-peach.jpg",
    "price": "¥900",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "サンセットピーチ",
      "en": "Sunset Peach"
    },
    "description": {
      "ja": "ピーチジュースにオレンジとクランベリーを重ね、夕暮れのようなグラデーションを描く一杯。",
      "en": "A gorgeous peach mocktail layered with orange and cranberry to represent a sunset."
    },
    "ingredients": {
      "ja": "ピーチネクター、オレンジ、クランベリージュース",
      "en": "Peach nectar, orange juice, cranberry juice"
    },
    "recommendation": {
      "ja": "濃厚で甘く、美しい見た目のノンアルコールを楽しみたい方に。",
      "en": "For guests seeking a sweet, visually stunning fruit mocktail."
    }
  },
  {
    "id": "non-alcoholic-virgin-sea-breeze",
    "category": "mocktails",
    "image": "images/virgin-sea-breeze.jpg",
    "price": "¥900",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "fruity",
      "bitter"
    ],
    "name": {
      "ja": "バージンシーブリーズ",
      "en": "Virgin Sea Breeze"
    },
    "description": {
      "ja": "クランベリージュースの甘酸っぱさと、グレープフルーツのさっぱりとした渋みの爽快なモクテル。",
      "en": "A refreshing mix of tart cranberry juice and bitter-sweet grapefruit juice."
    },
    "ingredients": {
      "ja": "クランベリージュース、グレープフルーツジュース",
      "en": "Cranberry juice, grapefruit juice"
    },
    "recommendation": {
      "ja": "甘すぎず、クランベリーのキリッとした酸味がお好きな方に。",
      "en": "Perfect for guests who prefer sour fruit notes without heavy sweetness."
    }
  },
  {
    "id": "non-alcoholic-virgin-passion",
    "category": "mocktails",
    "image": "images/virgin-passion.jpg",
    "price": "¥900",
    "size": {
      "ja": "ロング",
      "en": "Long glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sweet",
      "fruity"
    ],
    "name": {
      "ja": "バージンパッション",
      "en": "Virgin Passion"
    },
    "description": {
      "ja": "パッションフルーツの豊かなトロピカルアロマと、オレンジ＆パインの心地よい余韻。",
      "en": "A vibrant blend highlighting passion fruit aroma with orange and pineapple."
    },
    "ingredients": {
      "ja": "パッションフルーツシロップ、オレンジジュース、パイナップルジュース",
      "en": "Passion fruit syrup, orange juice, pineapple juice"
    },
    "recommendation": {
      "ja": "エキゾチックな南国フルーツの香りをたっぷり味わいたい方に。",
      "en": "For guests who want a bold, aromatic tropical fruit mocktail."
    }
  },
  {
    "id": "soft-drink-orange",
    "category": "mocktails",
    "image": "images/orange-juice.jpg",
    "price": "¥500",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "fruity",
      "sweet"
    ],
    "name": {
      "ja": "オレンジジュース",
      "en": "Orange Juice"
    },
    "description": {
      "ja": "果汁100%のジューシーなオレンジジュース。フレッシュで豊かな甘み。",
      "en": "100% pure, sweet orange juice with natural citrus fruitiness."
    },
    "ingredients": {
      "ja": "オレンジ果汁",
      "en": "Orange juice"
    },
    "recommendation": {
      "ja": "シンプルでジューシーな柑橘ドリンクをお求めの方に。",
      "en": "A simple and natural fruit juice option."
    }
  },
  {
    "id": "soft-drink-pineapple",
    "category": "mocktails",
    "image": "images/pineapple-juice.jpg",
    "price": "¥500",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "fruity",
      "sweet"
    ],
    "name": {
      "ja": "パイナップルジュース",
      "en": "Pineapple Juice"
    },
    "description": {
      "ja": "濃厚で甘酸っぱいトロピカルパイナップル果汁。フルーティな香り。",
      "en": "Rich and sweet pineapple juice full of tropical aroma."
    },
    "ingredients": {
      "ja": "パイナップル果汁",
      "en": "Pineapple juice"
    },
    "recommendation": {
      "ja": "甘みが強いトロピカル系のジュースをお求めの方に。",
      "en": "A rich, sweet tropical juice."
    }
  },
  {
    "id": "soft-drink-cranberry",
    "category": "mocktails",
    "image": "images/cranberry-juice.jpg",
    "price": "¥500",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "fruity"
    ],
    "name": {
      "ja": "クランベリージュース",
      "en": "Cranberry Juice"
    },
    "description": {
      "ja": "キリッとした酸味と渋みが特徴のクランベリージュース。さっぱりした甘さ。",
      "en": "A clean, slightly tart cranberry juice with a refreshing finish."
    },
    "ingredients": {
      "ja": "クランベリー果汁",
      "en": "Cranberry juice"
    },
    "recommendation": {
      "ja": "甘すぎず、ベリー系の酸味ですっきりしたい方に。",
      "en": "For those seeking a refreshing, tart berry beverage."
    }
  },
  {
    "id": "soft-drink-grapefruit",
    "category": "mocktails",
    "image": "images/grapefruit-juice.jpg",
    "price": "¥500",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "fruity",
      "bitter"
    ],
    "name": {
      "ja": "グレープフルーツジュース",
      "en": "Grapefruit Juice"
    },
    "description": {
      "ja": "グレープフルーツ独特のほろ苦さと果実感。のどの渇きを潤す一杯。",
      "en": "Juicy grapefruit juice with a characteristic clean, slightly bitter edge."
    },
    "ingredients": {
      "ja": "グレープフルーツ果汁",
      "en": "Grapefruit juice"
    },
    "recommendation": {
      "ja": "渋みがあり、のどごしがすっきりするジュースがお好きな方に。",
      "en": "For guests who prefer refreshing bitterness over heavy sweetness."
    }
  },
  {
    "id": "soft-drink-coca-cola",
    "category": "mocktails",
    "image": "images/coca-cola.jpg",
    "price": "¥600",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sweet"
    ],
    "name": {
      "ja": "コカ・コーラ",
      "en": "Coca-Cola"
    },
    "description": {
      "ja": "のどごし抜群の定番コーラ。爽快な炭酸としっかりした甘み。",
      "en": "The world's favorite classic, bubbly, sweet carbonated soft drink."
    },
    "ingredients": {
      "ja": "コカ・コーラ",
      "en": "Coca-Cola"
    },
    "recommendation": {
      "ja": "冷たくて炭酸の効いた、お馴染みの定番をご希望の方に。",
      "en": "A chilled, carbonated classic."
    }
  },
  {
    "id": "soft-drink-ginger-ale",
    "category": "mocktails",
    "image": "images/ginger-ale.jpg",
    "price": "¥600",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic"
    ],
    "name": {
      "ja": "ジンジャーエール",
      "en": "Ginger Ale"
    },
    "description": {
      "ja": "ジンジャーの風味が心地よく香る炭酸飲料。さわやかな刺激。",
      "en": "A clean, bubbly ginger-flavored carbonated beverage."
    },
    "ingredients": {
      "ja": "ジンジャーエール",
      "en": "Ginger ale"
    },
    "recommendation": {
      "ja": "爽やかな喉ごしとスパイス感を楽しみたい方に。",
      "en": "For a bubbly, refreshing drink with a hint of ginger kick."
    }
  },
  {
    "id": "soft-drink-soda-water",
    "category": "mocktails",
    "image": "images/soda-water.jpg",
    "price": "¥600",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "0%",
    "tags": [
      "nonalcoholic",
      "sparkling"
    ],
    "name": {
      "ja": "ソーダウォーター",
      "en": "Soda Water"
    },
    "description": {
      "ja": "無糖のクリーンな強炭酸水。すっきりリフレッシュできます。",
      "en": "Clean, crisp, sugar-free carbonated sparkling water."
    },
    "ingredients": {
      "ja": "強炭酸水",
      "en": "Sparkling water"
    },
    "recommendation": {
      "ja": "甘みがなく、純粋に炭酸水ですっきりしたい方に。",
      "en": "For guests seeking a completely calorie-free, carbonated refresher."
    }
  },
  {
    "id": "whisky-ardbeg-10",
    "category": "whisky",
    "image": "images/ardbeg-10-years.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "46%",
    "tags": [
      "strong",
      "bitter",
      "islay"
    ],
    "name": {
      "ja": "アードベッグ10年",
      "en": "Ardbeg 10 Years"
    },
    "description": {
      "ja": "アイラウイスキーの中で最もピーティでスモーキー。繊細なピートの深みとレモンの爽快さ。",
      "en": "One of the peatiest and smokiest Islay malts. Complex, intensely smoky, yet balanced with citrus fruitiness."
    },
    "ingredients": {
      "ja": "アイラシングルモルトウイスキー",
      "en": "Islay Single Malt Whisky"
    },
    "recommendation": {
      "ja": "強烈な泥炭香とスモーキーなアイラを愛する方に。",
      "en": "For true enthusiasts of intense peat smoke and seaside brine."
    }
  },
  {
    "id": "whisky-laphroaig-10",
    "category": "whisky",
    "image": "images/laphroaig-10-years.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "bitter",
      "islay"
    ],
    "name": {
      "ja": "ラフロイグ10年",
      "en": "Laphroaig 10 Years"
    },
    "description": {
      "ja": "「アイラの王様」と称され、薬品を思わせる独特のヨード香、力強いピート、塩辛い海風の味わい。",
      "en": "The iconic medicinal malt. Bold peat smoke, seaweed salinity, and a sweet, smoky finish."
    },
    "ingredients": {
      "ja": "アイラシングルモルトウイスキー",
      "en": "Islay Single Malt Whisky"
    },
    "recommendation": {
      "ja": "唯一無二の薬品的なヨード香と強烈なピートに魅せられたい方に。",
      "en": "Perfect for lovers of deeply medicinal, maritime single malts."
    }
  },
  {
    "id": "whisky-lagavulin-16",
    "category": "whisky",
    "image": "images/lagavulin-16-years.jpg",
    "price": "¥1,900",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "islay",
      "signature"
    ],
    "name": {
      "ja": "ラガヴーリン16年",
      "en": "Lagavulin 16 Years"
    },
    "description": {
      "ja": "極めてドライで豊かなスモーキーさ。アイラの代表格で、ピート香の中に甘いバニラやドライフルーツが重なります。",
      "en": "A dry, peat-rich Speyside standard. Deep, elegant peat smoke with layers of vanilla and dried fruits."
    },
    "ingredients": {
      "ja": "アイラシングルモルトウイスキー",
      "en": "Islay Single Malt Whisky"
    },
    "recommendation": {
      "ja": "圧倒的な深みと長い余韻のラグジュアリーなアイラを求められる方に。",
      "en": "For guests seeking a velvety, mature, and peat-rich Scottish masterpiece."
    }
  },
  {
    "id": "whisky-bowmore-12",
    "category": "whisky",
    "image": "images/bowmore-12-years.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "strong",
      "islay"
    ],
    "name": {
      "ja": "ボウモア12年",
      "en": "Bowmore 12 Years"
    },
    "description": {
      "ja": "アイラ島最古の蒸留所。「アイラの女王」と呼ばれ、適度なスモーキーさと潮風、レモンの爽やかさの絶妙なバランス。",
      "en": "From the oldest distillery on Islay. Balanced peat smoke, ocean air, and fresh citrus."
    },
    "ingredients": {
      "ja": "アイラシングルモルトウイスキー",
      "en": "Islay Single Malt Whisky"
    },
    "recommendation": {
      "ja": "ピートが強すぎず、上品で親しみやすいアイラウイスキーを楽しみたい方に。",
      "en": "An approachable entry to Islay, with mild peat and sea air."
    }
  },
  {
    "id": "whisky-macallan-12",
    "category": "whisky",
    "image": "images/the-macallan-12-years.png",
    "price": "¥1,900",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "strong",
      "sweet",
      "speyside",
      "signature"
    ],
    "name": {
      "ja": "ザ・マッカラン12年",
      "en": "The Macallan 12 Years"
    },
    "description": {
      "ja": "「シングルモルトのロールスロイス」。伝統的なシェリー樽で熟成された、ドライフルーツやスパイス、甘美なオーク香。",
      "en": "Often called the 'Rolls-Royce of Single Malts'. Rich dried fruits, wood smoke, and spice from sherry casks."
    },
    "ingredients": {
      "ja": "スペイサイドシングルモルトウイスキー",
      "en": "Speyside Single Malt Whisky"
    },
    "recommendation": {
      "ja": "華やかで上品、贅沢なシェリー樽ウイスキーを堪能したい方に。",
      "en": "For whiskey fans who love elegant, sweet sherry-oak character."
    },
    "badge": "staffPick"
  },
  {
    "id": "whisky-glenmorangie",
    "category": "whisky",
    "image": "images/glenmorangie.webp",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "strong",
      "fruity",
      "speyside"
    ],
    "name": {
      "ja": "グレンモーレンジ",
      "en": "Glenmorangie"
    },
    "description": {
      "ja": "スコットランドで最も背の高い蒸留器を使用。柑橘系の爽やかさとバニラ、そしてフローラルな心地よいアロマ。",
      "en": "Distilled in Scotland's tallest stills. Highly delicate with notes of vanilla, citrus, and flowers."
    },
    "ingredients": {
      "ja": "ハイランドシングルモルトウイスキー",
      "en": "Highland Single Malt Whisky"
    },
    "recommendation": {
      "ja": "軽やかでフルーティ、シルキーな飲み口がお好きな方に。",
      "en": "For fans of delicate, floral, and highly smooth Highland Scotch."
    }
  },
  {
    "id": "whisky-dewars",
    "category": "whisky",
    "image": "images/dewars.png",
    "price": "¥900",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "light",
      "blended"
    ],
    "name": {
      "ja": "デュワーズ",
      "en": "Dewar's"
    },
    "description": {
      "ja": "世界中で愛されるブレンデッドスコッチ。ハチミツや洋ナシの甘みが溶け込んだスムーズな味わい。",
      "en": "A globally celebrated blended Scotch whisky. Extremely smooth with notes of honey and ripe pear."
    },
    "ingredients": {
      "ja": "ブレンデッドスコッチウイスキー",
      "en": "Blended Scotch Whisky"
    },
    "recommendation": {
      "ja": "カジュアルでバランスの取れた、ハイボールに最適な一杯をお求めの方に。",
      "en": "Perfect for a refreshing, everyday Scotch highball."
    }
  },
  {
    "id": "whisky-canadian-club",
    "category": "whisky",
    "image": "images/canadian-club.jpg",
    "price": "¥900",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "light",
      "sweet",
      "blended"
    ],
    "name": {
      "ja": "カナディアンクラブ",
      "en": "Canadian Club"
    },
    "description": {
      "ja": "「C.C.」の愛称で親しまれるカナディアン。ライトで非常にクリーン、すっきりとした甘みが特徴。",
      "en": "Affectionately called 'C.C.'. Light, clean, and highly approachable with a gentle sweetness."
    },
    "ingredients": {
      "ja": "カナディアンウイスキー",
      "en": "Canadian Whisky"
    },
    "recommendation": {
      "ja": "ウイスキー特有の重さが苦手で、軽くすっきり飲みたい方に。",
      "en": "For guests seeking a light, pleasant, and easy-drinking Canadian glass."
    }
  },
  {
    "id": "whisky-chivas-mizunara-12",
    "category": "whisky",
    "image": "images/chivas-mizunara-12-years.jpg",
    "price": "¥1,300",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "strong",
      "fruity",
      "blended"
    ],
    "name": {
      "ja": "シーバスミズナラ12年",
      "en": "Chivas Regal Mizunara 12 Years"
    },
    "description": {
      "ja": "日本向けにブレンドされ、希少なミズナラ樽でフィニッシュ。スパイシーさと熟した果実の芳醇な香り。",
      "en": "Crafted specifically for Japan and finished in rare Mizunara oak casks. Fruity, sweet, with a hint of spice."
    },
    "ingredients": {
      "ja": "ブレンデッドスコッチウイスキー",
      "en": "Blended Scotch Whisky"
    },
    "recommendation": {
      "ja": "ミズナラ樽由来の和のオリエンタルなアロマを感じてみたい方に。",
      "en": "For guests curious about Oriental oak aromas in a smooth Scotch blend."
    }
  },
  {
    "id": "whisky-makers-mark",
    "category": "whisky",
    "image": "images/makers-mark.png",
    "price": "¥1,000",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "45%",
    "tags": [
      "strong",
      "sweet",
      "bourbon"
    ],
    "name": {
      "ja": "メーカーズマーク",
      "en": "Maker's Mark"
    },
    "description": {
      "ja": "冬小麦を使用した、赤い封蝋が印象的なハンドメイドバーボン。バニラやハチミツのふっくらとした甘み。",
      "en": "A soft, wheated bourbon crafted with care. Distinctively sweet with vanilla and honey notes."
    },
    "ingredients": {
      "ja": "バーボンウイスキー",
      "en": "Bourbon Whiskey"
    },
    "recommendation": {
      "ja": "トウモロコシと小麦由来の優しくまろやかな甘みのバーボンをお求めの方に。",
      "en": "A sweet, smooth, wheated bourbon classic."
    }
  },
  {
    "id": "whisky-iw-harper-gold",
    "category": "whisky",
    "image": "images/iw-harper-gold.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "40%",
    "tags": [
      "light",
      "sweet",
      "bourbon"
    ],
    "name": {
      "ja": "I.W.ハーパーゴールド",
      "en": "I.W. Harper Gold"
    },
    "description": {
      "ja": "スタイリッシュなゴールドメダル。コーン比率が高く、都会的でキレのある爽快な甘みが魅力。",
      "en": "A highly stylish gold-medal bourbon. High corn ratio delivers a crisp, bright sweetness."
    },
    "ingredients": {
      "ja": "バーボンウイスキー",
      "en": "Bourbon Whiskey"
    },
    "recommendation": {
      "ja": "ソーダで割った爽快でキレの良い「ハーパー・ハイボール」を飲みたい方に。",
      "en": "Excellent in a crisp, bubbly bourbon highball."
    }
  },
  {
    "id": "whisky-obscured-bourbon-1",
    "category": "whisky",
    "image": "images/obscured-bourbon-1.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "bourbon"
    ],
    "name": {
      "ja": "厳選バーボン（ボトル1）",
      "en": "Select Bourbon (Bottle 1)"
    },
    "description": {
      "ja": "ラベル非公開のプレミアムな限定バーボン。オーク樽の強い風味と心地よいキャラメルのアロマ。",
      "en": "A premium select bourbon with label details kept private. Features strong oak char and caramel."
    },
    "ingredients": {
      "ja": "バーボンウイスキー",
      "en": "Bourbon Whiskey"
    },
    "recommendation": {
      "ja": "特別なバーボンの樽香とリッチな甘さをテイスティングしてみたい方に。",
      "en": "For curious guests wishing to sample a private bourbon barrel profile."
    }
  },
  {
    "id": "whisky-obscured-bourbon-2",
    "category": "whisky",
    "image": "images/obscured-bourbon-2.jpg",
    "price": "¥1,600",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "46%",
    "tags": [
      "strong",
      "bourbon"
    ],
    "name": {
      "ja": "限定バーボン（ボトル2）",
      "en": "Limited Bourbon (Bottle 2)"
    },
    "description": {
      "ja": "高アルコール度数のプライベートリザーブバーボン。濃厚なメープルとレザーのような深いコク。",
      "en": "A high-proof private reserve bourbon. Rich maple syrup notes with deep, leathery complexity."
    },
    "ingredients": {
      "ja": "バーボンウイスキー",
      "en": "Bourbon Whiskey"
    },
    "recommendation": {
      "ja": "力強く燃えるような骨太のバーボンをお探しの方に。",
      "en": "For guests seeking a bold, high-proof, and complex bourbon."
    }
  },
  {
    "id": "whisky-hakushu-single-malt-nv",
    "category": "whisky",
    "image": "images/hakushu-single-malt-nv.jpg",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "light",
      "fruity",
      "japanese"
    ],
    "name": {
      "ja": "白州シングルNV",
      "en": "Hakushu Single Malt NV"
    },
    "description": {
      "ja": "南アルプスの森が育んだシングルモルト。みずみずしい新緑の香りと爽やかなミント、そしてほのかなスモーキーさ。",
      "en": "From the mountain forest distillery. Fresh herbal notes, crisp green apple, and a clean, smoky touch."
    },
    "ingredients": {
      "ja": "ジャパニーズシングルモルトウイスキー",
      "en": "Japanese Single Malt Whisky"
    },
    "recommendation": {
      "ja": "「森香るハイボール」で、澄んだ空気のようなリフレッシュを体験したい方に。",
      "en": "Highly recommended as a fresh, forest-scented highball."
    }
  },
  {
    "id": "whisky-hakushu-12",
    "category": "whisky",
    "image": "images/hakushu-12-years.png",
    "price": "¥1,800",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "fruity",
      "japanese",
      "signature"
    ],
    "name": {
      "ja": "白州12年",
      "en": "Hakushu 12 Years"
    },
    "description": {
      "ja": "熟成12年以上の原酒を使用。ふっくらとした果実香と豊かなコク、奥行きのあるスモーキーな余韻が長く続きます。",
      "en": "Aged 12 years in the forest. Rich green fruits, sweet pear, and a deep, complex smoky end."
    },
    "ingredients": {
      "ja": "ジャパニーズシングルモルトウイスキー",
      "en": "Japanese Single Malt Whisky"
    },
    "recommendation": {
      "ja": "プレミアムな日本の森のウイスキーの気品をじっくり味わいたい方に。",
      "en": "A luxurious Japanese single malt to enjoy neat or with hand-carved ice."
    }
  },
  {
    "id": "whisky-yamazaki-single-malt-nv",
    "category": "whisky",
    "image": "images/yamazaki-single-malt-nv.webp",
    "price": "¥1,500",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "fruity",
      "japanese"
    ],
    "name": {
      "ja": "山崎シングルNV",
      "en": "Yamazaki Single Malt NV"
    },
    "description": {
      "ja": "サントリーが誇る日本最古の蒸留所。イチゴやサクランボのような赤いベリー系の果実味、上品なオークの味わい。",
      "en": "From Japan's oldest malt distillery. Multi-layered with red berry fruits and sweet Japanese oak (Mizunara)."
    },
    "ingredients": {
      "ja": "ジャパニーズシングルモルトウイスキー",
      "en": "Japanese Single Malt Whisky"
    },
    "recommendation": {
      "ja": "日本のウイスキーの原点であり、華やかなベリー感を体験したい方に。",
      "en": "The gold standard of Japanese single malts, layered and fruity."
    }
  },
  {
    "id": "whisky-yamazaki-12",
    "category": "whisky",
    "image": "images/yamazaki-12-years.webp",
    "price": "¥1,800",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "fruity",
      "japanese",
      "signature"
    ],
    "name": {
      "ja": "山崎12年",
      "en": "Yamazaki 12 Years"
    },
    "description": {
      "ja": "日本の代表的な12年モルト。ミズナラ樽のオリエンタルな伽羅香、バニラや桃を思わせるクリーミーで熟した果実の余韻。",
      "en": "The pioneer of Japanese single malts. Rich Mizunara oak spiciness, dried peach, and long, sweet vanilla."
    },
    "ingredients": {
      "ja": "ジャパニーズシングルモルトウイスキー",
      "en": "Japanese Single Malt Whisky"
    },
    "recommendation": {
      "ja": "国内外で絶賛される、日本のモルトウイスキーの最高峰を堪能したい方に。",
      "en": "A masterfully balanced, internationally award-winning Japanese legend."
    }
  },
  {
    "id": "whisky-hibiki",
    "category": "whisky",
    "image": "images/hibiki.png",
    "price": "¥1,800",
    "size": {
      "ja": "シングル/ダブル/ロック",
      "en": "Neat / Rocks / Highball"
    },
    "abv": "43%",
    "tags": [
      "strong",
      "sweet",
      "japanese",
      "signature"
    ],
    "name": {
      "ja": "響",
      "en": "Hibiki"
    },
    "description": {
      "ja": "「日本の四季」を体現した24面カットのボトル。多種多様なモルトとグレーンが奏でる、オーケストラのような調和とハチミツの甘み。",
      "en": "A harmony of multiple malts and grains representing the Japanese seasons. Sweeter honey and floral notes."
    },
    "ingredients": {
      "ja": "ジャパニーズブレンデッドウイスキー",
      "en": "Japanese Blended Whisky"
    },
    "recommendation": {
      "ja": "究極に滑らかで、華やかに広がるブレンドの芸術品を楽しみたい方に。",
      "en": "Highly elegant, smooth, and aromatic. Perfect for slow contemplation."
    }
  },
  {
    "id": "beer-premium-malts-draft",
    "category": "beers",
    "image": "images/premium-malts-draft.jpg",
    "price": "¥900",
    "size": {
      "ja": "タンブラー",
      "en": "Tumbler / Pint"
    },
    "abv": "5.5%",
    "tags": [
      "light"
    ],
    "name": {
      "ja": "プレミアムモルツ（生）",
      "en": "Premium Malt's Draft"
    },
    "description": {
      "ja": "華やかな香りと深いコク、クリーミーな神泡がたまらないプレミアムビール。徹底された品質で提供。",
      "en": "Suntory's premium pilsner draft. Features aromatic hops, deep maltiness, and super creamy foam."
    },
    "ingredients": {
      "ja": "生ビール",
      "en": "Draft beer"
    },
    "recommendation": {
      "ja": "最初の一杯に、完璧に冷えた日本のプレミアムドラフト生ビールを飲みたい方に。",
      "en": "Perfect for starting your evening with an ice-cold, creamy Japanese lager."
    },
    "badge": "bestSeller"
  },
  {
    "id": "beer-corona",
    "category": "beers",
    "image": "images/corona.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "4.5%",
    "tags": [
      "light",
      "fruity"
    ],
    "name": {
      "ja": "コロナ",
      "en": "Corona"
    },
    "description": {
      "ja": "メキシコ生まれの爽快なラガー。ライムを瓶に押し込み、すっきりクリーンに喉を潤します。",
      "en": "The refreshing Mexican pale lager, served with a fresh lime wedge in the bottle."
    },
    "ingredients": {
      "ja": "輸入ビール（メキシコ）",
      "en": "Imported beer (Mexico)"
    },
    "recommendation": {
      "ja": "ライムの酸味が効いた、軽快で爽やかなボトルビールが好きな方に。",
      "en": "For those seeking a light, breezy drink straight from the bottle."
    }
  },
  {
    "id": "beer-heineken",
    "category": "beers",
    "image": "images/heineken.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "5%",
    "tags": [
      "light"
    ],
    "name": {
      "ja": "ハイネケン",
      "en": "Heineken"
    },
    "description": {
      "ja": "オランダを代表するピュアモルトラガー。バランスの取れたフルーティさとほのかなポップの苦味。",
      "en": "A globally famous Dutch pilsner. Clean, balanced, with subtle fruitiness and a crisp finish."
    },
    "ingredients": {
      "ja": "輸入ビール（オランダ）",
      "en": "Imported beer (Netherlands)"
    },
    "recommendation": {
      "ja": "キレがありクセの少ない、王道のヨーロッパビールをお求めの方に。",
      "en": "For fans of clean, reliable European pilsner malt lagers."
    }
  },
  {
    "id": "beer-san-miguel-light",
    "category": "beers",
    "image": "images/san-miguel-light.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "5%",
    "tags": [
      "light"
    ],
    "name": {
      "ja": "サンミゲライト",
      "en": "San Miguel Light"
    },
    "description": {
      "ja": "フィリピン発祥の低カロリーなライトビール。のどごしが非常に軽やかでクリーンな後味。",
      "en": "A popular low-calorie Filipino lager. Extremely light, smooth, and crisp."
    },
    "ingredients": {
      "ja": "輸入ビール（フィリピン）",
      "en": "Imported beer (Philippines)"
    },
    "recommendation": {
      "ja": "何杯でも飲めるほど軽快で、すっきりしたボトルビールがお好きな方に。",
      "en": "An easy-going, light-bodied beer that keeps the night going."
    }
  },
  {
    "id": "beer-asahi-super-dry",
    "category": "beers",
    "image": "images/asahi-super-dry.jpg",
    "price": "¥1,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "5%",
    "tags": [
      "light",
      "craft"
    ],
    "name": {
      "ja": "アサヒスーパードライ",
      "en": "Asahi Super Dry"
    },
    "description": {
      "ja": "日本の代表的な辛口ラガー。「洗練されたクリアな味、辛口」のキレと鮮烈なのどごし。",
      "en": "Japan's signature dry lager. Extremely crisp, clean, with a sharp, refreshing throat-feel."
    },
    "ingredients": {
      "ja": "ボトルビール（日本）",
      "en": "Bottled beer (Japan)"
    },
    "recommendation": {
      "ja": "雑味がなく、雑味ゼロの極めてシャープなキレ味をお求めの方に。",
      "en": "For fans of maximum dryness and a clean, sharp finish."
    }
  },
  {
    "id": "wine-red-bottle",
    "category": "wines",
    "image": "images/red-wine-bottle.jpg",
    "price": "¥7,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "13.5%",
    "tags": [
      "red",
      "strong"
    ],
    "name": {
      "ja": "赤ワイン（ボトル） - エノクラレンス・ティロン",
      "en": "Red Wine (Bottle) - Eno Clarense Tyron"
    },
    "description": {
      "ja": "黒スグリやダークチェリーの力強い果実香に、樽熟成由来の心地よいバニラやトーストのニュアンスが重なるフルボディ。",
      "en": "A full-bodied red with bold blackcurrant, dark cherry aromas, and smooth oaky tannins."
    },
    "ingredients": {
      "ja": "赤ワイン（フランス・ボルドー）",
      "en": "Red Wine (Bordeaux, France)"
    },
    "recommendation": {
      "ja": "生ハムやチーズなどの肉料理やおつまみとゆっくり合わせたい方に。",
      "en": "Ideal for sharing alongside cured ham or rich cheese plates."
    }
  },
  {
    "id": "wine-red-glass",
    "category": "wines",
    "image": "images/red-wine-glass.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "13%",
    "tags": [
      "red"
    ],
    "name": {
      "ja": "グラス赤ワイン",
      "en": "Glass of Red Wine"
    },
    "description": {
      "ja": "日替わりのハウス赤ワイン。渋みが柔らかく、豊かな果実感とベリー系の親しみやすい香り。",
      "en": "Our daily house selection of red wine. Smooth tannins, fruity blackberry aromas, and easy drinking."
    },
    "ingredients": {
      "ja": "グラス赤ワイン",
      "en": "Glass of Red Wine"
    },
    "recommendation": {
      "ja": "まずは一杯、気軽にワインとバーの夜を始めたい方に。",
      "en": "An easy-going glass to pair with light snacks."
    }
  },
  {
    "id": "wine-white-bottle",
    "category": "wines",
    "image": "images/white-wine-bottle.jpg",
    "price": "¥7,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12.5%",
    "tags": [
      "white",
      "light"
    ],
    "name": {
      "ja": "白ワイン（ボトル） - エノクラレンドル・ブラン",
      "en": "White Wine (Bottle) - Eno Clarendor Blanc"
    },
    "description": {
      "ja": "柑橘類やハーブ、青リンゴのみずみずしい酸味と、クリーンでミネラル感溢れる爽快な余韻が美しい辛口。",
      "en": "A crisp, dry white featuring citrus, fresh herb notes, and a clean mineral-rich acidity."
    },
    "ingredients": {
      "ja": "白ワイン（フランス・ボルドー）",
      "en": "White Wine (Bordeaux, France)"
    },
    "recommendation": {
      "ja": "冷たくキリッとした白ワインをボトルでシェアしたい方に。",
      "en": "Perfect for guests who want to share a chilled, crisp bordeaux bottle."
    }
  },
  {
    "id": "wine-white-glass",
    "category": "wines",
    "image": "images/white-wine-glass.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "グラス",
      "en": "Glass"
    },
    "abv": "12%",
    "tags": [
      "white"
    ],
    "name": {
      "ja": "グラス白ワイン",
      "en": "Glass of White Wine"
    },
    "description": {
      "ja": "本日のハウス白ワイン。レモンやグレープフルーツを思わせる柑橘の爽やかさと軽快な飲み口。",
      "en": "Our daily house selection of white wine. Refreshing acidity, citrus notes, and a clean throat-feel."
    },
    "ingredients": {
      "ja": "グラス白ワイン",
      "en": "Glass of White Wine"
    },
    "recommendation": {
      "ja": "お食事前の最初の一杯や、爽やかにのどを潤したい方に。",
      "en": "A refreshing aperitif option to start the evening."
    }
  },
  {
    "id": "champagne-moet-and-chandon",
    "category": "champagne",
    "image": "images/moet-and-chandon.png",
    "price": "¥21,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12%",
    "tags": [
      "sparkling",
      "white",
      "signature"
    ],
    "name": {
      "ja": "モエ・エ・シャンドン",
      "en": "Moët & Chandon"
    },
    "description": {
      "ja": "世界で最も愛されるシャンパン。青リンゴや柑橘の鮮やかなアロマ、しなやかな泡立ちと豊かなミネラル感。",
      "en": "The world's most famous Champagne. Crisp green apple, white flowers, with elegant bubbles and complexity."
    },
    "ingredients": {
      "ja": "シャンパン（フランス）",
      "en": "Champagne (France)"
    },
    "recommendation": {
      "ja": "お祝い事や特別な乾杯、ゴージャスな夜の始まりに。",
      "en": "Perfect for celebratory toasts and special bar nights."
    }
  },
  {
    "id": "champagne-veuve-yellow",
    "category": "champagne",
    "image": "images/veuve-yellow.png",
    "price": "¥26,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12%",
    "tags": [
      "sparkling",
      "white"
    ],
    "name": {
      "ja": "ヴーヴ・イエロー",
      "en": "Veuve Yellow"
    },
    "description": {
      "ja": "黄色いラベルの王道ヴーヴ。力強い泡立ち、焼きたてのパンや洋ナシを思わせるフルーティで芳醇なコク。",
      "en": "The signature Veuve Clicquot Yellow Label. Complex, fruity, with bready yeast notes and bold structure."
    },
    "ingredients": {
      "ja": "シャンパン（フランス）",
      "en": "Champagne (France)"
    },
    "recommendation": {
      "ja": "しっかりしたコクとフルーティさを両立させた上質な一杯をボトルで楽しみたい方に。",
      "en": "For a structured, robust, and highly rewarding Champagne experience."
    }
  },
  {
    "id": "champagne-veuve-white",
    "category": "champagne",
    "image": "images/veuve-white.jpg",
    "price": "¥70,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12%",
    "tags": [
      "sparkling",
      "white",
      "sweet"
    ],
    "name": {
      "ja": "ヴーヴ・ホワイト",
      "en": "Veuve White"
    },
    "description": {
      "ja": "ヴーヴ・クリコの甘口シャンパン（ドゥミ・セック）。ピーチやアプリコットの芳醇な甘みと上品な酸味のハーモニー。",
      "en": "Veuve Clicquot Demi-Sec. A sweeter Champagne style offering rich notes of peach, honey, and ripe pear."
    },
    "ingredients": {
      "ja": "甘口シャンパン（フランス）",
      "en": "Sweet Champagne (France)"
    },
    "recommendation": {
      "ja": "辛口が苦手な方や、デザート感覚で上品な甘口シャンパンを飲みたい方に。",
      "en": "A beautiful sweet luxury bottle for guests who dislike dry sparkling wine."
    }
  },
  {
    "id": "champagne-krug",
    "category": "champagne",
    "image": "images/krug.jpg",
    "price": "¥95,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12%",
    "tags": [
      "sparkling",
      "white",
      "strong",
      "signature"
    ],
    "name": {
      "ja": "クリュッグ",
      "en": "Krug"
    },
    "description": {
      "ja": "「シャンパンの帝王」と称される最高峰。オーク樽発酵による重厚な熟成感、蜂蜜、ナッツ、圧倒的な深み。",
      "en": "Known as the 'King of Champagne'. Rich oak-aged complexity, honey, toasted nuts, and endless depth."
    },
    "ingredients": {
      "ja": "プレミアムシャンパン（フランス）",
      "en": "Premium Champagne (France)"
    },
    "recommendation": {
      "ja": "至高の芸術とも評される、究極の贅沢と熟成感を追求される方に。",
      "en": "The ultimate luxury bottle for highly discerning champagne connoisseurs."
    }
  },
  {
    "id": "champagne-belle-epoque",
    "category": "champagne",
    "image": "images/belle-epoque.png",
    "price": "¥90,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12.5%",
    "tags": [
      "sparkling",
      "white",
      "fruity"
    ],
    "name": {
      "ja": "ベル・エポック",
      "en": "Belle Époque"
    },
    "description": {
      "ja": "ボトルにアネモネの花が描かれた芸術品。白い花、桃、グレープフルーツの上品で繊細なフローラルアロマ。",
      "en": "Iconic bottle adorned with anemones. Delicate floral aromas, white peach, grapefruit, and absolute silkiness."
    },
    "ingredients": {
      "ja": "プレミアムシャンパン（フランス）",
      "en": "Premium Champagne (France)"
    },
    "recommendation": {
      "ja": "優雅でフローラルな香りと、滑らかなのどごしに包まれたい夜に。",
      "en": "For a highly elegant, floral, and romantic champagne selection."
    }
  },
  {
    "id": "champagne-dom-perignon",
    "category": "champagne",
    "image": "images/dom-perignon.jpg",
    "price": "¥75,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12.5%",
    "tags": [
      "sparkling",
      "white",
      "signature"
    ],
    "name": {
      "ja": "ドン・ペリニヨン",
      "en": "Dom Pérignon"
    },
    "description": {
      "ja": "「ドンペリ」の愛称で名高い王道。長い酵母熟成によるトースト香、ドライフルーツ、完璧なバランスとキレ。",
      "en": "The iconic vintage Champagne. Toasty yeast notes, dried fruits, perfectly balanced acidity and prestige."
    },
    "ingredients": {
      "ja": "プレミアムシャンパン（フランス）",
      "en": "Premium Vintage Champagne (France)"
    },
    "recommendation": {
      "ja": "世界のセレブリティに愛される、圧倒的ステータスと完成された味わいをシェアしたい方に。",
      "en": "The legendary vintage bottle to mark milestones and celebratory evenings."
    }
  },
  {
    "id": "champagne-armand-gold",
    "category": "champagne",
    "image": "images/armand-gold.webp",
    "price": "¥220,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12.5%",
    "tags": [
      "sparkling",
      "white",
      "strong"
    ],
    "name": {
      "ja": "アルマンド・ゴールド",
      "en": "Armand Gold"
    },
    "description": {
      "ja": "黄金のボトル「アルマンドブリニャック」。アプリコットやハニー、焼きたてのブリオッシュのリッチな香りとクリーミーな舌触り。",
      "en": "The striking gold Armand de Brignac. Ultra-premium, rich honey, peach notes, creamy texture, and long finish."
    },
    "ingredients": {
      "ja": "ウルトラプレミアムシャンパン",
      "en": "Ultra-Premium Champagne (France)"
    },
    "recommendation": {
      "ja": "圧倒的な華やかさと、最高峰のプレステージシャンパンを求める特別な瞬間に。",
      "en": "A show-stopping, highly prestigious bottle for ultimate milestones."
    }
  },
  {
    "id": "champagne-dom-perignon-p2",
    "category": "champagne",
    "image": "images/dom-perignon-p2.png",
    "price": "¥260,000",
    "size": {
      "ja": "ボトル",
      "en": "Bottle"
    },
    "abv": "12.5%",
    "tags": [
      "sparkling",
      "white",
      "strong",
      "signature"
    ],
    "name": {
      "ja": "ドン・ペリニヨンP2",
      "en": "Dom Pérignon P2"
    },
    "description": {
      "ja": "15年以上の歳月を経て第二のピーク（プレニチュード2）に達したドンペリ。圧倒的なエネルギーとミネラル感、至高の余韻。",
      "en": "Reached its second Plénitude peak after 15+ years of aging. Power, precision, and monumental finish."
    },
    "ingredients": {
      "ja": "ウルトラプレミアムシャンパン",
      "en": "Prestige Vintage Champagne (France)"
    },
    "recommendation": {
      "ja": "ドンペリの極限のポテンシャルと、言葉を失うような複雑さをテイスティングしたい方に。",
      "en": "For absolute purists seeking the apex of vintage Champagne maturation."
    }
  },
  {
    "id": "food-raw-ham",
    "category": "food",
    "image": "images/raw-ham.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "一皿",
      "en": "Plate"
    },
    "abv": "0%",
    "tags": [
      "light"
    ],
    "name": {
      "ja": "生ハム",
      "en": "Raw Ham"
    },
    "description": {
      "ja": "しっとりとした塩気とまろやかな脂肪のコク。ワインやビールはもちろん、ウイスキーやカクテルとも相性抜群。",
      "en": "Savory, thinly sliced cured ham. Its rich saltiness matches wine, beer, and classic cocktails perfectly."
    },
    "ingredients": {
      "ja": "生ハムスライス",
      "en": "Sliced cured ham"
    },
    "recommendation": {
      "ja": "塩気のある軽めのおつまみとして、すべてのドリンクのお供に。",
      "en": "Perfect as a savory, light bites to complement any beverage."
    },
    "badge": "staffPick"
  },
  {
    "id": "food-cheese-platter",
    "category": "food",
    "image": "images/cheese-platter.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "盛り合わせ",
      "en": "Platter"
    },
    "abv": "0%",
    "tags": [
      "signature"
    ],
    "name": {
      "ja": "チーズ盛り合わせ",
      "en": "Cheese Platter"
    },
    "description": {
      "ja": "熟成されたブルー、クリーミーなカマンベール、ハード系など、お酒の風味を引き立てる厳選されたチーズの盛り合わせ。",
      "en": "A curated selection of blue, creamy camembert, and hard cheeses to elevate your drink."
    },
    "ingredients": {
      "ja": "厳選チーズ各種、クラッカー",
      "en": "Selected cheeses, crackers"
    },
    "recommendation": {
      "ja": "ワインや重厚なウイスキーのお供に、少しずつ味わいたい方に。",
      "en": "Pairs exceptionally well with full-bodied red wines and smoky single malts."
    },
    "badge": "bestSeller"
  },
  {
    "id": "food-dried-fruit",
    "category": "food",
    "image": "images/dried-fruit.jpg",
    "price": "¥1,100",
    "size": {
      "ja": "一皿",
      "en": "Plate"
    },
    "abv": "0%",
    "tags": [
      "light",
      "sweet"
    ],
    "name": {
      "ja": "ドライフルーツ",
      "en": "Dried Fruit"
    },
    "description": {
      "ja": "イチジクやレーズン、マンゴーなど、凝縮された自然の甘みがお酒のアルコール感を優しく包みます。",
      "en": "Concentrated sweet raisins, figs, and mango slices that soften spirit heat."
    },
    "ingredients": {
      "ja": "ミックスドライフルーツ",
      "en": "Mixed dried fruits"
    },
    "recommendation": {
      "ja": "ウイスキーの甘みを引き出したり、カクテルの後のデザート代わりに。",
      "en": "Great to bring out whiskey sweetness or as a sweet light bite."
    }
  },
  {
    "id": "food-chefs-choice",
    "category": "food",
    "image": "images/chefs-choice.jpg",
    "price": "ASK",
    "size": {
      "ja": "おまかせ",
      "en": "Chef's selection"
    },
    "abv": "0%",
    "tags": [
      "signature"
    ],
    "name": {
      "ja": "おまかせ",
      "en": "Chef's Choice"
    },
    "description": {
      "ja": "本日のお客様の気分やお好みのドリンクに合わせ、オーナーシェフが即興でご用意する特別な一皿。",
      "en": "A unique, custom dish prepared by the chef to match your mood and chosen beverages."
    },
    "ingredients": {
      "ja": "本日の厳選食材",
      "en": "Daily selected ingredients"
    },
    "recommendation": {
      "ja": "おつまみに迷った時や、少し驚きのある一皿を体験したい方に。",
      "en": "Recommended when you want a pleasant surprise paired with your drink."
    }
  }
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
    const key = element.dataset.i18n;
    const value = translate(key);
    if (value) {
      element.textContent = value;
    }
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
