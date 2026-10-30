const translations = {
  en: {
    sections: {
      contact: 'Contact',
      techStack: 'Tech Stack',
      education: 'Education',
      languages: 'Languages',
      workExperience: 'Work Experience',
      coreSkills: 'Core Skills',
      leadership: 'Leadership & Management',
      analytical: 'Analytical Thinking',
    },
    contact: {
      address: 'Yerevan / Armenia / 0022',
      personalWebsite: 'Personal website',
    },
    techStack: [
      'Python, JavaScript',
      'Machine Learning fundamentals',
      'Algorithms & Computer Architecture',
      'Linux & C Programming',
      'Data Structures & OOP',
    ],
    education: [
      { period: '2024 – 2025', description: 'Picsart Academy — Computer Architecture, C, Python, Math, Machine Learning, Data Science' },
      { period: '2024', description: 'Armenian Code Academy — JavaScript Programming' },
      { period: '2006 – 2010', description: 'Vazgen Sargsyan Military Academy — Military Officer Education (Gold Medal)' },
      { period: '1996 – 2006', description: 'Secondary School No. 180 — Graduated with Honors' },
    ],
    languages: [
      'Armenian — Native',
      'Russian — Fluent',
      'English — Intermediate (B1)',
    ],
    workExperience: [
      {
        role: 'AI Engineer',
        company: 'AI Research (Personal) · Self-employed',
        period: 'Nov 2025 – Present',
        location: 'Yerevan, Armenia',
        responsibilities: [
          {
            preLink: 'Developed and deployed version 2 of ',
            linkText: 'armherbs.com',
            postLink: ' — an AI-powered herbal medicine search platform that helps users find herbs based on their medicinal uses.',
            tech: 'Python, React, FastAPI, Vector Embeddings, RAG',
          },
          {
            text: 'Developed an ML model to predict which registered users are likely to pay for a service, using user data and the Gemini API during the development process. Addressed severe class imbalance and improved performance by ~1% over the baseline.',
            tech: 'Python, XGBoost, Gemini API, SMOTE',
          },
        ],
      },
      {
        role: 'Artillery Battery Commander',
        company: 'Armed Forces of Armenia · Full-time',
        period: 'Jul 2006 – Mar 2023',
        responsibilities: [
          { text: 'Responsible for planning and execution of training and operational tasks.' },
          { text: 'Over a period of 13 years, trained two generations of conscripts annually as artillery specialists and prepared them for reserve service.' },
          { text: 'Held leadership roles over units ranging from 23 to 256 personnel in various operational contexts.' },
          { text: 'Participated in combat operations during the 2020 Artsakh War, as well as armed engagements on 16 November 2021 and 13 September 2022.' },
          { text: 'Designed surface trench systems optimized for mountain warfare for mortar batteries, later used as a reference model within the Armenian Armed Forces.' },
        ],
      },
    ],
    coreSkills: {
      leadership: ['Team leadership', 'Operational planning', 'Responsibility for complex systems'],
      analytical: ['Problem analysis', 'Structured problem solving', 'System analysis', 'Logical reasoning'],
    },
  },

  
am: {
  sections: {
    contact: 'Կոնտակտային տվյալներ',
    techStack: 'Տեխնիկական հմտություններ',
    education: 'Կրթություն',
    languages: 'Լեզուներ',
    workExperience: 'Աշխատանքային փորձ',
    coreSkills: 'Հիմնական հմտություններ',
    leadership: 'Առաջնորդություն և կառավարում',
    analytical: 'Վերլուծական մտածողություն',
  },

  contact: {
    address: 'Երևան / Հայաստան / 0022',
    personalWebsite: 'Անձնական կայք',
  },

  techStack: [
    'Python, JavaScript',
    'Մեքենայական ուսուցման հիմունքներ',
    'Ալգորիթմներ և համակարգչային ճարտարապետություն',
    'Linux օպերացիոն համակարգ և C լեզվով ծրագրավորում',
    'Տվյալների կառուցվածքներ և օբյեկտակողմնորոշված ծրագրավորում',
  ],

  education: [
    {
      period: '2024 – 2025',
      description: 'Picsart Academy — Համակարգչային ճարտարապետություն, C, Python, մաթեմատիկա, մեքենայական ուսուցում և տվյալագիտություն',
    },
    {
      period: '2024',
      description: 'Armenian Code Academy — JavaScript լեզվով ծրագրավորում',
    },
    {
      period: '2006 – 2010',
      description: 'Վազգեն Սարգսյանի անվան ռազմական ակադեմիա — Սպայական կրթություն (ոսկե մեդալ)',
    },
    {
      period: '1996 – 2006',
      description: 'Թիվ 180 միջնակարգ դպրոց — Ավարտել է գերազանցությամբ',
    },
  ],

  languages: [
    'Հայերեն — մայրենի',
    'Ռուսերեն — ազատ տիրապետում',
    'Անգլերեն — միջին մակարդակ (B1)',
  ],

  workExperience: [
    {
      role: 'Արհեստական բանականության ինժեներ',
      company: 'AI նախագիծ · Ինքնուրույն աշխատանք',
      period: 'Նոյեմբեր 2025 – Ներկա',
      location: 'Երևան, Հայաստան',

      responsibilities: [
        {
          preLink: 'Մշակել և գործարկել եմ ',
          linkText: 'armherbs.com',
          postLink: '-ի երկրորդ տարբերակը՝ արհեստական բանականությամբ աշխատող հարթակ, որն օգնում է օգտատերերին գտնել դեղաբույսեր՝ ըստ դրանց բուժիչ կիրառության։',
          tech: 'Python, React, FastAPI, Vector Embeddings, RAG',
        },
        {
          text: 'Մշակել եմ մեքենայական ուսուցման մոդել՝ կանխատեսելու գրանցված օգտատերերի՝ վճարող հաճախորդ դառնալու հավանականությունը։ Մոդելի մշակման ընթացքում կիրառել եմ օգտատերերի տվյալները և Gemini API-ն։ Դասերի խիստ անհավասարակշռության պայմաններում իմ մոդելի արդյունավետությունը բարելավել եմ մոտ 1%-ով՝ համեմատած LLM-ի ցուցանիշի հետ։',
          tech: 'Python, XGBoost, Gemini API, SMOTE',
        },
      ],
    },

    {
      role: 'Հրետանային մարտկոցի հրամանատար',
      company: 'Հայաստանի զինված ուժեր · Ամբողջ դրույքով',
      period: 'Հուլիս 2006 – Մարտ 2023',

      responsibilities: [
        {
          text: 'Պատասխանատու եմ եղել ուսումնական և օպերատիվ խնդիրների պլանավորման ու իրականացման համար։',
        },
        {
          text: 'Ծառայության տարիների ընթացքում 26 սերունդի զորակոչված զինծառայողների պատրաստել եմ որպես հրետանային մասնագետներ՝ ուղարկելով ՀՀԶՈՒ պահեստազոր։',
        },
        {
          text: 'Ղեկավարել եմ 23-ից 256 զինծառայող ունեցող ստորաբաժանումներ՝ տարբեր ծառայողական և օպերատիվ պայմաններում։',
        },
        {
          text: 'Մասնակցել եմ 2020 թվականի Արցախյան պատերազմին, ինչպես նաև 2021 թվականի նոյեմբերի 16-ի և 2022 թվականի սեպտեմբերի 13-ի զինված բախումներին Ջերմուկում։',
        },
        {
          text: 'Մշակել եմ ականանետային մարտկոցների համար նախատեսված վերգետնյա խրամուղային դիրքերի համակարգ՝ հարմարեցված լեռնային մարտական գործողություններին։ Հետագայում այն կիրառվել է Հայաստանի զինված ուժերում որպես օրինակելի լուծում։',
        },
      ],
    },
  ],

  coreSkills: {
    leadership: [
      'Թիմի ղեկավարում և աշխատանքի համակարգում',
      'Գործառնական պլանավորում',
      'Բարդ համակարգերի կառավարում',
    ],

    analytical: [
      'Խնդիրների բացահայտում և գնահատում',
      'Խնդիրների համակարգված լուծում',
      'Համակարգերի վերլուծություն',
      'Տրամաբանական մտածողություն',
    ],
  },
},

};

export default translations;
