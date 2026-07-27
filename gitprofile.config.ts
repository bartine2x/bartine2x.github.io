// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bartine2x',
  },
  base: '/',
  projects: {
    github: {
      display: false,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
    },
    external: {
      header: 'Projects Worked On',
      projects: [
        {
          title: 'Centrum Fuel Page',
          description:
            'HTML, CSS, JavaScript, PHP, and MySQL website converted from PSD design. Built a responsive marketing page, added an admin login for content management, reduced manual update work, and integrated Instagram OAuth to display live Instagram feed content.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://centrumfuel.ph',
        },
        {
          title: 'RKC GPS',
          description:
            'React and Laravel real-time vehicle tracking platform for company-owned fleets. Created the tracking webpage, deployed an open-source GPS tracking platform on Linux, and implemented Google Maps API custom markers and vehicle clustering.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1UcH5o-jr7RhNephpckuwe-UW7F7TGwVI',
          link: 'https://internal.rkcgps.net/',
        },
        {
          title: 'RKC ATGMS',
          description:
            'Automated tank gauge monitoring system with a PHP/MySQL web dashboard and C# application integration. Used IEEE-defined commands to read tank data from the console through RS-232 serial communication, store underground tank readings, and provide web-based monitoring with user account management.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1MbH5jHw7w7PDohAIN1KQ7j6G6OAk8dMV',
          link: '#',
        },
        {
          title: 'RKC CFSDV',
          description:
            'HTML, CSS, JavaScript, PHP, and MySQL cash outflow validation system. Built tracking for full-station cash outflow, prevented unaccounted expenses, and helped the finance team reach 100% liquidation tracking accuracy.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://dv.raelkitzcorp.com/',
        },
        {
          title: 'RKC HRIS',
          description:
            'React, TypeScript, Laravel, MySQL, WebSockets, and Python HRIS managing 200+ employee records. Includes access control, disciplinary records, generated termination documents, memorandum management, a WYSIWYG company policy CMS for document-accurate preview and direct editing, and payroll with attendance management and automated computations. Integrated a Python biometrics service with fingerprint-reader support and face recognition for attendance capture.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://hris.raelkitzcorp.com/',
        },
        {
          title: 'RKC Warehouse Management System',
          description:
            'React, Laravel, TypeScript, MySQL, and WebSockets inventory system for 1,000+ monthly item in/out transactions. Added real-time inventory syncing, rack/warehouse/bin location tracking, adjustment features, internal purchase functionality, and cross-user WebSocket updates.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://wms.raelkitzcorp.com/',
        },
        {
          title: 'RKC Ordering System (In Development)',
          description:
            'Deployed work-in-progress ordering system built with Next.js, shadcn/ui, and Laravel, with the frontend hosted on Vercel and the backend on Render. Designed to integrate with RKC Warehouse Management System so products can be ordered, received, and transferred into a selected warehouse.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://my-ordering-system-seven.vercel.app/',
        },
        {
          title: 'RKC Work Request System',
          description:
            'React, Laravel, TypeScript, MySQL, and WebSockets work request platform. Created the employee task submission flow, added attachment support for visitation requirements, and supported real-time request coordination across users.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: '#',
        },
        {
          title: 'Playwright Web Scraper',
          description:
            'Reusable Node.js web scraper built with Playwright and executed through a command-line workflow such as npm run scrape -- "<URL>". Tested against a paginated sample website and designed for future collection of product data from permitted online sources.',
          // imageUrl:
          //   'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: '#',
        },
        {
          title: 'Mock Hotel',
          description:
            'Collaborative hotel management PWA developed with students using a React and TypeScript frontend and a Laravel backend. Supports room and food management, room bookings, food orders, receipt printing, and live customer support powered by WebSockets. Deployed with the frontend on Vercel and the backend on Railway.',
          // imageUrl:
          //   'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://qr-scanner-sage-seven.vercel.app/SignIn',
        },
        {
          title: 'Princeza',
          description:
            'Deployed work-in-progress dress shop built with a Next.js and shadcn/ui frontend and a Laravel backend. Its AI-powered customizer generates realistic previews from selected shape and cut, sleeves, fabric, color, and button placement. Designs and generated results are saved in the database and reused for matching requests to avoid duplicate AI calls and reduce token usage. The frontend is deployed on Vercel and the backend on Render.',
          // imageUrl:
          //   'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://princeza.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alijah Gabriel Rañola',
    description:
      'Full-stack developer with 3+ years of experience building enterprise web applications using React, TypeScript, Laravel, and MySQL, with work across inventory management, HRIS, purchasing, vehicle tracking, and WebSocket-powered systems.',
    imageURL: '',
  },
  social: {
    phone: '+639214492033',
    email: 'ag.ranola01@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1q1yehgNGFbDZSqhzsod1iFrMKK6jzM-G/view?usp=sharing',
  },
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Material UI',
    'Ant Design',
    'shadcn/ui',
    'Laravel',
    'PHP',
    'REST APIs',
    'WebSockets',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Database Design',
    'Query Optimization',
    'Git',
    'GitHub',
    'Docker',
    'Docker Compose',
    'Postman',
    'Google Maps API',
    'Google OAuth',
    'Instagram API',
    'Next.js',
    'Node.js',
    'Playwright',
    'Web Scraping',
    'Progressive Web Apps (PWA)',
    'Vercel',
    'Railway',
    'Render',
    'Generative AI Integration',
    'Database Caching',
    'C#',
    'Python',
  ],
  experiences: [
    {
      company: 'Rael Kitz Corporation',
      position: 'Junior Programmer',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://www.centrumfuel.ph/web/index',
    },
  ],
  educations: [
    {
      institution: 'University of Pangasinan',
      degree: 'BSIT',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'University of Pangasinan',
      degree: 'TVL-ICT',
      from: '2016',
      to: '2018',
    },
  ],
  publications: [],
  blog: {},
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
