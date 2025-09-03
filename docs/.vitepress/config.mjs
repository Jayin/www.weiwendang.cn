import { defineConfig } from "vitepress";

// head 标签配置
const head = (() => {
  let heads = [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // head: keywords
    // [
    //   "meta",
    //   {
    //     name: "keywords",
    //     content: "易附件,微附件,文章附件,云附件",
    //   },
    // ],
  ];
  // 百度统计
  if (process.env.NODE_ENV === "production") {
    heads.push([
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?88de51383b7075ace7e7c58d775f2218";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ]);
  }
  return heads
})();
// sitemap.xml 生成配置
const sitemap = {
  hostname: "https://www.weiwendang.cn",
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "安全易用的公众号微文档",
  titleTemplate: "微文档",
  description:
    "微文档，支持微信公众号文章插入文档，浏览文档内容。",
  appearance: false, // 是否启用暗黑模式
  head: head,
  sitemap: sitemap,
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "微文档",
    // https://vitepress.dev/reference/default-theme-config
    // 自定义数据字典（以下划线开头表示私有数据）,使用 useData()调用
    customData: {
      // 附件上传入口
      upload_url: "https://app.weiwendang.cn",
    },
    // 自定义数据字典 END
    nav: [
      { text: "首页", link: "/" },
      { text: "使用教程", link: "/guide/quick-start" },
      { text: "常见问题", link: "/faq/index" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            // { text: "简介", link: "/guide/introduction" },
            { text: "快速上手", link: "/guide/quick-start" },
            { text: "文章添加文档", link: "/guide/embed-documents" },
            { text: "关键词回复", link: "/guide/auto-reply-by-keyword" },
            { text: "菜单回复文档", link: "/guide/menu-integration" },
          ],
        },
        // {
        //   text: "上传附件",
        //   items: [
        //     { text: "电脑端上传", link: "/guide/upload-on-pc" },
        //     // { text: "小程序上传", link: "/guide/upload-on-mini" },
        //   ],
        // },
        {
          text: "基础功能",
          items: [
            { text: "直达链接", link: "/guide/features/direct-link" },
            // { text: "小程序路径", link: "/guide/func/func-mini-path" },
            { text: "替换文件", link: "/guide/features/replace-file" },
            { text: "小程序码", link: "/guide/features/mini-code" },
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
      copyright:
        "Copyright © 微文档 <a rel='nofollow' target='_blank' href='https://beian.miit.gov.cn/'>粤ICP备2023131138号</a>",
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
      label: "目录",
    },
  },
});
