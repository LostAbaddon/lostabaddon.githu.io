(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbe04"],{"4c10":function(e,a,t){"use strict";t.r(a);var n=t("79c4");const r={class:"viewer"};function c(e,a,t,c,i,o){const s=Object(n["x"])("Crumb");return Object(n["q"])(),Object(n["d"])("div",r,[Object(n["h"])(s,{target:"library"}),Object(n["h"])("div",{class:"container",onClick:a[1]||(a[1]=(...e)=>o.onClick&&o.onClick(...e))})])}var i={name:"latex",async mounted(){var e=new BroadcastChannel("change-loading-hint");e.postMessage({name:"加载中……",action:"show"}),await wait();var a=await Granary.getContent("api/latex.md"),t=await MarkUp.parse(a,{toc:!0,glossary:!1,resources:!1,showtitle:!0,showauthor:!1,classname:"markup-content"});this.$el.querySelector(".container").innerHTML=t,await this.afterMarkUp(),e.postMessage({action:"hide"})},methods:{onClick(e){onVueHyperLinkTriggered(this,e)}}};i.render=c;a["default"]=i}}]);
//# sourceMappingURL=chunk-2d0cbe04.js.map