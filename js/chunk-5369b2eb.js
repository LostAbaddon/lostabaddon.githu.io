(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5369b2eb"],{"005e":function(a,t,n){"use strict";n("14d1")},"14d1":function(a,t,n){},dd86:function(a,t,n){"use strict";n.r(t);var e=n("79c4");const o=Object(e["C"])("data-v-630b115c"),r=o((a,t,n,o,r,i)=>(Object(e["q"])(),Object(e["d"])("div",{class:"container",onClick:t[1]||(t[1]=(...a)=>i.onClick&&i.onClick(...a))})));var i={name:"AboutMe",async mounted(){var a=new BroadcastChannel("change-loading-hint");a.postMessage({name:"加载中……",action:"show"}),await wait();var[t,n,e]=await Promise.all([Granary.getContent("api/aboutme.md"),Granary.getContent("api/todo.md"),Granary.getContent("api/updatelog.md")]);n&&(t=t+"\n\n\n+++\n\n\n"+n),e&&(t=t+"\n\n\n+++\n\n\n"+e);var o=await MarkUp.parse(t,{toc:!1,glossary:!1,resources:!1,showtitle:!1,showauthor:!1,classname:"markup-content"});this.$el.innerHTML=o,await this.afterMarkUp(),a.postMessage({action:"hide"})},methods:{onClick(a){var t=a.target;if(t){var n=t.getAttribute("href");n&&0===n.indexOf("#")&&(n=n.replace(/#+/,"/"),this.$router.push({path:n}),a.preventDefault())}}}};n("005e");i.render=r,i.__scopeId="data-v-630b115c";t["default"]=i}}]);
//# sourceMappingURL=chunk-5369b2eb.js.map