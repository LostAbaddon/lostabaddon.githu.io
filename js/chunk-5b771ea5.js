(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b771ea5"],{3248:function(e,a,t){},"3be1":function(e,a,t){"use strict";t("3248")},de6a:function(e,a,t){"use strict";t.r(a);var n=t("79c4");const l=Object(n["G"])("data-v-5800d56a");Object(n["t"])("data-v-5800d56a");const i=Object(n["h"])("div",{class:"infomation markup"},[Object(n["h"])("p",null,"本工具迁徙自 Viktor T. Toth 做的[霍金辐射计算器](https://www.vttoth.com/CMS/physics-notes/311-hawking-radiation-calculator)，主要功能是计算和黑洞相关的数据。"),Object(n["h"])("p",null,"> 另：本工具最好在PC浏览器上看，不然恐怕会看起来很糟糕……"),Object(n["h"])("p",null,"这里的大部分物理量都是从无穷远观测者看来的，且“表面引力”指的是对应的牛顿引力大小，因为在广义相对论中任意黑洞的表面引力都是无穷大。同理，“等效密度”值得也是牛顿值。而“落入奇点所用时间”是从无穷远下落者的随动坐标系测量而得，并不是无穷远观测者的观测值，在无穷远观测者看来落入黑洞所用时间为无限长。")],-1),o={ref:"CalTable",class:"table"},s=Object(n["f"])('<div class="header" data-v-5800d56a><span class="name" data-v-5800d56a>物理量</span><span class="value" data-v-5800d56a>取值</span><span class="unity" data-v-5800d56a>单位</span><span class="express" data-v-5800d56a>表达式</span></div>',1),u={class:"line"},p=Object(n["h"])("span",{class:"name"},"质量",-1),c={class:"value"},r={class:"unity"},d=Object(n["f"])('<option value="0" data-v-5800d56a>太阳质量</option><option value="1" data-v-5800d56a>地球质量</option><option value="2" data-v-5800d56a>吨</option><option value="3" data-v-5800d56a>千克</option><option value="4" data-v-5800d56a>克</option><option value="5" data-v-5800d56a>电子伏</option><option value="6" data-v-5800d56a>电子质量</option><option value="7" data-v-5800d56a>普朗克质量</option>',8),v=Object(n["h"])("span",{class:"express"},"$M$",-1),b={class:"line"},h=Object(n["h"])("span",{class:"name"},"视界半径",-1),y={class:"value"},j={class:"unity"},O=Object(n["f"])('<option value="0" data-v-5800d56a>秒差距</option><option value="1" data-v-5800d56a>光年</option><option value="2" data-v-5800d56a>天文单位</option><option value="3" data-v-5800d56a>光秒</option><option value="4" data-v-5800d56a>公里</option><option value="5" data-v-5800d56a>米</option><option value="6" data-v-5800d56a>厘米</option><option value="7" data-v-5800d56a>纳米</option><option value="8" data-v-5800d56a>飞米</option><option value="9" data-v-5800d56a>普朗克长度</option>',10),m=Object(n["h"])("span",{class:"express"},"$R = M \\frac{2 G}{c^2}$",-1),g={class:"line"},f=Object(n["h"])("span",{class:"name"},"视界面积",-1),k={class:"value"},M={class:"unity"},E=Object(n["f"])('<option value="0" data-v-5800d56a>平方秒差距</option><option value="1" data-v-5800d56a>平方光年</option><option value="2" data-v-5800d56a>平方天文单位</option><option value="3" data-v-5800d56a>平方光秒</option><option value="4" data-v-5800d56a>平方公里</option><option value="5" data-v-5800d56a>平方米</option><option value="6" data-v-5800d56a>平方厘米</option><option value="7" data-v-5800d56a>平方纳米</option><option value="8" data-v-5800d56a>平方飞米</option><option value="9" data-v-5800d56a>普朗克面积</option>',10),V=Object(n["h"])("span",{class:"express"},"$A = M^2 \\frac{16 \\pi G^2}{c^4}$",-1),U={class:"line"},I=Object(n["h"])("span",{class:"name"},"等效密度",-1),$={class:"value"},P={class:"unity"},C=Object(n["f"])('<option value="0" data-v-5800d56a>太阳密度</option><option value="1" data-v-5800d56a>地球密度</option><option value="2" data-v-5800d56a>千克/立方米</option><option value="3" data-v-5800d56a>克/立方厘米</option><option value="4" data-v-5800d56a>普朗克密度</option>',5),x=Object(n["h"])("span",{class:"express"},"$\\rho = \\frac{1}{M^2} \\frac{3 c^6}{32 \\pi G^3}$",-1),F={class:"line"},T=Object(n["h"])("span",{class:"name"},"表面引力",-1),w={class:"value"},B={class:"unity"},G=Object(n["h"])("option",{value:"0"},"平均地表引力",-1),K=Object(n["h"])("option",{value:"1"},"米/秒平方",-1),A=Object(n["h"])("option",{value:"2"},"普朗克加速度",-1),L=Object(n["h"])("span",{class:"express"},"$\\kappa = \\frac{1}{M} \\frac{c^4}{4 G}$",-1),Y={class:"line"},z=Object(n["h"])("span",{class:"name"},"表面潮汐力",-1),J={class:"value"},S={class:"unity"},_=Object(n["h"])("option",{value:"0"},"平均地表潮汐力",-1),q=Object(n["h"])("option",{value:"1"},"米/秒平方/米",-1),D=Object(n["h"])("option",{value:"2"},"普朗克单位",-1),H=Object(n["h"])("span",{class:"express"},"$d \\kappa = \\frac{1}{M^2} \\frac{c^6}{4 G^2}$",-1),W={class:"line"},Q=Object(n["h"])("span",{class:"name"},"落到奇点所需时间",-1),R={class:"value"},Z={class:"unity"},N=Object(n["f"])('<option value="0" data-v-5800d56a>亿年</option><option value="1" data-v-5800d56a>百万年</option><option value="2" data-v-5800d56a>万年</option><option value="3" data-v-5800d56a>世纪</option><option value="4" data-v-5800d56a>年</option><option value="5" data-v-5800d56a>天</option><option value="6" data-v-5800d56a>小时</option><option value="7" data-v-5800d56a>分钟</option><option value="8" data-v-5800d56a>秒</option><option value="9" data-v-5800d56a>纳秒</option><option value="10" data-v-5800d56a>飞秒</option><option value="11" data-v-5800d56a>普朗克时间</option>',12),X=Object(n["h"])("span",{class:"express"},"$t_S = M \\frac{\\pi G}{c^3}$",-1),ee={class:"line"},ae=Object(n["h"])("span",{class:"name"},"熵",-1),te={class:"value"},ne=Object(n["h"])("span",{class:"unity"},"无量纲",-1),le=Object(n["h"])("span",{class:"express"},"$S = M^2 \\frac{4 \\pi G}{\\hbar c}$",-1),ie={class:"line"},oe=Object(n["h"])("span",{class:"name"},"温度",-1),se={class:"value"},ue={class:"unity"},pe=Object(n["h"])("option",{value:"0"},"开尔文",-1),ce=Object(n["h"])("option",{value:"1"},"摄氏度",-1),re=Object(n["h"])("option",{value:"2"},"华氏度",-1),de=Object(n["h"])("option",{value:"3"},"普朗克温度",-1),ve=Object(n["h"])("span",{class:"express"},"$T = \\frac{1}{M} \\frac{\\hbar c^3}{8 \\pi k_B G}$",-1),be={class:"line"},he=Object(n["h"])("span",{class:"name"},"光通量功率",-1),ye={class:"value"},je={class:"unity"},Oe=Object(n["h"])("option",{value:"0"},"瓦",-1),me=Object(n["h"])("option",{value:"1"},"千瓦（kW）",-1),ge=Object(n["h"])("option",{value:"2"},"兆瓦（MW）",-1),fe=Object(n["h"])("option",{value:"3"},"太阳功率",-1),ke=Object(n["h"])("span",{class:"express"},"$L = \\frac{1}{M^2} \\frac{\\hbar c^6}{15360 \\pi G^2}$",-1),Me={class:"line"},Ee=Object(n["h"])("span",{class:"name"},"寿命",-1),Ve={class:"value"},Ue={class:"unity"},Ie=Object(n["f"])('<option value="0" data-v-5800d56a>亿年</option><option value="1" data-v-5800d56a>百万年</option><option value="2" data-v-5800d56a>万年</option><option value="3" data-v-5800d56a>世纪</option><option value="4" data-v-5800d56a>年</option><option value="5" data-v-5800d56a>天</option><option value="6" data-v-5800d56a>小时</option><option value="7" data-v-5800d56a>分钟</option><option value="8" data-v-5800d56a>秒</option><option value="9" data-v-5800d56a>纳秒</option><option value="10" data-v-5800d56a>飞秒</option><option value="11" data-v-5800d56a>普朗克时间</option>',12),$e=Object(n["h"])("span",{class:"express"},"$t = M^3 \\frac{5120 \\pi G^2}{1.8083 \\hbar c^4}$",-1);Object(n["r"])();const Pe=l((e,a,t,l,Pe,Ce)=>{const xe=Object(n["x"])("Crumb");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["h"])(xe,{target:"tools"}),i,Object(n["h"])("div",o,[s,Object(n["h"])("div",u,[p,Object(n["h"])("span",c,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>Pe.mass.value=e),onKeyup:a[2]||(a[2]=Object(n["F"])(e=>Ce.calculate("mass"),["enter"]))},null,544),[[n["C"],Pe.mass.value]])]),Object(n["h"])("span",r,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[3]||(a[3]=e=>Pe.mass.unity=e)},[d],512),[[n["B"],Pe.mass.unity]])]),v]),Object(n["h"])("div",b,[h,Object(n["h"])("span",y,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[4]||(a[4]=e=>Pe.radius.value=e),onKeyup:a[5]||(a[5]=Object(n["F"])(e=>Ce.calculate("radius"),["enter"]))},null,544),[[n["C"],Pe.radius.value]])]),Object(n["h"])("span",j,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[6]||(a[6]=e=>Pe.radius.unity=e)},[O],512),[[n["B"],Pe.radius.unity]])]),m]),Object(n["h"])("div",g,[f,Object(n["h"])("span",k,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[7]||(a[7]=e=>Pe.surface.value=e),onKeyup:a[8]||(a[8]=Object(n["F"])(e=>Ce.calculate("surface"),["enter"]))},null,544),[[n["C"],Pe.surface.value]])]),Object(n["h"])("span",M,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[9]||(a[9]=e=>Pe.surface.unity=e)},[E],512),[[n["B"],Pe.surface.unity]])]),V]),Object(n["h"])("div",U,[I,Object(n["h"])("span",$,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[10]||(a[10]=e=>Pe.density.value=e),onKeyup:a[11]||(a[11]=Object(n["F"])(e=>Ce.calculate("density"),["enter"]))},null,544),[[n["C"],Pe.density.value]])]),Object(n["h"])("span",P,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[12]||(a[12]=e=>Pe.density.unity=e)},[C],512),[[n["B"],Pe.density.unity]])]),x]),Object(n["h"])("div",F,[T,Object(n["h"])("span",w,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[13]||(a[13]=e=>Pe.gravity.value=e),onKeyup:a[14]||(a[14]=Object(n["F"])(e=>Ce.calculate("gravity"),["enter"]))},null,544),[[n["C"],Pe.gravity.value]])]),Object(n["h"])("span",B,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[15]||(a[15]=e=>Pe.gravity.unity=e)},[G,K,A],512),[[n["B"],Pe.gravity.unity]])]),L]),Object(n["h"])("div",Y,[z,Object(n["h"])("span",J,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[16]||(a[16]=e=>Pe.tide.value=e),onKeyup:a[17]||(a[17]=Object(n["F"])(e=>Ce.calculate("tide"),["enter"]))},null,544),[[n["C"],Pe.tide.value]])]),Object(n["h"])("span",S,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[18]||(a[18]=e=>Pe.tide.unity=e)},[_,q,D],512),[[n["B"],Pe.tide.unity]])]),H]),Object(n["h"])("div",W,[Q,Object(n["h"])("span",R,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[19]||(a[19]=e=>Pe.time.value=e),onKeyup:a[20]||(a[20]=Object(n["F"])(e=>Ce.calculate("time"),["enter"]))},null,544),[[n["C"],Pe.time.value]])]),Object(n["h"])("span",Z,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[21]||(a[21]=e=>Pe.time.unity=e)},[N],512),[[n["B"],Pe.time.unity]])]),X]),Object(n["h"])("div",ee,[ae,Object(n["h"])("span",te,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[22]||(a[22]=e=>Pe.entropy.value=e),onKeyup:a[23]||(a[23]=Object(n["F"])(e=>Ce.calculate("entropy"),["enter"]))},null,544),[[n["C"],Pe.entropy.value]])]),ne,le]),Object(n["h"])("div",ie,[oe,Object(n["h"])("span",se,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[24]||(a[24]=e=>Pe.temperature.value=e),onKeyup:a[25]||(a[25]=Object(n["F"])(e=>Ce.calculate("temperature"),["enter"]))},null,544),[[n["C"],Pe.temperature.value]])]),Object(n["h"])("span",ue,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[26]||(a[26]=e=>Pe.temperature.unity=e)},[pe,ce,re,de],512),[[n["B"],Pe.temperature.unity]])]),ve]),Object(n["h"])("div",be,[he,Object(n["h"])("span",ye,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[27]||(a[27]=e=>Pe.luminousity.value=e),onKeyup:a[28]||(a[28]=Object(n["F"])(e=>Ce.calculate("luminousity"),["enter"]))},null,544),[[n["C"],Pe.luminousity.value]])]),Object(n["h"])("span",je,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[29]||(a[29]=e=>Pe.luminousity.unity=e)},[Oe,me,ge,fe],512),[[n["B"],Pe.luminousity.unity]])]),ke]),Object(n["h"])("div",Me,[Ee,Object(n["h"])("span",Ve,[Object(n["E"])(Object(n["h"])("input",{type:"number","onUpdate:modelValue":a[30]||(a[30]=e=>Pe.lifetime.value=e),onKeyup:a[31]||(a[31]=Object(n["F"])(e=>Ce.calculate("lifetime"),["enter"]))},null,544),[[n["C"],Pe.lifetime.value]])]),Object(n["h"])("span",Ue,[Object(n["E"])(Object(n["h"])("select",{"onUpdate:modelValue":a[32]||(a[32]=e=>Pe.lifetime.unity=e)},[Ie],512),[[n["B"],Pe.lifetime.unity]])]),$e])],512)],64)}),Ce={lightspeed:299792458,gravity:66743e-15,planck:662607015e-42,planckbar:10545718e-41,boltzman:138064852e-31,e:1602176634e-28,eV:1602176634e-28,massE:910938356e-39,AU:149597870700};Ce.planckLength=(Ce.planckbar*Ce.gravity/Ce.lightspeed**3)**.5,Ce.planckTime=Ce.planckLength/Ce.lightspeed,Ce.planckArea=Ce.planckLength**2,Ce.planckVolumn=Ce.planckLength**3,Ce.planckMass=(Ce.planckbar*Ce.lightspeed/Ce.gravity)**.5,Ce.planckEnergy=Ce.planckMass/Ce.lightspeed**2,Ce.planckTemperature=(Ce.planckbar*Ce.lightspeed**5/Ce.gravity/Ce.boltzman**2)**.5,Ce.planckForce=Ce.lightspeed**4/Ce.gravity,Ce.planckAccelation=Ce.lightspeed/Ce.planckTime,Ce.planckPower=Ce.planckEnergy/Ce.planckTime,Ce.planckDensity=Ce.planckMass/Ce.planckLength**3,Ce.parsecs=648e3*Ce.AU/Math.PI,Ce.secondsInYear=31536e3,Ce.lightyear=Ce.lightspeed*Ce.secondsInYear,Ce.absoluteZero=-273.16,Ce.C2F=[5/9,-32];const xe={mass:[1.9891e30,597237e19,1e3,1,.001,Ce.eV/Ce.lightspeed/Ce.lightspeed,Ce.massE,Ce.planckMass],radius:[Ce.parsecs,Ce.lightyear,Ce.AU,Ce.lightspeed,1e3,1,.01,1e-9,1e-12,Ce.planckTime],surface:[],density:[1410,5510,1,1e3,Ce.planckDensity],gravity:[9.80665,1,Ce.planckAccelation],tide:[30829012181674645e-22,1,Ce.planckAccelation/Ce.planckLength],time:[1e8*Ce.secondsInYear,1e6*Ce.secondsInYear,1e4*Ce.secondsInYear,100*Ce.secondsInYear,Ce.secondsInYear,86400,3600,60,1,1e-9,1e-12,Ce.planckTime],entropy:[1],temperature:[1,[1,273.15],[5/9,273.15-160/9],Ce.planckTemperature],luminousity:[1,1e3,1e6,38599999999999995e10],lifetime:[]};for(let Be of xe.radius)xe.surface.push(Be**2);for(let Be of xe.time)xe.lifetime.push(Be);const Fe={mass({value:e,unity:a}){return e*xe.mass[a]},radius({value:e,unity:a}){var t=e*xe.radius[a];return t*Ce.lightspeed**2/(2*Ce.gravity)},surface({value:e,unity:a}){var t=e*xe.surface[a],n=t*Ce.lightspeed**4/(Ce.gravity**2*16*Math.PI);return n**.5},density({value:e,unity:a}){var t=e*xe.density[a],n=3*Ce.lightspeed**6/(Ce.gravity**3*32*Math.PI)/t;return n**.5},gravity({value:e,unity:a}){var t=e*xe.gravity[a];return Ce.lightspeed**4/(4*Ce.gravity)/t},tide({value:e,unity:a}){var t=e*xe.tide[a],n=Ce.lightspeed**6/(Ce.gravity**2*4)/t;return n**.5},time({value:e,unity:a}){var t=e*xe.time[a];return t*Ce.lightspeed**3/(Ce.gravity*Math.PI)},entropy({value:e,unity:a}){var t=entropy*(Ce.planckbar*Ce.lightspeed)/(4*Ce.gravity*Math.PI);return t**.5},temperature({value:e,unity:a}){var t;if(3===a)t=e*xe.temperature[a];else if(a>0){let n=xe.temperature[a];t=e*n[0]+n[1]}else t=e;return Ce.planckbar*Ce.lightspeed**3/(8*Math.PI*Ce.boltzman*Ce.gravity)/t},luminousity({value:e,unity:a}){var t=e*xe.luminousity[a],n=Ce.planckbar*Ce.lightspeed**6/(15360*Math.PI*Ce.gravity**2)/t;return n**.5},lifetime({value:e,unity:a}){var t=e*xe.lifetime[a],n=t*(1.8083*Ce.planckbar*Ce.lightspeed**4)/(5120*Math.PI*Ce.gravity**2);return n**(1/3)}},Te={mass(e,a){return e/xe.mass[a]},radius(e,a){var t=e*(2*Ce.gravity)/Ce.lightspeed**2;return t/xe.radius[a]},surface(e,a){var t=e**2*(16*Math.PI*Ce.gravity**2)/Ce.lightspeed**4;return t/xe.surface[a]},density(e,a){var t=3*Ce.lightspeed**6/(32*Math.PI*Ce.gravity**3)/e**2;return t/xe.density[a]},gravity(e,a){var t=Ce.lightspeed**4/(4*Ce.gravity)/e;return t/xe.gravity[a]},tide(e,a){var t=Ce.lightspeed**6/(4*Ce.gravity**2)/e**2;return t/xe.tide[a]},time(e,a){var t=e*(Math.PI*Ce.gravity)/Ce.lightspeed**3;return t/xe.time[a]},entropy(e,a){return e**2*(4*Math.PI*Ce.gravity)/(Ce.planckbar*Ce.lightspeed)},temperature(e,a){var t=Ce.planckbar*Ce.lightspeed**3/(8*Math.PI*Ce.boltzman*Ce.gravity)/e;if(0===a)return t;if(3===a)return t/xe.temperature[3];var n=xe.temperature[a];return(t-n[1])/n[0]},luminousity(e,a){var t=Ce.planckbar*Ce.lightspeed**6/(15360*Math.PI*Ce.gravity**2)/e**2;return t/xe.luminousity[a]},lifetime(e,a){var t=e**3*(5120*Math.PI*Ce.gravity**2)/(1.8083*Ce.planckbar*Ce.lightspeed**4);return t/xe.lifetime[a]}};var we={name:"ParseMarkup",data(){return{mass:{value:1,unity:0},radius:{value:1,unity:4},surface:{value:1,unity:4},density:{value:1,unity:0},gravity:{value:1,unity:1},tide:{value:1,unity:1},time:{value:1,unity:8},entropy:{value:1,unity:0},temperature:{value:1,unity:0},luminousity:{value:1,unity:0},lifetime:{value:1,unity:4}}},mounted(){var e=this.$refs.CalTable.querySelectorAll(".line .express");[].forEach.call(e,async e=>{MathJax.Hub.Queue(["Typeset",MathJax.Hub,e])}),this.calculate("mass"),callPageLoaded()},methods:{calculate(e){var a=Fe[e](this[e]);for(let t in Te)t!==e&&(this[t].value=Te[t](a,this[t].unity))}}};t("3be1");we.render=Pe,we.__scopeId="data-v-5800d56a";a["default"]=we}}]);
//# sourceMappingURL=chunk-5b771ea5.js.map