import{S as y,i as C,s as N,a as P,k as m,q as H,a6 as z,h as n,c as R,l as u,m as v,r as M,b as B,C as s,E as $,O as F,G as I,u as q}from"../../../chunks/index-e416c001.js";import{m as J}from"../../../chunks/season-5c17fed0.js";function j(h,o,r){const l=h.slice();return l[1]=o[r],l}function w(h){let o,r,l=new Date(h[1].date.split("/").reverse().join("-")).toLocaleDateString(void 0,{month:"short",day:"numeric"})+"",c,E,i=h[1].score_plasil+"",k,d,T=h[1].score_grehn+"",p,g,D=(h[1].motm||"N/A")+"",_;return{c(){o=m("tr"),r=m("td"),c=H(l),E=m("td"),k=H(i),d=m("td"),p=H(T),g=m("td"),_=H(D)},l(t){o=u(t,"TR",{});var e=v(o);r=u(e,"TD",{});var b=v(r);c=M(b,l),b.forEach(n),E=u(e,"TD",{});var a=v(E);k=M(a,i),a.forEach(n),d=u(e,"TD",{});var f=v(d);p=M(f,T),f.forEach(n),g=u(e,"TD",{});var S=v(g);_=M(S,D),S.forEach(n),e.forEach(n)},m(t,e){B(t,o,e),s(o,r),s(r,c),s(o,E),s(E,k),s(o,d),s(d,p),s(o,g),s(g,_)},p(t,e){e&1&&l!==(l=new Date(t[1].date.split("/").reverse().join("-")).toLocaleDateString(void 0,{month:"short",day:"numeric"})+"")&&q(c,l),e&1&&i!==(i=t[1].score_plasil+"")&&q(k,i),e&1&&T!==(T=t[1].score_grehn+"")&&q(p,T),e&1&&D!==(D=(t[1].motm||"N/A")+"")&&q(_,D)},d(t){t&&n(o)}}}function K(h){let o,r,l,c,E,i,k,d,T,p,g,D,_=h[0],t=[];for(let e=0;e<_.length;e+=1)t[e]=w(j(h,_,e));return{c(){o=P(),r=m("table"),l=m("tr"),c=m("th"),E=H("Date"),i=m("th"),k=H("Plasil"),d=m("th"),T=H("Grehn"),p=m("th"),g=H("MOTM"),D=P();for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){z('[data-svelte="svelte-2tou5i"]',document.head).forEach(n),o=R(e),r=u(e,"TABLE",{});var a=v(r);l=u(a,"TR",{});var f=v(l);c=u(f,"TH",{});var S=v(c);E=M(S,"Date"),S.forEach(n),i=u(f,"TH",{});var G=v(i);k=M(G,"Plasil"),G.forEach(n),d=u(f,"TH",{});var L=v(d);T=M(L,"Grehn"),L.forEach(n),p=u(f,"TH",{});var O=v(p);g=M(O,"MOTM"),O.forEach(n),f.forEach(n),D=R(a);for(let A=0;A<t.length;A+=1)t[A].l(a);a.forEach(n),this.h()},h(){document.title="Breaktime Bhora | Results"},m(e,b){B(e,o,b),B(e,r,b),s(r,l),s(l,c),s(c,E),s(l,i),s(i,k),s(l,d),s(d,T),s(l,p),s(p,g),s(r,D);for(let a=0;a<t.length;a+=1)t[a].m(r,null)},p(e,[b]){if(b&1){_=e[0];let a;for(a=0;a<_.length;a+=1){const f=j(e,_,a);t[a]?t[a].p(f,b):(t[a]=w(f),t[a].c(),t[a].m(r,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=_.length}},i:$,o:$,d(e){e&&n(o),e&&n(r),F(t,e)}}}function Q(h,o,r){let l;return I(h,J,c=>r(0,l=c)),[l]}class W extends y{constructor(o){super(),C(this,o,Q,K,N,{})}}export{W as default};
