const sidebar = require("./sidebar");

module.exports = {
  // 站点配置
  base: "/",
  lang: "zh-CN",
  title: "Fuck house",
  description: "一切都为了更好的解决问题",
  head: [["link", { rel: "shortcut icon", href: "/images/favicon.icon" }]],
  docsDir: "docs",
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    navbar: [
      { text: "🛌", link: "/" },
      { text: "🏠", link: "/house/" },
      { text: "🗒️", link: "/stop/" },
    ],
    sidebar: sidebar,
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
        },
      },
    ],
  ],
};