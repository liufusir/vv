// 导入 defineConfig 函数
import { defineConfig } from "vitepress";
const basePath = "/guide/";
export default defineConfig({
  // 打包时忽略所有死链接检查

  // 网站标题
  title: "Vue.js",
  // 网站语言
  lang: "en-us",
  // 打包时将 meta 标签注入到 index.html 中
  metaChunk: true,
  base:"/vv/",
  // 自定义网站图标
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/dist/logo.svg" }],
  ],
  // 主题配置
  themeConfig: {
    search: {
      // 搜索配置
      provider: "local", // 搜索提供者，local 表示在本地进行搜索
      placeholder: "搜索文档", // 搜索框的占位符文本
      doneLabel: "搜索完成", // 搜索完成后的提示文本
      disableQueryPersistence: true, // 是否禁用查询持久化，即是否在页面刷新后保留搜索结果
    //   detailedView: true, // 是否启用详细视图，即是否显示搜索结果的详细信息
    },
    // 网站标题
    siteTitle: "Vue.js",
    // 网站图标
    logo: "/logo.svg",
    // 可以添加更多 outline 相关的配置项，以下是一些可能的扩展配置示例：
    outlineTitle: "本页",
    // 自定义出现在上一页和下一页链接上方的文本
    
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // 侧边栏配置
    sidebar: {
      // 侧边栏分组
      "/": [false],
      "/guide/": [
        {
          // 分组标题
          text: "开始",
          // 分组内容
          base: "/guide/",
          items: [
            { text: "简介", link: "introduction" },
            { text: "快速上手", link: "quick-start" },
          ],
        },
        {
          // 分组标题
          text: "基础",
          // 分组内容
          base: "/guide/essentials/",
          items: [
            {
              text: "创建一个应用",
              link: "application",
            },
            {
              text: "模板语法",
              link: "template-syntax",
            },
            {
              text: "响应式基础",
              link: "reactivity-fundamentals",
            },
            {
              text: "计算属性",
              link: "computed",
            },
            {
              text: "类与样式邦定",
              link: "class-and-style",
            },
            {
              text: "条件渲染",
              link: "conditional",
            },
            {
              text: "列表渲染",
              link: "list",
            },
            {
              text: "事件处理",
              link: "event-handling",
            },
            {
              text: "表单输入绑定",
              link: "forms",
            },
            {
              text: "生命周期",
              link: "lifecycle",
            },
            {
              text: "侦听器",
              link: "watchers",
            },
            {
              text: "模板引用",
              link: "template-refs",
            },
            {
              text: "组件基础",
              link: "component-basics",
            },
          ],
        },
        {
          text: "深入组件",
          base: "/guide/components/",
          items: [
            {
              text: "注册",
              link: "registration",
            },
            {
              text: "Props",
              link: "props",
            },
            {
              text: "事件",
              link: "events",
            },
            {
              text: "组件 v-model",
              link: "v-model",
            },
            {
              text: "透传 Attributes",
              link: "attrs",
            },
            {
              text: "插槽",
              link: "slots",
            },
            {
              text: "依赖注入",
              link: "provide-inject",
            },
            {
              text: "异步指令",
              link: "async",
            },
          ],
        },
        {
          text: "逻辑复用",
          base: "/guide/reusability/",
          items: [
            {
              text:"组合式函数",
              link:"composables"
            }, {
                text:"自定义指令",
                link:"custom-directives"
            },{
                text:"插件",
                link:"plugins"
            }
          ],
        },{
            text:"内置组件", 
            base:"/guide/built-ins/",
            items:[
                {
                    text:"Transition",
                    link:"transition"
                },{
                    text:"Transition-group",
                    link:"transition-group"
                }
            ]
        }
      ],
    },

    // 顶部导航栏配置
    nav: [
      {
        // 导航栏标题
        text: "文档",
        // 导航栏内容
        items: [
          { text: "深度指南", link: `${basePath}introduction` },
          { text: "快速上手", link: `${basePath}quick-start"` },
        ],
      },
      { text: "API", link: "/api" },
      {
        // 导航栏标题
        text: "生态系统",
        // 导航栏内容
        items: [
          {
            // 子菜单标题
            text: "官方库",
            // 子菜单内容
            items: [
              {
                // 子菜单项目标题
                text: "Vue router",
                // 子菜单项目链接
                link: "https://router.vuejs.org/zh/",
                // 子菜单项目打开方式
                target: "_blank",
              },
              {
                // 子菜单项目标题
                text: "Pinia",
                // 子菜单项目链接
                link: "https://pinia.vuejs.org/zh/",
                // 子菜单项目打开方式
                target: "_blank",
              },
            ],
          },
        ],
      },
    ],
  },
  markdown: {
    gfmAlerts: true,
    ignoreParsingErrors: true,
    languageAlias: {
      template: "vue",
    },

    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    codeCopyButtonTitle: "复制代码",
  },
  // Vite 配置
  vite: {
    build: {},
    // plugins: [pagefindPlugin()],
    // 开发服务器配置
    server: {
      // 开发服务器端口
      port: 3000,
      // 开发服务器监听地址
      host: "0.0.0.0",
      hmr: {
        overlay: false,
      },
    },
  },
});
