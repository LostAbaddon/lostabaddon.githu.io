const getDTMatch=(e,t,r,s)=>{isNaN(s)&&(s=r);var g=e.match(t);return g?g=g.length:g=s,g<r&&(g=r),g},formatString=(e,t)=>{if(t===0)return"";var r=e.length;return r>t?e=e.substring(r-t,r):r<t&&(e=e.padStart(t,"0")),e},getDateString=(e,t,r,s)=>{var g=[];return e.length>0&&g.push(e),t.length>0&&g.push(t),r.length>0&&g.push(r),g.join(s)},getTimeString=(e,t,r,s,g)=>{var n=[];e.length>0&&n.push(e),t.length>0&&n.push(t),r.length>0&&n.push(r);var a=n.join(g);return s.length>0&&(a+="."+s),a},timeNormalize=(e,t="YYYYMMDDhhmmss",r="/",s=":",g=" ")=>{e=e||new Date;var n=getDTMatch(t,/Y/g,0,0),a=getDTMatch(t,/M/g,1,0),v=getDTMatch(t,/D/g,1,0),u=getDTMatch(t,/h/g,0,0),l=getDTMatch(t,/m/g,0,0),p=getDTMatch(t,/s/g,0,0),c=getDTMatch(t,/x/g,0),D=formatString(e.getYear()+1900+"",n),M=formatString(e.getMonth()+1+"",a),f=formatString(e.getDate()+"",v),o=formatString(e.getHours()+"",u),Y=formatString(e.getMinutes()+"",l),S=formatString(e.getSeconds()+"",p),T=formatString(e.getMilliseconds()+"",c),h=getDateString(D,M,f,r),i=getTimeString(o,Y,S,T,s);return i.length===0?h:h+g+i};_("Utils").getTimeString=timeNormalize;
