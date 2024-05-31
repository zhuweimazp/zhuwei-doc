export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/mazepeng/WebstormProjects/zhuwei-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/mazepeng/WebstormProjects/zhuwei-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
