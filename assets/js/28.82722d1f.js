(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{411:function(t,s,a){"use strict";a.r(s);var r=a(11),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"trojan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trojan"}},[t._v("#")]),t._v(" Trojan")]),t._v(" "),a("ul",[a("li",[t._v("名称："),a("code",[t._v("trojan")])]),t._v(" "),a("li",[t._v("类型：入站 / 出站")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://trojan-gfw.github.io/trojan/protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trojan"),a("OutboundLink")],1),t._v(" 协议设计指南")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Trojan 被设计工作在正确配置的加密 TLS 隧道中")])]),t._v(" "),a("p",[t._v("Trojan 的配置分为两部分，"),a("code",[t._v("InboundConfigurationObject")]),t._v(" 和 "),a("code",[t._v("OutboundConfigurationObject")]),t._v("，分别对应入站和出站协议配置中的 "),a("code",[t._v("settings")]),t._v(" 项。")]),t._v(" "),a("h2",{attrs:{id:"inboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inboundconfigurationobject"}},[t._v("#")]),t._v(" InboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fallbacks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("clients")]),t._v(": [ "),a("a",{attrs:{href:"#clientobject"}},[t._v("ClientObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，其中每一项是一个 "),a("a",{attrs:{href:"#clientobject"}},[t._v("ClientObject")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("fallbacks")]),t._v(": [ "),a("a",{attrs:{href:"#fallbackobject"}},[t._v("FallbackObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，包含一系列强大的回落分流配置（可选）。")]),t._v(" "),a("h3",{attrs:{id:"clientobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientobject"}},[t._v("#")]),t._v(" ClientObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("password")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填，任意字符串。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("邮件地址，可选，用于标识用户")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级，默认值为 "),a("code",[t._v("0")]),t._v("。详见 "),a("RouterLink",{attrs:{to:"/config/policy.html"}},[t._v("本地策略")]),t._v("。")],1),t._v(" "),a("h3",{attrs:{id:"fallbackobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fallbackobject"}},[t._v("#")]),t._v(" FallbackObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alpn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"xver"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("v4.31.0+，V2Ray 的 Trojan 有完整的 VLESS fallbacks 支持，配置方式完全一致，后续 VLESS fallbacks 升级时会同步跟进。")]),t._v(" "),a("p",[t._v("触发回落的条件也基本相同：首包长度 < 58 或第 57 个字节不为 '\\r'（因为 Trojan 没有协议版本）或身份认证失败。")]),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("servers")]),t._v(": [ "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v(" ]")])]),t._v(" "),a("p",[t._v("一个数组，其中每一项是一个 "),a("a",{attrs:{href:"#serverobject"}},[t._v("ServerObject")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"serverobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverobject"}},[t._v("#")]),t._v(" ServerObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love@v2fly.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("address")]),t._v(": address")])]),t._v(" "),a("p",[t._v("服务器地址，支持 IPv4、IPv6 和域名。必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("port")]),t._v(": number")])]),t._v(" "),a("p",[t._v("服务器端口，必填。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("password")]),t._v(": string")])]),t._v(" "),a("p",[t._v("必填，任意字符串。")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("email")]),t._v(": string")])]),t._v(" "),a("p",[t._v("邮件地址，可选，用于标识用户")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("level")]),t._v(": number")])]),t._v(" "),a("p",[t._v("用户等级")])])}),[],!1,null,null,null);s.default=e.exports}}]);