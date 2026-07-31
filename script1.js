

      (function () {

        'use strict';

        // ==========================================

        // ⬇️ EDIT DATA KAMU SECARA MANUAL DI SINI ⬇️

        // ==========================================

        const localData = {

          members: [
          {
                    "name": "kumis",
                    "name_ar": "كوميس",
                    "full_name": "Khoirul azzam",
                    "role": "Ketua angkatan",
                    "role_ar": "رئيس الدفعة",
                    "bio_id": "Kurangi ekspektasi, lipat gandakan aksi.",
                    "bio_en": "Lower your expectations, double your actions.",
                    "bio_ar": "قلل من توقعاتك، وضاعف من أفعالك.",
                    "photo": "https://drive.google.com/file/d/1ZuAv8hE-1AgNbCn9oXQlw6_GuAA1EWfi/view?usp=drive_link",
                    "id": "kumis",
                    "role_en": "President of Generation"
          },
          {
                    "name": "aden",
                    "name_ar": "أدين",
                    "full_name": "Faqihuddin rahman",
                    "role": "Wakil ketua angkatan & Ketua kelas",
                    "role_ar": "نائب رئيس الدفعة ورئيس الصف",
                    "bio_id": "Tidak ada keberhasilan tanpa rasa sakit",
                    "bio_en": "There is no success without pain.",
                    "bio_ar": "لا يوجد نجاح بدون ألم.",
                    "photo": "https://drive.google.com/file/d/1ZGyjtWir9-XEsbJRRy17cyN_4OZ_Jm_3/view?usp=drive_link",
                    "id": "aden",
                    "role_en": "Vice President of Generation & Class Leader"
          },
          {
                    "name": "immszkyy",
                    "name_ar": "إيمسكي",
                    "full_name": "Ibrahim Zaky maulana",
                    "role": "Sekretaris angkatan",
                    "role_ar": "سكرتير الدفعة",
                    "bio_id": "jika hujan turun tanpa diminta maka aku akan menahan luka sambil tertawa",
                    "bio_en": "If rain falls unasked, I will hold the pain while laughing.",
                    "bio_ar": "إذا نزل المطر دون طلب، فسوف أتحمل الألم وأنا أضحك.",
                    "photo": "https://drive.google.com/file/d/1FxpUzZ738VPcd7rZJm5djQTOzLHa3XTR/view?usp=drive_link",
                    "id": "immszkyy",
                    "role_en": "Secretary of Generation"
          },
          {
                    "name": "adz",
                    "name_ar": "آدز",
                    "full_name": "Abdullah muadz",
                    "role": "Bendahara angkatan",
                    "role_ar": "أمين الصندوق",
                    "bio_id": "sesungguhnya amal itu tergantung pada niatnya",
                    "bio_en": "Indeed, deeds depend on intentions.",
                    "bio_ar": "إنما الأعمال بالنيات.",
                    "photo": "https://drive.google.com/file/d/1HxPeVWB9JC0Ne-RjpcZ5pupDUdw1g2WG/view?usp=drive_link",
                    "id": "adz",
                    "role_en": "Treasurer of Generation"
          },
          {
                    "name": "jeker",
                    "name_ar": "جيكر",
                    "full_name": "Zakaria akhsya",
                    "role": "Sekretaris kelas",
                    "role_ar": "سكرتير الصف",
                    "bio_id": "Hentikan pembuktian dini, nikmati lah proses tanpa brisik, nikmatilah keheningan.... Hanya KAMU, TUHAN dan PROSES MU",
                    "bio_en": "Stop proving yourself early, enjoy the process without noise, enjoy the silence.... Just YOU, GOD, and YOUR PROCESS.",
                    "bio_ar": "توقف عن إثبات نفسك مبكراً، استمتع بالعملية بدون ضجيج، استمتع بالصمت.... فقط أنت، والله، وعمليتك.",
                    "photo": "https://drive.google.com/file/d/1DxqMfD7mujAkKna9cPpaaDnqA0mVhvez/view?usp=drive_link",
                    "id": "jeker",
                    "role_en": "Class Secretary"
          },
          {
                    "name": "abill",
                    "name_ar": "أبيل",
                    "full_name": "Abdillah Muchsin al-ansyori",
                    "role": "Bendahara kelas",
                    "role_ar": "أمين صندوق الصف",
                    "bio_id": "gak suka Ade²an sukanya abang-abangan",
                    "bio_en": "I dont like playing younger brother, I prefer playing older brother.",
                    "bio_ar": "لا أحب أن ألعب دور الأخ الأصغر، أفضل دور الأخ الأكبر.",
                    "photo": "https://drive.google.com/file/d/1yn5xlFgrtZklRrE9JUJ6tF7EjS51-Juw/view?usp=drive_link",
                    "id": "abill",
                    "role_en": "Class Treasurer"
          },
          {
                    "name": "darmoyy",
                    "name_ar": "دارمووي",
                    "full_name": "Dharma adhiyaksa",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "sedang sibuk",
                    "bio_en": "Currently busy.",
                    "bio_ar": "مشغول حالياً.",
                    "photo": "https://drive.google.com/file/d/1Bc48Unx0kQKUA8fjx3O0OMpRH9y22XNg/view?usp=drive_link",
                    "id": "darmoyy",
                    "role_en": "Student"
          },
          {
                    "name": "hananda",
                    "name_ar": "حناندا",
                    "full_name": "Muhammad hanan",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "innamal a'malu binniat",
                    "bio_en": "Indeed, deeds depend on intentions.",
                    "bio_ar": "إنما الأعمال بالنيات.",
                    "photo": "https://drive.google.com/file/d/1PVjRHSHzOxRu6zsb_QLTYGi5zDB5gz8q/view?usp=drive_link",
                    "id": "hananda",
                    "role_en": "Student"
          },
          {
                    "name": "edarr",
                    "name_ar": "إيدار",
                    "full_name": "Haidar muafa",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Weh mass baimm",
                    "bio_en": "Hey bro Baim.",
                    "bio_ar": "أهلاً يا أخي بايم.",
                    "photo": "https://drive.google.com/file/d/1fAKsD4YD4tCuszBZU-A2CgCcjJC1VfTU/view?usp=drive_link",
                    "id": "edarr",
                    "role_en": "Student"
          },
          {
                    "name": "garr",
                    "name_ar": "غار",
                    "full_name": "Muhammad tegar Bimantoro",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "mendaki dengan penuh luka",
                    "bio_en": "Climbing with full of wounds.",
                    "bio_ar": "أتسلق مليئاً بالجروح.",
                    "photo": "https://drive.google.com/file/d/1KjNfAPKhvDgDbEx8bFYhsVJt4945NJmp/view?usp=drive_link",
                    "id": "garr",
                    "role_en": "Student"
          },
          {
                    "name": "yahya",
                    "name_ar": "يحيى",
                    "full_name": "Yahya bin abu Muhammad",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "kelas harus bersih",
                    "bio_en": "The class must be clean.",
                    "bio_ar": "يجب أن يكون الصف نظيفاً.",
                    "photo": "https://drive.google.com/file/d/12SvP2y355hwcvRxRMSP-D_mw8Rdp9zau/view?usp=drive_link",
                    "id": "yahya",
                    "role_en": "Student"
          },
          {
                    "name": "mimin",
                    "name_ar": "ميمين",
                    "full_name": "Abdul mumin",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Ra butuh sing sempurna, cukup sempurnakan yang ada",
                    "bio_en": "Dont need someone perfect, just perfect what you have.",
                    "bio_ar": "لا أحتاج إلى شخص مثالي، فقط أكمل ما لديك.",
                    "photo": "https://drive.google.com/file/d/1uJfjlmIAc2RdyjFdVljvzxiCJmdccJ-h/view?usp=drive_link",
                    "id": "mimin",
                    "role_en": "Student"
          },
          {
                    "name": "kadop dop",
                    "name_ar": "كادوب دوب",
                    "full_name": "Khadafi Agista musyaffa",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "iyupp",
                    "bio_en": "Yup.",
                    "bio_ar": "نعم.",
                    "photo": "https://drive.google.com/file/d/1XYkeqQdUVTuicB3WT-t9XwUN1xwg0V8i/view?usp=drive_link",
                    "id": "kadop-dop",
                    "role_en": "Student"
          },
          {
                    "name": "fajar",
                    "name_ar": "فجر",
                    "full_name": "Al fajar Maulana aris",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "belum ada kata²",
                    "bio_en": "No words yet.",
                    "bio_ar": "لا توجد كلمات بعد.",
                    "photo": "https://drive.google.com/file/d/1yjxQ3LLX46fm7oeDnDI2_nDssHl6DtKC/view?usp=drive_link",
                    "id": "fajar",
                    "role_en": "Student"
          },
          {
                    "name": "pesol",
                    "name_ar": "بيسول",
                    "full_name": "Faishal Syarif putra aji",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "sedang mencari nafkah",
                    "bio_en": "Currently looking for a living.",
                    "bio_ar": "أبحث عن لقمة العيش حالياً.",
                    "photo": "https://drive.google.com/file/d/1SvpCqsyzNFcr4IzQSobtbuF4aBkhMvmJ/view?usp=drive_link",
                    "id": "pesol",
                    "role_en": "Student"
          },
          {
                    "name": "mail",
                    "name_ar": "مايل",
                    "full_name": "Farhan ismail",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "tidak butuh yang tulus butuhnya yg 30 juz",
                    "bio_en": "Dont need someone sincere, need someone who memorized 30 juz.",
                    "bio_ar": "لا أحتاج إلى شخص مخلص، أحتاج إلى شخص يحفظ 30 جزءاً.",
                    "photo": "https://drive.google.com/file/d/1ssnzIsQpt2Di0-qS4Zt5IGRtDEVD8Ru1/view?usp=drive_link",
                    "id": "mail",
                    "role_en": "Student"
          },
          {
                    "name": "dipan",
                    "name_ar": "ديبان",
                    "full_name": "Fathlih dhifan",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Aku berhasil menaklukkan gunung tapi aku gagal menaklukkan mu",
                    "bio_en": "I succeeded in conquering the mountain, but I failed to conquer you.",
                    "bio_ar": "نجحت في قهر الجبل، لكنني فشلت في قهرك.",
                    "photo": "https://drive.google.com/file/d/1nVOiGGTk2aLT0XjgoFLCdZqyQIsN6PW4/view?usp=drive_link",
                    "id": "dipan",
                    "role_en": "Student"
          },
          {
                    "name": "haris",
                    "name_ar": "حارث",
                    "full_name": "Hariz Al atsary",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "tetap semangat",
                    "bio_en": "Keep the spirit up.",
                    "bio_ar": "ابق متحمساً.",
                    "photo": "https://drive.google.com/file/d/196BoKe-Z9TkkF9lu5L_A3ivM6O-BVzF7/view?usp=drive_link",
                    "id": "haris",
                    "role_en": "Student"
          },
          {
                    "name": "jawir",
                    "name_ar": "جاوير",
                    "full_name": "Jarir",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Menjadikan masalalu sebuah pembelajaran, melaju tanpa ragu kedepan. And that's how a bright star fly high",
                    "bio_en": "Making the past a lesson, moving forward without hesitation. And that's how a bright star fly high",
                    "bio_ar": "أعتقد أنني ممسوس يا نداه.",
                    "photo": "https://drive.google.com/file/d/1V4JY1ob99jYeo5MZ3PrPF8zGK6sOpdjj/view?usp=drive_link",
                    "id": "jawir",
                    "role_en": "Student"
          },
          {
                    "name": "doyok",
                    "name_ar": "دويوك",
                    "full_name": "Luqman athaillah artundaya",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "tak perlu kata²",
                    "bio_en": "No words needed.",
                    "bio_ar": "لا حاجة للكلمات.",
                    "photo": "https://drive.google.com/file/d/1Pna6GTb3Dpr6fqNpQHKMObdRexqBGsSB/view?usp=drive_link",
                    "id": "doyok",
                    "role_en": "Student"
          },
          {
                    "name": "mauly",
                    "name_ar": "مولي",
                    "full_name": "Maula Ali hudzaifah",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "suara termantap di kelas",
                    "bio_en": "The best voice in the class.",
                    "bio_ar": "أفضل صوت في الصف.",
                    "photo": "https://drive.google.com/file/d/1Ak3D0sUi0bG_aFYp_wgEAVVyjdSlm5Wm/view?usp=drive_link",
                    "id": "mauly",
                    "role_en": "Student"
          },
          {
                    "name": "abit",
                    "name_ar": "أبيت",
                    "full_name": "Muhammad Azzam tsabit",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "nanti kata²ne",
                    "bio_en": "Words will come later.",
                    "bio_ar": "الكلمات ستأتي لاحقاً.",
                    "photo": "https://drive.google.com/file/d/1-vM0157DKr_FiPQUSKxrleGznh-shJoE/view?usp=drive_link",
                    "id": "abit",
                    "role_en": "Student"
          },
          {
                    "name": "memet",
                    "name_ar": "ميميت",
                    "full_name": "Muhammad said Mahfudz",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Kamu gak harus sempurna buat di sayang cukup jadi versi dirimu yg paling jujur",
                    "bio_en": "You dont have to be perfect to be loved, just be your most honest self.",
                    "bio_ar": "ليس عليك أن تكون مثالياً لكي تُحب، فقط كن النسخة الأكثر صدقاً من نفسك.",
                    "photo": "https://drive.google.com/file/d/1Zi0n8IsEHqbAzapp-tbEiYn_gVbhbgai/view?usp=drive_link",
                    "id": "memet",
                    "role_en": "Student"
          },
          {
                    "name": "jedenn",
                    "name_ar": "جيدين",
                    "full_name": "Muhammad Zaidan nugroho",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "gx mau alay",
                    "bio_en": "Dont want to be cringe.",
                    "bio_ar": "لا أريد أن أكون سخيفاً.",
                    "photo": "https://drive.google.com/file/d/1pYM0jdVnvEl2UW9fkL2WwgGtBaXJDSha/view?usp=drive_link",
                    "id": "jedenn",
                    "role_en": "Student"
          },
          {
                    "name": "mustop",
                    "name_ar": "مصطوب",
                    "full_name": "Mustofa Al Ghifari",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "Biar diam di anggap mati, dari pada bising menyakitkan hati",
                    "bio_en": "Better to be silent and considered dead, than to be noisy and break hearts.",
                    "bio_ar": "خير لك أن تصمت وتعتبر ميتاً، من أن تكون مزعجاً وتكسر القلوب.",
                    "photo": "https://drive.google.com/file/d/1ZCLd73_I14gGEjbdVxFSgNQNz5to94PZ/view?usp=drive_link",
                    "id": "mustop",
                    "role_en": "Student"
          },
          {
                    "name": "nawap",
                    "name_ar": "نواب",
                    "full_name": "Nawwaf hafidz kautsar",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "orang yang berani nantang baim",
                    "bio_en": "The person who dares to challenge Baim.",
                    "bio_ar": "الشخص الذي يجرؤ على تحدي بايم.",
                    "photo": "https://drive.google.com/file/d/1Qfb7osAtebA1-xiM53FytdyXmVEiGHyr/view?usp=drive_link",
                    "id": "nawap",
                    "role_en": "Student"
          },
          {
                    "name": "bintang",
                    "name_ar": "بنتانغ",
                    "full_name": "Raikhan Dwi fardani",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "jangan karena kita harmatra cinta kita mudah sirna",
                    "bio_en": "Just because we are Harmatra, doesnt mean our love fades easily.",
                    "bio_ar": "لمجرد أننا هرمترى، لا يعني أن حبنا يتلاشى بسهولة.",
                    "photo": "https://drive.google.com/file/d/1f-_IpxkIpI_v5Dx3oqmi2U7AWzYphdJr/view?usp=drive_link",
                    "id": "bintang",
                    "role_en": "Student"
          },
          {
                    "name": "sim",
                    "name_ar": "سيم",
                    "full_name": "Simbian Mahesa naszhwi",
                    "role": "Siswa",
                    "role_ar": "طالب",
                    "bio_id": "sim suka kupu kupu malam",
                    "bio_en": "Sim likes night butterflies.",
                    "bio_ar": "سيم يحب فراشات الليل.",
                    "photo": "https://drive.google.com/file/d/1PbXh1k0xwGEH1BCoKWTGYzFigKYrOXuy/view?usp=drive_link",
                    "id": "sim",
                    "role_en": "Student"
          }
],

          timeline: [

            {

              date: "2025-07-15",

              title_id: "MPLS Pertama",

              title_en: "First Orientation",

              title_ar: "التوجيه الأول",

              desc_id: "Hari pertama kita saling mengenal.",

              desc_en: "The first day we got to know each other.",

              desc_ar: "اليوم الأول الذي تعارفنا فيه.",

              photo: "https://drive.google.com/file/d/1BgfNYptDOop_BpHpgdPvK5lE2zr1LOVC/view?usp=drive_link"

            },

            {

              date: "2026-07-06",

              title_id: "bukber 2026",

              title_en: "2026 Iftar Gathering",

              title_ar: "إفطار جماعي ٢٠٢٦",

              desc_id: "Hari pertama kita saling mengenal.",

              desc_en: "The first day we got to know each other.",

              desc_ar: "اليوم الأول الذي تعارفنا فيه.",

              photo: "https://drive.google.com/file/d/1OkGgSyNbXlNfe7TgqYyekwXfrrjskmhA/view?usp=sharing"

            },

            {

              date: "2025-08-17",

              title_id: "Lomba Kemerdekaan",

              title_en: "Independence Games",

              title_ar: "ألعاب الاستقلال",

              desc_id: "Menang juara 2 tarik tambang antar kelas.",

              desc_en: "Won 2nd place in class tug of war.",

              desc_ar: "الفوز بالمركز الثاني في لعبة شد الحبل بين الصفوف.",

              photo: "https://lh3.googleusercontent.com/u/0/d/1ZCAubvtGec2iPfw7ybA0uiz-dvqLWyCa"

            }

          ],

          gallery: [
          {
                    "url": "https://drive.google.com/file/d/1-bp6K5-FOi1cPmRQstFMokYOWdqzW67p/view?usp=sharing",
                    "title_id": "Pelantikan Organisasi #1",
                    "title_en": "Organization Inauguration #1",
                    "title_ar": "تنصيب المنظمة #1",
                    "caption": {
                              "id": "Dokumentasi Momen Pelantikan Organisasi HARMATRA (1)",
                              "en": "HARMATRA Student Organization Inauguration Documentation (1)",
                              "ar": "توثيق لحظات تنصيب المنظمة (1)"
                    },
                    "category": "Pelantikan Organisasi"
          },
          {
                    "url": "https://drive.google.com/file/d/12EvezDDBd1V8-8UWgj3U7wC3JEHla2Yh/view?usp=sharing",
                    "title_id": "Pelantikan Organisasi #2",
                    "title_en": "Organization Inauguration #2",
                    "title_ar": "تنصيب المنظمة #2",
                    "caption": {
                              "id": "Dokumentasi Momen Pelantikan Organisasi HARMATRA (2)",
                              "en": "HARMATRA Student Organization Inauguration Documentation (2)",
                              "ar": "توثيق لحظات تنصيب المنظمة (2)"
                    },
                    "category": "Pelantikan Organisasi"
          },
          {
                    "url": "https://drive.google.com/file/d/12s4sVbm5bDV2GnU9k1OzSIKsnSl3m0j0/view?usp=sharing",
                    "title_id": "Pelantikan Organisasi #3",
                    "title_en": "Organization Inauguration #3",
                    "title_ar": "تنصيب المنظمة #3",
                    "caption": {
                              "id": "Dokumentasi Momen Pelantikan Organisasi HARMATRA (3)",
                              "en": "HARMATRA Student Organization Inauguration Documentation (3)",
                              "ar": "توثيق لحظات تنصيب المنظمة (3)"
                    },
                    "category": "Pelantikan Organisasi"
          }
],

          quotes: [

            { text_id: "Kisah kita baru saja dimulai.", text_en: "Our story has just begun.", text_ar: "قصتنا بدأت للتو.", author: "Harmatra" },

            { text_id: "Bukan sekadar kelas, tapi keluarga.", text_en: "Not just a class, but a family.", text_ar: "ليس مجرد صف، بل عائلة.", author: "Fulan" }

          ]

        };

        // ==========================================

        // ⬆️ BATAS AKHIR EDIT DATA MANUAL ⬆️

        // ==========================================

        // --- Translations (JSON) ---

        const translations = {

          id: {

            music: "SUASANA SEKOLAH",

            nav_about: "Cerita", nav_members: "Anggota", nav_timeline: "Perjalanan", nav_gallery: "Galeri",

            hero_sub: "Rumah digital angkatan kami. Melangkah bersama, merajut memori, dan menciptakan harmoni tak terlupakan.",

            stat_members: "Anggota", stat_class: "Kelas", stat_events: "Kegiatan", stat_memories: "Memori",

            meaning_title: "Asal Usul Nama HARMATRA", meaning_subtitle: "Sebuah nama yang dibangun dari makna, kebersamaan, dan tujuan.",
            meaning_card1_title: "Harmony", meaning_card1_desc: "Simbol harmoni dalam kebersamaan.",
            meaning_card2_title: "معًا (Ma’an)", meaning_card2_desc: "Artinya bersama-sama.",
            meaning_card3_title: "Tragen", meaning_card3_desc: "Artinya membawa harapan menuju masa depan.",
            meaning_closing_1: "HARMATRA berarti:", meaning_closing_2: "Berjalan dalam harmoni, bersama-sama membawa harapan menuju masa depan.",

            title_timeline: "Jejak Langkah", sub_timeline: "Cerita yang kita ukir bersama sejak hari pertama.",

            title_members: "Keluarga HARMATRA", sub_members: "Kenali wajah-wajah di balik angkatan 11.",

            title_gallery: "Galeri Memori", sub_gallery: "Kumpulan momen yang tertangkap lensa.",

            spotlight: "Sorotan Hari Ini",

            footer_note: "Website resmi HARMATRA Angkatan 11 - 2 SMA. Dibuat dengan ❤️ oleh siswa, untuk siswa. Semua data bersifat fiktif dan hanya untuk tujuan demonstrasi.",

            contact_btn: "Hubungi Kami",
            contact_title: "Hubungi Kami",
            contact_desc: "Kirim pesan untuk HARMATRA",
            contact_name: "Nama",
            contact_name_ph: "Nama Anda",
            contact_name_err: "Nama belum diisi",
            contact_msg: "Pesan",
            contact_msg_ph: "Tulis pesan Anda...",
            contact_msg_err: "Pesan belum diisi",
            contact_send: "Kirim Pesan"

          },

          en: {

            music: "SCHOOL VIBES",

            nav_about: "Story", nav_members: "Members", nav_timeline: "Journey", nav_gallery: "Gallery",

            hero_sub: "Our digital home. Walking together, weaving memories, and creating unforgettable harmony.",

            stat_members: "Members", stat_class: "Class", stat_events: "Events", stat_memories: "Memories",

            meaning_title: "The Meaning Behind HARMATRA", meaning_subtitle: "A name built from meaning, togetherness, and purpose.",
            meaning_card1_title: "Harmony", meaning_card1_desc: "Symbol of harmony in togetherness.",
            meaning_card2_title: "معًا (Ma’an)", meaning_card2_desc: "Means together.",
            meaning_card3_title: "Tragen", meaning_card3_desc: "Means carrying hope toward the future.",
            meaning_closing_1: "HARMATRA means:", meaning_closing_2: "Walking in harmony, together carrying hope toward the future.",

            title_timeline: "Our Journey", sub_timeline: "The stories we've carved together since day one.",

            title_members: "HARMATRA Family", sub_members: "Meet the faces behind the 11th generation.",

            title_gallery: "Memory Gallery", sub_gallery: "A collection of moments captured through the lens.",

            spotlight: "Today's Spotlight",

            footer_note: "Official website of HARMATRA Class 11 - 2 SMA. Crafted with ❤️ by the students, for the students. All data is fictional and for demonstration purposes only.",

            contact_btn: "Contact Us",
            contact_title: "Contact Us",
            contact_desc: "Send a message to HARMATRA",
            contact_name: "Name",
            contact_name_ph: "Your Name",
            contact_name_err: "Name is required",
            contact_msg: "Message",
            contact_msg_ph: "Write your message...",
            contact_msg_err: "Message is required",
            contact_send: "Send Message"

          },

          ar: {

            music: "أجواء المدرسة",

            nav_about: "قصتنا", nav_members: "الأعضاء", nav_timeline: "رحلتنا", nav_gallery: "المعرض",

            hero_sub: "البيت الرقمي لدفعتنا. نسير معاً، ننسج الذكريات، ونخلق انسجاماً لا يُنسى.",

            stat_members: "الأعضاء", stat_class: "الصفوف", stat_events: "الأنشطة", stat_memories: "الذكريات",

            meaning_title: "معنى اسم هرمترى", meaning_subtitle: "اسم مبني على المعنى، التكاتف، والهدف.",
            meaning_card1_title: "Harmony", meaning_card1_desc: "رمز الانسجام في التكاتف.",
            meaning_card2_title: "معًا (Ma’an)", meaning_card2_desc: "تعني معًا.",
            meaning_card3_title: "Tragen", meaning_card3_desc: "تعني حمل الأمل نحو المستقبل.",
            meaning_closing_1: "هرمترى تعني:", meaning_closing_2: "السير في انسجام، معًا نحمل الأمل نحو المستقبل.",

            title_timeline: "خطواتنا", sub_timeline: "القصص التي سطرناها معاً منذ اليوم الأول.",

            title_members: "عائلة هرمترى", sub_members: "تعرف على الوجوه التي تقف خلف الدفعة 11.",

            title_gallery: "معرض الذكريات", sub_gallery: "مجموعة من اللحظات التي التقطتها العدسة.",

            spotlight: "أبرز أضواء اليوم",

            footer_note: "الموقع الرسمي لدفعة 11 هرمترى - المدرسة الثانوية الأولى. تم تصميمه بـ ❤️ من قبل الطلاب ولأجل الطلاب. جميع البيانات خيالية ولأغراض العرض فقط.",

            contact_btn: "اتصل بنا",
            contact_title: "اتصل بنا",
            contact_desc: "أرسل رسالة إلى هرمترى",
            contact_name: "الاسم",
            contact_name_ph: "اسمك",
            contact_name_err: "الاسم مطلوب",
            contact_msg: "الرسالة",
            contact_msg_ph: "اكتب رسالتك...",
            contact_msg_err: "الرسالة مطلوبة",
            contact_send: "إرسال الرسالة"

          }

        };

        // --- State ---

        let dbData = localData;
        window.HARMATRA_DATA = localData;

        let currentLang = 'id';

        let isDark = false;

        let isPlaying = false;

        let spotlightInterval;

        let currentSpotlightMember = null;

        // --- Helpers ---

        function escapeHTML(str) {

          if (!str) return '';

          var div = document.createElement('div');

          div.appendChild(document.createTextNode(String(str)));

          return div.innerHTML;

        }

        function safeDate(val) {

          if (!val) return '-';

          try {

            let locale = 'en-US';

            if (currentLang === 'id') locale = 'id-ID';

            else if (currentLang === 'ar') locale = 'ar-SA';

            return new Date(val).toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });

          } catch (e) { return '-'; }

        }

        function translateNumbers(numStr) {

          if (currentLang !== 'ar') return numStr;

          const arabicZero = 0x660; // unicode for '٠'

          return String(numStr).replace(/[0-9]/g, (d) => String.fromCharCode(arabicZero + parseInt(d)));

        }

        // FUNGSI PERBAIKAN: Konversi Otomatis Link Google Drive via lh3.googleusercontent.com

        function convertDriveLink(url) {

          if (!url) return './logo utama.png';

          if (url.includes('drive.google.com')) {

            const match = url.match(/\/d\/([^/]+)/);

            if (match && match[1]) {

              // FORMAT TERBARU: Mengekstrak gambar menggunakan server image asli Google

              return `https://lh3.googleusercontent.com/d/${match[1]}`;

            }

          }

          return url;

        }

        // --- Initialization ---

        document.addEventListener('DOMContentLoaded', () => {

          initTheme();

          initLenis();

          startRealtimeClock();

          loadData();

        });

        // --- Data Loading & Rendering ---

        function loadData() {

          setTimeout(() => {

            document.getElementById('mainLoader').classList.add('hidden');

            document.getElementById('mainApp').classList.remove('hidden');



            renderAll();

            initGSAP();

            startSpotlightHook();

          }, 1000);

        }

        function renderAll() {

          applyTranslation();

          renderStats();

          renderTimeline();

          renderMembers();

          renderGallery();

          renderQuotes();

          refreshSpotlightText();

        }

        function renderStats() {
          document.getElementById('statMembers').setAttribute('data-target', dbData.members.length);
          document.getElementById('statEvent').setAttribute('data-target', dbData.timeline.length);

          const counters = document.querySelectorAll('.counter');
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let animFrameId = null;

            const runCounter = () => {
              const startTime = performance.now();
              const duration = 1500; // 1.5 seconds (1500ms)

              const updateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                const easedProgress = progress * (2 - progress); // smooth ease-out
                const currentCount = Math.round(easedProgress * target);

                counter.innerText = translateNumbers(currentCount);

                if (progress < 1) {
                  animFrameId = requestAnimationFrame(updateCount);
                } else {
                  counter.innerText = translateNumbers(target);
                }
              };

              if (animFrameId) cancelAnimationFrame(animFrameId);
              animFrameId = requestAnimationFrame(updateCount);
            };

            if (counter._observer) {
              counter._observer.disconnect();
            }

            const obs = new IntersectionObserver((entries) => {
              if (entries[0].isIntersecting) {
                runCounter();
              } else {
                counter.innerText = "0";
              }
            });

            obs.observe(counter);
            counter._observer = obs;
          });
        }

        function renderTimeline() {

          const container = document.getElementById('timelineContainer');

          container.innerHTML = '';

          dbData.timeline.forEach((item, index) => {

            const isLeft = index % 2 === 0;

            let title = item.title_en;

            let desc = item.desc_en;

            if (currentLang === 'id') {

              title = item.title_id;

              desc = item.desc_id;

            } else if (currentLang === 'ar') {

              title = item.title_ar || item.title_en;

              desc = item.desc_ar || item.desc_en;

            }



            let html = `

            <div class="relative flex items-center justify-between md:justify-normal gs-up timeline-item group">

              <div class="hidden md:block md:w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 order-2'}">

                ${isLeft ? buildTimelineCard(item, title, desc) : ''}

              </div>

              

              <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[var(--bg-color)] transform -translate-x-1.5 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-150 transition-transform duration-300"></div>

              

              <div class="w-full pl-8 md:pl-0 md:w-1/2 ${!isLeft ? 'md:pl-12 text-left' : 'hidden md:block order-1'}">

                ${!isLeft || window.innerWidth < 768 ? buildTimelineCard(item, title, desc) : ''}

              </div>

            </div>

          `;

            container.innerHTML += html;

          });

        }

        function buildTimelineCard(item, title, desc) {

          const photoUrl = item.photo ? convertDriveLink(item.photo) : null;

          return `

          <div class="glass-card p-6 relative overflow-hidden group">

            ${photoUrl ? `<img src="${escapeHTML(photoUrl)}" class="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500">` : ''}

            <div class="relative z-10">

              <div class="text-sm text-blue-400 font-bold mb-2 tracking-wider">${safeDate(item.date)}</div>

              <h3 class="font-display text-2xl font-bold mb-2">${escapeHTML(title)}</h3>

              <p class="opacity-80 text-sm leading-relaxed">${escapeHTML(desc)}</p>

            </div>

          </div>

        `;

        }

        function renderMembers() {

          const container = document.getElementById('membersContainer');

          container.innerHTML = '';

          dbData.members.forEach((m, i) => {

            let name = m.name;

            let role = m.role;

            let bio = m.bio_en;

            if (currentLang === 'id') {

              bio = m.bio_id;

            } else if (currentLang === 'ar') {

              name = m.name_ar || m.name;

              role = m.role_ar || m.role;

              bio = m.bio_ar || m.bio_en;

            }

            const photo = convertDriveLink(m.photo);



            container.innerHTML += `

            <div class="glass-card rounded-2xl overflow-hidden group cursor-pointer gs-stagger relative" style="aspect-ratio: 3/4;" onclick="openLightbox('members', ${i})">

              <img src="${escapeHTML(photo)}" onerror="this.src='https://via.placeholder.com/300x400?text=Error'" class="w-full h-full object-cover grayscale group-hover:grayscale-0">

              <div class="member-info absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-5 translate-y-6 group-hover:translate-y-0">

                <div class="member-name font-display font-bold text-lg text-white transform translate-y-2 group-hover:translate-y-0">${escapeHTML(name)}</div>

                <div class="member-role text-xs text-blue-300 font-medium tracking-widest mb-2 transform translate-y-2 group-hover:translate-y-0">${escapeHTML(role)}</div>

                <p class="member-bio text-xs text-white/70 opacity-0 group-hover:opacity-100 line-clamp-2 transform translate-y-4 group-hover:translate-y-0">${escapeHTML(bio)}</p>

              </div>

            </div>

          `;

          });

        }

        function renderGallery() {
          const container = document.getElementById('galleryContainer');
          container.innerHTML = '';

          dbData.gallery.forEach((img, i) => {
            const photoUrl = convertDriveLink(img.url);

            container.innerHTML += `
            <div class="masonry-item rounded-xl overflow-hidden gs-up relative group cursor-pointer" onclick="openLightbox('gallery', ${i})">
              <div class="w-full overflow-hidden" style="aspect-ratio:16/9;">
                <img src="${escapeHTML(photoUrl)}" onerror="this.src='https://via.placeholder.com/600?text=Error'" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i class="fa-solid fa-expand text-white text-2xl drop-shadow-lg"></i>
              </div>
            </div>
          `;
          });
        }

        function renderQuotes() {

          const c1 = document.getElementById('quoteContainer');

          const c2 = document.getElementById('quoteContainer2');

          let html = '';

          dbData.quotes.forEach(q => {

            let text = q.text_en;

            if (currentLang === 'id') {

              text = q.text_id;

            } else if (currentLang === 'ar') {

              text = q.text_ar || q.text_en;

            }

            html += `

            <div class="glass-card px-8 py-6 rounded-2xl min-w-[300px] flex-shrink-0">

              <i class="fa-solid fa-quote-left text-blue-500/50 text-2xl mb-3 block"></i>

              <p class="font-display font-medium text-lg mb-4">"${escapeHTML(text)}"</p>

              <div class="text-xs uppercase tracking-widest opacity-60">— ${escapeHTML(q.author)}</div>

            </div>

          `;

          });

          c1.innerHTML = html;

          c2.innerHTML = html;

        }

        // --- LIGHTBOX FULLSCREEN LOGIC ---

        let currentLightboxType = '';
        let currentLightboxIndex = -1;

        window.openLightbox = function (type, index) {
          currentLightboxType = type;
          currentLightboxIndex = index;

          const lbImg = document.getElementById('lightboxImg');
          lbImg.classList.add('opacity-0', 'scale-95');
          lbImg.classList.remove('scale-100');

          updateLightboxContent();

          const lb = document.getElementById('lightbox');
          lb.classList.remove('hidden');
          void lb.offsetWidth;
          lb.classList.remove('opacity-0');

          setTimeout(() => {
            lbImg.classList.remove('opacity-0', 'scale-95');
            lbImg.classList.add('scale-100');
          }, 50);
        };

        function updateLightboxContent() {
          const lbImg = document.getElementById('lightboxImg');
          const caption = document.getElementById('lightboxCaption');
          const lbName = document.getElementById('lightboxName');
          const lbRole = document.getElementById('lightboxRole');
          const lbBio = document.getElementById('lightboxBio');

          if (currentLightboxType === 'members') {
            const m = dbData.members[currentLightboxIndex];
            const src = convertDriveLink(m.photo);
            lbImg.src = src;

            let name = m.name;
            let fullName = m.full_name || '';
            let role = m.role;
            let bioText = m.bio_en;

            if (currentLang === 'id') {
              bioText = m.bio_id;
            } else if (currentLang === 'ar') {
              name = m.name_ar || m.name;
              role = m.role_ar || m.role;
              bioText = m.bio_ar || m.bio_en;
            }

            const lbFullName = document.getElementById('lightboxFullName');
            lbName.innerText = name;

            if (fullName) {
              lbFullName.innerText = fullName;
              lbFullName.classList.remove('hidden');
            } else {
              lbFullName.classList.add('hidden');
            }

            lbRole.innerText = role;
            lbBio.innerText = bioText ? `"${bioText}"` : '';

            caption.classList.remove('hidden');
            void caption.offsetWidth;
            caption.classList.remove('opacity-0', 'translate-y-4');
            caption.classList.add('opacity-100', 'translate-y-0');
          } else if (currentLightboxType === 'gallery') {
            const img = dbData.gallery[currentLightboxIndex];
            const src = convertDriveLink(img.url);
            lbImg.src = src;

            let titleText = img.title_en || '';
            let captionText = img.caption_en || '';
            if (currentLang === 'id') {
              titleText = img.title_id || '';
              captionText = img.caption_id || '';
            } else if (currentLang === 'ar') {
              titleText = img.title_ar || img.title_en || '';
              captionText = img.caption_ar || img.caption_en || '';
            }

            lbName.innerText = titleText;
            const lbFullName = document.getElementById('lightboxFullName');
            if (lbFullName) lbFullName.classList.add('hidden');
            lbRole.innerText = '';
            lbBio.innerText = captionText ? `"${captionText}"` : '';

            if (titleText || captionText) {
              caption.classList.remove('hidden');
              void caption.offsetWidth;
              caption.classList.remove('opacity-0', 'translate-y-4');
              caption.classList.add('opacity-100', 'translate-y-0');
            } else {
              caption.classList.add('hidden');
            }
          }
        }

        window.navigateLightbox = function (direction, event) {
          if (event) event.stopPropagation();

          let listLength = 0;
          if (currentLightboxType === 'members') {
            listLength = dbData.members.length;
          } else if (currentLightboxType === 'gallery') {
            listLength = dbData.gallery.length;
          }

          if (listLength === 0) return;

          const lbImg = document.getElementById('lightboxImg');
          const caption = document.getElementById('lightboxCaption');

          // Fade and scale out
          lbImg.classList.add('opacity-0', 'scale-95');
          lbImg.classList.remove('scale-100');
          if (caption) {
            caption.classList.add('opacity-0', 'translate-y-4');
            caption.classList.remove('opacity-100', 'translate-y-0');
          }

          setTimeout(() => {
            currentLightboxIndex = (currentLightboxIndex + direction + listLength) % listLength;

            const lbName = document.getElementById('lightboxName');
            const lbRole = document.getElementById('lightboxRole');
            const lbBio = document.getElementById('lightboxBio');

            if (currentLightboxType === 'members') {
              const m = dbData.members[currentLightboxIndex];
              lbImg.src = convertDriveLink(m.photo);

              let name = m.name;
              let fullName = m.full_name || '';
              let role = m.role;
              let bioText = m.bio_en;

              if (currentLang === 'id') {
                bioText = m.bio_id;
              } else if (currentLang === 'ar') {
                name = m.name_ar || m.name;
                role = m.role_ar || m.role;
                bioText = m.bio_ar || m.bio_en;
              }

              const lbFullName = document.getElementById('lightboxFullName');
              const lbIg = document.getElementById('lightboxIg');
              lbName.innerText = name;
              if (fullName) {
                lbFullName.innerText = fullName;
                lbFullName.classList.remove('hidden');
              } else {
                lbFullName.classList.add('hidden');
              }
              lbRole.innerText = role;
              lbBio.innerText = bioText ? `"${bioText}"` : '';
              
              if (lbIg) {
                const igLink = m.ig || "https://instagram.com/harmatra_id";
                lbIg.href = igLink.startsWith('http') ? igLink : `https://instagram.com/${igLink.replace('@', '')}`;
                lbIg.classList.remove('hidden');
              }
              
              caption.classList.remove('hidden');
            } else {
              const img = dbData.gallery[currentLightboxIndex];
              lbImg.src = convertDriveLink(img.url);

              let titleText = img.title_en || '';
              let captionText = img.caption_en || '';
              if (currentLang === 'id') {
                titleText = img.title_id || '';
                captionText = img.caption_id || '';
              } else if (currentLang === 'ar') {
                titleText = img.title_ar || img.title_en || '';
                captionText = img.caption_ar || img.caption_en || '';
              }

              lbName.innerText = titleText;
              const lbFullName = document.getElementById('lightboxFullName');
              const lbIg = document.getElementById('lightboxIg');
              if (lbFullName) lbFullName.classList.add('hidden');
              if (lbIg) lbIg.classList.add('hidden');
              lbRole.innerText = '';
              lbBio.innerText = captionText ? `"${captionText}"` : '';

              if (titleText || captionText) {
                caption.classList.remove('hidden');
              } else {
                caption.classList.add('hidden');
              }
            }

            // Fade and scale back in
            setTimeout(() => {
              lbImg.classList.remove('opacity-0', 'scale-95');
              lbImg.classList.add('scale-100');

              let hasCaption = false;
              if (currentLightboxType === 'members') {
                hasCaption = true;
              } else if (currentLightboxType === 'gallery') {
                const img = dbData.gallery[currentLightboxIndex];
                if (img.title_en || img.title_id || img.title_ar || img.caption_en || img.caption_id || img.caption_ar) {
                  hasCaption = true;
                }
              }

              if (hasCaption) {
                caption.classList.remove('opacity-0', 'translate-y-4');
                caption.classList.add('opacity-100', 'translate-y-0');
              }
            }, 50);
          }, 150);
        };

        window.closeLightbox = function () {
          const lb = document.getElementById('lightbox');
          const lbImg = document.getElementById('lightboxImg');
          const caption = document.getElementById('lightboxCaption');

          lb.classList.add('opacity-0');
          lbImg.classList.remove('scale-100');
          lbImg.classList.add('scale-95');

          if (caption) {
            caption.classList.add('opacity-0', 'translate-y-4');
            caption.classList.remove('opacity-100', 'translate-y-0');
          }

          setTimeout(() => lb.classList.add('hidden'), 300);
        };

        window.closeLightboxOnBg = function (e) {
          if (e.target === e.currentTarget) {
            closeLightbox();
          }
        };

        // Keyboard navigation support
        document.addEventListener('keydown', (e) => {
          const lb = document.getElementById('lightbox');
          if (lb && !lb.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') {
              navigateLightbox(-1);
            } else if (e.key === 'ArrowRight') {
              navigateLightbox(1);
            } else if (e.key === 'Escape') {
              closeLightbox();
            }
          }
        });





        // --- Hooks & Features ---

        function refreshSpotlightText() {
          if (!currentSpotlightMember) return;
          const name = document.getElementById('spotlightName');
          const quote = document.getElementById('spotlightQuote');
          if (!name || !quote) return;

          let displayName = currentSpotlightMember.name;
          let bioText = currentSpotlightMember.bio_en;

          if (currentLang === 'id') {
            bioText = currentSpotlightMember.bio_id;
          } else if (currentLang === 'ar') {
            displayName = currentSpotlightMember.name_ar || currentSpotlightMember.name;
            bioText = currentSpotlightMember.bio_ar || currentSpotlightMember.bio_en;
          }

          name.innerText = displayName;
          quote.innerText = bioText;
        }

        function startSpotlightHook() {

          if (spotlightInterval) clearInterval(spotlightInterval);

          const updateSpotlight = () => {

            if (!dbData.members.length) return;

            const random = dbData.members[Math.floor(Math.random() * dbData.members.length)];
            currentSpotlightMember = random;

            const img = document.getElementById('spotlightImg');
            const name = document.getElementById('spotlightName');
            const quote = document.getElementById('spotlightQuote');

            if (img && name && quote) {
              img.style.opacity = 0; name.style.opacity = 0; quote.style.opacity = 0;

              setTimeout(() => {
                img.src = convertDriveLink(random.photo) || 'https://via.placeholder.com/150';
                refreshSpotlightText();
                img.style.opacity = 1; name.style.opacity = 1; quote.style.opacity = 1;
              }, 300);
            }

          };

          updateSpotlight();

          spotlightInterval = setInterval(updateSpotlight, 8000);

        }

        function startRealtimeClock() {

          const dEl = document.getElementById('realtimeDate');

          const updateClock = () => {

            const now = new Date();

            let locale = 'en-US';
            if (currentLang === 'id') locale = 'id-ID';
            else if (currentLang === 'ar') locale = 'ar-SA';

            dEl.innerText = now.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'short' });

          };

          updateClock();

          setInterval(updateClock, 1000);

        }

        // --- Interactions ---

        window.toggleLang = function () {

          if (currentLang === 'id') {
            currentLang = 'en';
          } else if (currentLang === 'en') {
            currentLang = 'ar';
          } else {
            currentLang = 'id';
          }

          document.getElementById('langText').innerText = currentLang.toUpperCase();

          renderAll();

        };

        function applyTranslation() {

          const dict = translations[currentLang];

          document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerText = dict[key];
          });

          document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
          });

          // Handle RTL layout for Arabic
          if (currentLang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.classList.add('rtl-layout');
          } else {
            document.documentElement.removeAttribute('dir');
            document.documentElement.classList.remove('rtl-layout');
          }

        }

        window.toggleTheme = function () {

          isDark = !isDark;

          document.body.classList.toggle('theme-glow', !isDark);

          document.getElementById('themeIcon').className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

        };

        function initTheme() {

          isDark = false;

          document.body.classList.add('theme-glow');

          document.getElementById('themeIcon').className = 'fa-solid fa-sun';

        }

        window.toggleMusic = function () {

          const audio = document.getElementById('bgm');

          const icon = document.getElementById('playIcon');

          const eq = document.getElementById('eqContainer');

          if (isPlaying) {

            audio.pause();

            icon.className = 'fa-solid fa-play text-sm';

            eq.style.display = 'none';

          } else {

            audio.play().catch(e => console.log("Audio play blocked by browser"));

            icon.className = 'fa-solid fa-pause text-sm';

            eq.style.display = 'flex';

          }

          isPlaying = !isPlaying;

        };

        window.scrollToMembers = function () {

          document.getElementById('members').scrollIntoView({ behavior: 'smooth' });

        };

        // --- Cinematic Animations ---

        function initLenis() {

          const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

          function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }

          requestAnimationFrame(raf);

        }

      })();
  