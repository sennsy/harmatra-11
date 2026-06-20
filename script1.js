

      (function () {

        'use strict';

        // ==========================================

        // ⬇️ EDIT DATA KAMU SECARA MANUAL DI SINI ⬇️

        // ==========================================

        const localData = {

          members: [

            {

              name: "hanan agak gilaa",

              name_ar: "حنان",

              full_name: "selain nawwaf",

              role: "Ketua Kelas",

              role_ar: "رئيس الصف",

              bio_id: "Selalu siap membantu teman-teman.",

              bio_en: "Always ready to help friends.",

              bio_ar: "مستعد دائماً لمساعدة الأصدقاء.",

              photo: "https://drive.google.com/file/d/1ZHYENi6Bnm0O4Z_X45HgQ1EMYl0sREOS/view?usp=drive_link"

            },

            {

              name: "immszkyy",

              name_ar: "immszkyy",

              full_name: "IBRAHIM ZAKYY",
              
              ig: "izmedtzz",

              role: "sekretaris",

              role_ar: "السكرتيرة",

              bio_id: "Suka bermain basket di sore hari.",

              bio_en: "Loves playing basketball in the afternoon.",

              bio_ar: "يحب لعب كرة السلة في المساء.",

              photo: "https://drive.google.com/file/d/1P3VlSXsJ65g7D7OaYZMrF1QoAC5XbHxk/view?usp=drive_link"

            },

            {

              name: "kumis",

              name_ar: "كوميس",

              full_name: "selain nawwaf",

              role: "mas ketuu",

              role_ar: "أمين الصندوق",

              bio_id: "Yang paling galak kalau nagih uang kas.",

              bio_en: "The strictest when collecting class funds.",

              bio_ar: "الأكثر صرامة عند جمع أموال الصف.",

              photo: "https://drive.google.com/file/d/1G0KGl6SXrpnSNPWh5u_SIW41VMkl45C3/view?usp=drive_link"

            },

            {

              name: "abil",

              name_ar: "هابيل",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "mumin",

              name_ar: "مؤمن",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "dipan",

              name_ar: "ديبان",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "udin",

              name_ar: "أودين",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "darma",

              name_ar: "دارما",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "zakaria",

              name_ar: "زكريا",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "tegar",

              name_ar: "تيجار",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "daya",

              name_ar: "دايا",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "faishol",

              name_ar: "فيصل",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "memet",

              name_ar: "ميميت",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "fajar",

              name_ar: "فجر",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "tsabit",

              name_ar: "ثابت",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "haidar",

              name_ar: "حيدر",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "jedenn",

              name_ar: "جيدين",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "haritsz",

              name_ar: "حارث",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "dapi",

              name_ar: "دافي",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "simbi",

              name_ar: "سيمبي",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "yahya",

              name_ar: "يحيى",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "muadz",

              name_ar: "معاذ",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "rozan",

              name_ar: "روزان",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "jarir",

              name_ar: "جرير",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "maul",

              name_ar: "مول",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "mail",

              name_ar: "مايل",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "rehan",

              name_ar: "ريحان",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "mustopa",

              name_ar: "مصطفى",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

            {

              name: "nawwaf",

              name_ar: "أولترامان",

              full_name: "selain nawwaf",

              role: "siswa",

              role_ar: "طالب",

              bio_id: "isi dewek.",

              bio_en: "yes or no?.",

              bio_ar: "اكتبه بنفسك.",

              photo: "https://drive.google.com/file/d/1mVdpU0hSTBqcQjCd-GcsP_0JcdrE9_pB/view?usp=drive_link"

            },

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
              url: "https://drive.google.com/file/d/1NDbauh0G9LjRVB09f_8oV-3nCRc-Z2Vf/view?usp=drive_link",
              title_id: "Belajar Mandiri",
              title_en: "Independent Study",
              title_ar: "الدراسة الذاتية",
              caption_id: "Momen Belajar Bersama di Kelas",
              caption_en: "Learning Together in Class",
              caption_ar: "لحظات الدراسة معاً في الصف"
            },
            {
              url: "https://drive.google.com/file/d/119RjNKDfu8IttSIRhsACrUnxBkTZ2A-_/view?usp=sharing",
              title_id: "Kerja Kelompok",
              title_en: "Group Project",
              title_ar: "العمل الجماعي",
              caption_id: "Diskusi dan Kerja Kelompok",
              caption_en: "Group Discussion and Teamwork",
              caption_ar: "مناقشة جماعية وعمل جماعي"
            },
            {
              url: "https://drive.google.com/file/d/1BgfNYptDOop_BpHpgdPvK5lE2zr1LOVC/view?usp=drive_link",
              title_id: "Masa Orientasi (MPLS)",
              title_en: "School Orientation (MPLS)",
              title_ar: "توجيه الطلاب (MPLS)",
              caption_id: "Keceriaan Selama Masa MPLS",
              caption_en: "Fun Times During MPLS Orientation",
              caption_ar: "أوقات ممتعة خلال فترة توجيه الطلاب"
            },
            {
              url: "https://drive.google.com/file/d/1MxM15ADNXNDKrjG7gbJcaC_3BqFyKdtT/view?usp=sharing",
              title_id: "Kebersamaan Harmatra",
              title_en: "Harmatra Togetherness",
              title_ar: "تضامن هارماترى",
              caption_id: "Kebersamaan Anggota Harmatra",
              caption_en: "Togetherness of Harmatra Family",
              caption_ar: "تضامن عائلة هارماترى"
            },
            {
              url: "https://drive.google.com/file/d/1HgHHEQ6Ty1nIQJPlTCA4nvYsKt7atlU-/view?usp=sharing",
              title_id: "Senyum Persahabatan",
              title_en: "Smiles of Friendship",
              title_ar: "ابتسامات الصداقة",
              caption_id: "Senyuman dan Tawa Bersama",
              caption_en: "Smiles and Shared Laughter",
              caption_ar: "ابتسامات وضحكات مشتركة"
            },
            {
              url: "https://drive.google.com/file/d/1xiA_Lr8q5Fv-PP--QPLrcsZvDspLS_1M/view?usp=sharing",
              title_id: "Momen Hangat",
              title_en: "Warm Moments",
              title_ar: "لحظات دافئة",
              caption_id: "Momen Hangat Persahabatan",
              caption_en: "Warm Moments of Friendship",
              caption_ar: "لحظات الصداقة الدافئة"
            },
            {
              url: "https://drive.google.com/file/d/1NRaPxxnpM64vayjoQiJ53dYdspDasOT6/view?usp=sharing",
              title_id: "Menggapai Impian",
              title_en: "Reaching Dreams",
              title_ar: "الوصول إلى الأحلام",
              caption_id: "Langkah Bersama Menggapai Impian",
              caption_en: "Walking Together Towards Our Dreams",
              caption_ar: "السير معاً نحو أحلامنا"
            },
            {
              url: "https://drive.google.com/file/d/1pPAQCPD2E8CYvNcdJVLQLa5dJU1dDrbc/view?usp=sharing",
              title_id: "Kompak Selalu",
              title_en: "Always United",
              title_ar: "متحدون دائماً",
              caption_id: "Kompak dalam Setiap Kegiatan",
              caption_en: "United in Every Activity",
              caption_ar: "متحدون في كل نشاط"
            },
            {
              url: "https://drive.google.com/file/d/1vg8EPI9Epany9JaLgyrNbj_kprjF8hLg/view?usp=sharing",
              title_id: "Memori Sekolah",
              title_en: "School Memories",
              title_ar: "ذكريات المدرسة",
              caption_id: "Kenangan Indah Masa Sekolah",
              caption_en: "Beautiful School Memories",
              caption_ar: "ذكريات المدرسة الجميلة"
            }
          ],

          quotes: [

            { text_id: "Kisah kita baru saja dimulai.", text_en: "Our story has just begun.", text_ar: "قصتنا بدأت للتو.", author: "Harmatra" },

            { text_id: "Bukan sekadar kelas, tapi keluarga.", text_en: "Not just a class, but a family.", text_ar: "ليس مجرد صف، بل عائلة.", author: "Andi Saputra" }

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

            footer_note: "Website resmi HARMATRA Angkatan 11 - SMA 1. Dibuat dengan ❤️ oleh siswa, untuk siswa. Semua data bersifat fiktif dan hanya untuk tujuan demonstrasi.",

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

            footer_note: "Official website of HARMATRA Class 11 - SMA 1. Crafted with ❤️ by the students, for the students. All data is fictional and for demonstration purposes only.",

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
  