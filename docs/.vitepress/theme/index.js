import DefaultTheme from "vitepress/theme";
import "../custom.less";
export default {
	...DefaultTheme,
	enhanceApp({ app, router, siteData }) {
	},
	setup() {
		// 可以在这里进行一些初始化操作
		console.log("主题设置");
		
	},
};
