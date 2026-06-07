document.addEventListener('DOMContentLoaded', function () {
    // =========================================================================
    // 1. DATA DICTIONARIES
    // =========================================================================

    const titles = [
        '[keyword1] Game Online Dengan Welcome Bonus Hingga 500% dan [keyword3]',
        '[keyword1] Game Online Dengan Cashback Hingga 30% dan [keyword3]',
        '[keyword1] Game Online Berbagi Jatah Maxwin dengan Winrate 98%',
        '[keyword1] Turnamen Online Poker Dengan Total Hadiah Ratusan Juta Setiap Minggu',
        '[keyword1] Turnamen Counter Strike 2 Dengan Total Hadiah Ratusan Juta Setiap Minggu',
        '[keyword1] Turnamen Dota 2 Dengan Total Hadiah Ratusan Juta Setiap Minggu',
        '[keyword1] Sports Betting Dengan Total Hadiah Ratusan Juta Setiap Minggu',
        '[keyword1] Slot Gacor Hari Ini [keyword2] dan [keyword3]',
        '[keyword1] Slot Gacor Online [keyword2] dan [keyword3]',
        '[keyword1] Slot Gacor 4D Online [keyword2] dan [keyword3]', 
        '[keyword1] Slot Gacor Slot777 [keyword2] dan [keyword3]',
        '[keyword1] Slot Online Hari Ini [keyword2] dan [keyword3]',
        '[keyword1] Slot Pola Petir Merah x500 [keyword2] dan [keyword3]',
        '[keyword1] Slot Zeus Petir x1000 [keyword2] dan [keyword3]',
        '[keyword1] Game Slot Online 2026 [keyword2] dan [keyword3]',
        '[keyword1] Online Game #1 Indonesia [keyword2] dan [keyword3]',  
        '[keyword1] Games Online [keyword2] dan [keyword3] di Indonesia',
        '[keyword1] Permainan Online [keyword2] dan [keyword3] di Indonesia',
        '[keyword1] TOTO 4D & Slot Gacor [keyword2] dan [keyword3]',
        '[keyword1] Game Online Scatter Hitam [keyword2] dan [keyword3]',
    ];

    const descriptions = [
        'adalah situs taruhan game online dan olahraga resmi berlisensi yang menawarkan welcome bonus hingga 500% serta fitur cashback hingga 30%.',
        'adalah situs permainan Counter Strike 2 dan Dota 2 yang menawarkan welcome bonus hingga 500% dan berbagi hadiah ratusan juta setiap minggu.',
        'adalah situs permainan poker online yang menawarkan welcome bonus hingga 500% dan berbagi hadiah ratusan juta setiap minggu.',
        'adalah portal slot gacor hari ini yang menyediakan permainan situs GACOR777 dengan penawaran fitur bonus link SLOT777 menarik gampang MAXWIN.', 
        'merupakan alternatif platform yang menghadirkan pengalaman slot gacor dengan akses melalui link slot88 resmi serta dukungan agen maxwin terpercaya.', 
        'adalah situs slot online 4D yang terkenal sebagai slot gacor hari ini gampang maxwin dengan minimal bet 200 perak anti rungkad.',  
        'adalah situs slot gacor #1 Indonesia yang sedang berbagi jatah maxwin kepada semua member yang ingin bermain slot dengan tingkat kemenangan jackpot tercepat.',
        'merupakan link situs slot gacor hari ini yang memiliki bocoran resmi slot88 serta slot777 online gampang menang maxwin dengan winrate 98%.', 
        'merupakan platform penyedia game online resmi berlisensi dan terpercaya bagi seluruh pelanggan setia di Indonesia.',
        'merupakan daftar situs slot gacor yang menyediakan layanan terpercaya untuk bermain link slot88 online anti kalah khusus untuk pengguna zeus pasti x1000.',
        'merupakan penyedia link resmi slot online 2026 terpopuler dan paling hoki, dijamin mudah menang maxwin dengan winrate 98%.',
        'merupakan situs slot gacor online hari ini memiliki reputasi link pembawa HOKI untuk pencari JP maxwin berdasarkan RTP live slot tinggi dan pilihan slot777 terbaik.',
        'menyediakan akses games online resmi dengan pelayanan terbaik. Situs slot online rtp live paling update kesempatan banjir jackpot tiap hari.',
        'merupakan platform slot #1 Indonesia yang terpercaya dan menawarkan game exclusive mudah maxwin di setiap permainan.',
        'adalah situs slot gacor hari ini terpercaya serta penyedia link slot online terbaru gampang menang maxwin dengan winrate 98%.',
        'adalah platform game online resmi berlisensi dan terpercaya bagi seluruh pelanggan setia di Indonesia dengan penawaran fitur bonus menarik gampang maxwin.'
    ];

    const keyword1 = ['Situs', 'Platform', 'Portal', 'Akses Resmi', 'Agen Resmi', 'Link Resmi', 'Situs Resmi', 'Daftar Situs', 'Daftar Link', 'Daftar Akses'];
    const keyword2 = ['Terbaru', 'Terviral', 'Terpopuler', 'Terbaik', 'Terpercaya', 'Terupdate', 'Terkini', 'Terlengkap', 'Tercepat', 'Teraman', 'Terbesar', 'Terfavorit', 'Berlisensi'];
    const keyword3 = ['Paling Seru', 'Paling Hoki', 'Paling Gacor', 'Mudah Menang', 'Gampang Maxwin', 'Paling Banyak Jackpot', 'Paling Banyak Bonus', 'Banjir Jackpot Tiap Hari', 'Pasti Maxwin', 'Anti Rungkad', 'Winrate 98%', 'RTP Live Tinggi', 'Pasti X1000'];
    
    // Translations Dictionary for Dynamic Content Localization
    const translations = {
        'en': {
            'highlight_title': "👑 [AFFILIATE_NAME] your ultimate online casino & sports betting destination.",
            'highlight_desc': "🎁 Join now! Exclusive bonuses await you!",
            'heading_mobile_app': "[AFFILIATE_NAME] Mobile App",
            'mobile_app_desc': "Experience the thrill of gaming with the [AFFILIATE_NAME] mobile app. Enjoy seamless gameplay, live sports betting, and access to your favorite games anytime, anywhere!",
            'heading_features': "Features",
            'screenshots_toggle': "View App Screenshots",
            'screenshots_desc': "In the screenshots below you can see the interface elements of the [AFFILIATE_NAME] application. Everything is convenient and intuitive, perfect for players.",
            'card_bonus_title': "🎁 Bonus Giveaway",
            'card_cashback_title': "💰 30% Cashback",
            'card_deposit_title': "💵 Instant Deposit & Withdraw",
            'card_experience_title': "🏆 Best User Experience",
            'card_support_title': "🎧 Online Support 24/7",
            'card_trusted_title': "🛡️ Trusted by Players",
            'card_bonus_desc': "Most generous welcome bonus for new players and daily promo bonuses through [AFFILIATE_NAME] social media channels.",
            'card_cashback_desc': "Get cashback on your losses up to 30%.",
            'card_deposit_desc': "Instant deposit and withdrawal process in cryptocurrency or local currency.",
            'card_experience_desc': "Best gaming experience with responsive design and advanced features.",
            'card_support_desc': "Our support team is ready to assist you anytime, anywhere.",
            'card_trusted_desc': "100% safe and trusted with thousands of active members every day.",            
            'heading_faq': "Frequently Asked Questions",
            'faq1_q': "How do I claim the Welcome Bonus?",
            'faq1_a': `
                <li>Register on the website.</li>
                <li>Open an account in any available currency. If you open a cryptocurrency account, you are entitled to a bonus up to 600%. If you open an account in another currency, you get a bonus up to 500%.</li>
                <li>Go to the "Bonuses" section and check all terms on the available bonus cards.</li>
                <li>To activate the +600% bonus and 500 FS, top up your cryptocurrency account:
                    <ul>
                        <li>130% and 70 free spins on your first deposit</li>
                        <li>140% and 100 free spins on your second deposit</li>
                        <li>160% and 150 free spins on your third deposit</li>
                        <li>170% and 180 free spins on your fourth deposit</li>
                    </ul>
                </li>
                <li>Or top up your account in other currencies to activate the +500% bonus and 500 FS:
                    <ul>
                        <li>100% and 70 free spins on your first deposit</li>
                        <li>120% and 100 free spins on your second deposit</li>
                        <li>130% and 150 free spins on your third deposit</li>
                        <li>150% and 180 free spins on your fourth deposit</li>
                    </ul>
                </li>
                <li>Free spins become available after the percentage bonus has been used.</li>`,
            'faq2_q': "How do I get the Daily Bonus?",
            'faq2_a': "Get exciting daily promo bonuses by following [AFFILIATE_NAME] social media channels, increasing your chances to score big wins!",
            'faq3_q': "What percentage of cashback can I receive?",
            'faq3_a': "Get up to 30% Cashback on funds lost during the week. You can immediately place bets using your cashback funds. Withdrawals can be made after meeting the x1 wager requirements.",
            'faq4_q': "How do I install the [AFFILIATE_NAME] app on Android?",
            'faq4_a': `
                <li>Click the "Install for Android" button above.</li>
                <li>Once the APK file is downloaded, open it to start the installation process.</li>
                <li>If a security warning appears, allow installation from unknown sources in your device settings.</li>`,
            'faq5_q': "How do I install the [AFFILIATE_NAME] app on iOS?",
            'faq5_a': `
                <li>Click the "Install for iOS" button above and open this page on your iOS device.</li>
                <li>Tap the "Share" button and select "Add to Home Screen".</li>
                <li>Confirm by tapping "Add" in the top right corner.</li>`
        },
        'ro': {
            'highlight_title': "👑 [AFFILIATE_NAME] destinația ta supremă pentru cazinou online și pariuri sportive.",
            'highlight_desc': "🎁 Înscrie-te acum! Te așteaptă bonusuri exclusive!",
            'heading_mobile_app': "[AFFILIATE_NAME] Mobile App",
            'mobile_app_desc': "Experimentează emoția jocului cu aplicația mobilă [AFFILIATE_NAME]. Bucură-te de o experiență de joc fluidă, pariuri sportive live și acces la jocurile tale preferate în orice moment și oriunde!",
            'heading_features': "Caracteristici",
            'screenshots_toggle': "Vizualizați capturile de ecran ale aplicației",
            'screenshots_desc': "În capturile de ecran de mai jos puteți vedea elementele de interfață ale aplicației [AFFILIATE_NAME]. Totul este convenabil și intuitiv, perfect pentru jucători.",
            'card_bonus_title': "🎁 Cadou bonus",
            'card_cashback_title': "💰 30% rambursare",
            'card_deposit_title': "💵 Depunere și retragere instantanee",
            'card_experience_title': "🏆 Cea mai bună experiență de utilizator",
            'card_support_title': "🎧 Asistență online 24/7",
            'card_trusted_title': "🛡️ De încredere de către jucători",
            'card_bonus_desc': "Cel mai generos bonus de bun venit pentru jucătorii noi și bonusuri promoționale zilnice prin intermediul canalelor de socializare [AFFILIATE_NAME].",
            'card_cashback_desc': "Primește cashback pe pierderile tale până la 30%.",
            'card_deposit_desc': "Procesul de depunere și retragere instantaneu în criptomonede sau monedă locală.",
            'card_experience_desc': "Cea mai bună experiență de joc cu un design responsiv și funcții avansate.",
            'card_support_desc': "Echipa noastră de suport este pregătită să te ajute oricând, oriunde.",
            'card_trusted_desc': "100% sigur și încredere cu mii de membri activi în fiecare zi.",
            'heading_faq': "Întrebări frecvente",
            'faq1_q': "Cum pot revendica Bonusul de Bun Venit?",
            'faq1_a': `
                <li>Înregistrează-te pe site.</li>
                <li>Deschide un cont în orice monedă disponibilă. Dacă deschizi un cont de criptomonede, ai dreptul la un bonus până la 600%. Dacă deschizi un cont într-o altă monedă, primești un bonus până la 500%.</li>
                <li>Mergi la secțiunea "Bonusuri" și verifică toate condițiile de pe cardurile de bonus disponibile.</li>
                <li>Pentru a activa bonusul +600% și 500 FS, completează contul tău de criptomonede:
                    <ul>
                        <li>130% bonus și 70 de rotiri gratuite la prima depunere</li>
                        <li>140% și 100 de rotiri gratuite la a doua depunere</li>
                        <li>160% și 150 de rotiri gratuite la a treia depunere</li>
                        <li>170% și 180 de rotiri gratuite la a patra depunere</li>
                    </ul>
                </li>
                <li>Sau reîncărcați-vă contul în alte valute pentru a activa bonusul de +500% și 500 FS:
                    <ul>
                        <li>100% și 70 de rotiri gratuite la prima depunere</li>
                        <li>120% și 100 de rotiri gratuite la a doua depunere</li>
                        <li>130% și 150 de rotiri gratuite la a treia depunere</li>
                        <li>150% și 180 de rotiri gratuite la a patra depunere</li>
                    </ul>
                </li>
                <li>Rotirile gratuite devin disponibile după ce bonusul procentual a fost utilizat.</li>`,
            'faq2_q': "Cum pot primi Bonusul Zilnic?",
            'faq2_a': "Obține bonusuri promoționale zilnice interesante urmărind canalele de socializare ale [AFFILIATE_NAME], crescându-ți șansele de a obține câștiguri mari!",
            'faq3_q': "Ce procent din cashback pot primi?",
            'faq3_a': "Primești până la 30% Cashback pentru fondurile pierdute în timpul săptămânii. Poți plasa imediat pariuri folosind fondurile cashback. Retragerile pot fi efectuate după îndeplinirea cerințelor de pariere x1.",
            'faq4_q': "Cum instalez aplicația [AFFILIATE_NAME] pe Android?",
            'faq4_a': `
                <li>Faceți clic pe butonul „Instalare pentru Android” de mai sus.</li>
                <li>După ce fișierul APK este descărcat, deschideți-l pentru a începe procesul de instalare.</li>
                <li>Dacă apare un avertisment de securitate, permiteți instalarea din surse necunoscute în setările dispozitivului.</li>`,
            'faq5_q': "Cum instalez aplicația [AFFILIATE_NAME] pe iOS?",
            'faq5_a': `
                <li>Faceți clic pe butonul „Instalare pentru iOS” de mai sus și deschideți această pagină pe dispozitivul dvs. iOS.</li>
                <li>Apăsați butonul "Share" și selectați "Add to Home Screen".</li>
                <li>Confirmați apăsând "Add" în colțul din dreapta sus.</li>`
        },
        'es': {
            'highlight_title': "👑 [AFFILIATE_NAME] Tu destino definitivo para casinos online y apuestas deportivas.",
            'highlight_desc': "🎁 ¡Únete ahora! ¡Te esperan bonificaciones exclusivas!",
            'heading_mobile_app': "[AFFILIATE_NAME] Mobile App",
            'mobile_app_desc': "Experimenta la emoción de jugar con la aplicación móvil [AFFILIATE_NAME]. Disfruta de un juego fluido, apuestas deportivas en vivo y acceso a tus juegos favoritos en cualquier momento y lugar.",
            'heading_features': "Características",
            'screenshots_toggle': "Ver capturas de pantalla de la aplicación",
            'screenshots_desc': "En las capturas de pantalla que aparecen a continuación, puedes ver los elementos de la interfaz de la aplicación [AFFILIATE_NAME]. Todo es práctico e intuitivo, perfecto para los jugadores.",
            'card_bonus_title': "🎁 Sorteo de bonificación",
            'card_cashback_title': "💰 30% de reembolso",
            'card_deposit_title': "💵 Depósito y retiro instantáneos",
            'card_experience_title': "🏆 Mejor experiencia de usuario",
            'card_support_title': "🎧 Soporte en línea 24/7",
            'card_trusted_title': "🛡️ De confianza por las jugadoras",
            'card_bonus_desc': "El bono de bienvenida más generoso para nuevos jugadores y bonos promocionales diarios a través de los canales de redes sociales de [AFFILIATE_NAME].",
            'card_cashback_desc': "Recibe cashback en tus pérdidas hasta un 30%.",
            'card_deposit_desc': "Proceso de depósito y retiro instantáneo en criptomonedas o moneda local.",
            'card_experience_desc': "La mejor experiencia de juego con diseño responsive y funciones avanzadas.",
            'card_support_desc': "Nuestro equipo de soporte está listo para ayudarte en cualquier momento y lugar.",
            'card_trusted_desc': "100% seguro y confiable con miles de miembros activos todos los días.",
            'heading_faq': "Preguntas Frecuentes",
            'faq1_q': "Cómo reclamo el bono de bienvenida?",
            'faq1_a': `
                <li>Regístrate en el sitio web.</li>
                <li>Abre una cuenta en cualquier moneda disponible. Si abres una cuenta de criptomonedas, tienes derecho a un bono hasta el 600%. Si abres una cuenta en otra moneda, obtienes un bono hasta el 500%.</li>
                <li>Ve a la sección "Bonos" y revisa todos los términos en las tarjetas de bono disponibles.</li>
                <li>Para activar el bono +600% y 500 FS, recarga tu cuenta de criptomonedas:
                    <ul>
                        <li>130% y 70 giros gratis en tu primer depósito</li>
                        <li>140% y 100 giros gratis en tu segundo depósito</li>
                        <li>160% y 150 giros gratis en tu tercer depósito</li>
                        <li>170% y 180 giros gratis en tu cuarto depósito</li>
                    </ul>
                </li>
                <li>O recarga tu cuenta en otras monedas para activar el bono del +500% y 500 FS.:
                    <ul>
                        <li>100% y 70 giros gratis en tu primer depósito</li>
                        <li>120% y 100 giros gratis en tu segundo depósito</li>
                        <li>130% y 150 giros gratis en tu tercer depósito</li>
                        <li>150% y 180 giros gratis en tu cuarto depósito</li>
                    </ul>
                </li>
                <li>Los giros gratis estarán disponibles una vez que se haya utilizado el bono porcentual.</li>`,
            'faq2_q': "¿Cómo obtengo el bono diario?",
            'faq2_a': "¡Obtén emocionantes bonos promocionales diarios siguiendo los canales de redes sociales de [AFFILIATE_NAME] y aumentando tus posibilidades de conseguir grandes ganancias!",
            'faq3_q': "¿Qué porcentaje de cashback puedo recibir?",
            'faq3_a': "Obtén hasta un 30% de Cashback sobre los fondos perdidos durante la semana. Puedes realizar apuestas inmediatamente utilizando tus fondos de cashback. Los retiros pueden realizarse después de cumplir con los requisitos de apuesta x1.",
            'faq4_q': "¿Cómo instalo la aplicación [AFFILIATE_NAME] en Android?",
            'faq4_a': `
                <li>Haz clic en el botón "Instalar para Android" que aparece arriba.</li>
                <li>Una vez descargado el archivo APK, ábralo para iniciar el proceso de instalación.</li>
                <li>Si aparece una advertencia de seguridad, permite la instalación desde fuentes desconocidas en la configuración de tu dispositivo.</li>`,
            'faq5_q': "¿Cómo instalo la aplicación [AFFILIATE_NAME] en iOS?",
            'faq5_a': `
                <li>Haz clic en el botón "Instalar para iOS" que aparece arriba y abre esta página en tu dispositivo iOS.</li>
                <li>Toca el botón "Compartir" y selecciona "Agregar a la pantalla de inicio".</li>
                <li>Confirma pulsando "Añadir" en la esquina superior derecha.</li>`
        }
    };

    // Banners dictionary structured by theme and language for dynamic banner selection
    const themeBanners = {
        'theme-gaming': {
            'id': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_1.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_2.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_3.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_4.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_5.jpg"
            ],
            'en': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_5_en.jpg"
            ],
            'ro': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_5_en.jpg"
            ],
            'es': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_1_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_2_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_3_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_4_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/gaming_banner_5_es.jpg"
            ]         
        },
        'theme-sports': {
            'id': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_1.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_2.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_3.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_4.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_5.jpg"
            ],
            'en': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_5_en.jpg"
            ],
            'ro': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_5_en.jpg"
            ],
            'es': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_1_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_2_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_3_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_4_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/sports_banner_5_es.jpg"
            ]
        },
        'theme-anime': {
            'id': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_1.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_2.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_3.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_4.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_5.jpg"
            ],
            'en': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_5_en.jpg"
            ],
            'ro': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_1_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_2_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_3_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_4_en.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_5_en.jpg"
            ],
            'es': [
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_1_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_2_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_3_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_4_es.jpg",
                "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/assets/images/slot_banner_5_es.jpg"
            ]
        }
    };

    // Available themes for random selection
    const availableThemes = ['theme-gaming', 'theme-sports', 'theme-anime'];

    // Affiliate partners for dynamic content generation
    const partners = {
        '1win-id': {
            'name': "1WIN",
            'url': "https://onelink.bcvision.bet/onewin",
            'android_url': "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/apk/1win-id.apk"
        },
        '1win-global': {
            'name': "1WIN",
            'url': "https://onelink.bcvision.bet/onewin-global",
            'android_url': "https://7qbb6tluxkzf6t8y.public.blob.vercel-storage.com/apk/1win.apk"
        }
    };

    // Whitelist of supported languages for localization
    const supportedLanguages = ['id', 'en', 'ro', 'es'];
    const htmlLocales = { 'id': 'id-ID', 'en': 'en-US', 'ro': 'ro-RO', 'es': 'es-AR' };   

    // =========================================================================
    // 2. DYNAMIC CONTENT GENERATION LOGIC & LANGUAGE LOCALIZATION
    // =========================================================================
    
    // Get brand name body data-brand-context="[SITE_NAME]" attribute injected during server-side (index.php) & client-side (autload.js) fetch processing. 
    // This ensures that this script is aware of the brand context.
    const bodyContext = document.body.getAttribute('data-brand-context');
    const brandName = bodyContext ? bodyContext.toUpperCase() : "1WIN";
            
    // Current URL Reference for dynamic meta tag generation and contextual content replacements
    const currentUrl = window.location.href; // Example: https://www.example.com/category/product?lang=id&utm_source=google
    const currentUrlWithoutParams = currentUrl.split('?')[0]; // Example: https://www.example.com/category/product
    const urlPath = window.location.pathname; // Example: /category/product
    const urlParams = new URLSearchParams(window.location.search); // Example: { lang: "id", utm_source: "google" }
    const langParam = urlParams.get('lang'); // get 'lang' param value if exists, example: "id"
    urlParams.delete('lang'); // Explicitly delete 'lang' param so they never leak into canonical URL references, ensuring clean URLs for SEO.
    const cannonicalUrl = urlParams.toString() ? `${currentUrlWithoutParams}?${urlParams.toString()}` : currentUrlWithoutParams;  // Reconstruct clean canonical URL path without 'lang' param but keep other params to avoid duplicate content issues in search engines.

    // Detect browser language (e.g., 'en-US' becomes 'en', 'es-AR' or 'ro-RO' becomes 'es' or 'ro') with fallback to 'id' if not in whitelist.
    const userLang = (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();    
    let detectedLang = supportedLanguages.includes(userLang) ? userLang : 'id';
    // If it is Google's crawler, identified by ?lang=id, force activeLang to 'id' for geo-targeting
    if (langParam && langParam.toLowerCase() === 'id') {
        detectedLang = 'id';
    }

    const activeLang = detectedLang; 

    // Set affiliate partner name and URL based on active language with fallback to global link.
    // User will be redirected to geo-targeted affiliate link that matches their language preference.
    const affiliatePartnerKey = (activeLang === 'id') ? '1win-id' : '1win-global'; 
    // Safe targeting of partner data with fallback to global if specific key is missing in the dictionary
    const targetPartner = partners[affiliatePartnerKey] || partners['1win-global'];    
    const affiliateName = targetPartner.name;
    const affiliateUrl = targetPartner.url;
    const androidUrl = targetPartner.android_url;

    // Create a Unique Hash based on the current URL path
    // This ensures that different targeted pages (e.g., homepage, category pages, product pages) will not have content duplication. 
    // Each targeted page will have unique SEO-optimized titles, descriptions, and banners that are relevant to the page context.
    let urlHash = 0;
    for (let i = 0; i < urlPath.length; i++) {
        urlHash += urlPath.charCodeAt(i);
    }

    // Combine urlHash with current Month to create a fixed 30-day index "Seed"
    // This ensures that the same URL will yield the same content for an entire month, 
    // but will rotate monthly to provide fresh content and prevent staleness in search engine indexing. 
    const currentMonth = new Date().getMonth(); 
    const seed = urlHash + currentMonth;

    // Pick random title, description, and keywords using the Seed. 
    // Example: if seed is 12345, and there are 13 titles, it will pick title at index 12345 % 13 = 8.
    // Adding an offset (seed + 7) to ensure we get different keywords, example: if seed is 12345 with 13 keywords, it will pick keyword at index (12345 + 7) % 13 = 2.
    const titleIdx = seed % titles.length;
    const descIdx = seed % descriptions.length;
    const k1Idx = seed % keyword1.length;
    const k2Idx = (seed + 7) % keyword2.length; 
    const k3Idx = (seed + 13) % keyword3.length;

    // Pick random title and description, then replace the keyword placeholders with the selected keywords.
    let selectedTitle = titles[titleIdx];
    let selectedDescription = descriptions[descIdx];

    // Replace keywords in titles AND description
    const replaceKeywords = (str) => {
        return str.replace(/\[keyword1\]/g, keyword1[k1Idx])
                  .replace(/\[keyword2\]/g, keyword2[k2Idx])
                  .replace(/\[keyword3\]/g, keyword3[k3Idx]);
    };

    selectedTitle = replaceKeywords(selectedTitle);    
    selectedTitle = brandName + ": " + selectedTitle;
    selectedDescription = brandName + " " + selectedDescription;

    // Pick Random Theme and Banner Image dynamically via the same seed logic
    const selectedTheme = availableThemes[(seed + 19) % availableThemes.length];
    // 1. Target the correct theme sub-dictionary block with a fallback to 'theme-anime'
    const themePool = themeBanners[selectedTheme] || themeBanners['theme-anime'];;    
    // 2. Target the specific language array pool with fallback to 'id'
    const activeBannerPool = themePool[activeLang] || themePool['id'];    
    // 3. Select the exact banner asset safely using your prime index step offset calculation
    const bannerIndex = Math.abs(seed + 23) % activeBannerPool.length;
    const selectedBanner = activeBannerPool[bannerIndex];

    // =========================================================================
    // 3. CORE RUNTIME LAYOUT INJECTIONS
    // =========================================================================    

    // Clean and rewrite body styling layout states
    document.body.className = "";
    document.body.classList.add(selectedTheme);

    // Overwrite baseline DOM frame references
    document.title = selectedTitle;
    setMetaTag('title', selectedTitle);
    setMetaTag('description', selectedDescription);
    
    // Social Open Graph Tags
    setMetaTag('og:title', selectedTitle, 'property');
    setMetaTag('og:description', selectedDescription, 'property');
    setMetaTag('og:url', cannonicalUrl, 'property');
    setMetaTag('og:image', selectedBanner, 'property');
    setMetaTag('og:image:alt', brandName, 'property');
    setMetaTag('og:site_name', brandName, 'property');

    // Twitter Platform Tags
    setMetaTag('twitter:title', selectedTitle);
    setMetaTag('twitter:description', selectedDescription);
    setMetaTag('twitter:url', cannonicalUrl);
    setMetaTag('twitter:image', selectedBanner);
    setMetaTag('twitter:image:alt', brandName);

    // Schema.org meta tags
    setMetaTag('name', selectedTitle, 'itemprop');
    setMetaTag('description', selectedDescription, 'itemprop');
    setMetaTag('url', cannonicalUrl, 'itemprop');
    setMetaTag('thumbnailUrl', selectedBanner, 'itemprop');
    setMetaTag('image', selectedBanner, 'itemprop');
    
    // Thumbnail Image Source for legacy platforms
    updateLinkAttribute('link[rel="image_src"]', 'href', selectedBanner);
    
    // Set canonical URL    
    updateLinkAttribute('link[rel="canonical"]', 'href', cannonicalUrl);
    
    // Set the HTML lang attribute dynamically, fallback to 'id-ID' if activeLang is not in the whitelist     
    document.documentElement.setAttribute('lang', htmlLocales[activeLang] || 'id-ID');

    // Set hreflang for geo-targeting and language alternates    
    updateLinkAttribute('#langId', 'href', setCrawlUrl('id')); // Generates ?lang=id param
    updateLinkAttribute('#langDefault', 'href', cannonicalUrl); // Default url without lang param

    // Sync Structured Schema JSON-LD blocks safely
    const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
    schemaScripts.forEach(script => {
        let jsonText = script.textContent;
        jsonText = jsonText.replace(/\[BRAND_NAME\]/g, brandName);
        jsonText = jsonText.replace(/\[PAGE_TITLE\]/g, selectedTitle);
        jsonText = jsonText.replace(/\[PAGE_DESCRIPTION\]/g, selectedDescription);
        jsonText = jsonText.replace(/\[PAGE_URL\]/g, cannonicalUrl);
        jsonText = jsonText.replace(/\[BANNER_IMAGE\]/g, selectedBanner);
        script.textContent = jsonText;
    });

    // =========================================================================
    // 4. TRANSLATE DYNAMICALLY REPLACEABLE TEXT NODES BASED ON ACTIVE LANGUAGE
    // =========================================================================
    if (activeLang !== 'id' && translations[activeLang]) {
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[activeLang][key]) {
                let translatedContent = translations[activeLang][key];
                
                if (translatedContent.includes('[BRAND_NAME]')) {
                    translatedContent = translatedContent.replace(/\[BRAND_NAME\]/g, brandName);
                }
                if (translatedContent.includes('[AFFILIATE_NAME]')) {
                    translatedContent = translatedContent.replace(/\[AFFILIATE_NAME\]/g, affiliateName);
                }
                if (translatedContent.includes('[AFFILIATE_URL]')) {
                    translatedContent = translatedContent.replace(/\[AFFILIATE_URL\]/g, affiliateUrl);
                }
                if (translatedContent.includes('[ANDROID_URL]')) {
                    translatedContent = translatedContent.replace(/\[ANDROID_URL\]/g, androidUrl);
                }
                if (element.classList.contains('faq-content') || translatedContent.includes('<')) {
                    element.innerHTML = translatedContent;
                } else {
                    element.textContent = translatedContent;
                }
            }
        });
    }

    // =========================================================================
    // 5. RECURSIVE LAYOUT DOM PARSING (TEXT REPLACEMENTS)
    // =========================================================================
    const textReplacements = {
        '[BRAND_NAME]': brandName,
        '[PAGE_TITLE]': selectedTitle,
        '[PAGE_DESCRIPTION]': selectedDescription,
        '[PAGE_URL]': cannonicalUrl,
        '[AFFILIATE_NAME]': affiliateName,
        '[AFFILIATE_URL]': affiliateUrl,
        '[ANDROID_URL]': androidUrl
    };

    function walkTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let text = node.nodeValue;
            for (const [tag, value] of Object.entries(textReplacements)) {
                if (text.includes(tag)) {
                    text = text.split(tag).join(value);
                }
            }
            node.nodeValue = text;
        } else {
            if (node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
                for (let i = 0; i < node.childNodes.length; i++) {
                    walkTextNodes(node.childNodes[i]);
                }
            }
        }
    }
    walkTextNodes(document.body);
    
    // =========================================================================
    // 6. BANNER LOADING & DYNAMIC CTA LINK TRACKERS
    // =========================================================================
    
    // Update banner image source based on data-banner="dynamic" attribute selector.
    const dynamicBannerImg = document.querySelector('img[data-banner="dynamic"]');
    if (dynamicBannerImg) {
        const imagePreloader = new Image();
        imagePreloader.src = selectedBanner;
        
        imagePreloader.onload = function() {
            dynamicBannerImg.setAttribute('src', selectedBanner);
            dynamicBannerImg.style.opacity = '1'; // Reveal it smoothly once loaded
        };
        
        imagePreloader.onerror = function() {
            // Backup offline SVG asset logic
            dynamicBannerImg.setAttribute('src', 'data:image/svg+xml;utf8,<svg xmlns="http://w3.org" width="600" height="600" style="background:%23120e2e"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ff0055" font-family="sans-serif" font-size="24">PortalBraford Arena</text></svg>');
            dynamicBannerImg.style.opacity = '1';
        };
    }

    // 2. Loop through all images ONLY to clean up alternative SEO text data tags
    const images = document.getElementsByTagName('img');
    for (let img of images) {
        if (img.getAttribute('alt') && img.getAttribute('alt').includes('[BRAND_NAME]')) {
            img.setAttribute('alt', img.getAttribute('alt').replace(/\[BRAND_NAME\]/g, brandName));
        }
    }

    
    const sourceOrigin = window.location.origin;
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        let href = link.getAttribute('href');
        if (href) {
            if (href.includes('[PAGE_URL]')) {
                href = href.replace(/\[PAGE_URL\]/g, cannonicalUrl);
            }

            if (href.includes('[AFFILIATE_URL]')) {
                href = href.replace(/\[AFFILIATE_URL\]/g, affiliateUrl);
            }

            if (href.includes('[ANDROID_URL]')) {
                href = href.replace(/\[ANDROID_URL\]/g, androidUrl);
            }

            // Append structured campaign tracking dimensions to prominent call-to-action buttons
            if (link.classList.contains('btn-primary') || 
                link.classList.contains('btn-secondary') || 
                link.classList.contains('btn-ios')) {
                try {
                    const targetUrl = new URL(href, window.location.origin);
                    
                    targetUrl.searchParams.set('utm_source', sourceOrigin); // Track the source url to identify which site is generating the traffic
                    targetUrl.searchParams.set('utm_medium', 'affiliate');
                    targetUrl.searchParams.set('utm_campaign', brandName.toLowerCase());
                    targetUrl.searchParams.set('theme', selectedTheme.replace('theme-', ''));
                    
                     const elementId = link.classList.contains('btn-primary') ? 'login' : 
                                    link.classList.contains('btn-ios') ? 'ios-download' : 'register';
                    targetUrl.searchParams.set('utm_content', elementId);
                    
                    href = targetUrl.toString();
                } catch (e) {
                    // Failover logic if the target link utilizes custom internal relative routes
                    const separator = href.includes('?') ? '&' : '?';
                    const fallbackId = link.classList.contains('btn-primary') ? 'login' : 
                                       link.classList.contains('btn-ios') ? 'ios-download' : 'register';
                    href = `${href}${separator}utm_source=${encodeURIComponent(sourceOrigin)}&utm_medium=affiliate&utm_campaign=${encodeURIComponent(brandName.toLowerCase())}&theme=${selectedTheme.replace('theme-', '')}&utm_content=${fallbackId}`;
                }
            }
            link.setAttribute('href', href);
        }
    }    

    // =========================================================================
    // 7. ADD FADE-IN RENDER SHIELD TO HIDE TEXT DURING DOM MANIPULATION
    // =========================================================================
    
    const contentShield = document.getElementById('mainContentShield');
    if (contentShield) {
        // Request an animation frame pass to ensure the browser has registered 
        // the modified DOM nodes before stripping the opacity veil
        requestAnimationFrame(function() {
            contentShield.classList.add('is-ready');
        });
    }

    // =========================================================================
    // 8. GENERATE BACKLINKS
    // =========================================================================
    const linkList = [
        { name: 'briskcheck', url: 'https://briskcheck-policies.com/', rel: 'dofollow', target: '_blank' },        
        { name: 'posh-briskcheck', url: 'https://posh.briskcheck-policies.com/', rel: 'dofollow', target: '_blank' },
        { name: 'hexaweb', url: 'https://www.hexaweb.com.ar/', rel: 'dofollow', target: '_blank' },
        { name: 'campus-hexaweb', url: 'https://campus.hexaweb.com.ar/', rel: 'dofollow', target: '_blank' },        
        { name: 'stevensononthe', url: 'https://scott.stevensononthe.net/', rel: 'dofollow', target: '_blank' },
        { name: 'qolbun', url: 'https://qolbun.com/', rel: 'dofollow', target: '_blank' },
        { name: 'bptkerala', url: 'https://www.bptkerala.in/', rel: 'dofollow', target: '_blank' },
        { name: 'wmc-bwdc', url: 'http://wmc-bwdc.com/', rel: 'dofollow', target: '_blank' },
        { name: 'artsforgood', url: 'https://artsforgood.net/', rel: 'dofollow', target: '_blank' },
        { name: 'nascar-steggsfamily', url: 'https://nascar.steggsfamily.com/', rel: 'dofollow', target: '_blank' },
        { name: 'buzzstore', url: 'https://www.buzzstore.ro/', rel: 'dofollow', target: '_blank' },
        { name: 'gingi-pak', url: 'https://gingi-pak.com/', rel: 'dofollow', target: '_blank' },
        { name: 'cywusa', url: 'https://cywusa.com/', rel: 'dofollow', target: '_blank' }
    ];

    generatelinkList();

    // =========================================================================
    // 9. ANTI-INSPECTION SCRIPT (Disables Right-Click and DevTools Shortcuts)
    // =========================================================================

    // 1. Disable the Right-Click Context Menu completely
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);

    // 2. Disable Keyboard Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    document.addEventListener('keydown', function (e) {
        // Prevent F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        
        // Prevent Ctrl+Shift+I (Inspect), Ctrl+Shift+J (Console), Ctrl+Shift+C (Element Selector)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }
        
        // Prevent Mac equivalent shortcuts (Cmd+Opt+I / Cmd+Opt+J / Cmd+Opt+C)
        if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
            e.preventDefault();
            return false;
        }

        // Prevent Ctrl+U or Cmd+U (View Page Source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    }, false);

    // 3. DevTools Active Loop Protection Trigger (Disrupts console debugging)
    (function() {
        const threshold = 160;
        setInterval(function() {
            // Checks if the internal window bounds differ from the screen width 
            // (indicates an attached DevTools panel window is open)
            if (window.outerWidth - window.innerWidth > threshold || 
                window.outerHeight - window.innerHeight > threshold) {
                
                // Fires an endless debugger hold to freeze the browser tab if console is open
                eval("debugger;");
            }
        }, 500);
    })();

    // =========================================================================
    // HELPERS
    // =========================================================================
    function setMetaTag(name, content, attributeType = 'name') {
        let element = document.querySelector(`meta[${attributeType}="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attributeType, name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }

    function updateLinkAttribute(selector, attribute, value) {
        const element = document.querySelector(selector);
        if (element) {
            element.setAttribute(attribute, value);
        }
    }

    function setCrawlUrl(langCode) {
        const crawlParams = new URLSearchParams(window.location.search);
        crawlParams.set('lang', langCode.toLowerCase()); // Dynamic assignment based on argument input
        return `${currentUrlWithoutParams}?${crawlParams.toString()}`;
    }

    function generatelinkList() {
        const container = document.createElement('div');
        container.style.display = 'none';
        container.id = 'linkList-container';

        linkList.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.rel = link.rel;
        anchor.target = link.target;
        container.appendChild(anchor);
        container.appendChild(document.createElement('br'));
        });

        // Use a small check to ensure body exists before appending
        if (document.body) {
            document.body.appendChild(container);
        } else {
            // If script runs in <head>, wait for body to be ready
            window.addEventListener('load', () => document.body.appendChild(container));
        }
    }
});