import{S as ce,i as fe,s as _e,k as g,q as b,l as m,m as p,r as T,h as u,n as Y,p as te,b as Z,C as o,u as R,A as re,a as le,I as ge,c as se,f as V,d as ie,t as X,J as ue,g as de,v as me,w as pe,x as ve,y as Ee}from"../../chunks/index-e5d3839d.js";import{d as ee}from"../../chunks/data-f4c5a056.js";function be(i){let t,r,l;return{c(){t=g("div"),r=g("p"),l=b(i[0]),this.h()},l(_){t=m(_,"DIV",{class:!0,style:!0});var e=p(t);r=m(e,"P",{class:!0});var h=p(r);l=T(h,i[0]),h.forEach(u),e.forEach(u),this.h()},h(){Y(r,"class","svelte-1qqjph6"),Y(t,"class","formButton svelte-1qqjph6"),te(t,"background-color",i[1])},m(_,e){Z(_,t,e),o(t,r),o(r,l)},p(_,[e]){e&1&&R(l,_[0]),e&2&&te(t,"background-color",_[1])},i:re,o:re,d(_){_&&u(t)}}}function Te(i,t,r){let{plasil:l}=t,{grehn:_}=t,{team:e}=t,h,w="#dddddd";return l>_?e=="P&B"?(h="W",w="#01dfb6"):(h="L",w="#ff6b80"):l==_?h="D":e=="P&B"?(h="L",w="#ff6b80"):(h="W",w="#01dfb6"),i.$$set=E=>{"plasil"in E&&r(2,l=E.plasil),"grehn"in E&&r(3,_=E.grehn),"team"in E&&r(4,e=E.team)},[h,w,l,_,e]}class we extends ce{constructor(t){super(),fe(this,t,Te,be,_e,{plasil:2,grehn:3,team:4})}}function ae(i,t,r){const l=i.slice();return l[3]=t[r],l}function oe(i,t,r){const l=i.slice();return l[6]=t[r],l}function ne(i){let t,r;return t=new we({props:{plasil:i[6].score_plasil,grehn:i[6].score_grehn,team:i[3].name}}),{c(){me(t.$$.fragment)},l(l){pe(t.$$.fragment,l)},m(l,_){ve(t,l,_),r=!0},p(l,_){const e={};_&1&&(e.team=l[3].name),t.$set(e)},i(l){r||(V(t.$$.fragment,l),r=!0)},o(l){X(t.$$.fragment,l),r=!1},d(l){Ee(t,l)}}}function he(i){let t,r,l=i[3].name+"",_,e,h=i[3].played+"",w,E,F=i[3].won+"",q,S,P=i[3].drawn+"",I,y,W=i[3].lost+"",L,H,G=i[3].g.toString().replace(",",":")+"",D,j,A,C=i[3].won*3+i[3].drawn+"",B,c,z,a,v=i[1],s=[];for(let n=0;n<v.length;n+=1)s[n]=ne(oe(i,v,n));const k=n=>X(s[n],1,1,()=>{s[n]=null});return{c(){t=g("tr"),r=g("td"),_=b(l),e=g("td"),w=b(h),E=g("td"),q=b(F),S=g("td"),I=b(P),y=g("td"),L=b(W),H=g("td"),D=b(G),j=g("td"),A=g("b"),B=b(C),c=g("td");for(let n=0;n<s.length;n+=1)s[n].c();z=le(),this.h()},l(n){t=m(n,"TR",{});var f=p(t);r=m(f,"TD",{});var d=p(r);_=T(d,l),d.forEach(u),e=m(f,"TD",{});var J=p(e);w=T(J,h),J.forEach(u),E=m(f,"TD",{});var M=p(E);q=T(M,F),M.forEach(u),S=m(f,"TD",{});var N=p(S);I=T(N,P),N.forEach(u),y=m(f,"TD",{});var O=p(y);L=T(O,W),O.forEach(u),H=m(f,"TD",{});var Q=p(H);D=T(Q,G),Q.forEach(u),j=m(f,"TD",{});var U=p(j);A=m(U,"B",{});var K=p(A);B=T(K,C),K.forEach(u),U.forEach(u),c=m(f,"TD",{class:!0});var x=p(c);for(let $=0;$<s.length;$+=1)s[$].l(x);z=se(x),x.forEach(u),f.forEach(u),this.h()},h(){Y(c,"class","collapse svelte-vpk38p")},m(n,f){Z(n,t,f),o(t,r),o(r,_),o(t,e),o(e,w),o(t,E),o(E,q),o(t,S),o(S,I),o(t,y),o(y,L),o(t,H),o(H,D),o(t,j),o(j,A),o(A,B),o(t,c);for(let d=0;d<s.length;d+=1)s[d].m(c,null);o(c,z),a=!0},p(n,f){if((!a||f&1)&&l!==(l=n[3].name+"")&&R(_,l),(!a||f&1)&&h!==(h=n[3].played+"")&&R(w,h),(!a||f&1)&&F!==(F=n[3].won+"")&&R(q,F),(!a||f&1)&&P!==(P=n[3].drawn+"")&&R(I,P),(!a||f&1)&&W!==(W=n[3].lost+"")&&R(L,W),(!a||f&1)&&G!==(G=n[3].g.toString().replace(",",":")+"")&&R(D,G),(!a||f&1)&&C!==(C=n[3].won*3+n[3].drawn+"")&&R(B,C),f&3){v=n[1];let d;for(d=0;d<v.length;d+=1){const J=oe(n,v,d);s[d]?(s[d].p(J,f),V(s[d],1)):(s[d]=ne(J),s[d].c(),V(s[d],1),s[d].m(c,z))}for(de(),d=v.length;d<s.length;d+=1)k(d);ie()}},i(n){if(!a){for(let f=0;f<v.length;f+=1)V(s[f]);a=!0}},o(n){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)X(s[f]);a=!1},d(n){n&&u(t),ue(s,n)}}}function ke(i){let t,r,l,_,e,h,w,E,F,q,S,P,I,y,W,L,H,G,D,j,A,C,B=i[0],c=[];for(let a=0;a<B.length;a+=1)c[a]=he(ae(i,B,a));const z=a=>X(c[a],1,1,()=>{c[a]=null});return{c(){t=le(),r=g("table"),l=g("tr"),_=g("th"),e=b("Club"),h=g("th"),w=b("P"),E=g("th"),F=b("W"),q=g("th"),S=b("D"),P=g("th"),I=b("L"),y=g("th"),W=b("G"),L=g("th"),H=g("b"),G=b("Pts"),D=g("th"),j=b("Form"),A=le();for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){ge('[data-svelte="svelte-3y6u34"]',document.head).forEach(u),t=se(a),r=m(a,"TABLE",{});var s=p(r);l=m(s,"TR",{});var k=p(l);_=m(k,"TH",{});var n=p(_);e=T(n,"Club"),n.forEach(u),h=m(k,"TH",{});var f=p(h);w=T(f,"P"),f.forEach(u),E=m(k,"TH",{});var d=p(E);F=T(d,"W"),d.forEach(u),q=m(k,"TH",{});var J=p(q);S=T(J,"D"),J.forEach(u),P=m(k,"TH",{});var M=p(P);I=T(M,"L"),M.forEach(u),y=m(k,"TH",{});var N=p(y);W=T(N,"G"),N.forEach(u),L=m(k,"TH",{});var O=p(L);H=m(O,"B",{});var Q=p(H);G=T(Q,"Pts"),Q.forEach(u),O.forEach(u),D=m(k,"TH",{style:!0,class:!0});var U=p(D);j=T(U,"Form"),U.forEach(u),k.forEach(u),A=se(s);for(let K=0;K<c.length;K+=1)c[K].l(s);s.forEach(u),this.h()},h(){document.title="Breaktime Bhora | Tables",te(D,"width","30%"),Y(D,"class","collapse svelte-vpk38p")},m(a,v){Z(a,t,v),Z(a,r,v),o(r,l),o(l,_),o(_,e),o(l,h),o(h,w),o(l,E),o(E,F),o(l,q),o(q,S),o(l,P),o(P,I),o(l,y),o(y,W),o(l,L),o(L,H),o(H,G),o(l,D),o(D,j),o(r,A);for(let s=0;s<c.length;s+=1)c[s].m(r,null);C=!0},p(a,[v]){if(v&3){B=a[0];let s;for(s=0;s<B.length;s+=1){const k=ae(a,B,s);c[s]?(c[s].p(k,v),V(c[s],1)):(c[s]=he(k),c[s].c(),V(c[s],1),c[s].m(r,null))}for(de(),s=B.length;s<c.length;s+=1)z(s);ie()}},i(a){if(!C){for(let v=0;v<B.length;v+=1)V(c[v]);C=!0}},o(a){c=c.filter(Boolean);for(let v=0;v<c.length;v+=1)X(c[v]);C=!1},d(a){a&&u(t),a&&u(r),ue(c,a)}}}function De(i,t,r){let l=[...ee[0].stats].slice(-5);function _(h){return{name:h,played:ee[0].stats.length,won:0,drawn:0,lost:0,g:[0,0]}}let e=[new _("P&B"),new _("G&J")];return ee[0].stats.forEach(h=>{h.score_plasil>h.score_grehn?(r(0,e[0].won+=1,e),r(0,e[1].lost+=1,e)):h.score_grehn>h.score_plasil?(r(0,e[1].won+=1,e),r(0,e[0].lost+=1,e)):(r(0,e[1].drawn+=1,e),r(0,e[0].drawn+=1,e)),r(0,e[0].g[0]+=h.score_plasil,e),r(0,e[0].g[1]+=h.score_grehn,e),r(0,e[1].g[0]+=h.score_grehn,e),r(0,e[1].g[1]+=h.score_plasil,e)}),(e[0].points<e[1].points||e[0].points===e[1].points&&e[0].g[0]<e[1].g[0])&&e.reverse(),[e,l]}class ye extends ce{constructor(t){super(),fe(this,t,De,ke,_e,{})}}export{ye as default};
