(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d4006"],{"5ebb":function(e,c,a){"use strict";a.r(c);var s=a("79c4");const t=Object(s["G"])("data-v-327f8301");Object(s["t"])("data-v-327f8301");const l={class:"viewer ballcrush"},d=Object(s["h"])("div",{class:"container ballcrush"},[Object(s["h"])("div",{class:"controller"},[Object(s["h"])("div",{class:"line"},[Object(s["h"])("div",{class:"info"},[Object(s["g"])("总分： "),Object(s["h"])("span",{class:"total"}),Object(s["g"])("当前： "),Object(s["h"])("span",{class:"current"}),Object(s["g"])("关卡： "),Object(s["h"])("span",{class:"level"})]),Object(s["h"])("div",{class:"info"},[Object(s["g"])("弹数： "),Object(s["h"])("span",{class:"count"}),Object(s["g"])("威力： "),Object(s["h"])("span",{class:"power"})])])]),Object(s["h"])("div",{class:"area"},[Object(s["h"])("canvas"),Object(s["h"])("div",{class:"infoPad",name:"GameEnd"},[Object(s["h"])("div",{class:"title"},[Object(s["g"])("胜败乃兵家常事，"),Object(s["h"])("br"),Object(s["g"])("大侠请重来一次！")])]),Object(s["h"])("div",{class:"infoPad shown",name:"ModeSelector"},[Object(s["h"])("div",{class:"modeList"},[Object(s["h"])("div",{class:"mode",mode:"normal"},"普通模式"),Object(s["h"])("div",{class:"mode",mode:"hell"},"地狱模式"),Object(s["h"])("div",{class:"mode",mode:"normalZen"},"普通禅修"),Object(s["h"])("div",{class:"mode",mode:"hellZen"},"地狱禅修"),Object(s["h"])("div",{class:"mode",mode:"back"},"返回")])])])],-1);Object(s["r"])();const b=t((e,c,a,t,b,n)=>(Object(s["q"])(),Object(s["d"])("div",l,[d])));var n=!0;PageBroadcast.on("change-loading-hint",e=>{BallCrush.onLeave()});var o={name:"BallCrush",async mounted(){n&&(await Promise.all([loadJS("/js/ballcrush.js"),loadCSS("/css/ballcrush.css")]),n=!1),BallCrush.init(),await wait(),callPageLoaded()}};o.render=b,o.__scopeId="data-v-327f8301";c["default"]=o}}]);
//# sourceMappingURL=chunk-2d0d4006.js.map