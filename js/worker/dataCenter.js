self.global=self;const SearchCenter={foliationalize(e,r=[],i=[]){e=e.replace(/(^\s+|\s+$)/g,"");var t=0,n=[];if(e.replace(/(reg\(|\(|\))/g,(a,s,o)=>{if(a==="reg(")n.push([o,t]),t++;else if(a==="(")t++;else if(a===")"){t--;let u=n[n.length-1];if(!u)return;t===u[1]&&n.push(o)}}),t!==0)throw new Error("\u67E5\u8BE2\u6307\u4EE4\u8BED\u6CD5\u9519\u8BEF\uFF0C\u672A\u95ED\u5408\uFF01");n=n.map(a=>a.length?a[0]:a);var l=n.length;if(Math.floor(l/2)*2!==l)throw new Error("\u67E5\u8BE2\u6307\u4EE4\u8BED\u6CD5\u9519\u8BEF\uFF0C\u672A\u95ED\u5408\uFF01");for(let a=l/2-1;a>=0;a--){let s=n[2*a],o=n[2*a+1],u=e.substring(s+4,o);u=u.match(/^\/(.*)\/([gi]*)/);let g=u[2]||"";g.indexOf("g")<0&&(g=g+"g"),u=u[1].replace(/\\/g,"\\\\").replace(/\//g,"\\/");let c=new RegExp(u,g),p=i.length;i[p]=c,e=e.substring(0,s)+"[REG:"+p+"]"+e.substring(o+1)}if(n=[],e.replace(/(T|C|K|reg)?(\\*)([\(\)（）])/g,(a,s,o,u,g)=>{var c=(o||"").length;c>>1<<1===c&&(s=s||"",g+=c+s.length,u==="("||u==="\uFF08"?(t===0&&n.push(s,g),t++):(t--,t===0&&n.push(g)))}),t!==0)throw new Error("\u67E5\u8BE2\u6307\u4EE4\u8BED\u6CD5\u9519\u8BEF\uFF0C\u672A\u95ED\u5408\uFF01");if(l=n.length,Math.floor(l/3)*3!==l)throw new Error("\u67E5\u8BE2\u6307\u4EE4\u8BED\u6CD5\u9519\u8BEF\uFF0C\u672A\u95ED\u5408\uFF01");for(let a=l/3-1;a>=0;a--){let s=3*a;if(n[s]){n[s]==="reg";continue}let o=n[s+1],u=n[s+2],g=e.substring(o+1,u),c=r.length;r[c]=g,r[c]=this.foliationalize(g,r),e=e.substring(0,o-1)+"[SUB:"+c+"]"+e.substring(u+1)}l=0;var f=[],h=[];return e.replace(/\s*([\+\-\*])\s*/g,(a,s,o)=>{var u=e.substring(l,o).replace(/(^\s*|\s*$)/g,"");if(!u)throw new Error("\u641C\u7D22\u6307\u4EE4\u51FA\u73B0\u7A7A\u8868\u8FBE\u5F0F\uFF01");l=o+a.length,h.push(s),f.push(u)}),f.push(e.substring(l).replace(/(^\s*|\s*$)/g,"")),f=f.map(a=>{var s="C",o=a;return a.indexOf("T(")===0?(s="T",o=a.replace(/(^T\(|\)$)/g,"")):a.indexOf("C(")===0?o=a.replace(/(^C\(|\)$)/g,""):a.indexOf("K(")===0?(s="K",o=a.replace(/(^K\(|\)$)/g,"")):a.indexOf("[SUB:")===0&&(s="G"),{type:s,exp:o}}),{parts:f,ops:h,subs:r,regs:i}},prepareCloudArticle(e,r,i){var t={},n={};for(let l in e){let f=e[l].data;if(!f)continue;let h=l.replace(r,""),a=l.replace(i,"");l.indexOf(r)>=0&&!!h.match(/^\/\w+\-\d+\.json$/i)?f.articles.forEach(s=>{if(s.type==="article"){var o="/"+s.sort+"/"+s.filename,u=t[o];(!u||s.publish>u.timestamp)&&(u={url:o,type:"cloud",title:s.title,keywords:"",content:s.description,author:s.author,timestamp:s.publish||0,score:0},t[o]=u)}}):l.indexOf(i)>=0&&!!a.match(/\.m[du]/i)&&(a.match(/\/info\.md/i)||(n[a]=f))}return t=Object.keys(t).map(l=>t[l]),t.forEach(l=>{var f=l.url,h=n[f];h&&(l.content=h)}),t},prepareEdgeArticle(e,r,i){var t=Object.keys(e).map(n=>{var l=e[n];return{url:l.id,type:"edge",title:l.title,keywords:l.category.map(f=>i[f]||f).join(", "),content:r[n].content,author:l.author,timestamp:l.publish||0,score:0}});return t},searchViaCommand(e,r){var i=e.ops.length,t=this.searchLogicly(e.parts[0],r,e.regs,e.subs);for(let n=0;n<i;n++){let l=e.ops[n],f=e.parts[n+1],h;l==="+"?h=r:h=t;let a=this.searchLogicly(f,h,e.regs,e.subs);if(!!a){if(l==="+")for(let s of a)t.add(s);else if(l==="*")t=a;else if(l==="-")for(let s of a)t.delete(s)}}return t},countKeyword(e,r){for(var i=0,t=0;;){let n=r.indexOf(e,t);if(n<0)break;i++,t=n+e.length}return i},searchLogicly(e,r,i,t){var n=new Set,l=e.exp,f=l.match(/^\[REG:(\d+)\]$/i);if(f?(l=f[1]*1,isNaN(l)?(f=!1,l=e.exp):(l=i[l],l?f=!0:(f=!1,l=e.exp))):f=!1,e.type==="G"){l=e.exp;let a=l.match(/^\[SUB:(\d+)\]$/i);if(a&&(a=a[1]*1,!isNaN(a)&&(a=t[a],a)))return this.searchViaCommand(a,r)}var h="content";if(e.type==="T"?h="title":e.type==="K"&&(h="keywords"),f)for(let a of r){let o=a[h].match(l);o?o=o.length:o=0,!(o<=0)&&(a.score+=Math.round(Math.log(o)*5+10),n.add(a))}else for(let a of r){let s=this.countKeyword(l,a[h]);s<=0||(a.score+=Math.round(Math.log(s)*5+10),n.add(a))}return n}};if(self.DataCenter={dbs:new Map,_waiters:new Map,waitForReady:e=>new Promise(r=>{var i=DataCenter.dbs.get(e);if(!!i&&i.ready)return r();var t=DataCenter._waiters.get(e);t||(t=new Set,DataCenter._waiters.set(e,t)),t.add(r)}),resumeWaiters(e){var r=DataCenter._waiters.get(e);if(!!r){var i=[...r];r.clear(),DataCenter._waiters.delete(e),i.forEach(t=>t())}},async _initAPIData(){var e="APIData",r=new CachedDB(e,1);DataCenter.dbs.set(e,r),r.onUpdate(()=>{r.open("data","url",10),console.log("DataCenter::APIData Updated")}),r.onConnect(()=>{console.log("DataCenter::APIData Connected")}),await r.connect(),DataCenter.resumeWaiters(e)},async _initBookShelf(){var e="localBookShelf",r=new CachedDB(e,1);DataCenter.dbs.set(e,r),r.onUpdate(()=>{r.open("article","id"),r.open("list","id",0,["publish"]),console.log("BookShelf::CacheStorage Updated")}),r.onConnect(()=>{console.log("BookShelf::CacheStorage Connected")}),await r.connect(),DataCenter.resumeWaiters(e)},async init(){await Promise.all([DataCenter._initAPIData(),DataCenter._initBookShelf()])},onConnect(e,r){if(e=DataCenter.get(e),!e)return r(null);e.onConnect(r)},onUpdate(e,r){if(e=DataCenter.get(e),!e)return r(null);e.onUpdate(r)},async get(e,r,i){var t=DataCenter.dbs.get(e);if(!!t&&(t.ready||await DataCenter.waitForReady(e),!!t.available))return await t.get(r,i)},async set(e,r,i,t){var n=DataCenter.dbs.get(e);return!n||(n.ready||await DataCenter.waitForReady(e),!n.available)?null:await n.set(r,i,t)},async all(e,r,i){var t=DataCenter.dbs.get(e);return!t||(t.ready||await DataCenter.waitForReady(e),!t.available)?null:await t.all(r,i)},async del(e,r,i){var t=DataCenter.dbs.get(e);return!t||(t.ready||await DataCenter.waitForReady(e),!t.available)?null:await t.del(r,i)},async clear(e,r){var i=DataCenter.dbs.get(e);return!i||(i.ready||await DataCenter.waitForReady(e),!i.available)?null:(i.clearCache(r),await i.clear(r))},async searchArticle(e,r="",i="",t={}){!!self.window&&!!self.window.Barn&&(r=r||Barn.API,i=i||Barn.DataGranary);var n=e,l=Date.now();try{e=SearchCenter.foliationalize(e)}catch(c){return console.error(c),c}var[f,h,a]=await Promise.all([DataCenter.all("APIData","data"),DataCenter.all("localBookShelf","article"),DataCenter.all("localBookShelf","list")]),s=SearchCenter.prepareCloudArticle(f,r,i),o=SearchCenter.prepareEdgeArticle(a,h,t),u=new Set([...s,...o]),g=SearchCenter.searchViaCommand(e,u);return g=[...g],g.sort((c,p)=>p.score-c.score),g=g.map(c=>({title:c.title,url:c.url,type:c.type,score:c.score/10})),l=Date.now()-l,console.log("Search ["+n+"] time used: "+l+"ms."),{match:g,timeused:l}}},!self.window){importScripts("/js/lrucache.js"),importScripts("/js/cachedDB.js");let e=(r,i)=>async({data:t})=>{if(t==="suicide"){r.close();return}console.log("DataCenter::Task: "+(t.dbName||"all")+"/"+(t.store||"all")+"/"+t.action);var n=DataCenter[t.action],l=null;t.action==="searchArticle"?l=await DataCenter.searchArticle(t.command,...t.prefix,t.map):n&&(l=await DataCenter[t.action](t.dbName,t.store,t.key,t.value)),i.postMessage({tid:t.tid,result:l})};self.onconnect!==void 0?(self.onconnect=({ports:r})=>{console.log("Shared-Worker DataCenter Connected!");var i=r[0];i.onmessage=e(i,i)},console.log("Shared-Worker DataCenter is READY!")):(self.onmessage=e(self,self),console.log("Dedicated-Worker DataCenter is READY!")),DataCenter.init()}
