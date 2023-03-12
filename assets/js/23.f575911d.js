(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{434:function(s,t,a){"use strict";a.r(t);var n=a(31),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[s._v("#")]),s._v(" CSS")]),s._v(" "),a("h2",{attrs:{id:"css-隐藏元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-隐藏元素"}},[s._v("#")]),s._v(" CSS 隐藏元素 🙈")]),s._v(" "),a("h4",{attrs:{id:"_1、设置-display-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、设置-display-none"}},[s._v("#")]),s._v(" 1、设置 "),a("code",[s._v("display: none")])]),s._v(" "),a("ul",[a("li",[s._v("隐藏元素不再占有原来位置，因此会导致页面布局改变，引起重排")]),s._v(" "),a("li",[s._v("子元素无法通过设置 "),a("code",[s._v("display: block")]),s._v(" 实现反隐藏")]),s._v(" "),a("li",[s._v("隐藏元素绑定的事件不会触发")])]),s._v(" "),a("h4",{attrs:{id:"_2、设置-visibility-hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置-visibility-hidden"}},[s._v("#")]),s._v(" 2、设置 "),a("code",[s._v("visibility: hidden")])]),s._v(" "),a("ul",[a("li",[s._v("隐藏元素占有原来位置，实现的是视觉上的隐藏")]),s._v(" "),a("li",[s._v("子元素可通过设置 "),a("code",[s._v("visibility: visible")]),s._v(" 显示自己")]),s._v(" "),a("li",[s._v("隐藏元素绑定的事件不会触发，如点击事件")])]),s._v(" "),a("h4",{attrs:{id:"_3、设置-opacity-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置-opacity-0"}},[s._v("#")]),s._v(" 3、设置 "),a("code",[s._v("opacity: 0")])]),s._v(" "),a("ul",[a("li",[s._v("通过设置透明度为 0 来隐藏元素，因此占有原来位置")]),s._v(" "),a("li",[s._v("子元素无法通过设置 "),a("code",[s._v("opacity: 1")]),s._v(" 显示自己")]),s._v(" "),a("li",[a("code",[s._v("opacity: 0")]),s._v(" 的元素仍然能触发已绑定的事件")])]),s._v(" "),a("h4",{attrs:{id:"_4、利用绝对定位-position-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、利用绝对定位-position-absolute"}},[s._v("#")]),s._v(" 4、利用绝对定位 "),a("code",[s._v("position: absolute")])]),s._v(" "),a("ul",[a("li",[s._v("将 "),a("code",[s._v("top")]),s._v(" 和 "),a("code",[s._v("left")]),s._v(" 设置为足够大的负数，使其离开屏幕，即可实现隐藏效果")]),s._v(" "),a("li",[s._v("只要我跑得够远，你就看不到我 😜")]),s._v(" "),a("li",[s._v("绝对定位的元素是脱标的，不会影响页面布局")])]),s._v(" "),a("h4",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.html.cn/qa/css3/14720.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("css 隐藏元素的几种方法是什么？"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"css-定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-定位"}},[s._v("#")]),s._v(" CSS 定位")]),s._v(" "),a("h3",{attrs:{id:"静态定位-static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态定位-static"}},[s._v("#")]),s._v(" 静态定位 static")]),s._v(" "),a("p",[s._v("默认定位，相当于没有定位。")]),s._v(" "),a("h3",{attrs:{id:"相对定位-relative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对定位-relative"}},[s._v("#")]),s._v(" 相对定位 relative")]),s._v(" "),a("ul",[a("li",[s._v("相对于元素原本的位置进行偏移")]),s._v(" "),a("li",[s._v("元素会浮起来，脱离标准流，但仍然占据原本的位置")])]),s._v(" "),a("h3",{attrs:{id:"绝对定位-absolute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位-absolute"}},[s._v("#")]),s._v(" 绝对定位 absolute")]),s._v(" "),a("ul",[a("li",[s._v("相对于最近的具有定位属性的父元素进行偏移，若没有，则相对于 "),a("code",[s._v("body")]),s._v(" 进行偏移")]),s._v(" "),a("li",[s._v("元素脱离标准流，且不占据原本的位置")]),s._v(" "),a("li",[s._v("通常是“子绝父相”")])]),s._v(" "),a("h3",{attrs:{id:"固定定位-fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定定位-fixed"}},[s._v("#")]),s._v(" 固定定位 fixed")]),s._v(" "),a("ul",[a("li",[s._v("相对于浏览器窗口进行偏移")]),s._v(" "),a("li",[s._v("不会随着浏览器窗口的滚动而滚动")]),s._v(" "),a("li",[s._v("可用于创建固定头部、底部")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("// 创建全屏遮罩\n.mask")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 0.25"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"相关链接-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接-2"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_38055381/article/details/81558288",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS 的几种定位详解"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"css-global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-global"}},[s._v("#")]),s._v(" CSS "),a("code",[s._v(":global")])]),s._v(" "),a("p",[s._v("在 CSS 局部作用域覆盖默认样式。")]),s._v(" "),a("p",[s._v("如覆盖 Ant Design 组件的默认样式。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("// index.module.scss\n\n.father")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" green"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":global")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("// antd 的默认样式被覆盖\n  .ant-form-head")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Form "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.module.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("Hello")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Form")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n      ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("className")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("styles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("father"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Form")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"相关链接-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接-3"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_36209248/article/details/90603474",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS 中的 global"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"css-属性浏览器私有前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-属性浏览器私有前缀"}},[s._v("#")]),s._v(" CSS 属性浏览器私有前缀")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Google Chrome、Safari：-webkit-\nFirefox：-moz-\nIE：-ms-\nOpera：-o-\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("私有前缀是为了兼容老版本的浏览器。")]),s._v(" "),a("p",[s._v("什么是兼容？可以简单理解为一段代码在新的浏览器能正常运行，在老版本的浏览器也能正常运行。")]),s._v(" "),a("p",[s._v("对于一些新的 CSS 属性，老浏览器可能运行异常，通过添加私有前缀，让这个属性只在指定内核的浏览器生效，老浏览器就忽略这个属性。")]),s._v(" "),a("p",[s._v("等到该属性成熟、所有浏览器都支持后，就可以去掉私有前缀。")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("h1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" black"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-text-stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2px red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"相关链接-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接-4"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Dreammin/article/details/104663120",target:"_blank",rel:"noopener noreferrer"}},[s._v("浏览器的私有前缀理解"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/wyx100/article/details/50450728",target:"_blank",rel:"noopener noreferrer"}},[s._v("-moz、-ms、-webkit 浏览器私有前缀详解，作用、出处"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);