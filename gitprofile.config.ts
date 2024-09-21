// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'bartine2x', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects i worked with',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Centrum Fuel Page',
          description: 'The main webpage of centrum fuel.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://centrumfuel.ph/web',
        },
        {
          title: 'RKCGPS',
          description: 'System that tracks vehicle positions realtime.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1UcH5o-jr7RhNephpckuwe-UW7F7TGwVI',
          link: 'https://rkcgps.net',
        },
        {
          title: 'ATGMS',
          description:
            'A application that monitors underground fuel tanks partnered with UGTMS that records its data.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1MbH5jHw7w7PDohAIN1KQ7j6G6OAk8dMV',
          link: 'https://infosys.centrumfuel.ph/ugtms/',
        },
        {
          title: 'RKC CFSDV',
          description:
            'Accounting system that tracks cash disbursment of all gasoline stations.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1pahV-ixxRs68kqbS0Wih3q0XmxXlLk9I',
          link: 'https://infosys.centrumfuel.ph/cfsdv/',
        },
        {
          title: 'RKCHUB',
          description:
            'A system that hold user accounts that they can use if they use the OAuth.',
          imageUrl:
            'https://drive.google.com/thumbnail?id=1jdXSmi1G2oF_b4wf1TLxCCbTL3by0AgB',
          link: 'https://infosys.centrumfuel.ph/rkchub/oauth/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alijah Rañola',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Alijah Gabriel Rañola',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '',
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '',
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    email: 'ag.ranola01@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1qQ5wPb26VEMXZFgNwknVpFWMUk51yx2I/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'C#',
    // 'Nest.js',
    'MySQL',
    // 'PostgreSQL',
    // 'Git',
    // 'Docker',
    // 'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
    'Material UI',
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
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
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
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
