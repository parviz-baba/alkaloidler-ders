/** Dərs məzmunu — mənbə: alkaloidler-asan-ders.md (Parviz Babayev, 26-cı dərs). Uydurma yoxdur. */

export const meta = {
  title: "Alkaloidlər",
  subtitle: "26-cı dərs — asandan çətinə",
  forWhom: "Alkaloidlərdən heç nə bilməyən tibbi tələbə / öyrənən",
  source: "Parviz Babayev — Alkaloidlər (26-cı dərs, PowerPoint)",
  howTo:
    "Hər bölməni sırayla keç; özünü yoxla suallarını cavabla, sonra cavablara bax. Sonda ümumi testi ver.",
};

export const sections = [
  {
    id: "0",
    title: "Bölmə 0: Nə öyrənəcəyik (xəritə)",
    goal: "Dərsin ümumi şəklini görmək — əvvəl “alkaloid nədir”, sonra konkret bitkiləri asandan çətinə keçmək.",
    blocks: [
      {
        type: "p",
        text: "Bu dərsdə əvvəl alkaloidlərin ümumi mahiyyətini (botanika, kimya, təsir, təhlükə) öyrənəcəyik. Sonra beş əsas bitki/xammalı keçəcəyik: istiot meyvəsi, zirinc, üzərlik, dəmrovotu, pasiflora — hər birində botanika, tərkib, təsir, istifadə və əks göstəriş. Ortada bir qarışıq (sarıkök və digər tozlar) da var.",
      },
      { type: "h", text: "Öyrənmə sırası" },
      {
        type: "ol",
        items: [
          "Alkaloid nədir (ümumi giriş)",
          "İstiot meyvəsi (Fructus Capsici)",
          "Zirinc yarpağı və kökü (Folium et radix Berberidis)",
          "Üzərlik otu (Herba Pegani harmalae) — təsir mexanizmi daxil",
          "Dəmrovotu otu (Herba Chelidonii)",
          "Sarıkök–piperin qarışığı (reseptura)",
          "İnkarnat pasiflora otu (Herba Passiflorae incarnatae)",
          "Mini xülasə + ümumi yoxlama",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Alkaloidlər azotlu bitki maddələridir; çoxu güclü və dar doza aralığında işləyir.",
          "“Aşağı doza = müalicə, yüksək doza = zəhər” prinsipi dərsin qırmızı xəttidir.",
          "Reseptura və miqdarlar dərs qeydidir — nəzarətsiz tətbiq etmə.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Bu dərsdə neçə əsas bitki/xammal ayrı-ayrı keçilir?",
        a: "Beş əsas (isti ot/capsicum, zirinc, üzərlik, dəmrovotu, pasiflora) + bir qarışıq reseptura.",
      },
      {
        q: "Alkaloidləri öyrənərkən ən vacib təhlükə prinsipi nədir?",
        a: "Dar terapevtik aralıq — az doza müalicəvi, çox doza toksik.",
      },
      {
        q: "Niyə əvvəl ümumi anlayış, sonra bitkilər gəlir?",
        a: "Hər bitkidəki “alkaloid” sözünü eyni məntiqə bağlamaq üçün.",
      },
    ],
  },
  {
    id: "1",
    title: "Bölmə 1: Alkaloid nədir — ümumi giriş",
    goal: "Alkaloidin nə olduğunu, harada yığıldığını, kimyəvi mahiyyətini və niyə ehtiyatlı olmağı sadə dildə başa düşmək.",
    blocks: [
      {
        type: "p",
        text: "Alkaloidlər — əsasən bitkilərdə, nadir hallarda göbələklərdə və heyvanlarda rast gəlinən azotlu üzvi birləşmələrdir.",
      },
      { type: "h3", text: "1) Botanik baxımdan" },
      {
        type: "p",
        text: "Alkaloidlər əsasən bitkilərin yarpağında, kökündə, qabığında, toxumunda və südəbənzər şirəsində yığılır. Bitki üçün əsas funksiyası həşəratlardan və ot yeyən heyvanlardan qorunmaqdır.",
      },
      { type: "h3", text: "2) Kimyəvi tərkibi" },
      {
        type: "ul",
        items: [
          "Azot atomu daşıyan üzvi maddələrdir.",
          "Adətən heterosiklik quruluşa malikdirlər.",
          "Əksəriyyəti zəif əsas xassəlidir (turşularla duz əmələ gətirirlər).",
        ],
      },
      { type: "h", text: "Məşhur nümunələr" },
      {
        type: "table",
        headers: ["Alkaloid", "Mənbə bitki"],
        rows: [
          ["Morfin, kodein", "Xaşxaş — Papaver somniferum"],
          ["Nikotin", "Tütün — Nicotiana tabacum"],
          ["Atropin, skopolamin", "Xanımotu / itüzümü — Atropa belladonna"],
          ["Xinin", "Kina (xına) ağacı qabığı — Cinchona"],
          ["Kofein, teobromin, teofilin", "Çay, qəhvə, kakao"],
        ],
      },
      { type: "h3", text: "3) Faydaları və tibbi təsirləri" },
      {
        type: "p",
        text: "Alkaloidlər ən güclü bitki mənşəli maddələrdən sayılır:",
      },
      {
        type: "ul",
        items: [
          "Mərkəzi sinir sisteminə (MSS): stimullaşdırıcı, sedativ, analgetik",
          "Ürək-damar sisteminə təsir",
          "Tənəffüs mərkəzinə təsir",
          "Ferment və reseptor səviyyəsində aktivlik",
        ],
      },
      { type: "h3", text: "4) İstifadə formaları" },
      {
        type: "ul",
        items: [
          "Dərman şəklində: tabletlər, inyeksiya məhlulları, tinkturalar, ekstraktlar",
          "Bitki çayları və dəmləmələri (məsələn, kofein çay vasitəsilə)",
          "Toksikoloji baxımdan: bəzi alkaloidlər zəhərli sayılır və istifadə olunmur",
        ],
      },
      {
        type: "callout",
        label: "Doza xəbərdarlığı",
        text: "Alkaloidlərin əksəriyyəti dar terapevtik aralığa malikdir. Aşağı doza → müalicəvi; bir qədər yüksək doza → toksik. Doza artdıqda: ürək ritminin pozulması, qıcolma, tənəffüs mərkəzinin iflici.",
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Alkaloid — azotlu, adətən bitki mənşəli üzvi əsas",
          "Heterosiklik quruluş — dairəvi quruluşda karbonla yanaşı başqa atom (məs. azot)",
          "Zəif əsas — turşu ilə duz əmələ gətirə bilən maddə",
          "Dar terapevtik aralıq — müalicəvi və toksik doza arasında kiçik fərq",
          "Analgetik — ağrıkəsici; sedativ — sakitləşdirici",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Alkaloid = bitkinin “kimyəvi silahı”; insan üçün həm dərman, həm zəhər ola bilər.",
          "Forma (tablet, tinktura, çay) dəyişsə də, doza ehtiyatı qalır.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Alkaloidlər əsasən harada yığılır?",
        a: "Yarpaq, kök, qabıq, toxum, südəbənzər şirə.",
      },
      {
        q: "Kimyəvi cəhətdən alkaloidləri fərqləndirən nədir?",
        a: "Azot atomu; adətən heterosiklik, zəif əsas.",
      },
      {
        q: "“Dar terapevtik aralıq” nə deməkdir?",
        a: "Kiçik doza artımı belə toksikliyə keçə bilər.",
      },
      {
        q: "Morfin və kodein hansı bitkidəndir?",
        a: "Xaşxaş (Papaver somniferum).",
      },
      {
        q: "Doza artımında hansı ağır nəticələr qeyd olunur?",
        a: "Ürək ritmi pozulması, qıcolma, tənəffüs mərkəzinin iflici.",
      },
    ],
  },
  {
    id: "2",
    title: "Bölmə 2: İstiot meyvəsi — Fructus Capsici",
    goal: "Acı bibər (isti ot) xammalını tanımaq — botanika, tərkib, təsirlər, əks göstəriş və yağ resepturası.",
    blocks: [
      {
        type: "p",
        text: "Adlar: İstiot meyvəsi — Fructus Capsici; türkcə — bibər; rusca — перец. Bitki: Birillik istiot — Capsicum annuum L. Fəsilə: Badımcankimilər — Solanaceae.",
      },
      {
        type: "p",
        text: "Fructus Capsici — Capsicum cinsinə aid bitkilərin (əsasən Capsicum annuum, Capsicum frutescens) qurudulmuş yetişmiş meyvələridir. Meyvələr qırmızı, kəskin dadlı, içində çoxsaylı toxum olan giləmeyvə tiplidir. Tibbdə əsasən tam yetişmiş, qurudulmuş acı bibər meyvələri istifadə olunur.",
      },
      {
        type: "p",
        text: "Vətən: Meksika və Qvatemala; bir çox cənub ölkəsində, o cümlədən Azərbaycanda da becərilir.",
      },
      { type: "h", text: "Dərman xammalı" },
      {
        type: "ol",
        items: [
          "Meyvəsi (Fructus Capsici)",
          "Toxumları (Semen Capsici)",
          "Meyvə qabığı və ədviyyat formasında qurudulmuş meyvə",
        ],
      },
      { type: "h", text: "Kimyəvi tərkibi" },
      {
        type: "ul",
        items: [
          "Alkaloidlər / kapsaisinoidlər: əsasən kapsaisin, dihidrokapsaisin — acılıq verir; ağrıkəsici, iştah açıçı",
          "Vitaminlər: C (çox yüksək), A, E, K, B qrupu",
          "Karotinoidlər: β-karoten, kapsantin, kapsorubin (qırmızı rəng; gözə faydalı)",
          "Fenoliklər: flavonoidlər (kversetin, luteolin və s.)",
          "Minerallar: kalium, maqnezium, dəmir, manqan",
          "Digər: lif, uçucu yağlar",
        ],
      },
      { type: "h", text: "Faydaları və tibbi təsirləri" },
      {
        type: "ul",
        items: [
          "Antiinflamatuvar və analjezik: kapsaisin sinir uclarına təsir edərək ağrını azaldır (revmatizm, nevralgiya, əzələ ağrıları)",
          "Metabolizmi sürətləndirir: yağ yandırılmasına kömək, arıqlama prosesində faydalı",
          "Həzm: iştahı artırır, mədə şirəsi ifrazını gücləndirir (həssas mədədə qıcıq yarada bilər)",
          "Antimikrob və antioksidant: C vitamini və flavonoidlər immuniteti möhkəmləndirir",
          "Ürək-damar: xolesterini azaldır, damar elastikliyini yaxşılaşdırır",
          "Qan dövranı: periferik qan dövranını gücləndirir",
        ],
      },
      { type: "h", text: "Əks göstərişlər" },
      {
        type: "p",
        text: "Fructus Capsici güclü qıcıqlandırıcıdır:",
      },
      {
        type: "ul",
        items: [
          "Mədə və onikibarmaq bağırsaq xora xəstəliyi",
          "Qastrit, reflüks",
          "Hemorroy, anal çatlar (daxilə qəbulda)",
          "Dəri zədələri, açıq yaralar üzərinə çəkmək olmaz",
          "Hamiləlik və laktasiyada daxilə qəbul məsləhət deyil",
          "Uşaqlarda ehtiyatla; allergiya — şəxsə görə dəyişir",
        ],
      },
      {
        type: "callout",
        label: "Xəbərdarlıq",
        text: "Göz və selikli qişa ilə təmas yanıq hissi yaradır — dərhal bol su ilə yumaq lazımdır.",
      },
      { type: "h", text: "Reseptura (yağ)" },
      {
        type: "callout",
        label: "Orijinal qeyd",
        text: "100 ml yağa 1 xörək qaşığı — 50–60 °C-də 5 saat. Gündə 2 saat. Atapleniyada 12–18 saat.",
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Kapsaisin / kapsaisinoidlər — acılıq və yerli analjezik təsir",
          "Fructus Capsici — qurudulmuş yetişmiş istiot meyvəsi",
          "Periferik qan dövranı — ətraflardakı qan axını",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Acılığın “gücü” kapsaisindən gəlir; eyni maddə ağrı və qıcıq da yaradır.",
          "Xaricdən yağ/məlhəm və daxilə qəbul — əks göstərişlər fərqli ola bilər; xorada daxilə yox.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "İstiot hansı fəsilədəndir?",
        a: "Solanaceae (badımcankimilər).",
      },
      {
        q: "Acılığı əsasən hansı maddə verir?",
        a: "Kapsaisin (kapsaisinoidlər).",
      },
      {
        q: "Yağ resepturasında temperatur və müddət nədir?",
        a: "50–60 °C, 5 saat (100 ml yağ + 1 xörək qaşığı).",
      },
      {
        q: "Hansı hallarda daxilə qəbul əks göstərişdir?",
        a: "Xora, qastrit, reflüks, hemorroy/anal çat, hamiləlik/laktasiya və s.",
      },
      {
        q: "Gözə düşsə nə etmək lazımdır?",
        a: "Dərhal bol su ilə yumaq.",
      },
    ],
  },
  {
    id: "3",
    title: "Bölmə 3: Zirinc — Folium et radix Berberidis",
    goal: "Zirincin kök/qabıq (alkaloidli) və meyvə (yumşaq, vitaminli) hissələrini ayırd edib öyrənmək.",
    blocks: [
      {
        type: "p",
        text: "Adlar: Zirincin yarpağı və kökü — Folium et radix Berberidis; rusca — Барбарис. Bitki: Adi zirinc — Berberis vulgaris L. Fəsilə: Zirinckimilər — Berberidaceae.",
      },
      { type: "h", text: "Botaniki təsvir" },
      {
        type: "ul",
        items: [
          "Forma: 2–3 m hündürlükdə tikanlı kol",
          "Gövdə və budaqlar: tikanlarla örtülü",
          "Yarpaqlar: yumurtavari və ya elliptik, kənarları xırda dişli, yaşıl",
          "Çiçəklər: sarı, xoş ətirli, salkım şəklində sallanır",
          "Meyvə: uzunsov, qırmızı, şirəli giləmeyvə, turş dadlı",
          "Azərbaycan və Qafqazda təbii halda geniş yayılıb",
        ],
      },
      { type: "h", text: "Dərman xammalı və istifadə" },
      { type: "h3", text: "Meyvələr" },
      {
        type: "ul",
        items: [
          "Qurudulmuş halda və ya mürəbbə, kompot, şərbət kimi qida məhsullarında",
          "Tibbdə — vitamin mənbəyi, susuzluq yatırıcı və hərarətsalan vasitə",
        ],
      },
      { type: "h3", text: "Kök və qabıq (Cortex et Radix Berberidis)" },
      {
        type: "ul",
        items: [
          "Əsasən berberin ekstraksiyası üçün",
          "Ödqovucu; mədəaltı vəzi, qaraciyər və dalaq xəstəliklərində",
        ],
      },
      {
        type: "p",
        text: "Şirə və dəmləmə: soyuqdəymə, susuzluq və zəiflikdə xalq təbabətində (meyvə şirəsi). Farmakologiyada: berberin tərkibli preparatlar — öd yolları, mədə-bağırsaq və iltihabi xəstəliklərdə.",
      },
      { type: "h", text: "Kimyəvi tərkibi" },
      {
        type: "p",
        text: "Meyvələr — üzvi turşular (alma, limon, şərab), vitamin C, flavonoidlər, antosianlar, az şəkər, pektin.",
      },
      {
        type: "p",
        text: "Kökü — alkaloidlər: ən əsas berberin; həmçinin berbamin, palmatin, oksiakantin; vitamin C; orqanik turşular; flavonoidlər və fenol maddələri.",
      },
      { type: "h3", text: "Faydaları — kökü" },
      {
        type: "ul",
        items: [
          "Qaraciyər və öd: berberin ödqovucu; öd axımını yaxşılaşdırır (hepatitlərdə, pankreatitlərdə)",
          "Antimikrob: bakteriya və göbələklərə qarşı aktiv",
          "Antiinflamatuvar: iltihabı azaldır, selikli qişaları sakitləşdirir",
          "Hipotenziv: qan təzyiqini aşağı salmağa kömək edir (qismən)",
        ],
      },
      { type: "h3", text: "Faydaları — meyvələr" },
      {
        type: "ul",
        items: [
          "Antioksidant təsir; vitamin C mənbəyi — immuniteti dəstəkləyir",
          "Yüngül iltihabəleyhinə təsir; həzm prosesini yaxşılaşdırır",
          "Hərarətsalıcı və susuzluğu azaldıcı",
          "Yüngül qan təmizləyici (xalq təbabətində)",
        ],
      },
      {
        type: "callout",
        label: "Vacib",
        text: "Meyvələr alkaloidli hissələrə alternativ kimi, uzunmüddətli istifadə üçün daha uyğundur.",
      },
      { type: "h", text: "Reseptura (kök tozu)" },
      {
        type: "callout",
        label: "Doza",
        text: "Gündə 3 dəfə 1 çay qaşığı. İstifadə formaları — kökü: toz; alaqanqal, atpıtrağı, udi hindi ilə. Meyvələr: dəmləmə, çay, şirə, şərbət, mürəbbə, qurudulmuş meyvə.",
      },
      { type: "h3", text: "Əks göstərişlər — kök (alkaloidli)" },
      {
        type: "ul",
        items: [
          "Hamiləlik (uşaqlıq yığılmalarını artıra bilər)",
          "Südvermə; hipotoniya; ağır qaraciyər xəstəlikləri",
          "Uşaqlarda daxilə qəbul məhdudlaşdırılmalıdır",
          "Uzunmüddətli / yüksək dozada: ürəkbulanma, ishal, arterial təzyiqin düşməsi",
        ],
      },
      { type: "h3", text: "Əks göstərişlər — meyvə" },
      {
        type: "ul",
        items: [
          "Ümumiyyətlə əks təsiri çox deyil",
          "Mədə turşuluğu yüksək olanlarda ehtiyatla",
          "Qastrit və xorada çox turş forma məsləhət deyil",
          "Hamiləlikdə normal qida miqdarında istifadəyə icazə verilir",
        ],
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Berberin — zirinc kökünün əsas alkaloidi; ödqovucu, antimikrob",
          "Cortex et Radix Berberidis — qabıq və kök",
          "Hipotenziv — təzyiqi aşağı salan",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Kök ≠ meyvə: kök alkaloidlidir və ehtiyatlıdır; meyvə daha yumşaqdır.",
          "Uzunmüddətli istifadədə meyvəyə üstünlük verilir.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Zirincin əsas alkaloidi nədir və haradadır?",
        a: "Berberin — əsasən kök/qabıqda.",
      },
      {
        q: "Kök tozunun dozası nədir?",
        a: "Gündə 3 dəfə 1 çay qaşığı.",
      },
      {
        q: "Niyə meyvə uzunmüddətli istifadəyə daha uyğundur?",
        a: "Alkaloidli hissələrə alternativ kimi daha yumşaq və təhlükəsizdir.",
      },
      {
        q: "Kök hamiləlikdə niyə əks göstərişdir?",
        a: "Uşaqlıq yığılmalarını artıra bilər.",
      },
      {
        q: "Berberin hansı orqan sistemində ödqovucu işləyir?",
        a: "Qaraciyər və öd sistemi (hepatit, pankreatit qeydləri ilə).",
      },
    ],
  },
  {
    id: "4",
    title: "Bölmə 4: Üzərlik — Herba Pegani harmalae",
    goal: "Güclü alkaloidli üzərliyi tanımaq; təsirləri, əks göstərişləri və β-karbolin mexanizmini addım-addım başa düşmək.",
    blocks: [
      {
        type: "p",
        text: "Adlar: Adi üzərliyin otu — Herba Pegani harmalae; bitki — Peganum harmala L.; rusca — гармала / могильник. Fəsilə: Həlməlkimilər — Zygophyllaceae.",
      },
      { type: "h", text: "Botaniki təsvir" },
      {
        type: "ul",
        items: [
          "Forma: çoxillik ot, 30–80 sm",
          "Gövdə: şaxələnmiş, yaşıl, bəzən azacıq oduncaqlanmış",
          "Yarpaqlar: dərin parçalanmış, dar və xırda seqmentli",
          "Çiçəklər: ağ və ya sarımtıl-ağ, 5 ləçəkli, tək-tək",
          "Meyvə: dairəvi qutuvari kapsula, içində çoxlu toxum",
          "Azərbaycanda quru iqlimdə, çöllük və yarımsəhrada geniş yayılıb",
        ],
      },
      { type: "h", text: "İstifadə formaları" },
      {
        type: "ul",
        items: [
          "Toxumlar — ən çox istifadə edilən hissə; toz, dəmləmə və ya yağ",
          "Üzərlik tüstüsü (yandırılmış toxumlar): evləri tüstüləndirmək",
          "Məhlul və dəmləmə: əzələ və oynaq ağrıları, bəzi parazitar xəstəliklər",
          "Farmakologiyada: harmin və harmalin əvvəllər Parkinson və sinir pozğunluqlarında öyrənilmişdir",
        ],
      },
      { type: "h", text: "Kimyəvi tərkibi" },
      {
        type: "ul",
        items: [
          "Alkaloidlər (β-karbolin qrupu): harmin, harmalin, harmol, peganidin",
          "Yağlar və qatranlar — əsasən toxumlarda",
          "Flavonoidlər və digər fenoliklər",
        ],
      },
      {
        type: "callout",
        label: "Qeyd",
        text: "Alkaloidlərin miqdarı toxumlarda daha yüksək, bitkinin özündə orta səviyyədədir. Toxumlarda yüksək dozada zəhərlidir.",
      },
      { type: "h", text: "Faydaları və tibbi təsirləri" },
      {
        type: "ul",
        items: [
          "Sinir sistemi: harmin və harmalin MSS-ə təsir edir; sakitləşdirici və psixoaktiv xüsusiyyətlər",
          "Antimikrob və antiparazitar; qurdqovucu (xalq təbabətində)",
          "Bronx genişləndirici və spazmolitik; antioksidant; iltihabəleyhinə",
          "Antixolinesteraz: miopatiya və miasteniya; beyin qan dövranı pozulmalarında",
          "Harmin: ensefalit, əsma, iflic və Parkinson müalicəsində tətbiq olunub",
        ],
      },
      { type: "h", text: "Reseptura qeydi (epilepsiya — orijinal)" },
      {
        type: "callout",
        label: "Qarışıq",
        text: "Qarazirə toxumu tozu — üzərlik tozu 1:1 nisbətində, zəyərək toxumu tozu.",
      },
      { type: "h", text: "Əks göstərişlər" },
      {
        type: "ul",
        items: [
          "Hamiləlik və laktasiya — qadağandır",
          "Hipertoniya, ürək ritm pozuntuları",
          "Nevroloji xəstəliklər — antidepresan, antipsixotik dərmanlarla",
          "Antidepressantlar, MAO-inhibitorlar ilə birlikdə istifadəsi olmaz",
          "Uşaqlarda daxilə qəbul yolverilməzdir",
        ],
      },
      {
        type: "p",
        text: "Doza artımında: ürəkbulanma, qusma, başgicəllənmə, halüsinasiyalar, təzyiq dəyişiklikləri.",
      },
      { type: "h", text: "Təsir mexanizmi (üzərlik toxumu)" },
      {
        type: "p",
        text: "Təsir əsasən β-karbolin alkaloidləri (harmalin, harmin) vasitəsilə formalaşır.",
      },
      { type: "h3", text: "1) MAO inhibisiyası (əsas mexanizm)" },
      {
        type: "p",
        text: "Harmalin və harmin monoamin oksidaza-A (MAO-A) fermentini reversibil şəkildə inhibə edir. Nəticədə serotonin, dopamin, noradrenalinin parçalanması azalır → MSS-də neyromediator səviyyəsi ↑ → sedativ, psixoaktiv, antidepresantabənzər təsir. Doza artdıqda → təşviş, halüsinasiyalar, toksik təsir.",
      },
      { type: "h3", text: "2) GABAergik və glutamatergik təsir" },
      {
        type: "p",
        text: "β-karbolinlər GABA reseptorlarının fəaliyyətini dəyişə bilir. Az dozada → sedativ, antispazmodik; yüksək dozada → qıcolma, neyroeksitasiya.",
      },
      { type: "h3", text: "3) Antispazmodik mexanizm" },
      {
        type: "p",
        text: "Hamar əzələlərdə Ca²⁺ hüceyrədaxili axını azalır (xüsusilə bronxlar, bağırsaq) → spazm azalır, yüngül bronxodilatator təsir.",
      },
      { type: "h3", text: "4) Antioksidant və neyroprotektiv" },
      {
        type: "p",
        text: "Fenol quruluşlu alkaloidlər sərbəst radikalları neytrallaşdırır → neyronların oksidativ stressdən qorunması.",
      },
      { type: "h3", text: "5) Antimikrob mexanizm" },
      {
        type: "p",
        text: "Alkaloidlər mikroorqanizmlərin membranını zədələyir, ferment sistemlərini bloklayır. Klinik istifadə toksiklik səbəbi ilə məhduddur.",
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "β-karbolinlər — harmin, harmalin və qohum alkaloidlər",
          "MAO-A — monoaminləri parçalayan ferment; inhibisiyası neyromediatorları artırır",
          "Reversibil inhibisiya — fermentin müvəqqəti bloklanması",
          "Antixolinesteraz — xolinesteraz fermentini azaldan təsir",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Üzərlikdə “güc” toxumdadır — alkaloid miqdarı orada yüksəkdir.",
          "MAO-inhibitor / antidepresan ilə birlikdə olmaz.",
          "Az doza sakitləşdirə bilər; yüksək doza qıcolma və toksiklik verə bilər.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Üzərliyin əsas alkaloid qrupu hansıdır?",
        a: "β-karbolinlər (harmin, harmalin və s.).",
      },
      {
        q: "Əsas təsir mexanizmi nədir?",
        a: "MAO-A-nın reversibil inhibisiyası.",
      },
      {
        q: "Niyə antidepressantlarla birlikdə olmaz?",
        a: "MAO inhibisiyası + digər dərmanlar təhlükəli qarşılıqlı təsir riski yaradır.",
      },
      {
        q: "Epilepsiya üçün orijinal qarışıq nisbəti nədir?",
        a: "Qarazirə toxumu tozu və üzərlik tozu 1:1 (zəyərək toxumu tozu da qeyd olunub).",
      },
      {
        q: "Az və yüksək dozada GABA/qlutamat nəticəsi necə fərqlənir?",
        a: "Az — sedativ/antispazmodik; yüksək — qıcolma/neyroeksitasiya.",
      },
    ],
  },
  {
    id: "5",
    title: "Bölmə 5: Dəmrovotu — Herba Chelidonii",
    goal: "Dəmrovotunu (zəhərli lateksli bitki) tanımaq; təsirləri, formaları, əks göstərişləri və dərsdəki reseptura qeydlərini saxlamaq.",
    blocks: [
      {
        type: "p",
        text: "Adlar: Dəmrovotu otu — Herba Chelidonii; bitki — iri dəmrovotu — Chelidonium majus L.; türkcə — kırlangıçotu; rusca — Чистотел большой. Fəsilə: Xaşxaşkimilər — Papaveraceae.",
      },
      { type: "h", text: "Botaniki təsvir" },
      {
        type: "ul",
        items: [
          "Forma: çoxillik ot, 30–80 sm; gövdə şirəli, budaqlanmış",
          "Yarpaqlar: dərin parçalanmış, yaşıl və ya maviyə çalan yaşıl",
          "Çiçəklər: kiçik, parlaq sarı, 4 ləçəkli",
          "Meyvə: uzunsov dar qutu; içində xırda qara toxumlar",
          "Bütün hissələr zədələnəndə sarımtıl-süd rəngli şirə (latex) ifraz olunur",
        ],
      },
      { type: "h", text: "Kimyəvi tərkibi" },
      {
        type: "ul",
        items: [
          "Alkaloidlər: xelidonin, sanguinarin, berberin, koptisin, protopin",
          "Orqanik turşular: xelidon turşusu, malik turşusu",
          "Flavonoidlər, saponinlər, efir yağı (iz miqdarda)",
          "Lateks: sarı südəbənzər şirə — çoxlu alkaloid daşıyır",
        ],
      },
      { type: "h", text: "Faydaları və tibbi təsirləri" },
      {
        type: "ul",
        items: [
          "Spazmolitik: qaraciyər və öd yollarında spazmları azaldır",
          "Ödqovucu və qaraciyər qoruyucu: safra axımını yaxşılaşdırır",
          "Antiviral və antibakterial",
          "Şiş hüceyrələrinə qarşı potensial / sitotoksik təsir öyrənilmişdir",
          "Xalq təbabətində: sarı şirə ziyil, qotur və dəri xəstəliklərində xaricdən",
        ],
      },
      {
        type: "callout",
        label: "Xəbərdarlıq",
        text: "Bitkinin bütün hissələri ZƏHƏRLİDİR. Daxilə nəzarətsiz istifadə qusma, qarın ağrısı, sinir sistemi pozğunluğu, hətta ciddi zəhərlənmə verə bilər.",
      },
      { type: "h", text: "Reseptura qeydləri (orijinal)" },
      {
        type: "ul",
        items: [
          "600 qram — 3 stəkan suya 2 xörək qaşığı — şiş xəstəliklərində",
          "Kanapleya (çətənə toxumlarının yağı): gündə 3 dəfə 1 orta xörək qaşığı",
          "Sarıkök tozu: gündə 3 dəfə 1 çay qaşığı",
        ],
      },
      { type: "h", text: "İstifadə formaları" },
      {
        type: "ul",
        items: [
          "Xalq: südəbənzər şirə xaricdən dəriyə (ziyil, göbələk)",
          "Fitopreparatlar: qurudulmuş otun ekstraktı ödqovucu qarışıqlarda",
          "Homeopatiya: Chelidonium preparatları — qaraciyər, öd kisəsi, həzm",
          "Tədqiqat: xelidonin və sanguinarinin antikanser və antiviral potensialı",
        ],
      },
      { type: "h", text: "Əks göstərişlər" },
      {
        type: "ul",
        items: [
          "Hamiləlik və laktasiya — qadağandır",
          "Qaraciyər xəstəlikləri (hepatotoksiklik riski)",
          "Uşaqlarda daxilə qəbul yolverilməzdir",
          "Uzunmüddətli istifadədə: qaraciyər fermentlərinin yüksəlməsi; ürəkbulanma, ishal; MSS pozğunluqları",
        ],
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Latex (südlü şirə) — bitki zədələnəndə çıxan sarı alkaloidli şirə",
          "Xelidonin, sanguinarin — əsas təsiredici alkaloidlərdən",
          "Hepatotoksiklik — qaraciyərə zəhərli təsir riski",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Dəmrovotu = “sarı şirəli” zəhərli bitki; xaricdən və daxilə qəbul eyni təhlükəsizlikdə deyil.",
          "Daxilə nəzarətsiz istifadə ciddi zəhərlənmə riski daşıyır.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Dəmrovotu hansı fəsilədəndir?",
        a: "Papaveraceae (xaşxaşkimilər).",
      },
      {
        q: "Lateks niyə vacibdir?",
        a: "Sarı südəbənzər şirədə çoxlu alkaloid var; xalq təbabətində xaricdən istifadə olunur.",
      },
      {
        q: "Şiş üçün orijinal dəmləmə qeydi nədir?",
        a: "3 stəkan suya 2 xörək qaşığı (600 qram qeydi ilə).",
      },
      {
        q: "Niyə qaraciyər xəstəliklərində əks göstərişdir?",
        a: "Hepatotoksiklik riski.",
      },
      {
        q: "Homeopatiyada əsas tətbiq sahəsi?",
        a: "Qaraciyər, öd kisəsi və həzm pozğunluqları.",
      },
    ],
  },
  {
    id: "6",
    title: "Bölmə 6: Sarıkök–piperin qarışığı (reseptura)",
    goal: "Dərsdəki iltihabəleyhinə toz qarışığını dəqiq miqdarlarla saxlamaq və nə üçün piperin qeyd olunduğunu başa düşmək.",
    blocks: [
      {
        type: "callout",
        label: "Orijinal qeyd",
        text: "Sarıkök (kurkumin) piperinlə birlikdə sovrulması 2000 dəfə artır.",
      },
      { type: "h", text: "Reseptura (orijinal miqdarlar)" },
      {
        type: "table",
        headers: ["Komponent", "Miqdar"],
        rows: [
          ["Sarıkök tozu", "400 qram"],
          ["Zəyərək (kətan)", "400 qram"],
          ["Çia", "400 qram"],
          ["Qara istiot", "20 qram"],
          ["Zəncəfil tozu", "100 qram"],
        ],
      },
      { type: "h", text: "Nə üçün istifadə olunur (dərs qeydi)" },
      {
        type: "ul",
        items: [
          "İltihab, iltihabi oynaq xəstəlikləri",
          "Xərçəng",
          "İmmun sistemini dəstəkləyir",
          "Aterosklerozda",
          "Qanı duruldur",
          "Hüceyrə bərpasını sürətləndirir",
        ],
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Kurkumin — sarıkökün əsas aktiv maddəsi",
          "Piperin — qara istiotdakı maddə; kurkuminin bioəlçatanlığını artırır",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Qara istiot (20 q) qarışıqda “kiçik”, amma sovrulma üçün vacibdir.",
          "Bu dərs qeydidir — klinik protokol kimi oxunmamalıdır.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Sarıkök tozunun miqdarı nədir?",
        a: "400 qram.",
      },
      {
        q: "Qara istiot niyə əlavə olunur?",
        a: "Piperin kurkuminin sovrulmasını (dərsə görə 2000 dəfə) artırır.",
      },
      {
        q: "Zəyərək və çia hər biri neçə qramdır?",
        a: "Hər biri 400 qram.",
      },
      {
        q: "Zəncəfil tozu neçə qramdır?",
        a: "100 qram.",
      },
    ],
  },
  {
    id: "7",
    title: "Bölmə 7: İnkarnat pasiflora — Herba Passiflorae incarnatae",
    goal: "Pasifloranı sakitləşdirici/yuxu tənzimləyici alkaloidli ot kimi öyrənmək; dəmləmə və tinktura resepturasını dəqiq saxlamaq.",
    blocks: [
      {
        type: "p",
        text: "Adlar: İnkarnat pasiflorasının otu — Herba Passiflorae incarnatae; bitki — Passiflora incarnata L. (qonaqotu, şahzadə ulduzu); türkcə — çarxıfələk otu; rusca — пассифлора. Fəsilə: Qonaqotukimilər — Passifloraceae.",
      },
      { type: "h", text: "Botaniki təsvir" },
      {
        type: "ul",
        items: [
          "Uzunluq: 5–9 m-ə qədər; gövdə nazik, sarmaşıq kimi budaqlanır",
          "Yarpaqlar: 3-loblu, dərin parçalanmış, yaşıl, parlaq",
          "Çiçəklər: iri, 5 taçlı, bənövşəyi-ağ, dekorativ",
          "Meyvə: oval, narıncı-sarı, ətirli giləmeyvə tipli",
          "Mənşə: Cənubi və Şimali Amerika; indi Avropa, Asiya və Qafqazda da becərilir",
        ],
      },
      { type: "h", text: "Dərman xammalı" },
      {
        type: "ul",
        items: [
          "Gövdə (nazik, yaşıl, dırmaşan budaqlar)",
          "Yarpaqlar; çiçəklər (bənövşəyi-ağ, aromatik)",
          "Bəzən az miqdarda cavan meyvələr materiala qarışa bilər",
        ],
      },
      { type: "h", text: "Kimyəvi tərkibi" },
      {
        type: "ul",
        items: [
          "Flavonoidlər: vitexin, izoviteksin, orientin, izoorientin, apigenin, luteolin",
          "Alkaloidlər: harman, harmol, harmalin (β-karbolin törəmələri) — üzərliyə bənzəyir",
          "Sianogen qlikozidlər: ginekardol",
          "Üzvi turşular: formik, sirkə, malik, linol",
          "Ətirli efir yağları, şəkərlər, C vitamini, amin turşuları",
        ],
      },
      { type: "h", text: "Tətbiqi" },
      {
        type: "ul",
        items: [
          "Sedativ və anksiyolitik: əsəb gərginliyi, yuxusuzluq, nevroz, həyəcan, panik",
          "Yuxunu tənzimləyici: təbii yuxu gətirici (hipnotik)",
          "Spazmolitik və ağrıkəsici: əzələ və damar spazmlarını azaldır",
          "Vegetativ distoniya və klimakterik pozğunluqların simptomlarını yüngülləşdirir",
          "Antikonvulsant: yüngül epileptik tutmalarda əlavə vasitə",
          "Ərküdə qeydi: dopamini artıraraq prolaktini basqılayır; qalxanvari vəzidəki düyünləri əridir",
        ],
      },
      { type: "h3", text: "Faydalar — sistemlər üzrə" },
      {
        type: "ul",
        items: [
          "Sinir: sedativ, anksiolitik, yuxu gətirici; stress, panik",
          "Ürək-damar: sinir mənşəli taxikardiya; vegetativ disfunksiyada ürək döyüntüsü",
          "Digər: antispazmodik; menopauzada sinir pozuntuları; sinir mənşəli mədə-bağırsaq spazmları",
        ],
      },
      {
        type: "callout",
        label: "Vacib",
        text: "Asılılıq yaratmır; benzodiazepinlərdən fərqli olaraq gündüz süstlük azdır.",
      },
      { type: "h", text: "Reseptura (dəmləmə və tinktura)" },
      { type: "h3", text: "Qurudulmuş otun dəmləməsi (Infusum)" },
      {
        type: "ol",
        items: [
          "1 orta xörək qaşığı quru ot üzərinə 200 ml qaynar su əlavə edilir",
          "15 dəqiqə dəmlənir, süzülür",
          "Gündə 2–3 dəfə, ½ stəkan miqdarında qəbul olunur",
        ],
      },
      { type: "h3", text: "Spirtli ekstrakt / tinktura" },
      {
        type: "ul",
        items: [
          "1:5 nisbətində 70%-li spirtlə hazırlanır",
          "20–30 damcı, gündə 2 dəfə",
        ],
      },
      {
        type: "p",
        text: "Digər formalar: tablet və kapsul; fitokomponent qarışıqları — valeriana, melissa və ya şerbetçiotu ilə birlikdə.",
      },
      { type: "h", text: "Əsas anlayışlar" },
      {
        type: "ul",
        items: [
          "Anksiyolitik — həyəcanı azaldan",
          "Hipnotik — yuxu gətirici",
          "Taxikardiya / bradikardiya — ürəyin çox / az döyünməsi",
          "Infusum — dəmləmə",
        ],
      },
      { type: "h", text: "Yadda saxla" },
      {
        type: "ul",
        items: [
          "Pasiflora alkaloidləri üzərliyə oxşar β-karbolin qrupundandır, amma dərsdə vurğu sakitləşdirici/yuxu tərəfindədir.",
          "Dəmləmə: 1 qaşıq + 200 ml, 15 dəq; gündə 2–3× yarım stəkan.",
        ],
      },
    ],
    selfCheck: [
      {
        q: "Pasiflora hansı fəsilədəndir?",
        a: "Passifloraceae.",
      },
      {
        q: "Dəmləmə resepturasını de.",
        a: "1 orta xörək qaşığı + 200 ml qaynar su, 15 dəq; gündə 2–3 dəfə ½ stəkan.",
      },
      {
        q: "Tinktura necə hazırlanır və dozası nədir?",
        a: "1:5, 70% spirt; 20–30 damcı, gündə 2 dəfə.",
      },
      {
        q: "Benzodiazepinlərdən fərqi nədir (dərsə görə)?",
        a: "Asılılıq yaratmır; gündüz süstlük azdır.",
      },
      {
        q: "Hansı alkaloidlər üzərliyə bənzəyir?",
        a: "Harman, harmol, harmalin (β-karbolinlər).",
      },
    ],
  },
  {
    id: "summary",
    title: "Mini xülasə",
    goal: "Bütün dərsin əsas zəncirini bir səhifədə təkrar etmək.",
    blocks: [
      {
        type: "ol",
        items: [
          "Alkaloid = azotlu bitki maddəsi; dar doza aralığı; MSS, ürək-damar, tənəffüsə güclü təsir.",
          "İstiot (Capsicum) — kapsaisin; yerli ağrıkəsici/qıcıqlandırıcı; yağ: 100 ml + 1 qaşıq, 50–60 °C, 5 saat.",
          "Zirinc — kökdə berberin (ödqovucu, ehtiyatlı); meyvə yumşaq vitamin mənbəyi; kök tozu: 3×1 çay qaşığı.",
          "Üzərlik — β-karbolinlər; MAO-A inhibisiyası; toksik potensial yüksək; dərman qarşılıqlı təsiri.",
          "Dəmrovotu — lateks + xelidonin/sanguinarin; zəhərli; öd/spazm və xaricdən dəri.",
          "Sarıkök qarışığı — 400/400/400/20/100 q; piperin sovrulmanı artırır.",
          "Pasiflora — sedativ/yuxu; dəmləmə və 70% tinktura resepturası dəqiqdir.",
        ],
      },
    ],
    selfCheck: [],
  },
];

export const glossary = [
  { term: "Alkaloid", meaning: "Azotlu, adətən bitki mənşəli güclü üzvi maddə" },
  { term: "Heterosiklik", meaning: "Dairədə C-dən başqa atom da olan quruluş" },
  { term: "Analgetik", meaning: "Ağrıkəsici" },
  { term: "Sedativ / anksiyolitik", meaning: "Sakitləşdirici / həyəcanı azaldan" },
  { term: "Spazmolitik", meaning: "Spazmı açan" },
  { term: "Hepatotoksik", meaning: "Qaraciyərə zərərli" },
  { term: "MAO-A", meaning: "Monoaminləri parçalayan ferment" },
  { term: "β-karbolin", meaning: "Harmin/harmalin tipində alkaloid qrupu" },
  { term: "Latex", meaning: "Bitkinin südəbənzər şirəsi" },
  { term: "Infusum", meaning: "Dəmləmə" },
  { term: "Bioəlçatanlıq", meaning: "Maddənin orqanizmə sovrulma dərəcəsi" },
  { term: "Berberin", meaning: "Zirinc kökünün əsas alkaloidi; ödqovucu" },
  { term: "Kapsaisin", meaning: "İstiotun acılıq və yerli analjezik maddəsi" },
];

/**
 * Ümumi yoxlama — cavablar mənbəyə uyğundur.
 * Seçimli format üçün digər variantlar eyni dərs anlayışlarından götürülüb.
 */
export const quiz = [
  {
    id: "q1",
    q: "Alkaloidlərin əksəriyyəti niyə “təhlükəli dost” sayılır?",
    options: [
      "Dar terapevtik aralıq — kiçik doza artımı toksikliyə keçir",
      "Yalnız vitamin çatışmazlığı yaradırlar",
      "Heç vaxt MSS-ə təsir etmirlər",
      "Yalnız qida əlavəsi kimi istifadə olunurlar",
    ],
    correct: 0,
    explain:
      "Cavab: Dar terapevtik aralıq — kiçik doza artımı toksikliyə keçir.",
  },
  {
    id: "q2",
    q: "Berberin hansı bitkinin hansı hissəsində əsasdır?",
    options: [
      "Zirinc — kök/qabıq",
      "İstiot — meyvə toxumu",
      "Pasiflora — çiçək",
      "Dəmrovotu — yalnız meyvə",
    ],
    correct: 0,
    explain: "Cavab: Zirinc — kök/qabıq.",
  },
  {
    id: "q3",
    q: "Üzərliyin əsas mexanizmi nədir?",
    options: [
      "MAO-A-nın reversibil inhibisiyası",
      "Yalnız kalsium kanalının daimi blokadası",
      "Yalnız insulin ifrazının artması",
      "Yalnız öd turşularının sintezi",
    ],
    correct: 0,
    explain: "Cavab: MAO-A-nın reversibil inhibisiyası.",
  },
  {
    id: "q4",
    q: "Dəmrovotu lateksi nə rəngdədir və nə daşıyır?",
    options: [
      "Sarımtıl-süd; çoxlu alkaloid",
      "Şəffaf su; yalnız şəkər",
      "Yaşıl yağ; yalnız vitamin E",
      "Qara qatran; yalnız pektin",
    ],
    correct: 0,
    explain: "Cavab: Sarımtıl-süd; çoxlu alkaloid.",
  },
  {
    id: "q5",
    q: "Pasiflora dəmləməsində su və müddət?",
    options: [
      "200 ml qaynar su, 15 dəqiqə",
      "50 ml soyuq su, 2 dəqiqə",
      "1 litr yağ, 5 saat",
      "10 ml spirt, dərhal",
    ],
    correct: 0,
    explain: "Cavab: 200 ml qaynar su, 15 dəqiqə.",
  },
  {
    id: "q6",
    q: "İstiot yağ resepturasında temperatur və müddət nədir?",
    options: [
      "50–60 °C, 5 saat (100 ml yağ + 1 xörək qaşığı)",
      "100 °C, 10 dəqiqə",
      "Otaq temperaturu, 1 dəqiqə",
      "0 °C, 24 saat",
    ],
    correct: 0,
    explain:
      "Cavab: 50–60 °C, 5 saat (100 ml yağ + 1 xörək qaşığı).",
  },
  {
    id: "q7",
    q: "Sarıkök qarışığında qara istiot niyə əlavə olunur?",
    options: [
      "Piperin kurkuminin sovrulmasını (dərsə görə 2000 dəfə) artırır",
      "Yalnız rəng vermək üçün",
      "Yalnız şəkəri azaltmaq üçün",
      "Berberini neytrallaşdırmaq üçün",
    ],
    correct: 0,
    explain:
      "Cavab: Piperin kurkuminin sovrulmasını (dərsə görə 2000 dəfə) artırır.",
  },
  {
    id: "q8",
    q: "Alkaloidləri kimyəvi cəhətdən fərqləndirən əsas cəhət hansıdır?",
    options: [
      "Azot atomu; adətən heterosiklik, zəif əsas",
      "Yalnız karbon və hidrogen",
      "Yalnız metal ionları",
      "Yalnız şəkər zənciri",
    ],
    correct: 0,
    explain:
      "Cavab: Azot atomu; adətən heterosiklik, zəif əsas.",
  },
  {
    id: "q9",
    q: "Zirinc kök tozunun dozası (dərs qeydi) nədir?",
    options: [
      "Gündə 3 dəfə 1 çay qaşığı",
      "Gündə 1 dəfə 10 xörək qaşığı",
      "Yalnız xaricdən, dozasız",
      "Saatda bir dəfə 1 stəkan",
    ],
    correct: 0,
    explain: "Cavab: Gündə 3 dəfə 1 çay qaşığı.",
  },
  {
    id: "q10",
    q: "Pasiflora tinkturası necə hazırlanır və dozası nədir?",
    options: [
      "1:5, 70% spirt; 20–30 damcı, gündə 2 dəfə",
      "1:100, su; 1 litr gündə",
      "Yalnız quru toz, dozasız",
      "Saf spirt, gündə 1 stəkan",
    ],
    correct: 0,
    explain: "Cavab: 1:5, 70% spirt; 20–30 damcı, gündə 2 dəfə.",
  },
];

export const STORAGE_KEY = "alkaloidler-ders-progress-v1";
