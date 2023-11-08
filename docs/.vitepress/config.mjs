import { defineConfig } from "vitepress";

// sitemap.xml 生成配置
const sitemap = {
  hostname: "https://yifujian.cn",
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "易附件",
  titleTemplate: "微信公众号推文附件",
  description: "易附件，为你的公众号添加附件功能",
  appearance: false, // 是否启用暗黑模式
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  sitemap: sitemap,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "易附件 - YiFuJian.cn",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "使用教程", link: "/guide/introduction" },
      { text: "常见问题", link: "/faq/index" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "简介", link: "/guide/introduction" },
            { text: "快速上手", link: "/guide/quick-start" },
            { text: "推文添加附件", link: "/guide/add-file-in-article" },
            { text: "关键词回复", link: "/guide/reply-file-by-keywords" },
            { text: "自定义菜单", link: "/guide/custom-menu-by-fule" },
          ],
        },
        {
          text: "上传附件",
          items: [
            { text: "电脑端上传", link: "/guide/upload-on-pc" },
            { text: "小程序上传", link: "/guide/upload-on-mini" },
          ],
        },
        {
          text: "基础功能",
          items: [
            { text: "直达链接", link: "/guide/func/func-direct-link" },
            // { text: "小程序路径", link: "/guide/func/func-mini-path" },
            { text: "替换文件", link: "/guide/func/func-replace-file" },
            { text: "小程序码", link: "/guide/func/func-mini-code" },
            // { text: "删除附件", link: "/guide/func/func-del-file" },
            // { text: "附件密码", link: "/guide/func/func-file-psw" },
          ],
        },
      ],
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: '教程',
    //     items: [
    //       { text: '上传文件', link: '/upload-file' },
    //     ]
    //   },

    //   {
    //     text: '常见问题',
    //     items: [
    //       { text: 'FAQ', link: '/upload-file' },
    //     ]
    //   }
    // ],

    socialLinks: [],
    // 底部信息
    footer: {
      message: "",
      copyright: "Copyright © 2023 易附件 yifujian.cn",
    },
    // 文档页页脚配置
    docFooter: {
      prev: false, // 不显示下一页、上一页
      next: false,
    },
    // 外链是否显示链接的icon
    externalLinkIcon: true,
    // 本页目录 https://vitepress.dev/reference/default-theme-config#outline
    outline: {
      level: 2,
      label: "本页目录",
    },
  },
});
