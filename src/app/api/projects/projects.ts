export const projects = {
  en: [
    {
      id: "portfolio",
      title: "Portfolio",
      date: 2025,
      backgroundColor: "#bae889",
      description: `This is my personal portfolio and one of the most important projects
       I’ve ever worked on. From the beginning, my goal was to create a website that works 
       perfectly for years — both in terms of performance and a clean, modern look. <br/>
      The website is fully bilingual (Persian and English), and I used a mix of SSR and 
      SSG to make sure each page loads in the best way possible depending on its needs. <br/>
      I paid a lot of attention to the performance of the components to make sure they 
      are fast, lightweight, and reusable. The design is minimal and focused, so users 
      can easily find what matters without distractions. <br/>
      Every part of the site is built with care and precision to show how much I value 
      structure, detail, and a good user experience. This isn’t just a portfolio — 
      it’s a reflection of how I think and work as a developer.`,
      coverImage: {
        url: "/projects/portfolio/cover.png",
        alt: "cover portfolio"
      },
      heroImage: {
        url: "/projects/portfolio/hero.png",
        alt: "hero portfolio"
      },
      technologies: [
        "Next.js",
        "TypeScript",
        "Next-intl",
        "Tailwind",
        "React Query",
        "Shadcn",
        "React Hook Form",
        "Farmer Motion",
        "Axios",
        "Zod"
      ],
      screenshots: [
        "/projects/portfolio/1.png",
        "/projects/portfolio/2.png",
        "/projects/portfolio/3.png",
        "/projects/portfolio/4.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/portfolio",
        live: "https://a-hosseini.ir/"
      }
    },
    {
      id: "nextmovie",
      title: "Next Movie",
      date: 2024,
      backgroundColor: "#ff1a1a",
      description: `In this app, you can explore the latest movies and TV series and get complete
      information about them. There's also a search feature to find your favorite titles. This project
      is built using Next.js version 14 and Tailwind CSS, and it fetches data from the TMDB API. It 
      also uses SWR for optimized data fetching and caching. I gained valuable experience with SSR and
      SSG during this project, especially in managing content rendering and search functionality.`,
      coverImage: {
        url: "/projects/nextmovie/cover.png",
        alt: "cover nextmovie"
      },
      heroImage: {
        url: "/projects/nextmovie/hero.png",
        alt: "hero nextmovie"
      },
      technologies: [
        "Next.js",
        "Tailwind",
        "JavaScript",
        "SWR",
        "TMDB"
      ],
      screenshots: [
        "/projects/nextmovie/1.png",
        "/projects/nextmovie/2.png",
        "/projects/nextmovie/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/next-movie",
        live: "https://next-movie-dun.vercel.app/"
      }
    },
    {
      id: "musicplayer",
      title: "Music Player",
      date: 2023,
      backgroundColor: "#d3d3d3",
      description: `Music Player is a simple and light project made with plain JavaScript and CSS.
      I built it to practice working with audio files, designing without any frameworks, and 
      creating a smooth user experience. It has features like dark mode, volume control, favorites
      list, repeat track, and playlist.`,
      coverImage: {
        url: "/projects/musicplayer/cover.png",
        alt: "cover musicplayer"
      },
      heroImage: {
        url: "/projects/musicplayer/hero.png",
        alt: "hero musicplayer"
      },
      technologies: [
        "JavaScript",
        "Css",
        "Html"
      ],
      screenshots: [
        "/projects/musicplayer/1.png",
        "/projects/musicplayer/2.png",
        "/projects/musicplayer/3.png",
        "/projects/musicplayer/4.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/music-player",
        live: "https://alirezahoseini.github.io/music-player/"
      }
    },
    {
      id: "weather",
      title: "Weather app",
      date: 2022,
      backgroundColor: "#d7b8ff",
      description: `With this web app, you can check the weather in your city or any other place 🌦️
      I built this project to learn how to work with APIs in JavaScript and improve my front-end skills.
      The app has a clean and simple design, and the user interface is made with Tailwind CSS. It shows 
      the weather for the full day, the local time of each city, and can detect your location using your IP. 
      You can also view the weather of two cities at the same time. I used an open-source weather API that 
      even provides special icons for day and night.`,
      coverImage: {
        url: "/projects/weather/cover.png",
        alt: "cover weather"
      },
      heroImage: {
        url: "/projects/weather/hero.png",
        alt: "hero weather"
      },
      technologies: [
        "JavaScript",
        "Tailwind",
        "Sass"
      ],
      screenshots: [
        "/projects/weather/1.png",
        "/projects/weather/2.png",
        "/projects/weather/3.png",
        "/projects/weather/4.png",
        "/projects/weather/5.png",
        "/projects/weather/6.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Weather-App-JS",
        live: "https://new-weather-appp.vercel.app/"
      }
    },
    {
      id: "yumify",
      title: "Yumify",
      date: 2025,
      backgroundColor: "#cdff71",
      description: `Yumify is a small project where you get a random food suggestion every time ,
      it’s a fun way to get surprised!  <br/> I built it using Next.js. The food data comes from an API
      using React Query, and I manage the favorites list with Redux Toolkit.  <br/>
      For the design, I used Tailwind CSS and components from shadcn to keep everything clean and simple.`,
      coverImage: {
        url: "/projects/yumify/cover.png",
        alt: "cover yumify"
      },
      heroImage: {
        url: "/projects/yumify/hero.png",
        alt: "hero yumify"
      },
      technologies: [
        "TypeScript",
        "Next.js",
        "Redux Toolkit",
        "Tailwind",
        "React Query",
        "SSR",
        "Shadcn"
      ],
      screenshots: [
        "/projects/yumify/1.png",
        "/projects/yumify/2.png",
        "/projects/yumify/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/yumify",
        live: "https://yumifyapp.vercel.app/"
      }
    },
    {
      id: "eshop",
      title: "E-Shop",
      date: 2021,
      backgroundColor: "#ffe5b6",
      description: `eShop is a static store template that shows product data from local JSON files.
      It was my first big JavaScript practice project, and even though I didn’t have much experience
      at the time, I tried to make everything clean, user-friendly, and as professional as possible.
      Some of its features include a custom slideshow, shopping cart and wishlist, notifications, form
      validation using Regex, sticky header, fully responsive design, and Swiper slider.`,
      coverImage: {
        url: "/projects/eshop/cover.png",
        alt: "cover eshop"
      },
      heroImage: {
        url: "/projects/eshop/hero.png",
        alt: "hero eshop"
      },
      technologies: [
        "Bootstrap",
        "JavaScript",
        "Regex",
        "Swiper Slider"
      ],
      screenshots: [
        "/projects/eshop/1.png",
        "/projects/eshop/2.png",
        "/projects/eshop/3.png",
        "/projects/eshop/1.gif",
        "/projects/eshop/2.gif"
      ],
      links: {
        github: "https://github.com/alirezahoseini/E-shop",
        live: "https://new-e-shop.vercel.app/"
      }
    },
    {
      id: "todojs",
      title: "TODO",
      date: 2021,
      backgroundColor: "#b0daff",
      description: `
      This is one of the most complete todo apps I’ve built using plain JavaScript.
      Main features include:
      Task search,
      Task categorization,
      Priority levels,
      Data saved with localStorage,
      Sound effects for better user interaction.
      I built this project as a serious practice to improve my JavaScript skills, 
      DOM manipulation, and front-end architecture.
      `,
      coverImage: {
        url: "/projects/todojs/cover.png",
        alt: "todo app cover"
      },
      heroImage: {
        url: "/projects/todojs/hero.png",
        alt: "todo app hero"
      },
      technologies: [
        "Bootstrap",
        "JavaScript",
        "Sass"
      ],
      screenshots: [
        "/projects/todojs/1.png",
        "/projects/todojs/2.png",
        "/projects/todojs/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Todo-App-Js",
        live: "https://maxtodoo-app.vercel.app"
      }
    },
    {
      id: "banimode",
      title: "Banimode Landing",
      date: 2021,
      backgroundColor: "#99ffb4",
      description: `In my first experience with React, I made a completely static version 
      of the Banimode landing page. The main goal of this project was to practice 
      basic concepts like structuring components, using props, and organizing code
      better. I tried to rebuild the UI using components to understand how React works.`,
      coverImage: {
        url: "/projects/banimode/cover.png",
        alt: "banimode cover"
      },
      heroImage: {
        url: "/projects/banimode/hero.png",
        alt: "banimode hero"
      },
      technologies: [
        "Bootstrap",
        "React",
        "JavaScript",
        "Sass"
      ],
      screenshots: [
        "/projects/banimode/1.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Banimode-Landing-Page",
        live: "https://banimodeee.vercel.app/"
      }
    }
  ],

  fa: [
    {
      id: "portfolio",
      title: "Portfolio",
      date: 2025,
      backgroundColor: "#bae889",
      description: `این پروژه، پورتفولیوی شخصی منه و یکی از مهم‌ترین کارهایی بود که تا حالا انجام دادم.
      از همون اول تصمیم داشتم سایتی طراحی کنم که سال‌ها بدون مشکل کار کنه،
      هم از نظر فنی پایدار باشه و هم از نظر ظاهری ساده و مدرن باقی بمونه. <br/>
      طراحی سایت به‌صورت دو زبانه انجام شده (فارسی و انگلیسی) و برای داشتن بهترین عملکرد، از ترکیب 
      SSR و SSG استفاده کردم تا هر صفحه بسته به نیازش، بهینه‌ترین حالت ممکن رو داشته باشه. <br/>
      تمرکز زیادی روی performance کامپوننت‌ها داشتم تا سریع، سبک و قابل استفاده مجدد باشن. 
      طراحی مینیمال و خلوت انجام شده تا توجه مخاطب روی چیزهای مهم
      باقی بمونه و تجربه‌ای راحت و دلچسب از مرور سایت بهش منتقل بشه. <br/>
      همه چیز با دقت و وسواس ساخته شده تا نشون بده چقدر به نظم، جزئیات و تجربه کاربری اهمیت می‌دم. 
      این سایت فقط یه پورتفولیو نیست، بلکه نماینده‌ی طرز فکر و سبک کاری منه. <br/>

    `,
      coverImage: {
        url: "/projects/portfolio/cover.png",
        alt: "cover portfolio"
      },
      heroImage: {
        url: "/projects/portfolio/hero.png",
        alt: "hero portfolio"
      },
      technologies: [
        "Next.js",
        "TypeScript",
        "Next-intl",
        "Tailwind",
        "React Query",
        "Shadcn",
        "React Hook Form",
        "Farmer Motion",
        "Axios",
        "Zod"
      ],
      screenshots: [
        "/projects/portfolio/1.png",
        "/projects/portfolio/2.png",
        "/projects/portfolio/3.png",
        "/projects/portfolio/4.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/portfolio",
        live: "https://a-hosseini.ir/"
      }
    },
    {
      id: "nextmovie",
      title: "Next Movie",
      date: 2024,
      backgroundColor: "#ff1a1a",
      description: `در این اپلیکیشن می‌تونی جدیدترین فیلم‌ها
      و سریال‌های روز رو ببینی و اطلاعات کاملی درباره‌شون داشته باشی.
      امکان جستجو هم برای پیدا کردن فیلم یا سریال مورد علاقه‌ات وجود داره. این پروژه با استفاده از 
      Next.js نسخه ۱۴ و Tailwind CSS ساخته شده و دیتا از طریق API سایت TMDB دریافت می‌شه.
      همچنین با استفاده از SWR دیتا به‌صورت بهینه دریافت و کش می‌شه.
      تجربه‌ی خوبی از کار با SSR و SSG توی این پروژه داشتم، مخصوصاً در مدیریت رندر شدن محتوا و جستجو.`,
      coverImage: {
        url: "/projects/nextmovie/cover.png",
        alt: "تصویر کاور پروژه nextmovie"
      },
      heroImage: {
        url: "/projects/nextmovie/hero.png",
        alt: "تصویر هدر پروژه nextmovie"
      },
      technologies: [
        "Next.js",
        "Tailwind",
        "SWR",
        "JavaScript",
        "TMDB"
      ],
      screenshots: [
        "/projects/nextmovie/1.png",
        "/projects/nextmovie/2.png",
        "/projects/nextmovie/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/next-movie",
        live: "https://next-movie-dun.vercel.app/"
      }
    },
    {
      id: "musicplayer",
      title: "Music Player",
      date: 2023,
      backgroundColor: "#d3d3d3",
      description: `موزیک پلیر یک پروژه تمرینی ساده و سبک هست که با جاوااسکریپت و CSS 
      خالص ساخته شده. هدفم از ساخت این پروژه، تمرین مدیریت فایل‌های صوتی، طراحی رابط کاربری بدون فریم‌ورک 
      و ایجاد یک تجربه کاربری روان و کاربردی بود.
      این پلیر امکاناتی مثل حالت تاریک، کنترل صدا، لیست علاقه‌مندی، تکرار ترک و لیست پخش داره.`,
      coverImage: {
        url: "/projects/musicplayer/cover.png",
        alt: "تصویر کاور پروژه musicplayer"
      },
      heroImage: {
        url: "/projects/musicplayer/hero.png",
        alt: "تصویر هدر پروژه musicplayer"
      },
      technologies: [
        "JavaScript",
        "Css",
        "Html"
      ],
      screenshots: [
        "/projects/musicplayer/1.png",
        "/projects/musicplayer/2.png",
        "/projects/musicplayer/3.png",
        "/projects/musicplayer/4.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/music-player",
        live: "https://alirezahoseini.github.io/music-player/"
      }
    },
    {
      id: "weather",
      title: "Weather app",
      date: 2022,
      backgroundColor: "#d7b8ff",
      description: `با استفاده از این وب‌اپلیکیشن می‌تونید اطلاعات دقیقی درباره‌ی 
      وضعیت آب‌وهوای شهر یا منطقه‌ی خودتون دریافت کنید 🌦️
      این پروژه رو برای یادگیری و تسلط بیشتر روی استفاده از APIها در جاوااسکریپت و توسعه‌ی فرانت‌اند پیاده‌سازی کردم.
      از جمله امکانات پروژه می‌تونم به طراحی مینیمال، رابط کاربری ساخته‌شده با Tailwind CSS،
      نمایش وضعیت آب‌وهوا برای یک روز کامل، نمایش ساعت محلی هر شهر، تشخیص موقعیت کاربر با استفاده از 
      IP Geolocation و همچنین امکان مشاهده هم‌زمان اطلاعات دو شهر مختلف اشاره کنم. برای دریافت داده‌ها
      از یک وب‌سرویس آب‌وهوایی اوپن سورس استفاده شده که آیکون اختصاصی روز و شب هم ارائه می‌ده.`,
      coverImage: {
        url: "/projects/weather/cover.png",
        alt: "تصویر کاور پروژه weather"
      },
      heroImage: {
        url: "/projects/weather/hero.png",
        alt: "تصویر هدر پروژه weather"
      },
      technologies: [
        "JavaScript",
        "Tailwind",
        "Sass"
      ],
      screenshots: [
        "/projects/weather/1.png",
        "/projects/weather/2.png",
        "/projects/weather/3.png",
        "/projects/weather/4.png",
        "/projects/weather/5.png",
        "/projects/weather/6.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Weather-App-JS",
        live: "https://new-weather-appp.vercel.app/"
      }
    },
    {
      id: "yumify",
      title: "Yumify",
      date: 2025,
      backgroundColor: "#cdff71",
      description: `Yumify مینی پروژه دریافت غذا و خوراکی های رندوم هست که میتونه سورپرایزتون کنه.  <br/>
      توی این پروژه از nextjs استفاده کردم دیتا هم از api با react query  گرفته 
      میشه و علاقه مندی ها هم با redux toolkit هندل شده.  <br/>
      برای استایل دهی هم از tailwind و کامپوننت های shadcn استفاده کردم.`,
      coverImage: {
        url: "/projects/yumify/cover.png",
        alt: "cover yumify"
      },
      heroImage: {
        url: "/projects/yumify/hero.png",
        alt: "hero yumify"
      },
      technologies: [
        "TypeScript",
        "Next.js",
        "Redux Toolkit",
        "Tailwind",
        "React Query",
        "SSR",
        "Shadcn"
      ],
      screenshots: [
        "/projects/yumify/1.png",
        "/projects/yumify/2.png",
        "/projects/yumify/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/yumify",
        live: "https://yumifyapp.vercel.app/"
      }
    },
    {
      id: "eshop",
      title: "E-Shop",
      date: 2021,
      backgroundColor: "#ffe5b6",
      description: `eShop یک قالب فروشگاهی استاتیکه که
       اطلاعات محصولات رو به صورت داینامیک از فایل‌های JSON محلی دریافت می‌کنه. 
      این پروژه اولین تمرین بزرگ من با جاوااسکریپت بود و با وجود اینکه هنوز تجربه زیادی نداشتم،
      تلاش کردم همه چیز رو تمیز، کاربرپسند و تا حد امکان حرفه‌ای پیاده‌سازی کنم.
      از امکانات این قالب می‌تونم به
      اسلایدشو سفارشی،
      سبد خرید و لیست علاقه‌مندی، نوتیفیکیشن، اعتبارسنجی فرم با Regex، هدر چسبنده، طراحی کاملاً ریسپانسیو و استفاده
      از Swiper Slider اشاره کنم.`,
      coverImage: {
        url: "/projects/eshop/cover.png",
        alt: "تصویر کاور پروژه eshop"
      },
      heroImage: {
        url: "/projects/eshop/hero.png",
        alt: "تصویر هدر پروژه eshop"
      },
      technologies: [
        "Bootstrap",
        "JavaScript",
        "Regex",
        "Swiper Slider"
      ],
      screenshots: [
        "/projects/eshop/1.png",
        "/projects/eshop/2.png",
        "/projects/eshop/3.png",
        "/projects/eshop/1.gif",
        "/projects/eshop/2.gif"
      ],
      links: {
        github: "https://github.com/alirezahoseini/E-shop",
        live: "https://new-e-shop.vercel.app/"
      }
    },
    {
      id: "todojs",
      title: "TODO",
      date: 2021,
      backgroundColor: "#b0daff",
      description: `
      این برنامه یکی از کامل‌ترین Todo Appهایی هست که با جاوااسکریپت Vanilla طراحی کردم.
      ویژگی‌های اصلی برنامه شامل موارد زیرهست:
      جستجوی کارها،
      دسته‌بندی وظایف،
      اولویت‌ بندی کارها،
      ذخیره‌سازی داده‌ها با استفاده از localStorage،
      استفاده از افکت‌های صوتی برای تعامل بهتر با کاربر.
      این پروژه رو به عنوان یک تمرین جدی برای تسلط بیشتر روی جاوااسکریپت، مدیریت DOM،
      و معماری سمت فرانت پیاده‌سازی کردم.
      `,
      coverImage: {
        url: "/projects/todojs/cover.png",
        alt: "تصویر کاور پروژه تودو"
      },
      heroImage: {
        url: "/projects/todojs/hero.png",
        alt: "تصویر هدر پروژه تودو"
      },
      technologies: [
        "Bootstrap",
        "JavaScript",
        "Sass"
      ],
      screenshots: [
        "/projects/todojs/1.png",
        "/projects/todojs/2.png",
        "/projects/todojs/3.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Todo-App-Js",
        live: "https://maxtodoo-app.vercel.app"
      }
    },
    {
      id: "banimode",
      title: "Banimode Landing",
      date: 2021,
      backgroundColor: "#99ffb4",
      description: `در اولین تجربه‌ام با React، یک نسخه‌ی کاملاً استاتیک از لندینگ پیج
       بانی‌مد پیاده‌سازی کردم. هدف اصلی این پروژه،
       تمرین مفاهیم پایه‌ای مانند ساختاردهی کامپوننت‌ها، مدیریت props و سازماندهی بهتر کد بود. در این پروژه
       تلاش کردم 
      رابط کاربری را به صورت component-based بازسازی کنم تا بهتر با طرز فکر React آشنا شوم.`,
      coverImage: {
        url: "/projects/banimode/cover.png",
        alt: "تصویر کاور پروژه بانی مد"
      },
      heroImage: {
        url: "/projects/banimode/hero.png",
        alt: "تصویر هدر پروژه بانی مد"
      },
      technologies: [
        "Bootstrap",
        "React",
        "JavaScript",
        "Sass"
      ],
      screenshots: [
        "/projects/banimode/1.png"
      ],
      links: {
        github: "https://github.com/alirezahoseini/Banimode-Landing-Page",
        live: "https://banimodeee.vercel.app/"
      }
    }
  ]
}