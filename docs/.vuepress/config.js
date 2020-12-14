module.exports = {
  title: 'Douaratil DRS',
  description: 'Document de Référence Système pour le jeu de rôle Douaratil',
  head: [
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
    ['link', { rel: 'manifest', crossorigin:"use-credentials", href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5B3C11' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#5B3C11' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],
  shouldPrefetch () {
    return false
  },
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'spell',
            // Meta title for spell list page
            title: 'Grimoire',
            // Target directory
            dirname: 'grimoire',
            // Path of the `entry page` (or `list page`)
            path: '/grimoire/',
            layout: 'SpellsLayout',
            itemLayout: 'SpellLayout',
            itemPermalink: '/grimoire/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
          {
            // Unique ID of current classification
            id: 'monster',
            // Meta title for spell list page
            title: 'Bestiaire',
            // Target directory
            dirname: 'bestiaire',
            // Path of the `entry page` (or `list page`)
            path: '/bestiaire/',
            layout: 'MonstersLayout',
            itemLayout: 'MonsterLayout',
            itemPermalink: '/bestiaire/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
          {
            // Unique ID of current classification
            id: 'magicitem',
            // Meta title for spell list page
            title: 'Liste des objets magiques',
            // Target directory
            dirname: 'liste-objets-magiques',
            // Path of the `entry page` (or `list page`)
            path: '/liste-objets-magiques/',
            layout: 'MagicItemsLayout',
            itemLayout: 'MagicItemLayout',
            itemPermalink: '/liste-objets-magiques/:slug',
            pagination: {
              lengthPerPage: 1000,
              sorter: (prev, next) => {
                return prev.path - next.path
              },
            },
          },
        ],
      }
    ],
    [
      'check-md', {}
    ],
    [
      'sitemap',
      {
        hostname: 'https://heros-et-dragons.fr'
      }
    ],
    // [
    //   '@vuepress/pwa',
    //   {
    //     serviceWorker: true,
    //     updatePopup: true,
    //     generateSWConfig: {
    //       cacheId: 'hddrs',
    //       globIgnores: ['**/*.js', '**/*.css', '**/*.html']
    //     }
    //   }
    // ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page, $site) => $page.title + ' | ' + $site.title,
        description: $page => $page.frontmatter.description,
        // author: (_, $site) => $site.themeConfig.author,
        // tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        // image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        image: ($page, $site) => $site.themeConfig.domain + '/social-logo.png',
        // publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        // modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-122478510-1' // UA-00000000-0
      }
    ]
  ],
  dest: process.env.VUEPRESS_DEST,
  extendPageData ($page) {
    $page.rawContent = ($page._strippedContent)
  },
  markdown: {
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
    anchor: {
      permalinkBefore: false,
      permalinkSymbol: '<i class="v-icon notranslate mdi mdi-link-variant"></i>'
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-div'), {marker: "§"})
      md.use(require('markdown-it-multimd-table'), {
        multiline:  true,
        rowspan:    true,
        headerless: false,
      })
    }
  },
  additionalPages: [
    {
       path: '/mon-grimoire/',
       frontmatter: {
          layout: 'MySpellsLayout'
       }
    },
    {
       path: '/mon-bestiaire/',
       frontmatter: {
          layout: 'MyMonstersLayout'
       }
    },
    {
       path: '/mes-objets-magiques/',
       frontmatter: {
          layout: 'MyMagicItemsLayout'
       }
    },
    {
       path: '/creation-de-sort/',
       frontmatter: {
          layout: 'CreateSpellLayout'
       }
    },
    {
       path: '/creation-de-monstre-pnj/',
       frontmatter: {
          layout: 'CreateMonsterLayout'
       }
    },
    {
       path: '/creation-d-objet-magique/',
       frontmatter: {
          layout: 'CreateMagicItemLayout'
       }
    },
    {
       path: '/calculateur-de-caracteristiques/',
       frontmatter: {
          layout: 'AbilityCalculatorLayout'
       }
    },
    {
       path: '/homebrew/',
       frontmatter: {
          layout: 'HomebrewLayout'
       }
    }
  ],
  themeConfig: {
    domain: 'https://douaratil.fr',
    repository: 'https://github.com/douaratil/heros-et-dragons-drs',
    kofi: 'https://ko-fi.com/S6S410PB8',
    forum: 'https://www.black-book-editions.fr/forums.php?board_id=115',
    discord: 'https://discord.gg/mp6ECCs',
    discordHDNO: 'https://discord.gg/MntFXr',
    primaryColor: '#5B3C11', // Hero
    accentColor: '#730800', // Dragon
    searchPlaceholder: 'Recherche',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'À propos', link: '/a-propos/' }
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Pour les joueurs',
        icon: 'mdi-book-open-variant',
        children: [
          {
            title: "Création du personnage",
            path: '/creation-du-personnage/'
          },
          {
            title: 'Les ethnies',
            path: '/ethnies/',
          },
          {
            title: "Personnalité & Historique",
            path: '/personnalite-et-historique/',
          },
          {
            title: "Les trois voies",
            path: '/voies/',
          },
          {
            title: "Classes",
            path: '/classes/',
            children: [
              {
                title: "Les classes",
                path: '/classes/',
                exact: true
              },
              {
                title: "Barbare",
                path: '/classes/barbare/'
              },
              {
                title: "Barde",
                path: '/classes/barde/'
              },
              {
                title: "Clerc",
                path: '/classes/clerc/'
              },
              {
                title: "Druide",
                path: '/classes/druide/'
              },
              {
                title: "Ensorceleur",
                path: '/classes/ensorceleur/'
              },
              {
                title: "Guerrier",
                path: '/classes/guerrier/'
              },
              {
                title: "Magicien",
                path: '/classes/magicien/'
              },
              {
                title: "Moine",
                path: '/classes/moine/'
              },
              {
                title: "Paladin",
                path: '/classes/paladin/'
              },
              {
                title: "Rôdeur",
                path: '/classes/rodeur/'
              },
              {
                title: "Roublard",
                path: '/classes/roublard/'
              },
              {
                title: "Sorcier",
                path: '/classes/sorcier/'
              }
            ]
          },
          {
            title: "Équipement",
            children: [
              {
                title: "Système monétaire",
                path: '/systeme-monetaire/'
              },
              {
                title: "Armures",
                path: '/armures/'
              },
              {
                title: "Armes",
                path: '/armes/'
              },
              {
                title: "Équipement d'aventurier",
                path: '/equipement-d-aventurier/'
              },
              {
                title: "Outils",
                path: '/outils/'
              },
              {
                title: "Montures et véhicules",
                path: '/montures-et-vehicules/'
              },
              {
                title: "Marchandises",
                path: '/marchandises/'
              },
              {
                title: "Dépenses courantes",
                path: '/depenses-courantes/'
              }
            ]
          },
          {
            title: 'Options de personnalisation',
            path: '/options-de-personnalisation/'
          },
          {
            title: 'Utiliser les caractéristiques',
            path: '/utiliser-les-caracteristiques/'
          },
          {
            title: "Partir à l'aventure",
            path: '/partir-a-l-aventure/'
          },
          {
            title: "Combattre",
            path: '/combattre/'
          },
          {
            title: "Gérer la santé du personnage",
            path: '/gerer-la-sante-du-personnage/'
          },
          {
            title: "Lancer des sorts",
            path: '/lancer-des-sorts/'
          },
          {
            title: 'Grimoire',
            path: '/grimoire/'
          },
        ]
      },
      {
        title: 'Pour les meneurs',
        icon: 'mdi-map',
        children: [
          {
            title: "Créatures & oppositions",
            children: [
              {
                title: "Comprendre le profil technique des monstres",
                path: '/comprendre-le-profil-technique-des-monstres/'
              },
              {
                title: "Inventer un monstre ou un PNJ",
                path: '/inventer-un-monstre-ou-un-pnj/'
              },
              {
                title: "Construire une rencontre",
                path: '/construire-une-rencontre/'
              },
            ]
          },
          {
            title: "Bestiaire",
            path: '/bestiaire/'
          },
          {
            title: "Les trésors",
            path: '/les-tresors/'
          },
          {
            title: "Objets magiques",
            path: '/objets-magiques/'
          },
          {
            title: "Objets magiques intelligents",
            path: '/objets-magiques-intelligents/'
          },
          {
            title: "Liste des objets magiques",
            path: '/liste-objets-magiques/'
          },
          {
            title: "Les pièges",
            path: '/pieges/'
          },
          {
            title: "Les maladies",
            path: '/maladies/'
          },
          {
            title: "La folie",
            path: '/folie/'
          },
          {
            title: "Les objets",
            path: '/objets-opposition/'
          },
          {
            title: "Les poisons",
            path: '/poisons/'
          }
        ]
      },
      {type: 'divider'},
      {
        title: "Licence OGL",
        path: '/licence-ogl/',
        icon: 'mdi-clipboard-text'
      }
    ]
  }
}
