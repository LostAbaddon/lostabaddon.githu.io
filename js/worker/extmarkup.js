MarkUp.addExtension({name:"CC&Like",parse:(s,e,a)=>{var t=s.match(/^[ 　\t]*COPYRIGHT:[ 　\t]*(.*?)[ 　\t]*$/);return t?(e.metas.others=e.metas.others||{},e.metas.others.CopyRight=t[1],["",!0]):(t=s.match(/^[ 　\t]*LIKECOIN:[ 　\t]*(.*?)[ 　\t]*$/),t?(e.metas.others=e.metas.others||{},e.metas.others.LikeCoin=t[1],["",!0]):[s,!1])}},0,-1),MarkUp.addExtension({name:"Cite&Repost",parse:(s,e,a)=>{var t=!1;s=s.replace(/<\[(\d+)\]>/g,(h,m)=>{var p="CITE-"+MarkUp.generateRandomKey();return a[p]='<a href="#CITE-'+m+'">['+m+"]</a>",t=!0,"%"+p+"%"});var r=s.match(/^[ 　\t]*CITE-(\d+):[ 　\t]*(.*?)[ 　\t]*$/);if(r){e.metas.others=e.metas.others||{},e.metas.others.Cites=e.metas.others.Cites||[];var n=r[1]*1;if(!isNaN(n))return e.metas.others.Cites[n]=r[2],["",!0]}return r=s.match(/^[ 　\t]*REPOST:[ 　\t]*(.*?)[ 　\t]*$/),r?(e.metas.others=e.metas.others||{},e.metas.others.Reposts=e.metas.others.Reposts||[],e.metas.others.Reposts.push(r[1]),["",!0]):[s,t]}},0,-1),MarkUp.addExtension({name:"Cite&Repost",parse:(s,e)=>{var a=[],t=!1,r=!1;return e.metas.others&&(!!e.metas.others.Cites&&e.metas.others.Cites.length>0&&(t=!0,a.push('<section class="cite-list"><h1><a name="CITE-LIST">\u5F15\u7528\u6587\u732E</a></h1>'),e.metas.others.Cites.forEach((n,h)=>{!n||a.push('<p><a class="cite-marker" name="CITE-'+h+'">['+h+"]</a>: "+MarkUp.parseLine(n,e)+"</p>")}),a.push("</section>")),!!e.metas.others.Reposts&&e.metas.others.Reposts.length>0&&(r=!0,a.push('<section class="repost-list"><h1><a name="REPOST-LIST">\u8F6C\u8F7D\u5E73\u53F0</a></h1><ul>'),e.metas.others.Reposts.forEach(n=>{a.push('<li><a href="'+n+'" target="_blank">'+n+"</a></li>")}),a.push("</ul></section>"))),s=s.replace(/<\/article>[ 　\t\n\r]*$/,a.join("")+"</article>"),a.length>0&&(a=[],t&&a.push('<p class="content-item level-1"><span class="content-indent"></span><a class="content-link" href="#CITE-LIST">\u5F15\u7528\u6587\u732E</a></p>'),r&&a.push('<p class="content-item level-1"><span class="content-indent"></span><a class="content-link" href="#REPOST-LIST">\u8F6C\u8F7D\u5E73\u53F0</a></p>'),s=s.replace(/(<aside class="content-table">)([\w\W]*?)(<\/aside>)/g,(n,h,m,p)=>h+m+a.join("")+p)),s}},2,-1),MarkUp.addExtension({name:"ASCII-Chars",parse:(s,e,a)=>{var t=!1;if(!e.mainParser)return[s,t];var r=0,n=[];return s.replace(/(<.*?>|%.*?%|\[.*?\]|\{.*?\})/gi,(h,m,p)=>{p>r&&n.push([!1,s.substring(r,p)]),n.push([!0,h]),r=p+h.length}),r<s.length&&n.push([!1,s.substring(r,s.length)]),s=[],n.forEach(h=>{if(!h[0]){var m=h[1].replace(/[\w \-\+\.,:;\?!\*`@#$%^&\(\)\[\]\{\}=_'"\\\/<>\|]+/g,p=>p.match(/[a-zA-Z0-9]/)?'</span><span class="english">'+p.trim()+'</span><span class="normal">':p);m='<span class="normal">'+m+"</span>",h[1]=m.replace(/<span class="normal"> *<\/span>/g,"")}}),n.forEach(h=>{s.push(h[1])}),s=s.join(""),[s,t]}},0,999),MarkUp.addExtension({name:"LineNumber",parse:(s,e)=>(s=s.replace(/\%LINENUMBER\-(\d+)\%/gi,(a,t)=>'<span class="linenumbermarker" linenumber="'+t+'"></span>'),s=s.replace(/\%<span class="english">LINENUMBER\-(\d+)<\/span>\%/gi,(a,t)=>'<span class="linenumbermarker" linenumber="'+t+'"></span>'),s)},2,1);
