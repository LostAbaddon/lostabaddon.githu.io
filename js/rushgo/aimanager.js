(()=>{class l{constructor(){this.type="human",this.name="\u4E56\u5B9D\u5B9D",this.score=0,this.char=[0,0,0,0,0,!1],this.blackCount=0,this.blackWin=0,this.blackLose=0,this.whiteCount=0,this.whiteWin=0,this.whiteLose=0}}const c=new l;c.type="aiOne",c.name="\u963F\u5446",c.char=[.95,0,0,1,0,!1];const i=new l;i.type="aiOne",i.name="\u963F\u74DC",i.char=[.05,0,0,1,0,!1];const h=new l;h.type="aiFour",h.name="\u6770\u514B\u8239\u957F",h.char=[.5,0,3,5,.15,!1,2,2,.5];const t={};t.AIList=[],t.init=(e,s)=>{var o={},r=e.querySelector('select[name="RoleType"]'),p='<option value="human">\u4EBA\u7C7B</option>';p+='<option value="aiOne">AI-1</option>',p+='<option value="aiTwo">AI-2</option>',p+='<option value="aiThree">AI-3</option>',r.innerHTML=p,e._roleType=r,e._roleName=e.querySelector('input[name="Name"]'),e._attacktive=e.querySelector('input[name="Attacktive"]'),e._attitude=e.querySelector('input[name="Attitude"]'),e._deep=e.querySelector('input[name="Deepth"]'),e._range=e.querySelector('input[name="Range"]'),e._outside=e.querySelector('input[name="Outsider"]'),e._deepRange=e.querySelector('input[name="DeepRange"]'),e._decayPower=e.querySelector('input[name="DecayPower"]'),e._decayRate=e.querySelector('input[name="DecayRate"]'),[].forEach.call(e.querySelectorAll("span.radio"),a=>{var n=a.radio.name;a.radio.checked&&(o[n]=a.radio.value),a.addEventListener("click",()=>{a.radio.checked=!0,o[n]=a.radio.value}),a.radio.addEventListener("click",()=>{a.radio.checked=!0,o[n]=a.radio.value})}),e.querySelector(".controller .btn.cancel").addEventListener("click",()=>{e.classList.remove("show")}),e.querySelector(".controller .btn.ok").addEventListener("click",()=>{var a=new l,n=e._roleType.value;a.type=n,a.name=e._roleName.value,a.char[0]=e._attacktive.valueAsNumber,a.char[1]=e._attitude.valueAsNumber,a.char[2]=e._deep.valueAsNumber,a.char[3]=e._range.valueAsNumber,a.char[4]=e._outside.valueAsNumber,a.char[5]=o.ThinkAsEnemy==="true",n==="aiThree"&&(a.char[6]=e._deepRange.valueAsNumber,a.char[7]=e._decayPower.valueAsNumber,a.char[8]=e._decayRate.valueAsNumber),t.AIList.push(a),localStorage.AIList=JSON.stringify(t.AIList),s(),e.classList.remove("show")}),r.addEventListener("click",a=>{var n=r.options[r.selectedIndex].value;e.setAttribute("currentoption",n)})},t.prepare=()=>{var e=[new l,c,i,h];localStorage.AIList=JSON.stringify(e),t.AIList=e},t.load=()=>{var e=localStorage.AIList;if(!e)t.prepare();else try{e=JSON.parse(e),e=e.map(s=>{var o=new l;for(let r in s)o[r]=s[r];return o}),t.AIList=e}catch(s){t.prepare()}return t.AIList},t.save=()=>{localStorage.AIList=JSON.stringify(t.AIList)},window.RushGo=window.RushGo||{},window.RushGo.AIManager=t})();
