(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224ac2"],{e0ab:function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement;a._self._c;return a._m(0)},l=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"viewer ballcrush"},[t("div",{staticClass:"container ballcrush"},[t("div",{staticClass:"controller"},[t("div",{staticClass:"line"},[t("div",{staticClass:"info"},[a._v("总分： "),t("span",{staticClass:"total"}),a._v("当前： "),t("span",{staticClass:"current"}),a._v("关卡： "),t("span",{staticClass:"level"})]),t("div",{staticClass:"info"},[a._v("弹数： "),t("span",{staticClass:"count"}),a._v("威力： "),t("span",{staticClass:"power"})])])]),t("div",{staticClass:"area"},[t("canvas"),t("div",{staticClass:"infoPad",attrs:{name:"GameEnd"}},[t("div",{staticClass:"title"},[a._v("胜败乃兵家常事，"),t("br"),a._v("大侠请重来一次！")])]),t("div",{staticClass:"infoPad shown",attrs:{name:"ModeSelector"}},[t("div",{staticClass:"modeList"},[t("div",{staticClass:"mode",attrs:{mode:"normal"}},[a._v("普通模式")]),t("div",{staticClass:"mode",attrs:{mode:"hell"}},[a._v("地狱模式")]),t("div",{staticClass:"mode",attrs:{mode:"normalZen"}},[a._v("普通禅修")]),t("div",{staticClass:"mode",attrs:{mode:"hellZen"}},[a._v("地狱禅修")]),t("div",{staticClass:"mode",attrs:{mode:"back"}},[a._v("返回")])])])])])])}],i=!0;const n=new BroadcastChannel("change-loading-hint");n.addEventListener("message",a=>{BallCrush.onLeave()});var c={name:"BunceBall",async mounted(){i&&(await Promise.all([loadJS("/js/ballcrush.js"),loadCSS("/css/ballcrush.css")]),i=!0),BallCrush.init(),await wait(),callPageLoaded()}},d=c,o=t("e032"),r=Object(o["a"])(d,e,l,!1,null,"5b76e182",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d224ac2.6ecdc55d.js.map