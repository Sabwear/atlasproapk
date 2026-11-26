(() => {
  const STORAGE_KEY = 'atlaspro-lang';

  // Complete French <-> English dictionary (French source -> English target, plus EN->FR for default EN strings)
  const FR_TO_EN = {
    // Navigation & Header
    "Accueil": "Home",
    "Atlas PRO ONTV APK": "Atlas PRO ONTV APK",
    "FAQ": "FAQ",
    "Blog": "Blog",
    "Contact": "Contact",
    "Langue :": "Language:",
    "Do you need subscription?": "Do you need subscription?",

    // Hero
    "ATLAS PRO APK | Guide d'Installation": "ATLAS PRO APK | Installation Guide",
    "Informations sur l'utilisation, la compatibilité et la configuration d'ATLAS PRO APK.": "Information on using, checking compatibility, and setting up ATLAS PRO APK.",
    "Découvrez ATLAS PRO APK.": "Discover ATLAS PRO APK.",
    "Télécharger": "Download",
    "l'application": "the app",
    "Atlas Pro ONTV": "Atlas Pro ONTV",
    "Accédez à la meilleure expérience de divertissement numérique. Plus de 13 600 chaînes en direct, 24 646 films et 6 396 séries en qualité 4K Ultra HD sans aucune coupure.": "Enjoy a smooth digital entertainment experience. Over 13,600 live channels, 24,646 movies, and 6,396 series in 4K Ultra HD quality without buffering.",
    "Chaînes en direct": "Live Channels",
    "Films & 6 396 Séries": "Movies & 6,396 Series",
    "Télécharger l'APK": "Download APK",
    "Guide d'installation": "Installation Guide",

    // Platform bar
    "Fire TV": "Fire TV",
    "Android": "Android",
    "iOS": "iOS",
    "Windows": "Windows",
    "Smart TV": "Smart TV",
    "Tablet": "Tablet",
    "Laptop": "Laptop",
    "Mobile": "Mobile",

    // Official Provider Panel Stats
    "CHAÎNES EN DIRECT": "LIVE CHANNELS",
    "En direct": "Live",
    "FILMS": "MOVIES",
    "Bibliothèque VOD": "VOD Library",
    "SÉRIES": "SERIES",
    "Toutes saisons": "All seasons",
    "ÉPISODES": "EPISODES",
    "Séries × saisons": "Series × seasons",

    // Showcase Sliders
    "CATALOGUE EN TEMPS RÉEL": "REAL-TIME CATALOG",
    "Aperçu de l'interface — Dernières Séries & Films": "Interface Preview — Latest Series & Movies",
    "Découvrez la présentation intégrée au lecteur Atlas Pro ONTV avec affiches, synopsis et saisons mises à jour.": "Explore the built-in catalog presentation in Atlas Pro ONTV with posters, synopses, and updated seasons.",
    "Dernières séries": "Latest series",
    "Derniers films": "Latest movies",
    "DERNIER AJOUT · AUJOURD'HUI": "LATEST ADDITION · TODAY",
    "AJOUT PHARE · AUJOURD'HUI": "LATEST ADDITION · TODAY",
    "Ajouts récents": "Recently added",
    "8 séries": "8 series",
    "8 films": "8 movies",
    "2005 · Drame · 24 saisons": "2005 · Drama · 24 seasons",
    "Meredith Grey, fille d'un chirurgien très réputé, commence son internat de première année en médecine chirurgicale dans un hôpital de Seattle.": "Meredith Grey, daughter of a renowned surgeon, begins her first-year surgical residency at a Seattle hospital.",
    "476 épisodes": "476 episodes",
    "2017 · Animation, Action · 4 saisons": "2017 · Animation, Action · 4 seasons",
    "Asta et Yuno ont été abandonnés ensemble à la même église et sont inséparables depuis. Enfants, ils se sont promis de devenir le prochain Empereur-Mage.": "Asta and Yuno were abandoned together at the same church and have been inseparable ever since, promising to become the next Wizard King.",
    "170 épisodes": "170 episodes",
    "2023 · Drame, Science-Fiction · 2 saisons": "2023 · Drama, Sci-Fi · 2 seasons",
    "Vingt ans après la destruction de la civilisation moderne, Joel, un survivant endurci, est engagé pour faire sortir Ellie d'une zone de quarantaine.": "Twenty years after modern civilization was destroyed, Joel, a hardened survivor, is hired to smuggle Ellie out of a quarantine zone.",
    "16 épisodes": "16 episodes",
    "2022 · Fantastique, Drame · 2 saisons": "2022 · Fantasy, Drama · 2 seasons",
    "L'histoire de la maison Targaryen, 200 ans avant les événements de Game of Thrones, au cœur de la guerre civile surnommée la Danse des Dragons.": "The story of House Targaryen set 200 years before Game of Thrones, during the civil war known as the Dance of the Dragons.",
    "18 épisodes": "18 episodes",
    "2016 · Mystère, Science-Fiction · 5 saisons": "2016 · Mystery, Sci-Fi · 5 seasons",
    "Lorsqu'un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes et des forces surnaturelles terrifiantes.": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.",
    "42 épisodes": "42 episodes",
    "Mercredi (Wednesday)": "Wednesday",
    "Mercredi": "Wednesday",
    "2022 · Comédie, Mystère · 2 saisons": "2022 · Comedy, Mystery · 2 seasons",
    "À présent étudiante à la singulière Nevermore Academy, Wednesday Addams tente de s'adapter auprès des autres élèves tout en enquêtant sur une série de meurtres.": "Now a student at Nevermore Academy, Wednesday Addams tries to master her psychic ability and solve a local murder mystery.",
    "2019 · Action, Science-Fiction · 4 saisons": "2019 · Action, Sci-Fi · 4 seasons",
    "Dans un monde où les super-héros abusent de leurs pouvoirs au lieu de les utiliser pour faire le bien, un groupe de justiciers se lance dans une quête héroïque.": "In a world where superheroes abuse their powers instead of using them for good, a group of vigilantes sets out to expose the truth.",
    "32 épisodes": "32 episodes",
    "2021 · Action, Mystère, Drame · 2 saisons": "2021 · Action, Mystery, Drama · 2 seasons",
    "Des centaines de joueurs endettés acceptent une étrange invitation à participer à des jeux pour enfants. À la clé : une somme astronomique et des enjeux mortels.": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a massive prize with deadly stakes.",
    "Dune : Deuxième Partie": "Dune: Part Two",
    "2024 · Science-Fiction, Aventure, Drame": "2024 · Sci-Fi, Adventure, Drama",
    "Paul Atreides s'unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille sur la planète désertique Arrakis.": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family on Arrakis.",
    "4K Ultra HD · Multi-Audio": "4K Ultra HD · Multi-Audio",
    "2024 · Action, Comédie, Science-Fiction": "2024 · Action, Comedy, Sci-Fi",
    "Wade Wilson reprend du service aux côtés d'un Wolverine réticent pour sauver son univers d'une menace existentielle au sein du multivers.": "Wade Wilson teams up with a reluctant Wolverine to save his universe from an existential threat across the multiverse.",
    "4K Ultra HD · VF / VOSTFR": "4K Ultra HD · Multi-Audio",
    "Vice-Versa 2 (Inside Out 2)": "Inside Out 2",
    "Vice-Versa 2": "Inside Out 2",
    "2024 · Animation, Famille, Comédie": "2024 · Animation, Family, Comedy",
    "De nouvelles émotions dont Anxiété débarquent au quartier général dans l'esprit de Riley, désormais adolescente, chamboulant Joie et ses amis.": "New emotions including Anxiety arrive at Headquarters in Riley's mind as she enters her teenage years, turning Joy's world upside down.",
    "4K Ultra HD · Famille": "4K Ultra HD · Family",
    "2023 · Drame, Histoire": "2023 · Drama, History",
    "L'histoire du physicien J. Robert Oppenheimer et de son rôle décisif dans le développement de la première bombe atomique au cours du projet Manhattan.": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during the Manhattan Project.",
    "Avatar : La Voie de l'Eau": "Avatar: The Way of Water",
    "2022 · Science-Fiction, Aventure, Action": "2022 · Sci-Fi, Adventure, Action",
    "Jake Sully et Ney'tiri ont formé une famille sur Pandora. Lorsqu'une ancienne menace refait surface, ils trouvent refuge auprès du clan océanique Metkayina.": "Jake Sully and Ney'tiri have formed a family on Pandora and must seek refuge with the oceanic Metkayina clan when an old threat returns.",
    "2022 · Crime, Mystère, Thriller": "2022 · Crime, Mystery, Thriller",
    "Lorsqu'un tueur s'attaque à l'élite de Gotham par une série de machinations sadiques, une piste d'indices cryptiques envoie Batman dans les bas-fonds.": "When a killer targets Gotham's elite with a series of sadistic machinations, a trail of cryptic clues sends Batman into the underworld.",
    "Top Gun : Maverick": "Top Gun: Maverick",
    "2022 · Action, Drame": "2022 · Action, Drama",
    "Après plus de trente ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete « Maverick » Mitchell forme un détachement de jeunes diplômés.": "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell trains a detachment of Top Gun graduates.",
    "Spider-Man : Across the Spider-Verse": "Spider-Man: Across the Spider-Verse",
    "Spider-Man : Spider-Verse": "Spider-Man: Across the Spider-Verse",
    "2023 · Animation, Action, Aventure": "2023 · Animation, Action, Adventure",
    "Miles Morales est catapulté à travers le Multivers, où il rencontre une équipe de Spider-Héros chargée d'en protéger l'existence même.": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",

    // Features
    "NOS AVANTAGES": "KEY FEATURES",
    "Pourquoi choisir l'application Atlas Pro ONTV ?": "Why Choose the Atlas Pro ONTV App?",
    "Profitez d'un lecteur multimédia fluide et moderne conçu pour une expérience télévisuelle optimale sur tous vos écrans.": "Enjoy a smooth, modern media player designed for an optimal viewing experience on all your screens.",
    "Qualité 4K Ultra HD": "4K Ultra HD Support",
    "Plongez dans l'action avec une prise en charge Ultra HD fluide et un décodage matériel optimisé.": "Enjoy crisp Ultra HD playback with hardware-accelerated decoding.",
    "Navigation Intuitive": "Intuitive Navigation",
    "Retrouvez vos catégories, favoris et listes de lecture dans une interface claire adaptée aux télécommandes TV.": "Browse categories, favorites, and playlists in a clean interface built for TV remotes.",
    "Guide TV Intégré (EPG)": "Built-in TV Guide (EPG)",
    "Consultez la grille des programmes en direct et planifiez vos soirées grâce au support EPG intégré.": "View live program schedules and plan your viewing with integrated EPG support.",
    "Lecteur VOD & Séries": "VOD & Series Player",
    "Gestion complète des pistes audio, sous-titres (VF/VOSTFR) et reprise de lecture automatique.": "Full support for multiple audio tracks, subtitles, and automatic resume playback.",
    "Multi-appareils": "Multi-Device",
    "Compatible avec Smart TV, Android Box, Firestick, Apple TV, smartphones et tablettes. Regardez partout.": "Compatible with Smart TVs, Android Boxes, Firestick, Apple TV, smartphones, and tablets.",
    "Guides & Tutoriels": "Guides & Tutorials",
    "Des instructions d'installation étape par étape pour configurer l'application en quelques minutes.": "Step-by-step installation instructions to set up the application in just a few minutes.",

    // Showcase & How it works
    "Télécharger Atlas Pro ONTV APK — Application officielle": "Download Atlas Pro ONTV APK — Official App",
    "L'application Atlas Pro ONTV est spécialement conçue pour offrir une navigation fluide et une qualité d'image exceptionnelle sur tous vos appareils Android.": "Atlas Pro ONTV is purpose-built to deliver smooth navigation and crisp playback across all your Android devices.",
    "Installation rapide via code Downloader (9410522 / 1550791).": "Fast setup via Downloader code (9410522 / 1550791).",
    "Synchronisation automatique des listes et favoris.": "Automatic playlist and favorites synchronization.",
    "Optimisation pour Firestick et Box Android.": "Optimized for Amazon Firestick and Android TV Boxes.",
    "Support complet du Guide TV (EPG).": "Full Electronic Program Guide (EPG) support.",
    "Accéder aux téléchargements": "Go to Downloads",
    "CODES DOWNLOADER OFFICIELS": "OFFICIAL DOWNLOADER CODES",
    "ONTV 4 & IBO : 9410522 · MAX : 1550791 (Android TV & Firestick)": "ONTV 4 & IBO: 9410522 · MAX: 1550791 (Android TV & Firestick)",
    "GUIDE D'INSTALLATION": "INSTALLATION GUIDE",
    "Installez l'application en 3 étapes": "Install the App in 3 Steps",
    "Suivez ces étapes simples pour télécharger et installer Atlas Pro ONTV sur votre appareil.": "Follow these simple steps to download and install Atlas Pro ONTV on your device.",
    "1. Téléchargez l'APK": "1. Download the APK",
    "Téléchargez l'APK": "Download the APK",
    "Récupérez votre édition officielle (ONTV 4, MAX ou IBO) via nos cartes ci-dessous ou avec les codes Downloader": "Get your official edition (ONTV 4, MAX, or IBO) using the cards below or with Downloader codes",
    "dans Downloader.": "in Downloader.",
    "Autorisez l'installation": "Allow Installation",
    "Activez l'installation depuis les sources inconnues dans les paramètres de votre appareil.": "Enable installation from unknown sources in your device security settings.",
    "Activez l'installation depuis les sources inconnues dans les paramètres de votre Firestick ou Box Android.": "Enable installation from unknown sources in your Firestick or Android Box settings.",
    "Lancez l'application": "Launch the App",
    "Ouvrez Atlas Pro ONTV sur votre appareil et renseignez vos identifiants existants pour charger votre interface.": "Open Atlas Pro ONTV on your device and enter your existing credentials to load your interface.",

    // Compatibility
    "MULTI-PLATEFORME": "MULTI-PLATFORM",
    "Compatibilité Atlas Pro ONTV — Android, Smart TV, iOS & plus": "Atlas Pro ONTV Compatibility — Android, Smart TV, iOS & More",
    "Notre service est compatible avec tous les appareils connectés modernes pour une liberté totale.": "Compatible with modern connected devices for flexible viewing at home or on the go.",
    "Android Box": "Android Box",
    "Smartphone": "Smartphone",
    "Tablette": "Tablet",
    "PC / Mac": "PC / Mac",
    "Apple TV": "Apple TV",
    "Web Player": "Web Player",

    // Download section & Official Apps
    "APPLICATIONS OFFICIELLES": "OFFICIAL APPS",
    "Télécharger les Applications Officielles Atlas Pro": "Download Official Atlas Pro Apps",
    "Sélectionnez votre variante officielle Android / Fire TV et utilisez le code Downloader correspondant pour une installation immédiate.": "Select your official Android / Fire TV edition and enter the matching Downloader code for instant setup.",
    "Downloader code :": "Downloader code:",
    "Plus de 50 lecteurs compatibles par plateforme": "50+ Compatible Players by Platform",
    "Retrouvez également les lecteurs alternatifs compatibles pour Smart TV, iOS et PC.": "Also find compatible alternative media players for Smart TV, iOS, and PC.",
    "Multi-marques (Recommandé)": "Multi-Brand (Recommended)",
    "Android TV / Firestick — Store Officiel": "Android TV / Firestick — Official Store",
    "Smart TV (Samsung / LG)": "Smart TV (Samsung / LG)",
    "iOS / Apple TV / Mac": "iOS / Apple TV / Mac",

    // FAQ (Home & Subpage)
    "ASSISTANCE": "SUPPORT",
    "FAQ — Tout savoir sur l'application Atlas Pro ONTV": "FAQ — Everything About the Atlas Pro ONTV App",
    "Retrouvez ci-dessous les réponses aux questions les plus courantes concernant l'installation et l'utilisation de l'application.": "Find answers to the most common questions about installing and using the app below.",
    "Comment installer Atlas Pro ONTV sur Firestick ou Android TV ?": "How do I install Atlas Pro ONTV on Firestick or Android TV?",
    "Installez l'application gratuite Downloader depuis votre store officiel, autorisez les sources inconnues dans les paramètres de votre appareil, puis entrez le code": "Install the free Downloader app from your official app store, enable unknown sources in your device settings, then enter code",
    "(ONTV 4 / ATLAS PRO IBO) ou": "(ONTV 4 / ATLAS PRO IBO) or",
    "(MAX) pour télécharger et installer l'APK.": "(MAX) to download and install the APK.",
    "Quelle connexion internet est recommandée pour utiliser l'application ?": "What internet speed is recommended for the app?",
    "Une connexion d'au moins 12 Mbps est suffisante pour une lecture fluide en HD. La fibre ou une connexion stable de 25+ Mbps est recommandée pour la 4K Ultra HD.": "A connection of at least 12 Mbps is sufficient for smooth HD playback. Fiber or a stable 25+ Mbps connection is recommended for 4K Ultra HD.",
    "Sur quels appareils puis-je installer l'application ?": "Which devices can I install the app on?",
    "Le fichier APK est compatible avec les téléviseurs Android TV, Google TV, boîtiers Android Box, clés Amazon Firestick / Fire TV, ainsi que les smartphones et tablettes Android.": "The APK works on Android TV, Google TV, Android TV boxes, Amazon Firestick / Fire TV devices, and Android smartphones and tablets.",
    "Comment activer l'application après l'installation ?": "How do I activate the app after installation?",
    "L'application Atlas Pro ONTV est téléchargeable gratuitement. Une fois installée sur votre appareil, ouvrez-la et saisissez votre code d'activation ou vos identifiants Xtream / M3U pour accéder à vos chaînes et à la VOD.": "The Atlas Pro ONTV app is free to download. Once installed on your device, open it and enter your activation code or Xtream / M3U credentials to load your channels and VOD.",
    "Comment activer l'application Atlas Pro ONTV ?": "How do I activate the Atlas Pro ONTV app?",
    "L'application est téléchargeable gratuitement. Une fois installée, ouvrez Atlas Pro ONTV et entrez votre code d'accès ou vos identifiants Xtream / M3U pour charger votre interface.": "The app is free to download. Once installed, open Atlas Pro ONTV and enter your access code or Xtream / M3U credentials to load your interface.",
    "Questions fréquentes": "Frequently Asked Questions",
    "Réponses courtes — pour aller plus loin, consultez les tutoriels.": "Short answers — check our tutorials for step-by-step details.",
    "ATLAS PRO APK est-il compatible avec mon appareil ?": "Is ATLAS PRO APK compatible with my device?",
    "La plupart des appareils Android récents sont pris en charge ; vérifiez la fiche de votre variante (ONTV, IBO, MAX) et la version Android minimale indiquée.": "Most modern Android devices are supported; check your edition (ONTV, IBO, MAX) and minimum Android version.",
    "Puis-je utiliser plusieurs profils ?": "Can I use multiple profiles?",
    "Selon la variante, des profils ou favoris permettent de séparer les usages — voir le tutoriel correspondant.": "Depending on the edition, profiles or favorites let you separate viewing preferences — see the corresponding tutorial.",
    "L’application plante au lancement : que faire ?": "The app crashes on launch: what should I do?",
    "Videz le cache, redémarrez l’appareil, réinstallez depuis une source fiable. Si le problème persiste, contactez le support avec le modèle exact de l’appareil.": "Clear the app cache, restart your device, and reinstall from an official source. If the issue persists, contact support with your exact device model.",
    "Prêt à installer ?": "Ready to Install?",
    "Téléchargez la variante adaptée et suivez un tutoriel pour valider chaque étape.": "Download the right edition and follow a tutorial to complete every step.",
    "Télécharger ATLAS PRO APK": "Download ATLAS PRO APK",

    // Testimonials
    "AVIS CLIENTS": "USER REVIEWS",
    "Avis utilisateurs — L'expérience Atlas Pro ONTV": "User Reviews — The Atlas Pro ONTV Experience",
    "Plus de 50 000 clients nous font confiance pour leur divertissement quotidien.": "Thousands of users rely on our installation guides every day.",

    // Bottom CTA & Footer
    "Prêt à installer Atlas Pro ONTV ?": "Ready to Install Atlas Pro ONTV?",
    "Téléchargez la dernière version officielle de l'application et suivez notre guide d'installation pour tous vos écrans.": "Download the latest official version of the app and follow our installation guide for all your screens.",
    "Guide détaillé": "Detailed Guide",
    "VERSIONS OFFICIELLES": "OFFICIAL VERSIONS",
    "/ Code Downloader": "/ Downloader Code",
    "Codes officiels :": "Official codes:",
    "(ONTV 4 & IBO) ·": "(ONTV 4 & IBO) ·",
    "(MAX) sur Firestick & Android TV.": "(MAX) on Firestick & Android TV.",
    "Accéder au téléchargement": "Go to Downloads",
    "Guide indépendant de téléchargement et d'installation pour l'application ATLAS PRO ONTV. Assistance technique et tutoriels.": "Independent download and installation guide for the ATLAS PRO ONTV app. Technical help and tutorials.",
    "Liens Rapides": "Quick Links",
    "Support & Guides": "Support & Guides",
    "Support Client": "Support",
    "Tutoriels d'installation": "Installation Tutorials",
    "Nous contacter": "Contact Us",
    "Support technique : 24/7": "Technical support: 24/7",
    "Informations Légales": "Legal Information",
    "Conditions Générales": "Terms & Conditions",
    "Politique de Confidentialité": "Privacy Policy",
    "Mentions Légales": "Legal Notice",
    "Avertissement : Ce site est un guide indépendant d'installation pour l'application Atlas Pro ONTV. Nous ne vendons aucun abonnement et n'hébergeons aucun flux multimédia.": "Disclaimer: This website is an independent installation guide for the Atlas Pro ONTV app. We do not sell subscriptions or host any media streams.",
    "© 2026 ATLAS PRO APK. Tous droits réservés.": "© 2026 ATLAS PRO APK. All rights reserved.",

    // Subpage: atlas-pro-ontv-apk.html
    "Atlas PRO ONTV APK - L'Application Ultime": "Atlas PRO ONTV APK - Official App Guide",
    "TOUT-EN-UN": "ALL-IN-ONE",
    "L'application ultime pour profiter du meilleur du divertissement. Découvrez ses fonctionnalités, téléchargez l'APK et installez-la facilement sur tous vos écrans.": "Discover the features of Atlas Pro ONTV, download the official APK, and install it easily on all your screens.",
    "Le Dashboard Atlas Pro": "The Atlas Pro Dashboard",
    "Découvrez une interface moderne et intuitive conçue pour les écrans de toutes tailles.": "Explore a modern, intuitive interface designed for screens of all sizes.",
    "FONCTIONNALITÉS EXCLUSIVES": "EXCLUSIVE FEATURES",
    "Une expérience de visionnage supérieure": "A Superior Viewing Experience",
    "Catalogue VOD & Séries 4K": "4K VOD & Series Player",
    "Plongez dans un univers cinématographique avec des milliers de films et séries mis à jour quotidiennement. Profitez d'une qualité d'image époustouflante en Ultra Haute Définition.": "Enjoy movies and series playback with crisp Ultra High Definition support.",
    "Classement par genres et nouveautés": "Sorted by genres and recent releases",
    "Sous-titres et multi-audio (VF/VOSTFR)": "Subtitles and multi-audio tracks",
    "Synchronisation Multi-Écrans": "Multi-Screen Sync",
    "Reprenez votre film exactement là où vous l'avez arrêté, que ce soit sur votre smartphone dans les transports ou sur votre Smart TV dans le salon.": "Resume watching right where you left off, whether on your smartphone or your living room Smart TV.",
    "Compatibilité TV, Tablette, et Smartphone": "TV, Tablet, and Smartphone compatibility",
    "Interface adaptative et tactile": "Adaptive remote and touch interface",
    "Applications Atlas Pro — Choisissez votre variante": "Atlas Pro Apps — Choose Your Edition",
    "Trois éditions officielles Android / Fire TV — utilisez le code Downloader correspondant pour installer votre application.": "Three official Android / Fire TV editions — use the matching Downloader code to install your app.",
    "Installation & Tutoriels": "Installation & Tutorials",
    "L'APK Atlas Pro est optimisé pour les environnements Android. Voici comment l'installer rapidement.": "The Atlas Pro APK is optimized for Android environments. Here is how to install it quickly.",
    "Smartphones": "Smartphones",
    "Besoin d'un guide complet ?": "Need a full guide?",
    "Utilisez l'application Downloader avec le code": "Use the Downloader app with code",
    "(MAX) pour une installation instantanée sur TV, ou lisez nos guides détaillés.": "(MAX) for instant TV setup, or read our detailed guides.",
    "Lire le tutoriel d'installation complet": "Read the full installation tutorial",
    "Étapes Rapides": "Quick Steps",
    "depuis notre site ou via l'application Downloader.": "from our guide or via the Downloader app.",
    "d'applications issues de sources inconnues dans les paramètres de votre appareil.": "from unknown sources in your device settings.",
    ", entrez vos identifiants Atlas Pro et profitez instantanément de vos chaînes.": ", enter your existing Atlas Pro credentials and load your channels.",
    "Téléchargez la version adaptée à votre appareil et suivez notre guide d'installation étape par étape.": "Download the right version for your device and follow our step-by-step installation guide.",
    "Télécharger maintenant": "Download Now",

    // Subpage: contact.html
    "Nous contacter - ATLAS PRO APK": "Contact Us - ATLAS PRO APK",
    "Notre équipe est à votre disposition 24h/24 et 7j/7.": "Our team is available 24/7 to help with installation questions.",
    "Besoin d'aide ?": "Need Help?",
    "Notre équipe technique est à votre disposition pour vous accompagner dans l'installation ou la gestion de votre abonnement.": "Our technical team is available to assist you with installing and configuring the application.",
    "Support WhatsApp": "WhatsApp Support",
    "Email": "Email",
    "Heures d'ouverture": "Opening Hours",
    "24/7 Assistance technique": "24/7 Technical Assistance",
    "Envoyez un message": "Send a Message",
    "Prénom": "First Name",
    "Nom": "Last Name",
    "Adresse Email": "Email Address",
    "Sujet": "Subject",
    "Votre message...": "Your message...",
    "Envoyer le message": "Send Message",

    // Subpage: blog.html
    "Blog & Guides IPTV - ATLAS PRO APK": "Blog & Setup Guides - ATLAS PRO APK",
    "Guides, Tutoriels & Actualités": "Guides, Tutorials & News",
    "Toutes les astuces pour optimiser votre expérience TV et maîtriser votre application.": "Tips and step-by-step tutorials to install and optimize your player.",
    "Guide APK": "APK Guide",
    "Publié le 24 Avril 2026": "Published April 24, 2026",
    "Comment installer l'APK ATLAS PRO APK sur votre TV ou Box Android ?": "How to Install ATLAS PRO APK on Your Android TV or Box?",
    "Découvrez notre guide complet étape par étape pour installer facilement l'APK via Downloader sur votre Smart TV ou votre Amazon Firestick.": "Follow our complete step-by-step guide to install the APK via Downloader on Smart TV or Amazon Firestick.",
    "Lire l'article →": "Read article →",
    "Tutoriels": "Tutorials",
    "Publié le 19 Avril 2026": "Published April 19, 2026",
    "Top 5 des avantages de la version APK directe vs les stores officiels": "Top 5 Benefits of Direct APK Installation vs Official App Stores",
    "Pourquoi installer l'APK officiel directement vous garantit une meilleure fluidité, les dernières fonctionnalités 4K et zéro restriction.": "Why installing the official APK directly ensures smoother playback, latest 4K features, and no store restrictions.",
    "Astuces": "Tips",
    "Publié le 12 Avril 2026": "Published April 12, 2026",
    "Guide de mise à jour et synchronisation multi-écrans pour ATLAS PRO APK": "Update & Multi-Screen Sync Guide for ATLAS PRO APK",
    "Comment maintenir votre application à jour et synchroniser vos favoris et reprises de lecture entre votre TV, smartphone et tablette.": "How to keep your app updated and sync favorites and resume points across TV, phone, and tablet.",
    "Lire la suite": "Read more",

    // Blog Listing & Full Blog Posts (blog.html, blog-post-1/2/3.html)
    "Blog & Actualités - ATLAS PRO APK": "Blog & Guides - ATLAS PRO APK",
    "Tutoriels, guides et actualités sur l'utilisation d'ATLAS PRO APK.": "Tutorials, setup guides, and news for using ATLAS PRO APK.",
    "Le Blog ATLAS PRO APK": "The ATLAS PRO APK Blog",
    "Retrouvez tous nos guides, astuces et actualités pour profiter au mieux de votre abonnement et des fichiers APK.": "Find all our setup guides, tips, and tutorials to get the most out of your Atlas Pro ONTV app.",
    "Installation APK sur Firestick": "APK Setup on Firestick",
    "ARTICLE À LA UNE": "FEATURED ARTICLE",
    "Découvrez notre guide complet étape par étape pour installer facilement l'APK via Downloader sur votre Smart TV. Nous couvrons toutes les méthodes sécurisées.": "Follow our complete step-by-step guide to install the APK via Downloader on your Smart TV or Firestick.",
    "Lire l'article": "Read article",
    "APK vs Play Store": "APK vs Play Store",
    "18 Avril 2026": "April 18, 2026",
    "Pourquoi choisir une application IPTV en format APK plutôt que sur le Play Store ?": "Why Choose Direct APK Installation Instead of the Play Store?",
    "Comprenez les avantages techniques (mises à jour rapides, optimisation) de l'installation par fichier APK direct.": "Understand the technical benefits (faster updates, hardware optimization) of direct APK installation.",
    "Mise à jour APK": "APK Update",
    "10 Avril 2026": "April 10, 2026",
    "Comment mettre à jour votre APK sans perdre vos favoris ?": "How to Update Your APK Without Losing Your Favorites?",
    "La méthode sécurisée pour installer la nouvelle version de l'APK par-dessus l'ancienne afin de conserver vos données.": "The safe way to install the new APK version over the old one while keeping all your saved data.",
    "Comment installer l'APK ATLAS PRO APK sur votre TV ou Box Android ? - ATLAS PRO APK": "How to Install ATLAS PRO APK on Your Android TV or Box? - ATLAS PRO APK",
    "Découvrez notre guide complet étape par étape pour installer facilement l'APK via Downloader sur votre Smart TV.": "Follow our complete step-by-step guide to install the APK via Downloader on your Smart TV.",
    "Catégorie : Guide APK": "Category: APK Guide",
    "Pourquoi utiliser l'APK direct ?": "Why Use the Direct APK?",
    "L'installation via notre fichier APK direct garantit que vous disposez de la version la plus récente, sans les restrictions et limitations souvent imposées par les magasins d'applications officiels. C'est la méthode privilégiée par 90% de nos utilisateurs pour sa stabilité et ses performances accrues.": "Installing the official APK directly ensures you have the latest release without store restrictions, offering better stability and performance.",
    "\"Le format APK est le standard de l'industrie pour les utilisateurs cherchant une expérience IPTV non censurée et optimisée.\"": "\"The APK format is the standard choice on Android TV and Fire OS for an optimized media player experience.\"",
    "Étape 1 : Autoriser les sources inconnues": "Step 1: Allow Unknown Sources",
    "Avant d'installer un fichier APK, votre appareil Android doit vous y autoriser pour des raisons de sécurité.": "Before installing an APK file, your Android device must grant permission for security reasons.",
    "Allez dans les": "Go to",
    "Paramètres": "Settings",
    "de votre appareil.": "on your device.",
    "Sélectionnez": "Select",
    "Sécurité et restrictions": "Security & restrictions",
    "(ou Confidentialité).": "(or Privacy).",
    "Activez l'option": "Enable the",
    "Sources inconnues": "Unknown sources",
    "pour l'application que vous utiliserez pour le téléchargement.": "option for the app you will use to download.",
    "Prêt à passer au niveau supérieur ?": "Ready to Get Started?",
    "Téléchargez l'APK officiel pour Android TV, Firestick et mobile.": "Download the official APK for Android TV, Firestick, and mobile.",
    "Étape 2 : Utiliser l'application Downloader": "Step 2: Use the Downloader App",
    "Sur les Smart TV et Firestick, la méthode la plus simple et la plus rapide est d'utiliser l'application \"Downloader\" :": "On Smart TVs and Firestick, the easiest and fastest method is using the \"Downloader\" app:",
    "Téléchargez l'application gratuite": "Download the free",
    "depuis le Play Store de votre TV ou l'Amazon Appstore.": "app from your TV's Google Play Store or Amazon Appstore.",
    "Ouvrez Downloader et autorisez les accès nécessaires.": "Open Downloader and grant the required storage permissions.",
    "Dans la barre d'adresse, entrez le code rapide :": "In the address bar, enter the quick code:",
    "Le téléchargement du fichier": "The download of",
    "débutera automatiquement.": "will start automatically.",
    "Étape 3 : Installation et Connexion": "Step 3: Install & Sign In",
    "Une fois le téléchargement terminé, une fenêtre contextuelle s'ouvrira. Cliquez sur": "Once the download finishes, a prompt will appear. Click",
    "Installer": "Install",
    "Ouvrez ensuite l'application ATLAS PRO APK et entrez le lien m3u ou les identifiants Xtream Codes que vous avez reçus par email auprès de votre fournisseur. Vous avez désormais accès à l'intégralité de notre catalogue en qualité 4K Ultra HD.": "Then open the ATLAS PRO APK app and enter the M3U link or Xtream Codes credentials from your provider to load your interface in 4K Ultra HD.",
    "Tags :": "Tags:",
    "Installation": "Installation",
    "Guide": "Guide",
    "Android TV": "Android TV",
    "Retour au Blog": "Back to Blog",
    "Recherche": "Search",
    "Rechercher un article...": "Search an article...",
    "Catégories": "Categories",
    "Guides d'installation (12)": "Installation Guides (12)",
    "Actualités IPTV (8)": "App Updates (8)",
    "Astuces Techniques (5)": "Technical Tips (5)",
    "Comparatifs (3)": "Comparisons (3)",
    "Articles Récents": "Recent Articles",
    "Comment installer l'APK sur Firestick ?": "How to Install the APK on Firestick?",
    "Les avantages du format APK": "Benefits of the APK Format",
    "Mettre à jour sans perte de données": "Update Without Losing Data",
    "Codes Downloader": "Downloader Codes",
    "Utilisez le code 9410522 (ONTV 4 / IBO) ou 1550791 (MAX) dans Downloader.": "Use code 9410522 (ONTV 4 / IBO) or 1550791 (MAX) in Downloader.",
    "Pourquoi choisir une application IPTV en format APK plutôt que sur le Play Store ? - ATLAS PRO APK": "Why Choose Direct APK Installation Instead of the Play Store? - ATLAS PRO APK",
    "Publié le 18 Avril 2026": "Published April 18, 2026",
    "Comprenez les avantages techniques et stratégiques de l'installation par fichier APK direct pour votre service IPTV.": "Understand the technical benefits of installing the official APK directly on your Android TV or Firestick.",
    "La liberté d'utilisation": "Freedom & Independence",
    "Les magasins d'applications officiels comme le Google Play Store imposent des règles très strictes concernant les lecteurs multimédias. Une application IPTV en format APK est totalement indépendante. Elle ne subira jamais de censure ou de suppression inopinée de la part de Google, vous garantissant un accès pérenne à vos contenus.": "Official app stores impose strict restrictions on independent media players. An APK package avoids unexpected store removals and keeps your setup consistent.",
    "\"En choisissant l'APK direct, vous reprenez le contrôle total sur votre matériel et vos abonnements.\"": "\"Choosing the direct APK gives you full control over your TV hardware and player version.\"",
    "Des mises à jour plus rapides": "Faster Updates",
    "Lorsqu'un correctif de bug ou une nouvelle fonctionnalité (comme un nouveau décodeur vidéo 4K) est développé, il faut parfois plusieurs semaines pour qu'il soit validé par les stores officiels. En format APK, nous publions la mise à jour instantanément sur notre serveur. Vous bénéficiez des dernières innovations sans attendre.": "When a bug fix or new 4K video decoder improvement is released, direct APK distribution makes updates available immediately without waiting weeks for store review.",
    "Testez la différence": "Get the Official Build",
    "Téléchargez la dernière version officielle de l'application Atlas Pro ONTV.": "Download the latest official version of the Atlas Pro ONTV app.",
    "Optimisation TV 100% dédiée": "100% TV Hardware Optimization",
    "Zéro publicité et tracking": "Zero Ads & Tracking",
    "Les applications du Play Store intègrent souvent des modules de tracking Google ou des SDK publicitaires tiers qui ralentissent l'appareil. Notre APK direct est épuré, léger, et ne contient que le code nécessaire pour faire fonctionner votre abonnement IPTV avec la meilleure fluidité possible.": "Many Play Store apps bundle third-party ad SDKs that slow down low-memory TV sticks. The official APK stays lightweight and responsive.",
    "Comparatif": "Comparison",
    "Performance": "Performance",
    "Comment mettre à jour votre APK sans perdre vos favoris ? - ATLAS PRO APK": "How to Update Your APK Without Losing Your Favorites? - ATLAS PRO APK",
    "Publié le 10 Avril 2026": "Published April 10, 2026",
    "La méthode sécurisée pour installer la nouvelle version de l'APK ATLAS PRO APK par-dessus l'ancienne afin de conserver vos données précieuses.": "The safe method to install the new ATLAS PRO APK version over the old one so you keep all your favorites and settings.",
    "L'importance des mises à jour": "Why Updates Matter",
    "\"Une application à jour, c'est l'assurance d'une fluidité parfaite, même lors des grands événements sportifs.\"": "\"An up-to-date app ensures smooth playback and the latest compatibility fixes.\"",
    "La règle d'or : Ne désinstallez pas l'ancienne version !": "Golden Rule: Do Not Uninstall the Old Version!",
    "La plus grande erreur commise par les utilisateurs est de désinstaller l'application existante avant d'installer la nouvelle. Si vous désinstallez l'application, Android supprimera également toutes vos données locales : vos identifiants, votre liste de chaînes favorites, et votre historique de visionnage VOD.": "The biggest mistake is uninstalling the existing app before installing the update, which erases your local login settings, favorites, and watch history.",
    "Une question technique ?": "Technical Question?",
    "Notre support technique est disponible 7j/7 pour vous aider dans vos mises à jour.": "Our guide team is available 7 days a week to help with update questions.",
    "Contacter le support": "Contact Support",
    "Procédure de mise à jour sécurisée": "Safe Update Procedure",
    "Pour mettre à jour proprement votre application, suivez ces étapes simples :": "To update your app cleanly, follow these simple steps:",
    "Téléchargez le nouveau fichier APK via notre code rapide": "Download the new APK file using the quick code",
    "dans l'application Downloader.": "in the Downloader app.",
    "Lancez l'installation du nouveau fichier APK dès que le téléchargement est terminé.": "Start installing the new APK file as soon as the download completes.",
    "Android détectera automatiquement que l'application est déjà présente sur votre système.": "Android will automatically detect that the app is already installed on your device.",
    "Une fenêtre apparaîtra :": "A prompt will appear:",
    "\"Voulez-vous installer une mise à jour pour cette application ? Vos données existantes ne seront pas perdues.\"": "\"Do you want to install an update to this existing application? Your existing data will not be lost.\"",
    "Cliquez sur": "Click",
    "Félicitations ! En ouvrant l'application, vous constaterez que vous bénéficiez désormais des dernières optimisations logicielles, tout en retrouvant l'intégralité de vos favoris et de vos réglages personnalisés.": "Done! When you reopen the app, you will have the latest improvements with all your favorites and settings intact.",
    "Mise à jour": "Update",
    "Favoris": "Favorites",
    "Maintenance": "Maintenance",
    "Astuce": "Tip",
    "Discuter sur WhatsApp": "Chat on WhatsApp",

    // Expanded FAQ & Blog Troubleshooting Sections
    "Quels sont les codes Downloader officiels pour Firestick et Android TV ?": "What are the official Downloader codes for Firestick and Android TV?",
    "Peut-on installer l'APK directement sur une Smart TV Samsung ou LG ?": "Can I install the APK directly on a Samsung or LG Smart TV?",
    "Comment corriger l'erreur « Application non installée » sur Android ?": "How do I fix the 'App not installed' error on Android?",
    "Dépannage : erreurs courantes sur Firestick et Android TV": "Troubleshooting: Common Errors on Firestick and Android TV",
    "Si l'installation échoue ou si l'option": "If installation fails or the",
    "n'apparaît pas sur votre appareil récent, appliquez ces vérifications rapides :": "option is missing on your recent device, try these quick checks:",
    "Débloquer les options développeur sur Fire OS 7 / 8 :": "Unlock Developer Options on Fire OS 7 / 8:",
    "Erreur d'analyse ou « Application non installée » :": "Parse Error or 'App Not Installed':",
    "Nettoyer le stockage après installation :": "Clean up storage after installation:",
    "Sécurité et vérification du fichier APK": "APK Security & Verification",
    "Installer une application hors Play Store reste parfaitement sûr à condition de respecter quelques règles simples :": "Installing an app outside the Play Store is safe as long as you follow a few simple rules:",
    "Utilisez uniquement les codes officiels :": "Use only official codes:",
    "Conservez Google Play Protect actif :": "Keep Google Play Protect enabled:",
    "Évitez les copies modifiées :": "Avoid modified copies:",
    "Que faire si la mise à jour affiche une erreur ?": "What if the update shows an error?",
    "Notez vos identifiants avant toute manipulation :": "Back up your credentials first:",
    "Videz le cache puis réinstallez proprement :": "Clear cache and perform a clean reinstall:"
  };

  // Build reverse map for EN -> FR (so elements starting in English like "Do you need subscription?" translate to FR)
  const EN_TO_FR = {
    "Do you need subscription?": "Besoin d'un abonnement ?",
    "Language:": "Langue :",
    "Technical support and hosting provider for streaming APK IPTV for ATLAS PRO ONTV. 24/7 Technical Assistance.": "Guide technique et assistance à l'installation pour l'application ATLAS PRO ONTV. Support 24/7.",
    "Support hours: 24/7": "Support : 24/7",
    "Avertissement : Use only licensed/authorized content providers. We do not promote piracy. This content is informational and not professional advice.": "Avertissement : Utilisez uniquement des fournisseurs de contenu autorisés. Ce site est un guide d'installation indépendant."
  };
  Object.entries(FR_TO_EN).forEach(([fr, en]) => {
    if (en && !EN_TO_FR[en]) EN_TO_FR[en] = fr;
  });

  const ATTRS = ['placeholder', 'aria-label', 'title', 'alt', 'data-title', 'data-meta', 'data-desc', 'data-count'];
  const textOriginals = new WeakMap();
  const attrOriginals = new WeakMap();
  let initialTitle = null;
  let initialMetaDesc = null;

  function detectDefaultLang() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang === 'fr' || urlLang === 'en') return urlLang;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (_) {}
    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];
    for (const l of browserLangs) {
      const code = String(l).toLowerCase();
      if (code.startsWith('fr')) return 'fr';
      if (code.startsWith('en')) return 'en';
    }
    return 'en';
  }

  function translateValue(original, targetLang) {
    const trimmed = original.trim();
    if (!trimmed) return original;
    const dict = targetLang === 'en' ? FR_TO_EN : EN_TO_FR;
    const mapped = dict[trimmed];
    if (!mapped) return original;
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    return leading + mapped + trailing;
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}

    if (initialTitle === null) initialTitle = document.title;
    document.title = translateValue(initialTitle, lang);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (initialMetaDesc === null) initialMetaDesc = metaDesc.getAttribute('content') || '';
      metaDesc.setAttribute('content', translateValue(initialMetaDesc, lang));
    }

    // Walk all text nodes outside script/style/svg
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        const tag = parent.tagName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || parent.closest('svg')) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
      const orig = textOriginals.get(node);
      node.nodeValue = translateValue(orig, lang);
    }

    // Translate attributes
    document.querySelectorAll('*').forEach((el) => {
      if (el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;
      let stored = attrOriginals.get(el);
      if (!stored) {
        stored = {};
        for (const attr of ATTRS) {
          if (el.hasAttribute(attr)) stored[attr] = el.getAttribute(attr);
        }
        attrOriginals.set(el, stored);
      }
      for (const [attr, origVal] of Object.entries(stored)) {
        el.setAttribute(attr, translateValue(origVal, lang));
      }
    });

    // Refresh active TMDB featured panel text if present
    document.querySelectorAll('.tmdb-row-card').forEach((rowCard) => {
      const activeCard = rowCard.querySelector('.tmdb-poster-card.active');
      if (!activeCard) return;
      const titleEl = rowCard.querySelector('.tmdb-featured-title');
      const metaEl = rowCard.querySelector('.tmdb-featured-meta');
      const descEl = rowCard.querySelector('.tmdb-featured-desc');
      const countEl = rowCard.querySelector('.tmdb-featured-count');
      if (titleEl && activeCard.dataset.title) titleEl.textContent = activeCard.dataset.title;
      if (metaEl && activeCard.dataset.meta) metaEl.textContent = activeCard.dataset.meta;
      if (descEl && activeCard.dataset.desc) descEl.textContent = activeCard.dataset.desc;
      if (countEl && activeCard.dataset.count) countEl.textContent = activeCard.dataset.count;
    });

    // Update all header + footer switcher buttons
    document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectDefaultLang();
    applyLanguage(initialLang);

    document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
      });
    });
  });
})();
