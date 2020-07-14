const { resolve } = require('path');
const remarkExternalLinks = require('remark-external-links');


module.exports = {
  title: 'Azure Sales Demo Kit',
  tagline: 'Azure Sales Demo Kit',
  url: 'https://azure.github.io/',
  projectName: 'demokit',
  organizationName: 'azure',
  baseUrl: '/demokit/',
  favicon: 'img/favicon.ico',
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-172450760-1',
    },
    gtag: {
      trackingID: 'UA-172450760-1',
    },
    algolia: {
      apiKey: '2ac9cee50307ec8a361cee9a88ad988d',
      indexName: 'demokit',
      algoliaOptions: {},
    },
    navbar: {
      "title": "Azure Sales Demo Kit",
      logo: {
        alt: 'Azure Sales Demo Kit',
        src: 'img/logo.svg'
      },
      links: [
        {
          to: 'docs/welcome',
          activeBasePath: 'docs',
          label: 'Demo Kit',
          position: 'right'
        },
        {
          href: 'https://github.com/azure/demokit',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'mailto:demokit@microsoft.com',
          label: 'Contact Us',
          position: 'right'
        }
      ]
    },
    footer: {
      links: [
        {
          title: 'Demos',
          items: [
            {
              label: 'Kubernetes DevOps',
              href: 'docs/kubernetes-devops/index'
            },
            {
              label: 'Azure Networking',
              href: 'docs/azure-networking/index'
            },
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Join Us',
              href: 'https://teams.microsoft.com/l/team/19%3a97f9e0c1df4749768074c8d1c3e3bf69%40thread.tacv2/conversations?groupId=59b14dcc-815c-413a-89b0-49a4228b1705&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47'
            },
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/azure/demokit/'
            },
          ]
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Demo Kit Team.`
    }
  },
  plugins: [
  ],  
  scripts: [
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          admonitions: {
            customTypes: {
              shell: {
                keyword: 'shell',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16pt" height="16pt" viewBox="0 0 16 16"><path d="M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"/><path d="M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"/></svg>'
              }
            }
          },
          remarkPlugins: [remarkExternalLinks],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/azure/demokit/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
