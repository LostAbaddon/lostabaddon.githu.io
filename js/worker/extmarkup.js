MarkUp.addExtension({name:"CC&Like",parse:(a,s,p)=>{var r=a.match(/^ *copyright: *(.*?) *$/i);return r?(s.metas.others=s.metas.others||{},s.metas.others.CopyRight=r[1],["",!0]):(r=a.match(/^ *likecoin: *(.*?) *$/i),r?(s.metas.others=s.metas.others||{},s.metas.others.LikeCoin=r[1],["",!0]):[a,!1])}},0,-1),MarkUp.addExtension({name:"ASCII-Chars",parse:(a,s,p)=>{var r=!1;if(!s.mainParser)return[a,r];var n=0,h=[];return a.replace(/(<.*?>|%.*?%|\[.*?\]|\{.*?\})/gi,(e,u,t)=>{t>n&&h.push([!1,a.substring(n,t)]),h.push([!0,e]),n=t+e.length}),n<a.length&&h.push([!1,a.substring(n,a.length)]),a=[],h.forEach(e=>{if(!e[0]){var u=e[1].replace(/[\w \-\+\.,:;\?!\*`@#$%^&\(\)\[\]\{\}=_'"\\\/<>\|]+/g,t=>t.match(/[a-zA-Z]/)?'</span><span class="english">'+t.trim()+'</span><span class="normal">':t);u='<span class="normal">'+u+"</span>",e[1]=u.replace(/<span class="normal"> *<\/span>/g,"")}}),h.forEach(e=>{a.push(e[1])}),a=a.join(""),[a,r]}},0,999);
