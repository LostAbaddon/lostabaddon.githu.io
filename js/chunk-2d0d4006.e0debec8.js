(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d4006"],{"5ebb":function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},l=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"viewer ballcrush"},[t("div",{staticClass:"container ballcrush"},[t("div",{staticClass:"controller"},[t("div",{staticClass:"line"},[t("div",{staticClass:"info"},[s._v("总分： "),t("span",{staticClass:"total"}),s._v("当前： "),t("span",{staticClass:"current"}),s._v("关卡： "),t("span",{staticClass:"level"})]),t("div",{staticClass:"info"},[s._v("弹数： "),t("span",{staticClass:"count"}),s._v("威力： "),t("span",{staticClass:"power"})])])]),t("div",{staticClass:"area"},[t("canvas"),t("div",{staticClass:"infoPad",attrs:{name:"GameEnd"}},[t("div",{staticClass:"title"},[s._v("胜败乃兵家常事，"),t("br"),s._v("大侠请重来一次！")])]),t("div",{staticClass:"infoPad shown",attrs:{name:"ModeSelector"}},[t("div",{staticClass:"modeList"},[t("div",{staticClass:"mode",attrs:{mode:"normal"}},[s._v("普通模式")]),t("div",{staticClass:"mode",attrs:{mode:"hell"}},[s._v("地狱模式")]),t("div",{staticClass:"mode",attrs:{mode:"normalZen"}},[s._v("普通禅修")]),t("div",{staticClass:"mode",attrs:{mode:"hellZen"}},[s._v("地狱禅修")]),t("div",{staticClass:"mode",attrs:{mode:"back"}},[s._v("返回")])])])])])])}],i=!0;const n=new BroadcastChannel("change-loading-hint");n.addEventListener("message",s=>{BallCrush.onLeave()});var c={name:"BallCrush",async mounted(){i&&(await Promise.all([loadJS("/js/ballcrush.js"),loadCSS("/css/ballcrush.css")]),i=!0),BallCrush.init(),await wait(),callPageLoaded()}},d=c,o=t("e032"),r=Object(o["a"])(d,e,l,!1,null,"2e463a7f",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d4006.e0debec8.js.map