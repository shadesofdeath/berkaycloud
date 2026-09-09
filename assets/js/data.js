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
      "meta.title.index": "Berkay Ay — Native Windows tooling",
      "meta.title.projects": "Work — Berkay Ay",
      "meta.title.404": "Not found — Berkay Ay",
      "nav.status": "Focusing",
      "nav.index": "Index",
      "nav.work": "Work",
      "nav.support": "Support",
      "nav.theme": "Toggle theme",
      "nav.menu": "Menu",
      "menu.github": "GitHub ↗",
      "menu.coffee": "Buy me a coffee ↗",

      "hero.kicker": "Berkay Ay · a.k.a. ShadesOfDeath",
      "hero.title": "Native Windows <em>tooling.</em>",
      "hero.sub": "Small, single-file utilities for Windows. No runtime, no installer, no telemetry. The kind of software that starts in milliseconds and never phones home.",
      "hero.cta.work": "See the work",
      "hero.cta.github": "GitHub",
      "hero.foot.1.k": "Currently",
      "hero.foot.1.v": "Shipping C++20 / Win32",
      "hero.foot.2.k": "Based in",
      "hero.foot.2.v": "Türkiye",
      "hero.foot.3.k": "On GitHub since",
      "hero.foot.3.v": "2020",
      "hero.foot.4.k": "Scroll",

      "about.index": "About",
      "about.title": "Software that <em>respects</em> the machine it runs on.",
      "about.lede": "I'm <strong>Berkay Ay</strong>, <em>ShadesOfDeath</em> on the internet. I write native Windows software: the kind that ships as one executable, starts instantly and asks for nothing.",
      "about.p1": "I care about what happens beneath the window: registry writes that can be undone, pixels that are read instead of guessed, a tray icon that stays quiet until it has something to say. Most of it is pure Win32 and C++20 with Direct2D on top; some of it is C# and WPF when a ribbon or a settings page needs to feel like Windows 11.",
      "about.p2": "Everything is open source and free. If an app of mine is on your machine, it is because you put it there — and you can read every line of what it does.",
      "about.caption": "@shadesofdeath",
      "spec.name": "Name",
      "spec.alias": "Alias",
      "spec.base": "Based in",
      "spec.base.v": "Türkiye",
      "spec.focus": "Focus",
      "spec.focus.v": "Native Windows utilities",
      "spec.stack": "Stack",
      "spec.stack.v": "C++20 · Win32 · Direct2D · DirectComposition · C# · WPF · PowerShell",
      "spec.links": "Links",

      "rules.index": "Rules",
      "rules.title": "Four rules, <em>no exceptions.</em>",
      "rules.1.h": "No runtime",
      "rules.1.p": "Statically linked. Nothing to install first, nothing to update later. It runs on a fresh Windows.",
      "rules.2.h": "No installer",
      "rules.2.p": "One .exe you can drop anywhere. When an installer exists it is optional, and it never asks for admin.",
      "rules.3.h": "No telemetry",
      "rules.3.p": "No analytics, no crash reporters, no update pings. If it talks to the network, you turned that on.",
      "rules.4.h": "Reversible",
      "rules.4.p": "Every write is recorded. Anything an app of mine changes, it can put back exactly as it found it.",

      "work.index": "Selected work",
      "work.title": "Five utilities. <em>One rule:</em> one executable.",
      "work.all": "All projects",

      "support.index": "Support",
      "support.title": "If one of these saved you an afternoon, <em>buy me a coffee.</em>",
      "support.text": "Everything here is free and open source, and it will stay that way. There are no pro versions, no paywalls and no ads. A coffee keeps the lights on and the compiler warm.",
      "support.cta": "Buy me a coffee",
      "support.star": "Star on GitHub",
      "support.note": "No accounts. No subscriptions. One-time, any amount.",

      "footer.rights": "© 2026 Berkay Ay",
      "footer.github": "GitHub",
      "footer.coffee": "Buy me a coffee",
      "footer.source": "View source",
      "footer.note": "No cookies · No analytics · No build step",

      "projects.title": "Work",
      "projects.sub": "Small tools for Windows, each one a single executable. Pick one, read the source, take it apart.",
      "projects.github": "GitHub",
      "projects.download": "Download",
      "projects.version": "Release",
      "projects.license": "License",
      "band.title": "Something useful here? <em>Say thanks with a coffee.</em>",
      "band.cta": "Buy me a coffee",

      "nf.title": "This page is not installed.",
      "nf.text": "Nothing lives at this address. Try the index.",
      "nf.cta": "Back to index"
    },

    tr: {
      "meta.title.index": "Berkay Ay — Yerel Windows araçları",
      "meta.title.projects": "Projeler — Berkay Ay",
      "meta.title.404": "Bulunamadı — Berkay Ay",
      "nav.status": "Odaklanmış",
      "nav.index": "Ana sayfa",
      "nav.work": "Projeler",
      "nav.support": "Destek",
      "nav.theme": "Temayı değiştir",
      "nav.menu": "Menü",
      "menu.github": "GitHub ↗",
      "menu.coffee": "Kahve ısmarla ↗",

      "hero.kicker": "Berkay Ay · nam-ı diğer ShadesOfDeath",
      "hero.title": "Yerel Windows <em>araçları.</em>",
      "hero.sub": "Windows için küçük, tek dosyalık yardımcı programlar. Runtime yok, kurulum yok, telemetri yok. Milisaniyede açılan ve asla eve telefon etmeyen türden yazılımlar.",
      "hero.cta.work": "Projelere bak",
      "hero.cta.github": "GitHub",
      "hero.foot.1.k": "Şu an",
      "hero.foot.1.v": "C++20 / Win32 yazıyor",
      "hero.foot.2.k": "Konum",
      "hero.foot.2.v": "Türkiye",
      "hero.foot.3.k": "GitHub'da",
      "hero.foot.3.v": "2020'den beri",
      "hero.foot.4.k": "Kaydır",

      "about.index": "Hakkında",
      "about.title": "Üzerinde çalıştığı makineye <em>saygı duyan</em> yazılım.",
      "about.lede": "Ben <strong>Berkay Ay</strong>, internette <em>ShadesOfDeath</em>. Yerel Windows yazılımları yazıyorum: tek bir çalıştırılabilir dosya olarak gelen, anında açılan ve hiçbir şey istemeyen türden.",
      "about.p1": "Pencerenin altında olup bitenle ilgileniyorum: geri alınabilen kayıt defteri yazımları, tahmin edilmek yerine okunan pikseller, söyleyecek bir şeyi olana kadar susan bir tepsi simgesi. Çoğu saf Win32 ve C++20, üstüne Direct2D; bir ribbon ya da ayar sayfasının Windows 11 gibi hissetmesi gerektiğinde C# ve WPF.",
      "about.p2": "Her şey açık kaynak ve ücretsiz. Bir uygulamam makinendeyse sen koyduğun içindir ve ne yaptığının her satırını okuyabilirsin.",
      "about.caption": "@shadesofdeath",
      "spec.name": "İsim",
      "spec.alias": "Takma ad",
      "spec.base": "Konum",
      "spec.base.v": "Türkiye",
      "spec.focus": "Odak",
      "spec.focus.v": "Yerel Windows yardımcı programları",
      "spec.stack": "Teknolojiler",
      "spec.stack.v": "C++20 · Win32 · Direct2D · DirectComposition · C# · WPF · PowerShell",
      "spec.links": "Bağlantılar",

      "rules.index": "Kurallar",
      "rules.title": "Dört kural, <em>istisna yok.</em>",
      "rules.1.h": "Runtime yok",
      "rules.1.p": "Statik bağlı. Önce kurulacak, sonra güncellenecek bir şey yok. Sıfır bir Windows'ta çalışır.",
      "rules.2.h": "Kurulum yok",
      "rules.2.p": "İstediğin yere bırakabileceğin tek bir .exe. Kurulum dosyası varsa isteğe bağlıdır ve asla yönetici hakkı istemez.",
      "rules.3.h": "Telemetri yok",
      "rules.3.p": "Analitik yok, çökme raporu yok, güncelleme pingi yok. Ağla konuşuyorsa onu sen açtın.",
      "rules.4.h": "Geri alınabilir",
      "rules.4.p": "Her yazım kaydedilir. Uygulamalarımın değiştirdiği her şey, bulduğu gibi geri konulabilir.",

      "work.index": "Seçili işler",
      "work.title": "Beş araç. <em>Tek kural:</em> tek çalıştırılabilir dosya.",
      "work.all": "Tüm projeler",

      "support.index": "Destek",
      "support.title": "Bunlardan biri sana bir öğle sonrası kazandırdıysa, <em>bir kahve ısmarla.</em>",
      "support.text": "Buradaki her şey ücretsiz ve açık kaynak, öyle de kalacak. Pro sürüm yok, ödeme duvarı yok, reklam yok. Bir kahve ışıkları açık, derleyiciyi sıcak tutar.",
      "support.cta": "Kahve ısmarla",
      "support.star": "GitHub'da yıldızla",
      "support.note": "Hesap yok. Abonelik yok. Tek seferlik, istediğin kadar.",

      "footer.rights": "© 2026 Berkay Ay",
      "footer.github": "GitHub",
      "footer.coffee": "Kahve ısmarla",
      "footer.source": "Kaynak kodu",
      "footer.note": "Çerez yok · Analitik yok · Build adımı yok",

      "projects.title": "Projeler",
      "projects.sub": "Windows için küçük araçlar, her biri tek bir çalıştırılabilir dosya. Birini seç, kaynağını oku, söküp incele.",
      "projects.github": "GitHub",
      "projects.download": "İndir",
      "projects.version": "Sürüm",
      "projects.license": "Lisans",
      "band.title": "İşine yarayan bir şey var mı? <em>Bir kahveyle teşekkür et.</em>",
      "band.cta": "Kahve ısmarla",

      "nf.title": "Bu sayfa kurulu değil.",
      "nf.text": "Bu adreste bir şey yok. Ana sayfayı dene.",
      "nf.cta": "Ana sayfaya dön"
    }
  }
};
