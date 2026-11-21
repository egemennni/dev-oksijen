const translations = {
    tr: {
        projectStatus: "● Geliştiriliyor",
projectDescription: "Arkadaş grupları için tasarlanan, gerçek dünyada oynanan özel bir kovalamaca oyunu. Oyuncular, belirlenen oyun alanında avcılar ve kaçanlar olarak mücadele eder.",
projectFooter: "Kişisel Proje — 2026",
projectProgress: "GELİŞTİRİLİYOR ↗",
        home: "Ana Sayfa",
        about: "Hakkımda",
        projects: "Projeler",
        music: "Müzik",
        welcome: "DİJİTAL DÜNYAMA HOŞ GELDİN",
        role: "GELİŞTİRİCİ / ÜRETİCİ",
        description: "Fikirleri projelere, hayalleri gerçeğe dönüştürüyorum.",
        explore: "Projelerimi keşfet ↗",
        know: "Beni tanı",
        aboutTitle: "Ben Oksijen.",
        aboutText: "Burada hikâyem, ilgi alanlarım ve teknoloji yolculuğum yer alacak.",
        projectsTitle: "Ürettiklerim.",
        projectsText: "Projelerim ve çalışmalarım yakında burada.",
        musicTitle: "En Sevdiğim Şarkı.",
        musicStatus: "Henüz bağlanmadı",
        musicText: "YouTube Music entegrasyonu hazırlanıyor."
        
    },
    en: {
        projectStatus: "● In Development",
projectDescription: "A real-world chase game designed for friend groups. Players compete as hunters and runners within a defined play area.",
projectFooter: "Personal Project — 2026",
projectProgress: "IN DEVELOPMENT ↗",
        home: "Home",
        about: "About",
        projects: "Projects",
        music: "Music",
        welcome: "WELCOME TO MY DIGITAL WORLD",
        role: "DEVELOPER / CREATOR",
        description: "Turning ideas into projects and dreams into reality.",
        explore: "Explore my projects ↗",
        know: "Get to know me",
        aboutTitle: "I'm Oxygen.",
        aboutText: "My story, interests and technology journey will be here.",
        projectsTitle: "My Creations.",
        projectsText: "My projects and works will be here soon.",
        musicTitle: "My Favorite Song.",
        musicStatus: "Not connected yet",
        musicText: "YouTube Music integration is in progress."
    }
};

let currentLanguage = "tr";

const languageBtn = document.getElementById("languageBtn");

function changeLanguage() {
    currentLanguage = currentLanguage === "tr" ? "en" : "tr";

    const t = translations[currentLanguage];

    document.querySelector('nav a[href="#home"]').textContent = t.home;
    document.querySelector('nav a[href="#about"]').textContent = t.about;
    document.querySelector('nav a[href="#projects"]').textContent = t.projects;
    document.querySelector('nav a[href="#music"]').textContent = t.music;

    document.querySelector(".welcome").textContent = t.welcome;
    document.querySelector(".hero h2").textContent = t.role;
    document.querySelector(".description").textContent = t.description;

    document.querySelector(".primary-btn").textContent = t.explore;
    document.querySelector(".secondary-btn").textContent = t.know;

    document.querySelector("#about h2").textContent = t.aboutTitle;
    document.querySelector("#about > p:last-child").textContent = t.aboutText;

    document.querySelector("#projects h2").textContent = t.projectsTitle;
    document.querySelector("#projects > p:last-child").textContent = t.projectsText;

    document.querySelector("#music h2").textContent = t.musicTitle;
    document.querySelector(".music-card h3").textContent = t.musicStatus;
    document.querySelector(".music-card p").textContent = t.musicText;
document.querySelector(".project-status").textContent = t.projectStatus;
document.querySelector(".project-featured > p").textContent = t.projectDescription;

const projectFooter = document.querySelectorAll(".project-footer span");
projectFooter[0].textContent = t.projectFooter;
projectFooter[1].textContent = t.projectProgress;
    languageBtn.textContent = currentLanguage === "tr" ? "EN" : "TR";
}

languageBtn.addEventListener("click", changeLanguage);