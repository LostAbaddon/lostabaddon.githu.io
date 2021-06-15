(()=>{const e=RushGo.Win;class t{constructor(i,s){this.state=t.Normal,isNaN(i)||(this.state=i),this.score=0,isNaN(s)||(this.score=s),this.update()}update(){this.state===t.MustWin?this.score=e*e:this.state===t.WillWin?this.score=e*e-e:this.state===t.MayWin?this.score=e:this.state===t.MayLose?this.score=-e:this.state===t.WillLose?this.score=e-e*e:this.state===t.MustLose?this.score=-e*e:this.state===t.Alone&&(this.score=0)}copy(){return new t(this.state,this.score)}}t.MustWin=3,t.WillWin=2,t.MayWin=1,t.Normal=0,t.Alone=-1,t.MayLose=-2,t.WillLose=-3,t.MustLose=-4,t.Forbidden=-10,t.getMax=(...C)=>C.length?new t:(C.sort((i,s)=>{var l=s.state-i.state;return l!==0?l:s.score-i.score}),C[0].copy());class d{constructor(){this.pointCount=0,this.emptyCount=0,this.borderType=0,this.neighbor=0,this.farBorder=0}toString(){return this.pointCount+":"+this.borderType+":"+this.emptyCount+":"+this.neighbor}}class b{constructor(i,s,l=0){if(this.emptyCount=0,this.state=new t,this.halves=[],this.halves.push(i),this.halves.push(s),this.pointCount=i.pointCount+s.pointCount,i.borderType===2&&this.emptyCount++,s.borderType===2&&this.emptyCount++,this.pointCount+1>=e)this.state.state=t.MustWin;else if(i.neighbor<=0&&s.neighbor<=0&&this.pointCount===0)this.state.state=t.Alone;else if(i.borderType!==2&&s.borderType!==2&&this.pointCount+1<e)this.state.state=t.Alone;else if(i.borderType!==2&&s.borderType===2&&s.farBorder===0&&this.pointCount+1+s.emptyCount+s.neighbor<e)this.state.state=t.Alone;else if(s.borderType!==2&&i.borderType===2&&i.farBorder===0&&this.pointCount+1+i.emptyCount+i.neighbor<e)this.state.state=t.Alone;else if(i.borderType===2&&i.farBorder===0&&s.borderType===2&&s.farBorder===0&&this.pointCount+1+i.emptyCount+i.neighbor+s.emptyCount+s.neighbor<e)this.state.state=t.Alone;else if(this.pointCount+this.emptyCount>=e)this.state.state=t.WillWin;else{let p=!1;if(i.neighbor>0&&s.neighbor>0&&i.emptyCount===1&&s.emptyCount===1){let h=this.pointCount+1;(h+i.neighbor>=e||h+s.neighbor>=e)&&(p=!0,this.state.state=t.WillWin)}if(!p){let h=e-this.pointCount;h=this.emptyCount/h,h-=(1-l)*this.emptyCount/e;let u=0,g=0;i.borderType===2&&i.neighbor>0&&(u=i.neighbor/(i.emptyCount+e)),s.borderType===2&&s.neighbor>0&&(g=s.neighbor/(s.emptyCount+e)),h+=(u+g)/2*l,this.state.score=h}}this.state.update(),this.halves.sort((p,h)=>{var u=h.pointCount-p.pointCount;return u!==0||(u=h.emptyCount-p.emptyCount,u!==0)||(u=h.neighbor-p.neighbor),u})}toString(){return this.pointCount+"|"+this.halves[0].toString()+"|"+this.halves[1].toString()}}class W{constructor(i,...s){if(this.lines=[],this.lineCount=0,this.pointCount=0,this.emptyCount=0,this.state=new t,!(!s||s.length===0)){var l=[],p=[],h=[],u=[],g=0;if(s.forEach(r=>{this.lines.push(r),r.state.state===t.Normal?u.push(r):r.state.state===t.MustWin?l.push(r):r.state.state===t.WillWin?p.push(r):r.state.state===t.MayWin&&h.push(r)}),l.length>0)this.state.state=t.MustWin;else if(p.length>0)this.state.state=t.WillWin;else if(h.length>0)this.state.state=t.MayWin;else if(u.length>0){this.state.state=t.Normal;let r=[];if(u.forEach(n=>{this.lineCount++,this.pointCount+=n.pointCount,this.emptyCount+=n.emptyCount,this.state.score+=n.state.score,r.push(n)}),r.length>1){let n=[];r.forEach(o=>{if(o.emptyCount===0)return;let c=!1,y=e-o.pointCount,m=o.emptyCount;if(y<=m+1&&(n.push(Math.max(1,y)),c=!0),!c&&o.halves[0].emptyCount===1){m=o.halves[1].borderType===2?1:0,o.halves[0].farBorder===1&&m++;let a=o.pointCount+1+o.halves[0].neighbor;a=e-a,a<=m&&(y=a+1,n.push(y),c=!0)}if(!c&&o.halves[1].emptyCount===1){m=o.halves[0].borderType===2?1:0,o.halves[1].farBorder===1&&m++;let a=o.pointCount+1+o.halves[1].neighbor;a=e-a,a<=m&&(y=a+1,n.push(y),c=!0)}}),n.length>=2&&(n.sort((c,y)=>c-y),n.length>2&&(n=n.splice(0,2)),n[1]<=2?this.state.state=t.WillWin:this.state.state=t.MayWin)}}else this.state.state=t.Alone;this.state.update(),this.state.score+=g,this.lines.sort((r,n)=>{var o=n.pointCount-r.pointCount;return o!==0||(o=n.emptyCount-r.emptyCount,o!==0)||(o=n.halves[0].pointCount-r.halves[0].pointCount,o!==0)||(o=n.halves[0].emptyCount-r.halves[0].emptyCount,o!==0)||(o=n.halves[0].neighbor-r.halves[0].neighbor),o})}}toString(){return this.lines.map(i=>i.toString()).join("|")}}class f{constructor(){this.mustWins=[],this.willWins=[],this.mayWins=[],this.normals=[],this.mayLoses=[],this.willLoses=[],this.mustLoses=[]}get scoreW(){return this.mustWins.length*e*e+this.willWins.length*(e*e-e)+this.mayWins.length*e}get scoreL(){return this.mustLoses.length*e*e+this.willLoses.length*(e*e-e)+this.mayLoses.length*e}}window.RushGo=window.RushGo||{},window.RushGo.State=t,window.RushGo.HalfLine=d,window.RushGo.SingleLine=b,window.RushGo.CrossPoint=W,window.RushGo.ValueField=f})();
