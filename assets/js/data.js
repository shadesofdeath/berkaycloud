/* ------------------------------------------------------------------
   Content: projects + translations.
   Edit this file to change what the site says. Nothing else needed.
   ------------------------------------------------------------------ */
window.SITE = {
  github: "https://github.com/shadesofdeath",
  coffee: "https://buymeacoffee.com/berkayay",

  projects: [
    {
      slug: "arbitrium",
      name: "Arbitrium",
      repo: "https://github.com/shadesofdeath/Arbitrium",
      download: "https://github.com/shadesofdeath/Arbitrium/releases/latest",
      version: "v0.16",
      license: "MIT",
      stack: ["C++", "Qt 6", "Windows 10 / 11"],
      tag: {
        en: "Your Windows. Your rules.",
        tr: "Senin Windows'un. Senin kuralların."
      },
      short: {
        en: "A Windows tweaker that shows its work. 660 switches, every change journalled and reversible.",
        tr: "İşini gösteren bir Windows tweaker. 660 anahtar, her değişiklik kayıtlı ve geri alınabilir."
      }
    },
    {
      slug: "crisp",
      name: "Crisp",
      repo: "https://github.com/shadesofdeath/Crisp",
      download: "https://github.com/shadesofdeath/Crisp/releases/latest",
      version: "v0.8",
      license: "MIT",
      stack: ["C++20", "Win32", "Single .exe"],
      tag: {
        en: "Screenshots that stay sharp.",
        tr: "Keskin kalan ekran görüntüleri."
      },
      short: {
        en: "Native screen capture with a pixel magnifier, annotation, OCR and pin-to-screen.",
        tr: "Piksel büyüteci, işaretleme, OCR ve ekrana sabitleme ile yerel ekran yakalama."
      }
    },
    {
      slug: "translatte",
      name: "Translatte",
      repo: "https://github.com/shadesofdeath/Translatte",
      download: "https://github.com/shadesofdeath/Translatte/releases/latest",
      version: "v1.0",
      license: "GPL-3.0",
      stack: ["C#", ".NET Framework", "Portable"],
      tag: {
        en: "Translate anything. No API keys.",
        tr: "Her şeyi çevir. API anahtarı yok."
      },
      short: {
        en: "A QTranslate-style translator that needs no account, no key and no install.",
        tr: "Hesap, anahtar ve kurulum istemeyen QTranslate tarzı bir çeviri aracı."
      }
    },
    {
      slug: "shadepad",
      name: "ShadePad",
      repo: "https://github.com/shadesofdeath/ShadePad",
      download: "https://github.com/shadesofdeath/ShadePad/releases/latest",
      version: "v1.2",
      license: "Open source",
      stack: ["C++20", "Win32", "Scintilla"],
      tag: {
        en: "Notepad, with the gaps filled in.",
        tr: "Not Defteri, eksikleri tamamlanmış."
      },
      short: {
        en: "A lightweight editor that keeps the feel of Notepad and fixes what it lacks.",
        tr: "Not Defteri hissini koruyup eksiklerini kapatan hafif bir düzenleyici."
      }
    },
    {
      slug: "keylock",
      name: "KeyLock Indicator",
      repo: "https://github.com/shadesofdeath/KeyLockIndicator",
      download: null,
      version: "Store-ready",
      license: "MIT",
      stack: ["C++20", "Win32", "Direct2D"],
      tag: {
        en: "Know your lock keys. Without looking down.",
        tr: "Kilit tuşlarını bil. Aşağı bakmadan."
      },
      short: {
        en: "An on-screen card the instant Caps, Num or Scroll Lock changes. No hook, no runtime.",
        tr: "Caps, Num veya Scroll Lock değiştiği anda ekranda bir kart. Hook yok, runtime yok."
      }
    }
  ],

  i18n: {
    en: {
      "meta.title.index": "Berkay Ay",
      "meta.title.projects": "Projects — Berkay Ay",
      "meta.title.404": "Not found — Berkay Ay",
      "nav.index": "Home",
      "nav.work": "Projects",
      "nav.support": "Support",
      "nav.theme": "Toggle theme",

      "hero.sub2": "ShadesOfDeath on GitHub · Türkiye",
      "hero.lede": "I build small, native Windows utilities: one <em>.exe</em>, no runtime, no installer, no telemetry. Software that starts in milliseconds and never phones home.",
      "hero.cta.work": "See projects",
      "hero.cta.coffee": "Buy me a coffee",
      "now.1.k": "Now",
      "now.1.v": "C++20 · Win32 tools",
      "now.2.k": "Local time",
      "now.3.k": "On GitHub since",

      "rules.title2": "How every app is built",
      "rules.1.h": "No runtime",
      "rules.1.p": "Statically linked. Nothing to install first, nothing to update later. It runs on a fresh Windows.",
      "rules.2.h": "No installer",
      "rules.2.p": "One .exe you can drop anywhere. When an installer exists it is optional, and it never asks for admin.",
      "rules.3.h": "No telemetry",
      "rules.3.p": "No analytics, no crash reporters, no update pings. If it talks to the network, you turned that on.",
      "rules.4.h": "Reversible",
      "rules.4.p": "Every write is recorded. Anything an app of mine changes, it can put back exactly as it found it.",

      "work.title2": "Projects",
      "work.all": "All projects →",
      "stack.title": "Stack",

      "support.index": "Support",
      "support.title2": "If one of these saved you an afternoon, <em>buy me a coffee.</em>",
      "support.text": "Everything here is free and open source, and it will stay that way. There are no pro versions, no paywalls and no ads. A coffee keeps the lights on and the compiler warm.",
      "support.cta": "Buy me a coffee",
      "support.star": "Star on GitHub",
      "support.note": "No accounts. No subscriptions. One-time, any amount.",

      "footer.rights": "© 2026 Berkay Ay",
      "footer.coffee": "Buy me a coffee",
      "footer.source": "View source",
      "footer.note": "No cookies · No analytics",

      "projects.title": "Projects",
      "projects.sub": "Small tools for Windows, each one a single executable. Pick one, read the source, take it apart.",
      "projects.github": "GitHub",
      "projects.download": "Download",
      "band.title": "Something useful here? <em>Say thanks with a coffee.</em>",
      "band.cta": "Buy me a coffee",

      "nf.title": "This page is not installed.",
      "nf.text": "Nothing lives at this address. Try the home page.",
      "nf.cta": "Back home"
    },

    tr: {
      "meta.title.index": "Berkay Ay",
      "meta.title.projects": "Projeler — Berkay Ay",
      "meta.title.404": "Bulunamadı — Berkay Ay",
      "nav.index": "Ana sayfa",
      "nav.work": "Projeler",
      "nav.support": "Destek",
      "nav.theme": "Temayı değiştir",

      "hero.sub2": "GitHub'da ShadesOfDeath · Türkiye",
      "hero.lede": "Küçük, yerel Windows araçları yapıyorum: tek <em>.exe</em>, runtime yok, kurulum yok, telemetri yok. Milisaniyede açılan ve asla eve telefon etmeyen yazılımlar.",
      "hero.cta.work": "Projelere bak",
      "hero.cta.coffee": "Kahve ısmarla",
      "now.1.k": "Şu an",
      "now.1.v": "C++20 · Win32 araçları",
      "now.2.k": "Yerel saat",
      "now.3.k": "GitHub'da",

      "rules.title2": "Her uygulama nasıl yapılıyor",
      "rules.1.h": "Runtime yok",
      "rules.1.p": "Statik bağlı. Önce kurulacak, sonra güncellenecek bir şey yok. Sıfır bir Windows'ta çalışır.",
      "rules.2.h": "Kurulum yok",
      "rules.2.p": "İstediğin yere bırakabileceğin tek bir .exe. Kurulum dosyası varsa isteğe bağlıdır ve asla yönetici hakkı istemez.",
      "rules.3.h": "Telemetri yok",
      "rules.3.p": "Analitik yok, çökme raporu yok, güncelleme pingi yok. Ağla konuşuyorsa onu sen açtın.",
      "rules.4.h": "Geri alınabilir",
      "rules.4.p": "Her yazım kaydedilir. Uygulamalarımın değiştirdiği her şey, bulduğu gibi geri konulabilir.",

      "work.title2": "Projeler",
      "work.all": "Tüm projeler →",
      "stack.title": "Teknolojiler",

      "support.index": "Destek",
      "support.title2": "Bunlardan biri sana bir öğle sonrası kazandırdıysa, <em>bir kahve ısmarla.</em>",
      "support.text": "Buradaki her şey ücretsiz ve açık kaynak, öyle de kalacak. Pro sürüm yok, ödeme duvarı yok, reklam yok. Bir kahve ışıkları açık, derleyiciyi sıcak tutar.",
      "support.cta": "Kahve ısmarla",
      "support.star": "GitHub'da yıldızla",
      "support.note": "Hesap yok. Abonelik yok. Tek seferlik, istediğin kadar.",

      "footer.rights": "© 2026 Berkay Ay",
      "footer.coffee": "Kahve ısmarla",
      "footer.source": "Kaynak kodu",
      "footer.note": "Çerez yok · Analitik yok",

      "projects.title": "Projeler",
      "projects.sub": "Windows için küçük araçlar, her biri tek bir çalıştırılabilir dosya. Birini seç, kaynağını oku, söküp incele.",
      "projects.github": "GitHub",
      "projects.download": "İndir",
      "band.title": "İşine yarayan bir şey var mı? <em>Bir kahveyle teşekkür et.</em>",
      "band.cta": "Kahve ısmarla",

      "nf.title": "Bu sayfa kurulu değil.",
      "nf.text": "Bu adreste bir şey yok. Ana sayfayı dene.",
      "nf.cta": "Ana sayfaya dön"
    }
  }
};
