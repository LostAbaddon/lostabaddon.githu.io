(()=>{const t=RushGo.Win;class e{static MustWin=3;static WillWin=2;static MayWin=1;static Normal=0;static Alone=-1;static MayLose=-2;static WillLose=-3;static MustLose=-4;static Forbidden=-10;static getMax(...s){return s.length?new e:(s.sort((i,l)=>{var a=l.state-i.state;return a!==0?a:l.score-i.score}),s[0].copy())}state=e.Normal;score=0;constructor(s,i){isNaN(s)||(this.state=s),isNaN(i)||(this.score=i),this.update()}update(){this.state===e.MustWin?this.score=t*t:this.state===e.WillWin?this.score=t*t-t:this.state===e.MayWin?this.score=t:this.state===e.MayLose?this.score=-t:this.state===e.WillLose?this.score=t-t*t:this.state===e.MustLose?this.score=-t*t:this.state===e.Alone&&(this.score=0)}copy(){return new e(this.state,this.score)}}class d{pointCount=0;emptyCount=0;borderType=0;neighbor=0;farBorder=0;toString(){return this.pointCount+":"+this.borderType+":"+this.emptyCount+":"+this.neighbor}}class b{halves=[];pointCount=0;emptyCount=0;state=new e;constructor(s,i,l=0){if(this.halves.push(s),this.halves.push(i),this.pointCount=s.pointCount+i.pointCount,s.borderType===2&&this.emptyCount++,i.borderType===2&&this.emptyCount++,this.pointCount+1>=t)this.state.state=e.MustWin;else if(s.neighbor<=0&&i.neighbor<=0&&this.pointCount===0)this.state.state=e.Alone;else if(s.borderType!==2&&i.borderType!==2&&this.pointCount+1<t)this.state.state=e.Alone;else if(s.borderType!==2&&i.borderType===2&&i.farBorder===0&&this.pointCount+1+i.emptyCount+i.neighbor<t)this.state.state=e.Alone;else if(i.borderType!==2&&s.borderType===2&&s.farBorder===0&&this.pointCount+1+s.emptyCount+s.neighbor<t)this.state.state=e.Alone;else if(s.borderType===2&&s.farBorder===0&&i.borderType===2&&i.farBorder===0&&this.pointCount+1+s.emptyCount+s.neighbor+i.emptyCount+i.neighbor<t)this.state.state=e.Alone;else if(this.pointCount+this.emptyCount>=t)this.state.state=e.WillWin;else{let a=!1;if(s.neighbor>0&&i.neighbor>0&&s.emptyCount===1&&i.emptyCount===1){let u=this.pointCount+1;(u+s.neighbor>=t||u+i.neighbor>=t)&&(a=!0,this.state.state=e.WillWin)}if(!a){let u=t-this.pointCount;u=this.emptyCount/u,u-=(1-l)*this.emptyCount/t;let h=0,m=0;s.borderType===2&&s.neighbor>0&&(h=s.neighbor/(s.emptyCount+t)),i.borderType===2&&i.neighbor>0&&(m=i.neighbor/(i.emptyCount+t)),u+=(h+m)/2*l,this.state.score=u}}this.state.update(),this.halves.sort((a,u)=>{var h=u.pointCount-a.pointCount;return h!==0||(h=u.emptyCount-a.emptyCount,h!==0)||(h=u.neighbor-a.neighbor),h})}toString(){return this.pointCount+"|"+this.halves[0].toString()+"|"+this.halves[1].toString()}}class W{lines=[];lineCount=0;pointCount=0;emptyCount=0;state=new e;constructor(s,...i){if(!(!i||i.length===0)){var l=[],a=[],u=[],h=[],m=0;if(i.forEach(r=>{this.lines.push(r),r.state.state===e.Normal?h.push(r):r.state.state===e.MustWin?l.push(r):r.state.state===e.WillWin?a.push(r):r.state.state===e.MayWin&&u.push(r)}),l.length>0)this.state.state=e.MustWin;else if(a.length>0)this.state.state=e.WillWin;else if(u.length>0)this.state.state=e.MayWin;else if(h.length>0){this.state.state=e.Normal;let r=[];if(h.forEach(n=>{this.lineCount++,this.pointCount+=n.pointCount,this.emptyCount+=n.emptyCount,this.state.score+=n.state.score,r.push(n)}),r.length>1){let n=[];r.forEach(o=>{if(o.emptyCount===0)return;let C=!1,y=t-o.pointCount,c=o.emptyCount;if(y<=c+1&&(n.push(Math.max(1,y)),C=!0),!C&&o.halves[0].emptyCount===1){c=o.halves[1].borderType===2?1:0,o.halves[0].farBorder===1&&c++;let p=o.pointCount+1+o.halves[0].neighbor;p=t-p,p<=c&&(y=p+1,n.push(y),C=!0)}if(!C&&o.halves[1].emptyCount===1){c=o.halves[0].borderType===2?1:0,o.halves[1].farBorder===1&&c++;let p=o.pointCount+1+o.halves[1].neighbor;p=t-p,p<=c&&(y=p+1,n.push(y),C=!0)}}),n.length>=2&&(n.sort((C,y)=>C-y),n.length>2&&(n=n.splice(0,2)),n[1]<=2?this.state.state=e.WillWin:this.state.state=e.MayWin)}}else this.state.state=e.Alone;this.state.update(),this.state.score+=m,this.lines.sort((r,n)=>{var o=n.pointCount-r.pointCount;return o!==0||(o=n.emptyCount-r.emptyCount,o!==0)||(o=n.halves[0].pointCount-r.halves[0].pointCount,o!==0)||(o=n.halves[0].emptyCount-r.halves[0].emptyCount,o!==0)||(o=n.halves[0].neighbor-r.halves[0].neighbor),o})}}toString(){return this.lines.map(s=>s.toString()).join("|")}}class f{mustWins=[];willWins=[];mayWins=[];normals=[];mayLoses=[];willLoses=[];mustLoses=[];get scoreW(){return this.mustWins.length*t*t+this.willWins.length*(t*t-t)+this.mayWins.length*t}get scoreL(){return this.mustLoses.length*t*t+this.willLoses.length*(t*t-t)+this.mayLoses.length*t}}window.RushGo=window.RushGo||{},window.RushGo.State=e,window.RushGo.HalfLine=d,window.RushGo.SingleLine=b,window.RushGo.CrossPoint=W,window.RushGo.ValueField=f})();
