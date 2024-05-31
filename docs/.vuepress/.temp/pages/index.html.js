import comp from "/Users/mazepeng/WebstormProjects/zhuwei-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"/images/logo.png\",\"actions\":[{\"text\":\"GITHUB\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"实时检测\",\"details\":\"在应用运行时，实时发现潜在的安全漏洞，确保您的代码始终处于最佳状态\"},{\"title\":\"深度分析\",\"details\":\"通过细致入微的污点跟踪技术，深入分析每一个数据流，找到最隐蔽的漏洞\"},{\"title\":\"动态检测\",\"details\":\"自动检测运行时的安全漏洞，如SQL注入、跨站脚本攻击（XSS）等\"},{\"title\":\"无缝集成\",\"details\":\"轻松集成到您的开发流程中，与现有工具完美协作，提升团队效率\"},{\"title\":\"自定义规则\",\"details\":\"灵活的规则引擎，让您可以根据具体需求定制安全检测标准。\"},{\"title\":\"详细报告\",\"details\":\"生成详尽的安全报告，帮助您快速了解和解决安全问题\"}],\"footer\":\"MIT Licensed | Copyright © 2024-2024\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
