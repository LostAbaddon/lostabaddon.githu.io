(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de03c"],{"849c":function(a,e,s){"use strict";s.r(e);var b=s("79c4");const d=Object(b["C"])("data-v-3a07bbee");Object(b["t"])("data-v-3a07bbee");const t={class:"RushGo"},v=Object(b["f"])('<div class="actionPad" data-v-3a07bbee><div class="panel info" data-v-3a07bbee><div class="info info_header" data-v-3a07bbee><span class="name" data-v-3a07bbee>选手</span><span class="win" data-v-3a07bbee>胜数</span><span class="time" data-v-3a07bbee>用时</span><span class="loop" data-v-3a07bbee>手数：<span data-v-3a07bbee>120</span></span></div><div class="user info black selected" data-v-3a07bbee></div><div class="user info white" data-v-3a07bbee></div></div><div class="panel control" data-v-3a07bbee><div class="subpanel review" data-v-3a07bbee><div class="btn prev" data-v-3a07bbee>上一步</div><div class="btn next" data-v-3a07bbee>下一步</div></div><div class="subpanel action" data-v-3a07bbee><div class="btn restart" data-v-3a07bbee>重新开局</div></div></div></div><div class="gameArea" data-v-3a07bbee><div class="boardPad" data-v-3a07bbee><canvas id="GoBoard" data-v-3a07bbee></canvas></div><div class="resultPad init show" data-v-3a07bbee><div class="info" data-v-3a07bbee>点击选手名选择角色</div><div class="restart" data-v-3a07bbee>开战</div><div class="chooseMode" data-v-3a07bbee>选择模式</div><div class="review" data-v-3a07bbee>复盘</div></div><div class="roleSelector" data-v-3a07bbee><div class="title" data-v-3a07bbee>请选择角色类型：</div><div class="roleList" data-v-3a07bbee></div><div class="btnArea" data-v-3a07bbee><div class="btn addNew" data-v-3a07bbee>添加角色</div><div class="btn cancel" data-v-3a07bbee>取消</div></div></div><div class="addRole" data-v-3a07bbee><div class="title" data-v-3a07bbee>添加角色</div><div class="type" data-v-3a07bbee><span class="label" data-v-3a07bbee>类型：</span><select name="RoleType" data-v-3a07bbee></select></div><div class="type" data-v-3a07bbee><span class="label" data-v-3a07bbee>名字：</span><input type="text" name="Name" value="神秘人" data-v-3a07bbee></div><div class="prop" data-v-3a07bbee><span class="label" data-v-3a07bbee>进攻性：</span><input type="number" min="0" max="1" step="0.05" name="Attacktive" value="0.5" data-v-3a07bbee><span class="sep" data-v-3a07bbee></span><span class="label" data-v-3a07bbee>忍耐性：</span><input type="number" min="-10" max="10" step="1" name="Attitude" value="0" data-v-3a07bbee></div><div class="prop" data-v-3a07bbee><span class="label" data-v-3a07bbee>预测深度：</span><input type="number" min="0" max="100" step="1" name="Deepth" value="0" data-v-3a07bbee><span class="sep" data-v-3a07bbee></span><span class="label" data-v-3a07bbee>预测广度：</span><input type="number" min="1" max="100" step="1" name="Range" value="1" data-v-3a07bbee><span class="sep" data-v-3a07bbee></span><span class="label" data-v-3a07bbee>换位思考：</span><span class="radio" data-v-3a07bbee><input type="radio" name="ThinkAsEnemy" value="true" data-v-3a07bbee>是</span><span class="radio" data-v-3a07bbee><input type="radio" name="ThinkAsEnemy" value="false" checked data-v-3a07bbee>否</span></div><div class="prop aiThree" data-v-3a07bbee><span class="label" data-v-3a07bbee>深思广度：</span><input type="number" min="0" max="100" step="1" name="DeepRange" value="2" data-v-3a07bbee><span class="sep" data-v-3a07bbee></span><span class="label" data-v-3a07bbee>深思减速：</span><input type="number" min="0" max="10" step="1" name="DecayPower" value="2" data-v-3a07bbee><span class="sep" data-v-3a07bbee></span><span class="label" data-v-3a07bbee>旁支权重：</span><input type="number" min="0" max="1" step="0.05" name="DecayRate" value="0.5" data-v-3a07bbee></div><div class="type" data-v-3a07bbee><span class="label" data-v-3a07bbee>外势倾向：</span><input type="number" min="0" max="1" step="0.05" name="Outsider" value="0" data-v-3a07bbee></div><div class="controller" data-v-3a07bbee><span class="btn cancel" data-v-3a07bbee>取消</span><span class="btn ok" data-v-3a07bbee>添加</span></div></div><div class="gameMode" data-v-3a07bbee><div class="title" data-v-3a07bbee>选择模式</div><div class="subpanel" data-v-3a07bbee><span class="subtitle" data-v-3a07bbee>是否有禁手：</span><span class="radio" data-v-3a07bbee><input type="radio" name="ForbiddenHands" value="true" data-v-3a07bbee>是</span><span class="radio" data-v-3a07bbee><input type="radio" name="ForbiddenHands" value="false" checked data-v-3a07bbee>否</span></div><div class="subpanel" data-v-3a07bbee><span class="subtitle" data-v-3a07bbee>　开局座子：</span><span class="radio" data-v-3a07bbee><input type="radio" name="StartWithInits" value="0" checked data-v-3a07bbee>无</span><span class="radio" data-v-3a07bbee><input type="radio" name="StartWithInits" value="3" data-v-3a07bbee>三座子</span><span class="radio" data-v-3a07bbee><input type="radio" name="StartWithInits" value="5" data-v-3a07bbee>五座子</span></div><div class="center" data-v-3a07bbee><span class="btn start" data-v-3a07bbee>确定</span></div></div></div>',2);Object(b["r"])();const n=d((a,e,s,d,n,i)=>(Object(b["q"])(),Object(b["d"])("div",t,[v])));var i=!0;const l=new BroadcastChannel("change-loading-hint");l.addEventListener("message",a=>{RushGo.onLeave()});var p={name:"RushGo",async mounted(){i&&(await Promise.all([loadCSS("/css/rushgo.css"),loadJS("/js/rushgo.js"),loadJS("/js/rushgo/aimanager.js")]),await Promise.all([loadJS("/js/rushgo/basic.js")]),await Promise.all([loadJS("/js/rushgo/ai_one.js")]),await Promise.all([loadJS("/js/rushgo/ai_two.js"),loadJS("/js/rushgo/ai_three.js")]),await Promise.all([loadJS("/js/rushgo/ai_four.js")]),i=!1),RushGo.init(),await wait(),callPageLoaded()}};p.render=n,p.__scopeId="data-v-3a07bbee";e["default"]=p}}]);
//# sourceMappingURL=chunk-2d0de03c.js.map