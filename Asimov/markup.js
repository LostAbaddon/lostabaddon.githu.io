(()=>{const W=Symbol("HIDDEN"),R=["GOD","THEONE","TITLE","AUTHOR","EMAIL","DESCRIPTION","STYLE","SCRIPT","DATE","KEYWORD","GLOSSARY","TOC","REF","LINK","IMAGES","VIDEOS","AUDIOS","ARCHOR","SHOWTITLE","SHOWAUTHOR","RESOURCES"],G=["toc","glossary","resources","images","videos","audios"],z=["article","section","div","p","header","footer","aside","ul","ol","li","blockquote","pre","figure","figcaption"],j={"\\":"slash","/":"antislash",_:"underline","*":"star","+":"plus","-":"minus","=":"equal","`":"dash","~":"wavy","!":"bang","?":"question",":":"colon","@":"at-circle","#":"sharp","^":"angle",$:"dollar","%":"percent","(":"left-bracket",")":"right-bracket","[":"left-square-bracket","]":"right-square-bracket","{":"left-curve-bracket","}":"right-curve-bracket","|":"vertical-line"},S={};Object.keys(j).forEach(s=>S[j[s].toLowerCase()]=s),S.$="&#36;",R.forEach((s,a)=>R[a]=s.toLowerCase());const _={},O={},I={},b={},y=(s=8)=>{var a="";for(let t=0;t<s;t++)a+=Math.floor(Math.random()*10)+"";return a};_.addExtension=(s,a=0,t=5)=>{if(a===0){let i=O._indexes_;i||(i=[],O._indexes_=i),i.includes(t)||(i.push(t),i.sort((n,r)=>n-r)),i=O[t],i||(i=[],O[t]=i),i.push(s)}else if(a===1){let i=I._indexes_;i||(i=[],I._indexes_=i),i.includes(t)||(i.push(t),i.sort((n,r)=>n-r)),i=I[t],i||(i=[],I[t]=i),i.push(s)}else if(a===2){let i=b._indexes_;i||(i=[],b._indexes_=i),i.includes(t)||(i.push(t),i.sort((n,r)=>n-r)),i=b[t],i||(i=[],b[t]=i),i.push(s)}};const K=s=>(s=`
`+s+`
`,s=s.replace(/(\r\n|\n\r)/g,`
`).replace(/\n([ 　]+)/g,(a,t)=>{var i=t.replace(/　/g,"  ").length;return i<4?`
`:a}),s=s.replace(/(\n[ 　\t>\-\+\*~(\d+\.)]+)(`{3,}|~{3,}|\${2})/g,(a,t,i)=>t+`
`+i),R.forEach(a=>{var t=new RegExp("([\\w\\W]? *)\\["+a+"\\]( *[\\w\\W]?)","gi");s=s.replace(t,(i,n,r)=>n==="]"||r==="["||r==="("?i:n+"%"+a+"%"+r)}),s),q=s=>(s=s.replace(/^\n+|\n+$/gi,""),s=s.replace(/\n{3,}/gi,`


`),s),L=(s,a,t=-Infinity,i)=>{var n=O._indexes_;if(!n)return"";var r=!i;return i=i||{},n.some(e=>{if(t>e||e>=0)return!0;for(var f=O[e],h=!0;h;)h=!1,f.forEach(p=>{var l;[s,l]=p.parse(s,a,i),l&&(h=!0)})}),s=se(s),n.forEach(e=>{if(!(t>e)&&!(e<0))for(var f=O[e],h=!0;h;)h=!1,f.forEach(p=>{var l;[s,l]=p.parse(s,a,i),l&&(h=!0)})}),r&&(s=A(s,i)),s},x=(s,a,t=0,i)=>{a.parseLevel++;var n=[],r=!1;i||(r=!0,i={});var e=[];n=s.split(`
`),n.forEach((p,l)=>{var u=p.match(/^[ 　\t]*$/);if(p.length===0){e.push([l,1,0,0,0,0,0,0]);return}if(p.match(/^[=\-\+\*~\._#]{3,}$/)){p.match(/^\-+$|^=+$/)?e.push([l,0,2,0,0,0,0,0]):p.match(/^~+$/)?e.push([l,0,2,0,0,1,0,0]):e.push([l,0,1,0,0,0,0,0]);return}if(u=p.match(/^(`{3,}|~{3,})[ 　\t]*([\w\-\.\+=\?\~\\\/]*)$/),u){u[2]?e.push([l,0,0,0,0,2,0,0]):e.push([l,0,0,0,0,1,0,0]);return}if(u=p.match(/^\${2}[ 　\t]*$/),u){u[2]?e.push([l,0,0,0,0,0,0,1]):e.push([l,0,0,0,0,0,0,1]);return}if(u=p.match(/^([\-\+\*~]|\d+\.)[ 　\t]+/),u){if(u=p.match(/^([\-\+\*~]|\d+\.)[ 　\t]+(`{3,}|~{3,})[ 　\t]*([\w\-\.\+=\?\~\\\/]*)$/),u){u[2]?e.push([l,0,0,0,1,2,0,0]):e.push([l,0,0,0,1,1,0,0]);return}if(u=p.match(/^([\-\+\*~]|\d+\.)[ 　\t]+(\${2})[ 　\t]*$/),u){u[2]?e.push([l,0,0,0,1,0,0,1]):e.push([l,0,0,0,1,0,0,1]);return}e.push([l,0,0,0,1,0,0,0]);return}if(u=p.match(/^(> *)+/),u){if(u=p.match(/^(> *)+[ 　\t]+(`{3,}|~{3,})[ 　\t]*([\w\-\.\+=\?\~\\\/]*)$/),u){u[2]?e.push([l,0,0,1,0,2,0,0]):e.push([l,0,0,1,0,1,0,0]);return}if(u=p.match(/^(> *)+[ 　\t]+(\${2})[ 　\t]*$/),u){u[2]?e.push([l,0,0,1,0,0,0,1]):e.push([l,0,0,1,0,0,0,1]);return}e.push([l,0,0,1,0,0,0,0]);return}if(u=p.match(/^([ 　\t]+)/),u){if(u=p.match(/(`{3,}|~{3,})[ 　\t]*([\w\-\.\+=\?\~\\\/]*)$/),u){u[1]?e.push([l,0,0,1,1,2,0,0]):e.push([l,0,0,1,1,1,0,0]);return}if(u=p.match(/(\${2})[ 　\t]*([\w\-\.\+=\?\~\\\/]*)$/),u){u[1]?e.push([l,0,0,1,1,0,0,1]):e.push([l,0,0,1,1,0,0,1]);return}e.push([l,0,0,1,1,0,0,0]);return}if(u=p.match(/\|/g),u){let c=p.match(/\\\|/g);if(!c||!!c&&c.length!==u.length){let m=!0;for(c=p;m;){m=!1;let o=c.replace(/\([^\(\)\[\]\{\}]+?\)/g,"");o=o.replace(/\[[^\(\)\[\]\{\}]+?\]/g,""),o=o.replace(/\{[^\(\)\[\]\{\}]+?\}/g,""),m=o!==c,c=o}if(c.indexOf("|")>=0){e.push([l,0,0,0,0,0,1,0]);return}}}});var f={};e.forEach(p=>{f[p[0]]=p});var h=!1;if(e.length>0){if(h=Y(e,f,n,a,i)||h,e.length>0&&(h=B(e,f,n,a,i)||h),e.length>0&&(h=F(e,f,n,a,i)||h),r&&t===0&&!!a.metas.linenumber){let p=0;n.forEach((l,u)=>{if(!!l&&!l.match(/^%[\w\-]+%$/)){var c=f[u];if(!(!!c&&(c[1]>0||c[2]>0))&&!l.match(/^[ 　\t>\+\-\*`\^\|_~=\{\}<]$/)&&!l.match(/^[!@#]\[[^\(\)\[\]\{\}]*?(\[.*?\][ 　\t]*\(.*?\))*?[^\(\)\[\]\{\}]*?\](\([^\(\)\[\]\{\}]*?\))$/)&&!l.match(/^[!@#]\[[^\(\)\[\]\{\}]*?(\[.*?\][ 　\t]*\(.*?\))*?[^\(\)\[\]\{\}]*?\](\[[^\(\)\[\]\{\}]*?\])$/)){var m=l.match(/\{[<\|>]\}$/);m?(m=m[0],l=l.substr(0,l.length-m.length)+'<span name="line-'+p+'"></span>'+m):l=l+'<span name="line-'+p+'"></span>',p++,n[u]=l}}}),a.metas.totalLineCount=p}[n,f]=T(e,f,n),e.length>0&&(h=Q(e,f,n,a,i)||h,[n,f]=T(e,f,n)),e.length>0&&(h=V(e,f,n,a,i)||h,[n,f]=T(e,f,n))}return h=M(e,f,n,a,i)||h,[n,f]=T(e,f,n),h=X(e,f,n,a,i)||h,n=n.map(p=>{if(p===null||p===void 0||p.length===0)return"";var l="";if(r)p.match(/^%([\w\W]+)%(\{[\w \-\.\u0800-\uffff]+\})*$/)?l=A(p,i,!1):(l=P(p,a),l=A(l,i,!1));else{l=P(p,a);let u="param-"+y();i[u]=l,l="%"+u+"%"}return l}),a.parseLevel--,a.parseLevel>0&&(n=n.join("")),n},T=(s,a,t)=>(t=t.map((i,n)=>[n,i]),t=t.filter(i=>!(!i[1]&&i[1]!=="")),t.forEach((i,n)=>{var r=i[0],e=a[r];!e||(e[0]=n)}),a={},s.forEach(i=>{a[i[0]]=i}),t=t.map(i=>i[1]),[t,a]),P=(s,a)=>{var t="<p",i="</p>",n=[],r=s.replace(/^[ 　\t]*(<\w+.*?>)?[ 　\t]*/,""),e=r.match(/^\{[<\|>]\}/);e&&(e=e[0],e==="{<}"?n.push("align-left"):e==="{|}"?n.push("align-center"):e==="{>}"&&n.push("align-right"),s=s.replace(/^[ 　\t]*(<\w+.*?>)?[ 　\t]*\{[<\|>]\}[ 　\t]*/,(h,p)=>p||"")),r=s.replace(/[ 　\t]*(<\/\w+.*?>)?[ 　\t]*$/,""),e=r.match(/\{[<\|>]\}$/),e&&(e=e[0],e==="{<}"?n.push("align-left"):e==="{|}"?n.push("align-center"):e==="{>}"&&n.push("align-right"),s=s.replace(/[ 　\t]*\{[<\|>]\}[ 　\t]*(<\/\w+.*?>)?[ 　\t]*$/,(h,p)=>p||"")),r=s.replace(/^[ 　\t]*(<\w+.*?>)?[ 　\t]*/,"");var f=r.match(/^:+/);return!!f&&!r.match(/^:([\w\-\.]+?):/)&&(f=f[0],n.push("indent","indent-"+f.length),s=s.replace(/^[ 　\t]*(<\w+.*?>)?[ 　\t]*:+/,(h,p)=>p||"")),n.length>0&&(t=t+' class="'+n.join(" ")+'"'),t=t+">",s.length===0?"":t+s+i},Y=(s,a,t,i,n)=>{var r=[];if(s.forEach(l=>{!l[7]||r.push(l)}),r.length===0)return!1;if(r.length===1)return r[0][7]=0,!1;var e=r.length,f=r[0];f[7]=2;for(let l=1;l<e;l++){let u=r[l];f[7]===2?(u[3]=f[3],u[4]=f[4],u[7]=3):f[7]===3&&(u[7]=2),f=u}r[r.length-1][7]===2&&(r[r.length-1][7]=0),r.forEach(l=>{l[7]===1&&(l[7]=0)});var h=[];r=r.filter(l=>l[7]<2?!1:(l[7]===2&&h.push(l[0]),!0)),e=r.length;for(let l=e-1;l>0;l-=2){let u=r[l-1][0];h.includes(u)||r.splice(l-1,2)}var p=[];e=r.length;for(let l=0;l<e;l+=2)p.push([r[l][0],r[l+1][0]]);return p.forEach(l=>{var u=['<p class="latex block">$$'];for(let m=l[0]+1;m<l[1];m++)u.push(t[m]);u.push("$$</p>"),u=u.join("<br>");var c="latex-"+y();i.finals[c]=u,t[l[0]]="%"+c+"%";for(let m=l[0]+1;m<=l[1];m++)t[m]=null;for(let m=l[0];m<=l[1];m++){let o=a[m];if(!o)continue;let v=s.indexOf(o);v>=0&&s.splice(v,1),delete a[m],o[0]=-1}}),p.length>0},B=(s,a,t,i,n)=>{var r=[];if(s.forEach(l=>{!l[5]||r.push(l)}),r.length===0)return!1;if(r.length===1)return r[0][5]=0,!1;var e=r.length,f=r[0];f[5]=2;for(let l=1;l<e;l++){let u=r[l];if(u[5]===2&&(l===e-1&&(u[5]=0),f[5]!==3)){f[5]=0;continue}f[5]===2?(u[3]=f[3],u[4]=f[4],u[5]=3):f[5]===3&&(u[5]=2),f=u}r[r.length-1][5]===2&&(r[r.length-1][5]=0),r.forEach(l=>{l[5]===1&&(l[5]=0)});var h=[];r=r.filter(l=>l[5]<2?!1:(l[5]===2&&h.push(l[0]),!0)),e=r.length;for(let l=e-1;l>0;l-=2){let u=r[l-1][0];h.includes(u)||r.splice(l-1,2)}var p=[];e=r.length;for(let l=0;l<e;l+=2)p.push([r[l][0],r[l+1][0]]);return p.forEach(l=>{var u=t[l[0]],c=u.match(/(`{3,}|~{3,})[ 　\t]*/)[0],m=u.indexOf(c);c=u.substr(m+c.length,u.length),c=c.replace(/^[ 　\t]+|[ 　\t]+$/g,"");var o="<pre",v="</code></pre>";c.length===0?o=o+' lang="'+c+'"><code>':o=o+"><code>",c=o;var g=[];for(let w=l[0]+1;w<l[1];w++)g.push(t[w]);g=g.join(`
`),g=o+g+v;var d="codeblock-"+y();i.finals[d]=g,t[l[0]]="%"+d+"%";for(let w=l[0]+1;w<=l[1];w++)t[w]=null;for(let w=l[0];w<=l[1];w++){let N=a[w];if(!N)continue;let U=s.indexOf(N);U>=0&&s.splice(U,1),delete a[w],N[0]=-1}}),p.length>0},F=(s,a,t,i,n)=>{var r=[];if(s.forEach(l=>{!l[6]||r.push(l)}),r.length!==0){var e=[],f=0,h=r[0][0];e.push([r[0]]);var p=r.length;for(let l=1;l<p;l++){let u=r[l];u[0]===h+1?e[f].push(u):(f++,e[f]=[u]),h=u[0]}return e=e.filter(l=>!(l.length<2)),e.forEach(l=>{Z(l,s,a,t,i,n)}),!0}},Q=(s,a,t,i,n)=>{var r=0,e=t.length;if(s.forEach((m,o)=>{if(m[3]+m[4]!==0){var v=m[0];v<e&&(e=v),v>r&&(r=v)}}),e>r)return!1;for(let m=r+1;m<t.length-1;m++){let o=a[m],v=a[m+1];if(!!o&&o[1]>0&&!!v&&v[1]>0)break;r=m}if(r===t.length-2){let m=t.length-1,o=a[m];(!o||o[1]===0)&&(r=m)}var f=0,h=[[[e,a[e]]]],p=!1,l=!0;a[e][3]>0&&(p=!0);for(let m=e+1;m<=r;m++){var u=a[m];if(!u){l&&h[f].push([m,null]);continue}if(u[1]){if(!l)continue;let o=a[m+1];if(!o||o[1]>0){l=!1;continue}h[f].push([m,u]);continue}if(u[3]+u[4]===0){l&&h[f].push([m,u]);continue}if(l){h[f].push([m,u]);continue}f++,h[f]=[],a[m][3]>0?p=!0:p=!1,l=!0,h[f].push([m,u])}var c=!1;return h.forEach(m=>{m.forEach(d=>{var w=d[0];d[1]||(t[w]="    "+t[w])});var o=0,v=m[0][0],g=t[v],o=-1;g.match(/^[ 　\t>]/)?o=0:g.match(/^[\-\+]|[\*~][ 　\t]/)?o=1:g.match(/^\d+\.[ 　\t]/)&&(o=2),!(o<0)&&(change=!0,o===0?ee(m,s,a,t,i,n):o===1?D(!1,m,s,a,t,i,n):o===2&&D(!0,m,s,a,t,i,n))}),c},V=(s,a,t,i,n)=>{var r=[],e=[];s.forEach(f=>{if(f[2]!==0){var h=f[0],p=a[h-1];if(p)p[1]>0&&r.push([h,t[h].replace(/^[ 　\t]+|[ 　\t]+$/,"")[0]]);else{let l=t[h-1];if(h===0||!!l.match(/^%[\w\-]+%$/))r.push([h,t[h].replace(/^[ 　\t]+|[ 　\t]+$/,"")[0]]);else{let u=t[h].substr(0,1);u==="="?e.push([h-1,1]):u==="-"?e.push([h-1,2]):u==="~"?e.push([h-1,3]):u==="+"?e.push([h-1,3]):u==="_"?e.push([h-1,3]):u==="*"?e.push([h-1,4]):u==="#"?e.push([h-1,5]):u==="."&&e.push([h-1,6]),t[h]=null}}}});for(let f=0;f<t.length;f++){let h=t[f];if(!h)continue;let p=h.match(/^(#+)[ 　\t]*/);if(p){let l=p[0],u=p[1];l!==h&&h.indexOf(l+"[")!==0&&(e.push([f,u.length]),t[f]=h.replace(/^#+[ 　\t]*|[ 　\t]*#+$/g,""))}}return r.length+e.length===0?!1:(e.sort((f,h)=>f[0]-h[0]),r.forEach(f=>{var[h,p]=f,l="headline-"+y(),u="<hr";p==="="?u=u+' class="heavy">':p==="-"?u=u+' class="light">':p==="*"?u=u+' class="star">':p==="~"?u=u+' class="wavy">':p==="."?u=u+' class="dotted">':p==="_"?u=u+' class="dashed">':p==="+"?u=u+' class="strong">':p==="#"?u=u+' class="heavystrong">':u=u+">",n[l]=u,t[h]="%"+l+"%"}),e.forEach(f=>{var[h,p]=f,l="header-"+y(),u="h"+(p||1),c=t[h];c=L(c,i),c=c.replace(/^[ 　\t\n]+|[ 　\t\n]+$/,""),c="<"+u+">"+c+"</"+u+">",n[l]=c,t[h]="%"+l+"%"}),!0)},M=(s,a,t,i,n)=>{for(var r=[],e=!0;e;)e=!1,t.forEach(f=>{if(f.length===0)return r.push(f);f=f.replace(/(\])[ 　\t]*(\[([\w \-\.]+)\])/g,(u,c,m,o)=>{var v=i.refs[o],g;if(!v||v.indexOf("://")<0&&v.indexOf("@")<0&&!v.match(/^\.{0,2}[\\\/]/)||v.indexOf(`
`)>=0){if(g=i.metas[o.toLowerCase()],!g||g.indexOf("://")<0&&g.indexOf("@")<0&&!g.match(/^\.{0,2}[\\\/]/)||g.indexOf(`
`)>=0)return u;v=g}return c+"("+v+")"});for(var h=[],p=[],l=!0;l;)l=!1,f=f.replace(/[!@#]\[[^\(\)\[\]\{\}]*?(\[.*?\][ 　\t]*\(.*?\))*?[^\(\)\[\]\{\}]*?\](\([^\(\)\[\]\{\}]*?\))/g,(u,c,m)=>(l=!0,m.match(/[ 　\t]+"(left|right)"\)$/)?p.push(u):h.push(u),""));f=f.replace(/^[ 　\t]+|[ 　\t]+$/g,""),p.forEach(u=>r.push(u)),f.length>0&&(h.length>0&&(e=!0),r.push(f)),h.forEach(u=>r.push(u))}),t.splice(0,t.length),r.forEach(f=>t.push(f)),r=[];return!0},X=(s,a,t,i,n)=>{var r=[],e=[],f=[],h=-1;t.forEach((p,l)=>{if(!p||p.length===0){h=-1;return}var u=p.match(/^%([\w\W]+)%(\{[\w \-\.\u0800-\uffff]+\})*$/);if(u){h=-1;return}if(u=p.match(/^[@#]\[[^\(\)\[\]\{\}]*?(\[.*?\][ 　\t]*\(.*?\))*?[^\(\)\[\]\{\}]*?\]\([^\(\)\[\]\{\}]*?\)$/),u){f.push([l,p]),h=-1;return}u=p.match(/^!\[[^\(\)\[\]\{\}]*?(\[.*?\][ 　\t]*\(.*?\))*?[^\(\)\[\]\{\}]*?\]\([^\(\)\[\]\{\}]*?\)$/);var c=u?1:0;c===h?c===0?r[r.length-1].push([l,p]):c===1&&e[e.length-1].push([l,p]):(c===0?r[r.length]=[[l,p]]:c===1&&(e[e.length]=[[l,p]]),h=c)}),e=e.filter(p=>{var l=p.length>1;return p.length===1&&f.push(p[0]),l}),r.forEach(p=>{var l=[],u=p[0][0];p.forEach(c=>{var m=c[0],o=c[1];o.length!==0&&(l.push(L(o,i)),t[m]=null)}),l=l.join("<br>"),t[u]=l}),e.forEach(p=>{var l=[],u=p[0][0];p.forEach(m=>{l.push(L(m[1],i)),t[m[0]]=null}),l=l.join(""),l='<div class="image-wall">'+l+"</div>";var c="imagewall-"+y();n[c]=l,t[u]="%"+c+"%"}),f.forEach(p=>{var[l,u]=p;u=L(u,i);var c="resource-"+y();n[c]=u,t[l]="%"+c+"%"})},Z=(s,a,t,i,n,r)=>{var e=!0,f=null,h=-1;s.some((o,v)=>{var g=i[o[0]];g=g.replace(/^[ 　\t]+|[ 　\t]+$/g,"");var d=g.match(/[\|:\-]+/);if(!!d&&(d=d[0],g===d))return f=d,h=o[0],v===0&&(e=!1),!0}),f?(f=f.replace(/^\||\|$/g,""),f=f.split("|"),f=f.map(o=>o.match(/^:\-:$/)?1:o.match(/^:\-$/)?0:o.match(/^\-:$/)?2:3)):(e=!1,f=[]);var p=[],l=0;s.forEach(o=>{var v=o[0];if(v!==h){var g=J(i[v]);p.push(g),g.length>l&&(l=g.length)}});for(let o=f.length;o<l;o++)f.push("");for(let o=0;o<p.length-1;o++){let v=p[o],g=v?v.length:l;for(let d=v.length;d<l;d++)v.push("")}var u;e&&(u=p[0],p.shift());for(let o=0;o<l;o++){if(f[o]!==3)continue;let v=!0;p.some(g=>{var d=g[o];if(!!d&&d*1!==d)return v=!1,!0}),v?f[o]=2:f[o]=0}var c="<table>";e&&(c+="<thead><tr>",u.forEach((o,v)=>{o=L(o,n);var g='<th align="',d=f[v];d===1?g+="center":d===2?g+="right":g+="left",g+='">'+o+"</td>",c+=g}),c+="</tr></thead>"),c+="<tbody>",p.forEach(o=>{c+="<tr>",o.forEach((v,g)=>{v=L(v,n);var d='<td align="',w=f[g];w===1?d+="center":w===2?d+="right":d+="left",d+='">'+v+"</td>",c+=d}),c+="</tr>"}),c+="</tbody></table>";var m="table-"+y();r[m]=c,u=s[0][0],total=s.length;for(let o=0;o<total;o++){let v=s[o],g=v[0];i[g]=null,delete t[g];let d=a.indexOf(v);d>=0&&a.splice(d,1),v[0]=-1}i[u]="%"+m+"%"},J=s=>{s.substr(0,1)!=="|"&&(s="|"+s),s.substr(s.length-1,1)!=="|"&&(s=s+"|");var a=s.length,t=0,i=[],n=0;for(let r=1;r<a;r++){let e=s.substr(r,1);if(e==="|"&&t===0){i.push(s.substr(n+1,r-n-1)),n=r;continue}"([{<".indexOf(e)>=0?t++:">}])".indexOf(e)>=0&&t--}return i},ee=(s,a,t,i,n,r)=>{var e="quote",f=i[s[0][0]];if(f=f.match(/^>[ 　\t]*\[([\w\W]+?)\]/),f){let u=f[1];u=u.replace(/^[ 　\t]+|[ 　\t]+$/g,""),u.length>0&&!n.metas[u]&&!n.blocks[u]&&(e=u)}var h=!0;f=s.map((u,c)=>{var m=u[0],o=i[m];c>0&&(h=h&&!!o.match(/^(\t|　　|    | 　 |  　|　  )/));var v=o.replace(/^(\t|　　|    | 　 |  　|　  )/,"");return v!==o&&h?o=v:(head=o.match(/^>[ 　\t]*/),head&&(head=head[0],o=o.replace(head,""))),o}),f[0]=f[0].replace(new RegExp("^[ \u3000\\t]*\\["+e.replace(/\\/g,"\\\\")+"\\][ \u3000\\t]*"),""),f=f.join(`
`),f=f.replace(/^\n+|\n+$/g,"");var p='<blockquote class="'+e+'">';f=x(f,n,2,r),p+=f,p+="</blockquote>";var l="blockquote-"+y();r[l]=p,s.forEach(u=>{var c=u[0];i[c]=null,delete t[c];var m=a.indexOf(u[1]);m>=0&&a.splice(m,1)}),i[s[0][0]]="%"+l+"%"},D=(s,a,t,i,n,r,e)=>{var f=[],h=-1;a.forEach(u=>{var c=u[0],m=n[c];if(head=m.match(/^([\-\+\*>~]|\d+\.)[ 　\t]+/),head){m=m.replace(head[0],""),h++,f[h]=[m];return}m=m.replace(/^(\t|　　|    | 　 |  　|　  )/,""),f[h].push(m)}),f=f.map(u=>(u=u.join(`
`),u=u.replace(/^\n+|\n+$/g,""),u));var p="";s?p="<ol>":p="<ul>",f.forEach(u=>{p+="<li>",p+=x(u,r,2,e),p+="</li>"}),s?p+="</ol>":p+="</ul>";var l="list-"+y();e[l]=p,a.forEach(u=>{var c=u[0];n[c]=null,delete i[c];var m=t.indexOf(u[1]);m>=0&&t.splice(m,1)}),n[a[0][0]]="%"+l+"%"},re=(s,a)=>{var t=[[]],i=0,n=[0],r=[];if(s.forEach(e=>{var f=!1;e=e.replace(/^<h(\d+)>/i,(h,p)=>{f=!0,p=p*1,p===1&&(i++,t[i]=[]),n[p-1]=(n[p-1]||0)+1;for(let u=p;u<n.length;u++)n[u]=0;var l="chap";for(let u=0;u<p;u++)l+="-"+(n[u]||1);return h=h+'<a name="'+l+'">',r.push([p,l,e.replace(/<[\w\W]+?>/gi,"")]),h}).replace(/<\/h(\d+)>$/i,h=>"</a>"+h).replace(/\{([\w \-\.]+)\}/g,(h,p)=>{var l=a.termList[p];return l?(Array.isArray(l)&&(l=l[0]),'<a class="terminology" name="'+p+'" href="#ref-'+p+'"><strong>'+l+"</strong></a>"):h}),t[i].push(e)}),t=t.filter(e=>e.length>0),a.chapList=r,t=t.map(e=>{var f=[],h="<section>",p="</section>";return e.forEach((l,u)=>{var c=!1;l=l.replace(/<a class="notemark" type="footnote" name="([\w \-\.]+?)">/g,(m,o)=>{c=!0,f.push(o);var v=m.substr(0,m.length-1)+' href="#footnote-'+o+'">';return v}),c&&(e[u]=l)}),e=e.join(""),f.length===0||(f=f.map((l,u)=>{var c=a.refs[l],m=a.footnotes.indexOf(l);return u++,e=e.replace(new RegExp("%%FN-"+m+"%%","g"),u),'<p class="footnote-content"><a class="index" name="footnote-'+l+'">'+u+"\uFF1A</a>"+c+"</p>"}),e+='<hr class="footnote-line"><footer><p class="footnote-title">\u811A\u6CE8\uFF1A</p>',e+=f.join(""),e+='</footer><hr class="footnote-line end">'),h+e+p}),!!a.endnotes&&a.endnotes.length>0){let e='<hr class="endnote-line">';e+='<section class="endnote-chapter"><h1 class="endnote-title"><a name="EndNote">\u5C3E\u6CE8</a></h1>',a.endnotes.forEach((f,h)=>{e+='<p class="endnote-content"><a class="index" name="endnote-'+f+'">'+(h+1)+"\uFF1A</a>"+a.refs[f]+"</p>"}),e+="</section>",t.push(e)}if(a.metas.glossary&&!!a.termList&&a.termList.length>0){let e='<hr class="endnote-line">';e+='<section class="endnote-chapter"><h1 class="endnote-title"><a name="Glossary">\u672F\u8BED\u8868</a></h1>',e+=k(a),e+="</section>",t.push(e)}if(a.image=a.image||[],a.video=a.video||[],a.audio=a.audio||[],a.metas.resources&&a.image.length+a.video.length+a.audio.length>0){let e='<hr class="endnote-line">';e+='<section class="endnote-chapter"><h1 class="endnote-title"><a name="ResourceList">\u8D44\u6E90\u8868</a></h1>',a.image.length>0&&(e+='<h2><a name="ImageResourceList">\u56FE\u7247</a></h2>',e+=$(a,"image")),a.video.length>0&&(e+='<h2><a name="VideoResourceList">\u89C6\u9891</a></h2>',e+=$(a,"video")),a.audio.length>0&&(e+='<h2><a name="AudioResourceList">\u97F3\u9891</a></h2>',e+=$(a,"audio")),e+="</section>",t.push(e)}if(a.metas.showtitle){let e='<header class="article-title">';if(e+="<p>"+a.metas.title+"</p>",a.metas.showauthor&&(a.metas.author&&(e+='<p class="author">',a.metas.email&&(e+='<a href="mailto:'+a.metas.email+'">'),e+=a.metas.author,a.metas.email&&(e+="</a>"),e+="</p>"),a.metas.date)){e+='<p class="author date">';let f=a.metas.date*1;if(isNaN(f))f=a.metas.date;else{f=new Date(f);let h=f.getYear()+1900,p=f.getMonth()+1;p<10&&(p="0"+p);let l=f.getDate();l<10&&(l="0"+l);let u=f.getHours();u<10&&(u="0"+u);let c=f.getMinutes();c<10&&(c="0"+c);let m=f.getSeconds();m<10&&(m="0"+m),f=h+"/"+p+"/"+l+" "+u+":"+c+":"+m}e+=f,e+="</p>"}e+="</header>",t.unshift(e)}return t},te=(s,a)=>{for(var t=!0,i=0;t&&(t=!1,s=s.map(n=>(n=n.replace(/\[([\w \-\.]+?)\]/g,(r,e,f)=>{var h=n.lastIndexOf("<sup>",f),p=n.lastIndexOf("</sup>",f);if(h>p)return r;var l=a.blocks[e];return l?(t=!0,l):r}),n)),i++,i!==10););return s},ae=(s,a)=>{var t=(a.metas.LANG||"zh").toLowerCase();if(s=s.map(i=>(i=i.replace(/%glossary%/gi,n=>k(a)),i=i.replace(/%resources%/gi,n=>$(a,"image")+$(a,"video")+$(a,"audio")),i=i.replace(/%images%/gi,n=>$(a,"image")),i=i.replace(/%videos%/gi,n=>$(a,"video")),i=i.replace(/%audios%/gi,n=>$(a,"audio")),i=i.replace(/%toc%(\{[\w\W]+?\})*/gi,n=>{var r=n.match(/\{[\w\W]+?\}/g),e="\u76EE\u5F55",f=3;return r&&r.forEach(h=>{h=h.substr(1,h.length-2);var p=h*1;isNaN(p)?e=h:f=p}),a.toced=!0,H(a,e,f)}),Object.keys(a.metas).forEach(n=>{var r=n.toLowerCase();G.includes(n)||(r=a.metas[n],r===!0||r===!1?t==="zh"?r=r?"\u662F":"\u5426":r=r?"On":"Off":Array.isArray(r)&&(t==="zh"?r=r.join("\u3001"):r=r.join(", ")),i=i.replace(new RegExp("%"+n+"%","gi"),e=>r))}),i=i.replace(/%([\w \-\.]+)%/g,(n,r)=>{var e=a.finals[r];return e||n}),i)),a.metas.toc&&!a.toced){let i=H(a,"\u76EE\u5F55",3);i.indexOf('<p class="content-')>=0&&(i="<section>"+i+"</section>",a.metas.showtitle?s.splice(1,0,i):s.unshift(i))}return s},H=(s,a,t)=>{var i='<h1 name="ContentTable">'+a+'</h1><aside class="content-table">';return s.chapList.forEach(n=>{if(!(n[0]>t)){var r='<p class="content-item level-'+n[0]+'">';for(let e=0;e<n[0];e++)r+='<span class="content-indent"></span>';r+='<a class="content-link" href="#'+n[1]+'">'+n[2]+"</a>",r+="</p>",i+=r}}),!!s.endnotes&&s.endnotes.length>0&&(i+='<p class="content-item level-1"><span class="content-indent"></span><a class="content-link" href="#EndNote">\u5C3E\u6CE8</a></p>'),s.metas.glossary&&!!s.termList&&s.termList.length>0&&(i+='<p class="content-item level-1"><span class="content-indent"></span><a class="content-link" href="#Glossary">\u672F\u8BED\u8868</a></p>'),s.metas.resources&&s.image.length+s.video.length+s.audio.length>0&&(i+='<p class="content-item level-1"><span class="content-indent"></span><a class="content-link" href="#ResourceList">\u8D44\u6E90\u8868</a></p>',s.image.length>0&&(i+='<p class="content-item level-2"><span class="content-indent"></span><span class="content-indent"></span><a class="content-link" href="#ImageResourceList">\u56FE\u7247</a></p>'),s.video.length>0&&(i+='<p class="content-item level-2"><span class="content-indent"></span><span class="content-indent"></span><a class="content-link" href="#VideoResourceList">\u89C6\u9891</a></p>'),s.audio.length>0&&(i+='<p class="content-item level-2"><span class="content-indent"></span><span class="content-indent"></span><a class="content-link" href="#AudioResourceList">\u97F3\u9891</a></p>')),i+="</aside>",i},k=s=>{var a="";return s.termList===0?"":(s.termList.forEach(t=>{var[i,n]=t,r=s.terms[i],e='<p class="glossary-item">';e+='<a class="glossary-indent" name="ref-'+i+'">'+n+"</a>",e+=r,e+="</p>",a+=e}),a)},$=(s,a)=>{var t=s[a];if(!t||!Array.isArray(t)||t.length===0)return"";var i=[],n="<ul>";return t.forEach(r=>{var e=r[1];i.includes(e)||(i.push(e),n+='<li><a href="'+e+'" target="_blank">'+e+"</a></li>")}),n+="</ul>",n},se=s=>(s=s.replace(/(\\+)(.)/g,(a,t,i)=>{var n=Math.floor(t.length/2),r=n*2!==t.length,e="",f="%"+j["\\"]+"%";for(let h=0;h<n;h++)e+=f;if(r){let h=j[i];h?e=e+"%"+h+"%":e=e+i}else e=e+i;return e}),s),A=(s,a,t=!0)=>{for(var i=!0;i;)i=!1,s=s.replace(/\%([\w \-]+?)\%/g,(n,r)=>{var e=a[r];return e?(i=!0,e):n});if(!t)return s;for(i=!0;i;)i=!1,s=s.replace(/\%([\w \-]+?)\%/g,(n,r)=>{var e=a[W][r.toLowerCase()];return e?(i=!0,e):n});return s=s.replace(/\n+/g,"<br>"),s=s.replace(/\/{2}/g,(n,r)=>{if(r===0)return"<br>";var e=s.substr(r-1,1);return e===":"?n:"<br>"}),s=s.replace(/^(<\/?br>)+|(<\/?br>)+$/gi,"<br>"),s},ie=s=>{if(!s)return[];s=s.split(/[ ,，；;、　]+/).filter(t=>t.length>0);var a=[];return s.forEach(t=>{a.includes(t)||a.push(t)}),a},le=(s,a)=>{for(var t={},i=!0;i;)i=!1,a=a.replace(/\n([A-Z\u0800-\uffff]+?) *[:：] *([\w\W]*?)\n/,(n,r,e)=>e.length===0||(r==="\u6807\u9898"?r="title":r==="\u4F5C\u8005"?r="author":r==="\u7B80\u4ECB"?r="description":r==="\u5173\u952E\u8BCD"?r="keyword":r==="\u66F4\u65B0"?r="date":r=r.toLowerCase(),!R.includes(r))?n:(i=!0,t[r]=e,`
`));if(!!t.showtitle&&["on","yes","true"].includes(t.showtitle.toLowerCase())?t.showtitle=!0:t.showtitle=!1,!!t.glossary&&["on","yes","true"].includes(t.glossary.toLowerCase())?t.glossary=!0:t.glossary=!1,!!t.links&&["on","yes","true"].includes(t.links.toLowerCase())?t.links=!0:t.links=!1,!!t.refs&&["on","yes","true"].includes(t.refs.toLowerCase())?t.refs=!0:t.refs=!1,!!t.terms&&["on","yes","true"].includes(t.terms.toLowerCase())?t.terms=!0:t.terms=!1,!!t.resources&&["on","yes","true"].includes(t.resources.toLowerCase())?t.resources=!0:t.resources=!1,!!t.toc&&["on","yes","true"].includes(t.toc.toLowerCase())?t.toc=!0:t.toc=!1,s.metas=t,s.metas.keyword=ie(s.metas.keyword),s.metas.date)try{s.metas.date=new Date(s.metas.date).getTime()}catch{delete s.metas.date}for(s.metas.god=s.metas.theone='<a href="mailto:lostabaddon@gmail.com">LostAbaddon</a>',s.metas.script?s.metas.script=s.metas.script.split(/[,; 　\t]+/):s.metas.script=[],s.metas.style?s.metas.style=s.metas.style.split(/[,; 　\t]+/).map(n=>n.replace(/\{[\w\W]*\}/,"")):s.metas.style=[],s.termList=s.termList||[],s.mainParser=!1,s.refs={},i=!0;i;)i=!1,a=a.replace(/\n\[([\w \-\.\+\=\\\/]+?)\] *[:：] *([\w\W]+?)\n([\n\[])/,(n,r,e,f,h)=>(r=r.trim(),e=e.trim(),r.length===0||e.length===0?n:(s.refs[r]=e,i=!0,`
`+f)));for(s.blocks={},i=!0;i;)i=!1,a=a.replace(/\[:([\w \-\.\+\=\\\/]+?):\]([\w\W]*?)\n*\[:\1:\]/g,(n,r,e)=>{if(r=r.trim(),!(r.length===0||e.length===0))return s.blocks[r]=e,i=!0,""});return Object.keys(s.refs).forEach(n=>{var r=s.refs[n];r=L(r,s),r=r.replace(/\%([\w \-]+?)\%/g,(e,f)=>{var h=S[f.toLowerCase()];return h||e}),s.refs[n]=r}),Object.keys(s.blocks).forEach(n=>{var r=s.blocks[n],e=r.match(/^\n+/);r=r.trim();var f;s.parseLevel=0,e?f=x(r,s,1):f=[L(r,s)],s.blocks[n]=f.join("")}),s.anchors=[],s.terms={},s.notes={},a.replace(/\] *(\[[\^:]([\w ]+?)\]|\{([\w ]+?)\})/g,(n,r,e,f)=>{var h=e||f;s.refs[h]?r.substr(0,1)==="{"?s.terms[h]=s.refs[h]:s.notes[h]=s.refs[h]:r.substr(0,1)==="{"&&!s.anchors.includes(h)&&s.anchors.push(h)}),a=q(a),a};_.fullParse=(s,a)=>{var t={finals:{},toced:!1};s=K(s),s=le(t,s),a&&Object.keys(a).forEach(r=>{let e=a[r];r=r.toLowerCase(),!(["title","author","email","date"].indexOf(r)>=0)&&e!=null&&(t.metas[r]=e)}),t.parseLevel=0,t.mainParser=!0,t.metas.title=t.metas.title||"\u65E0\u540D\u6587",a.overwrite?(t.metas.title=a.title?a.title:t.metas.title,t.metas.author=a.author?a.author:t.metas.author,t.metas.email=a.email?a.email:t.metas.email,t.metas.date=a.date?a.date:t.metas.date):(t.metas.title=t.metas.title?t.metas.title:a.title,t.metas.author=t.metas.author?t.metas.author:a.author,t.metas.email=t.metas.email?t.metas.email:a.email,t.metas.date=t.metas.date?t.metas.date:a.date),s=x(s,t),s=s.map(r=>r.replace(/\%([\w \-]+?)\%/g,(e,f)=>{var h=S[f.toLowerCase()];return h||e})),s=te(s,t),s=re(s,t),s=ae(s,t),t.metas.classname?s='<article class="'+t.metas.classname+'">'+s.join("")+"</article>":s="<article>"+s.join("")+"</article>",t.metas.fullexport&&(t.metas.style.forEach(r=>{s+='<link type="text/css" rel="stylesheet" href="'+r+'">'}),t.metas.script.forEach(r=>{s+='<script type="text/javascript" src="'+r+'"></script>'}));var i=b._indexes_||[];i.forEach(r=>{var e=b[r];!e||e.forEach(f=>{s=f.parse(s)})});var n={};return n.content=s,n.title=t.metas.title,n.lineCount=t.metas.totalLineCount,n.chapList=t.chapList,n.meta={},n.meta.author=t.metas.author,n.meta.email=t.metas.email,n.meta.description=t.metas.description,n.meta.update=t.metas.date,n.meta.keywords=t.metas.keyword.map(r=>r),t.metas.others&&(n.meta.others=t.metas.others),n.terminology={},t.termList.forEach(r=>{n.terminology[r[0]]=r[1]}),n.notes={},Object.keys(t.refs).forEach(r=>{n.notes[r]=t.refs[r]}),n.blocks={},Object.keys(t.refs).forEach(r=>{n.blocks[r]=t.blocks[r]}),n},_.parse=(s,a)=>{var t;return t=_.fullParse(s+`
`,a),t?t.content:""};const C=(s,a)=>{a.__level++;var t=[],i="",n=!0;return s.childNodes.forEach(r=>{var e=r.tagName;if(!e){if(r.nodeName==="#comment")return;let h=r.textContent||"";h=h.trim(),h.length>0&&(i+=h);return}e=e.trim().toLowerCase();var f;if(z.includes(e)){if(n=!1,i.length>0&&(t.push(a.__prefix+i),i=""),e==="blockquote"){let h=a.__prefix;a.__prefix=a.__prefix+">	",f=C(r,a),f=f.flat(Infinity),f.push(`
`),a.__prefix=h}else if(e==="ol"){let h=a.__prefix;a.__prefix.indexOf("-	")>=0||a.__prefix.indexOf("1.	")>=0?a.__prefix="	"+a.__prefix:a.__prefix=a.__prefix+"1.	",f=C(r,a),f=f.flat(Infinity),f.push(""),a.__prefix=h}else if(e==="ul"){let h=a.__prefix;a.__prefix.indexOf("-	")>=0||a.__prefix.indexOf("1.	")>=0?a.__prefix="	"+a.__prefix:a.__prefix=a.__prefix+"-	",f=C(r,a),f=f.flat(Infinity),f.push(""),a.__prefix=h}else f=C(r,a),f=f.flat(Infinity),f.push("");!!f&&f.length>0&&t.push(...f)}else{let[h,p]=ne(r,e,a);p?h.length>0&&(i+=h.join("")):(i.length>0&&(t.push(a.__prefix+i),i=""),h.forEach(l=>{t.push(a.__prefix+l)}))}}),i.length>0&&t.push(a.__prefix+i),a.__level--,t},E=(s,a)=>{var t="";return s.childNodes.forEach(i=>{var n=i.tagName;if(!n){if(i.nodeName==="#comment")return;let r=i.textContent||"";r=r.trim(),r.length>0&&(t+=r);return}if(n=n.trim().toLowerCase(),n==="a"){let r=i.href;r.indexOf("javascript:")===0&&(r="");let e=E(i,a);!r||r.substr(0,1)==="#"||(r.match(/^(ftp|https?):\/\//i)||(r=a.host+r),e="["+e+"]("+r+")"),t+=e;return}if(n==="span"||n==="font"){t+=E(i,a);return}if(n==="strong"||n==="b"){t+=E(i,a);return}if(n==="em"||n==="i"){t+=E(i,a);return}if(n==="sup"){t+=E(i,a);return}if(n==="sub"){t+=E(i,a);return}if(n==="del"){t+=E(i,a);return}t+=i.innerText}),t},ne=(s,a,t)=>{if(a==="script")return[[""],!0];if(a==="style")return[[""],!0];if(a==="link")return[[""],!0];if(a==="hr")return[[`
---
`],!1];if(a==="br")return[[`
`],!0];if(a.match(/^h\d+$/)){let n=a.substring(1,a.length);n*=1;let r=`
`;for(let f=0;f<n;f++)r+="#";let e=E(s,t);return e=r+e+`
`,[[e],!1]}if(a==="a"){let n=s.href;n.indexOf("javascript:")===0&&(n="");let r=E(s,t);return!n||n.substr(0,1)==="#"?[[r],!0]:(n.match(/^(ftp|https?):\/\//i)||(n=t.host+n),r="["+r+"]("+n+")",[[r],!0])}if(a==="img")return s.src.length===0?[[""],!0]:[[`
![](`+s.src+`)
`],!1];if(a==="video")return s.src.length===0?[[""],!0]:[[`
@[](`+s.src+`)
`],!0];if(a==="audio")return s.src.length===0?[[""],!0]:[[`
#[](`+s.src+`)
`],!0];if(a==="span"||a==="font")return[[E(s,t)],!0];if(a==="strong"||a==="b"){let n=E(s,t);return[["**"+n+"**"],!0]}if(a==="em"||a==="i"){let n=E(s,t);return[["*"+n+"*"],!0]}if(a==="u"){let n=E(s,t);return[["__"+n+"__"],!0]}if(a==="sup"){let n=E(s,t);return[["^"+n+"^"],!0]}if(a==="sub"){let n=E(s,t);return[["_"+n+"_"],!0]}if(a==="del"){let n=E(s,t);return[["~~"+n+"~~"],!0]}var i=E(s,t);return[[i],!1]};_.reverse=(s,a,t=!0)=>{if(!s)return"";a=a||{},a.__level=0,a.__prefix="",a.host=a.host||"";var i=C(s,a);return i=i.flat(Infinity),i=i.join(`
`),i=i.replace(/\n{2,}/g,`

`),i},_.parseLine=L,_.parseSection=x,_.generateRandomKey=y,_.SymHidden=W,_.PreserveWords=j;try{window.MarkUp=_}catch{try{global.MarkUp=_}catch(s){console.error(s)}}})();
