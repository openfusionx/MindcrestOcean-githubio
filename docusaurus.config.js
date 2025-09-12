/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mindcrest Ocean',
  tagline: '致力于快速实现部署、管理、监控以及自动化运维大数据云原生平台，帮助您快速构建起稳定、高效、可弹性伸缩的大数据云原生平台',
  url: 'https://openfusionx.github.io',
  baseUrl: '/MindcrestOcean-githubio/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/brand.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openfusionx', // Usually your GitHub org/user name.
  projectName: 'MindcrestOcean-githubio', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ["zh-Hans","en"],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },
  themes: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
            label: '最新版本(unreleased)',
            path: 'current',
            },
          },
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mindcrestocean/mindcrestocean/',
        },
        // 移除博客配置
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
              navbar: {
          title: '算海深澜',
          logo: {
            alt: '算海深澜',
            src: 'img/brand.png',
          },
        items: [
          // custom html removed to use theme Navbar/Logo.js override
          {
            type: 'doc',
            docId: '概览',
            position: 'left',
            label: 'Docs',
            activeBasePath: "docs/current"
          },

          {
            type: 'localeDropdown',
            position: 'left',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/mindcrestocean/mindcrestocean/',
                label: 'Help Us Translate',
              },
            ],
          },
        // {
        //   type: 'docsVersionDropdown',
        //   position: 'right',
        //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
        //   dropdownActiveClassDisabled: true,
        // },
          // 移除博客链接
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mindcrestocean/mindcrestocean',
            label: 'GitHub',
            position: 'left',
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
                label: 'Docs',
                to: '/docs/current/概览',
              },
            ],
          },
          {
            title: '社区',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/athenaserving',
              // },
              {
                label: 'Github Discussion',
                href: 'https://github.com/mindcrestocean/mindcrestocean',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: '更多',
            items: [
              // 移除页脚中的博客链接
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/mindcrestocean/mindcrestocean/issues',
              },
            ],
          },
        ],
        copyright: `Copyright  ${new Date().getFullYear()} openfusionx`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
  plugins:[
    'docusaurus-plugin-less',
  ]
};

module.exports = config;
