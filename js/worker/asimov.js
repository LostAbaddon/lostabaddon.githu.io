self.global=self,importScripts("../../Asimov/markup.js"),importScripts("../../Asimov/extensions.js"),importScripts("./extmarkup.js");const isSharedWorker=!self.Worker;isSharedWorker?(self.onconnect=({ports:e})=>{var o=e[0];console.log("Shared-Worker Connected!"),o.onmessage=({data:s})=>{if(s==="suicide"){o.close();return}var n=MarkUp.fullParse(s.content,s.config);console.log("Asimov Done: "+s.content.length+" / "+n.content.length),o.postMessage({id:s.id,markup:n})}},console.log("Shared-Worker Asimov is READY!")):(self.onmessage=({data:e})=>{if(e==="suicide"){port.close();return}var o=MarkUp.fullParse(e.content,e.config);console.log("Asimov Done: "+e.content.length+" / "+o.content.length),self.postMessage({id:e.id,markup:o})},console.log("Dedicated-Worker Asimov is READY!"));
