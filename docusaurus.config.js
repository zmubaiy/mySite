
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '文档中心',
  tagline: '开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5 等应用。',
  favicon: 'img/website/logo1.svg',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',//前置路径
  organizationName: 'zmubaiy', // Usually your GitHub org/user name.
  projectName: 'mySite', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',// 默认使用的语言
    locales: ['en', 'zh'],// 使用哪些语言
    localeConfigs: { // 语言配置
      en: {
        htmlLang: "en-GB",
      },
      zh: {
        htmlLang: "zh-Hans",
        direction: "ltr",
      },
    },
  },

  
  stylesheets: [
    {
      href: './src/css/search.css',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options for the search plugin
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: './sidebars.js',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      //导航条
      navbar: {
        // title: '首页',
        hideOnScroll: true,//页面向下滚动时收起顶部导航
        logo: {
          alt: 'mySite-Logo',
          src: 'img/website/home.svg',
        },
        //导航条显示的产品文档，如果想增加额外的页面，可在此处
        items: [
          {
            to: '/docs/knowledge',
            position: 'left',
            label: '知识库',
          },
          {
            to: '/docs/introduction',
            position: 'left',
            label: '功能介绍',
          },
          {
            to: '/blog', //点击后跳转的链接，站内跳转用to，站外用href
            label: '功能优化', 
            position: 'left'
          },
          {
            to: '/docs/tools', 
            label: '工具推荐', 
            position: 'left'
          },
          {
            to: '/docs/about', 
            label: '关于本站', 
            position: 'left'
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '知识库',
                to: '/docs/knowledge',
              },
              {
                label: '功能介绍',
                to: '/docs/introduction',
              },
              {
                label: '功能优化',
                to: '/blog',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                html: `
                  <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                    <img src="/img/docusaurus-social-card.jpg" alt="build with docusaurus" width="120" height="50"/>
                  <a/>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
