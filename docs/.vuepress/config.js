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
    repository: 'https://github.com/douaratil/douaratil-drs',
    kofi: 'https://ko-fi.com/douaratil',
    twitter: 'https://twitter.com/douaratil',
    discord: 'https://discord.gg/vRXeVwrNvK',
    primaryColor: '#4D5153', // Hero
    accentColor: '#293E4D', // Dragon
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
            icon: 'mdi-drama-masks',
            path: '/creation-du-personnage/'
          },
          {
            title: 'Les ethnies',
            icon: 'mdi-human-male-female',
            path: '/ethnies/',
          },
          {
            title: "Personnalité & Historique",
            icon: 'mdi-human-greeting',
            path: '/personnalite-et-historique/',
          },
          {
            title: "Les trois voies",
            icon: 'mdi-axis-arrow',
            path: '/voies/',
          },
          {
            title: "Les Archétypes",
            icon: 'mdi-human-queue',
            //path: '/archetypes',
            children: [
          {
              title: "Ambeanamos",
              icon: 'mdi-auto-fix',
              path: '/archetypes/ambeanamos',
            },
          {
              title: "Astartes",
              icon: 'mdi-sword',
              path: '/archetypes/astartes',
            },
          {
              title: "Bhaner",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/bhaner',
            },
          {
              title: "Bhegelm",
              icon: 'mdi-celtic-cross',
              path: '/archetypes/bhegelm',
            },
          {
              title: "Dall Dawnser",
              icon: 'mdi-sword',
              path: '/archetypes/dall-dawnser',
            },
          {
              title: "Drodan",
              icon: 'mdi-celtic-cross',
              path: '/archetypes/drodan',
            },
          {
              title: "Fürtane",
              icon: 'mdi-sword',
              path: '/archetypes/furtane',
            },
          {
              title: "Gwylwir",
              icon: 'mdi-sword',
              path: '/archetypes/gwylwir',
            },
          {
              title: "Herredyr",
              icon: 'mdi-paw',
              path: '/archetypes/herredyr',
            },
          {
              title: "Holtseidar",
              icon: 'mdi-celtic-cross',
              path: '/archetypes/holtseidar',
            },
          {
              title: "Ior",
              icon: 'mdi-sword',
              path: '/archetypes/ior',
            },
          {
              title: "Jargl",
              icon: 'mdi-sword',
              path: '/archetypes/jargl',
            },
          {
              title: "Jörghal",
              icon: 'mdi-sword',
              path: '/archetypes/jorghal',
            },
          {
              title: "Legatos",
              icon: 'mdi-knife-military',
              path: '/archetypes/legatos',
            },
          {
              title: "Llawenos",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/llawenos',
            },
          {
              title: "Magios",
              icon: 'mdi-auto-fix',
              path: '/archetypes/magios',
            },
          {
              title: "Nayane",
              icon: 'mdi-knife-military',
              path: '/archetypes/nayane',
            },
          {
              title: "Seibahkami",
              icon: 'mdi-sword',
              path: '/archetypes/seibahkami',
            },
          {
              title: "Sermazloth",
              icon: 'mdi-sword',
              path: '/archetypes/sermazloth',
            },
          {
              title: "Shangharah",
              icon: 'mdi-celtic-cross',
              path: '/archetypes/Shangharah',
            },
          {
              title: "Skell",
              icon: 'mdi-guitar-acoustic',
              path: '/archetypes/skell',
            },
          {
              title: "Sohoten",
              icon: 'mdi-sword',
              path: '/archetypes/sohoten',
            },
          {
              title: "Sorser",
              icon: 'mdi-auto-fix',
              path: '/archetypes/sorser',
            },
          {
              title: "Vitnar",
              icon: 'mdi-celtic-cross',
              path: '/archetypes/vitnar',
            },

          ]
          },
          {
            title: "Equipement",
            icon: 'mdi-gavel',
            path: '/equipement/',
          },
          {
            title: 'Utiliser les caractéristiques',
            icon: 'mdi-weight-lifter',
            path: '/utiliser-les-caracteristiques/'
          },
          {
            title: "Partir à l'aventure",
            icon: 'mdi-campfire',
            path: '/partir-a-l-aventure/'
          },
          {
            title: "Combattre",
            icon: 'mdi-sword-cross',
            path: '/combattre/'
          },
          {
            title: "Gérer la santé du personnage",
            icon: 'mdi-account-heart',
            path: '/gerer-la-sante-du-personnage/'
          },
          {
            title: "Lancer des sorts",
            icon: 'mdi-atom-variant',
            path: '/lancer-des-sorts/'
          },
          {
            title: 'Grimoire',
            icon: 'mdi-firebase',
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
            icon: 'mdi-snake',
            children: [
              {
                title: "Comprendre le profil technique des monstres",
                icon: 'mdi-ghost',
                path: '/comprendre-le-profil-technique-des-monstres/'
              },
              {
                title: "Inventer un monstre ou un PNJ",
                icon: 'mdi-ghost-outline',
                path: '/inventer-un-monstre-ou-un-pnj/'
              },
              {
                title: "Construire une rencontre",
                icon: 'mdi-halloween',
                path: '/construire-une-rencontre/'
              },
              {
                title: "Bestiaire & rencontres",
                icon: 'mdi-paw',
                path: '/bestiaire/'
              },
            ]
          },
          {
            title: "Trésors & objets magiques",
            icon: 'mdi-gift-open',
            children: [
              {
                title: "Les trésors",
                icon: 'mdi-gift',
                path: '/les-tresors/'
              },
              {
                title: "Objets magiques",
                icon: 'mdi-star-circle',
                path: '/objets-magiques/'
              },
              {
                title: "Liste des objets magiques",
                icon: 'mdi-script-text',
                path: '/liste-objets-magiques/'
              },
            ]
          },
          {
            title: "Pièges & dangers",
            icon: 'mdi-spider',
            children: [
              {
                title: "Les pièges",
                icon: 'mdi-spider-thread',
                path: '/pieges/'
              },
              {
                title: "Les maladies",
                icon: 'mdi-heart-pulse',
                path: '/maladies/'
              },
              {
                title: "Les poisons",
                icon: 'mdi-mushroom',
                path: '/poisons/'
              },
              {
                title: "La folie",
                icon: 'mdi-freebsd',
                path: '/folie/'
              },
            ]
          },
          {
            title: "Domaine, famille & destinée",
            icon: 'mdi-castle',
            children: [
              {
                title: "Gestion de l'honneur",
                icon: 'mdi-crown',
                path: '/passion-honneur-et-interactions-sociales/'
              },
              {
                title: "Gestion de la famille et des biens",
                icon: 'mdi-fireplace',
                path: '/intermedes/'
              },
              {
                title: "Gestion du domaine",
                icon: 'mdi-home-flood',
                path: '/domaine/'
              },
              {
                title: "L'expérience",
                icon: 'mdi-upload',
                path: '/experience/'
              }
            ]
          },
          {
            title: "Les batailles",
            icon: 'mdi-shield',
            path: '/batailles/'
          },
          {
            title: "Le commerce",
            icon: 'mdi-sack',
            path: '/commerce'
          },
          {
            title: "Les objets",
            icon: 'mdi-weight',
            path: '/objets-opposition/'
          },
          {
            title: "Les plantes",
            icon: 'mdi-flower',
            path: '/herbier/'
          }
        ]
      },
      {
        title: 'Le monde de Douaratil',
        icon: 'mdi-earth',
        children: [
          {
            title: "Dieux, Divinités & autres forces",
            icon: 'mdi-shuriken',
            path: '/dieux-divinites'
          },
          {
            title: "Les peuples",
            icon: 'mdi-script',
            children: [
              {
                title: "Les Khernaës",
                icon: 'mdi-dna',
                path: '/peuples/khernaes'
              },
              {
                title: "Les Oynours",
                icon: 'mdi-dna',
                path: '/peuples/oynours'
              }
              ]
              },
            {
            title: "Les chroniques",
            icon: 'mdi-script',
            children: [
              {
                title: "Miz du 720",
                icon: 'mdi-script-text-outline',
                path: '/chroniques/miz-du-720'
              },
              {
                title: "Miz Kerzu 720",
                icon: 'mdi-script-text-outline',
                path: '/chroniques/miz-kerzu-720'
              },
              {
                title: "Miz Genver 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-genver-721'
              },
              {
                title: "Miz Favros 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-favros-721'
              },
              {
                title: "Miz Morz 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-morz-721'
              },
              {
                title: "Miz Ebrel 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-ebrel-721'
              },
              {
                title: "Miz Mae 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-mae-721'
              },
              {
                title: "Miz Even 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-even-721'
              },
              {
                title: "Miz khouéré 721",
                icon: 'mdi-script-text',
                path: '/chroniques/miz-khouere-721'
              }
            ]
          },
          {title: "Atlas",
          icon: 'mdi-wallpaper',
           children: [
              {
                title: "Carte du monde",
                icon: 'mdi-map-search',
                path:'/atlas-du-monde/carte-du-monde'
              },
              {
                title: "Douaratil",
                icon: 'mdi-map-search-outline',
                path:'/atlas-du-monde/douaratil'
              }
            ]
    }
        ]
      },
      {type: 'divider'},
      {
        title: "FAQ",
        path: '/FAQ/',
        icon: 'mdi-head-question'
      },
      {
        title: "Licence OGL",
        path: '/licence-ogl/',
        icon: 'mdi-clipboard-text'
      }
    ]
  }
}
