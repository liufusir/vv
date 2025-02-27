import { onMounted } from 'vue'
import DefaultTheme from "vitepress/theme";
import "../custom.less";
export default {
	...DefaultTheme,
	enhanceApp({ app, router, siteData }) {
	},
	setup() {
        
		onMounted(() => {
            //遍历并清除所有<details>元素的class属性,因为details标签不应有class属性
          const detailsElements = document.querySelectorAll('details')
          detailsElements.forEach((element) => {
            element.className = ''
          })
        })
	},


}
