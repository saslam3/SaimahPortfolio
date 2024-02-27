import{j as $e,P as be,g as Q}from"../chunks/params.7f6ba827.js";import{s as pe,e as re,i as M,n as q,d as h,f as w,l as F,a as S,g as C,h as D,m as G,c as T,I as Z,j as k,K as v,L as N,x as ke,p as H,u as _e,O as L,M as te}from"../chunks/scheduler.7a274a43.js";import{S as he,i as me,b as O,d as z,m as B,t as V,c as W,a as I,e as A,g as X}from"../chunks/index.28409b7f.js";import{U as ee,e as Y}from"../chunks/UIcon.9faa29d6.js";import{C as ye}from"../chunks/CardLogo.ffd18bf4.js";import{M as we}from"../chunks/MainTitle.d8ef5e17.js";import{b as se}from"../chunks/paths.13dfdf76.js";import{B as Ce,M as Ee}from"../chunks/Banner.dcb88acb.js";import{T as je}from"../chunks/TabTitle.b1fa419f.js";import{C as ge}from"../chunks/Chip.512491fc.js";import{C as ve}from"../chunks/CardDivider.09b854d8.js";function Ie({params:r}){if(r.slug)return{project:$e.find(l=>l.slug===r.slug)}}const lt=Object.freeze(Object.defineProperty({__proto__:null,load:Ie},Symbol.toStringTag,{value:"Module"}));function oe(r){var $;let e,l,t,n,o=(($=r[0])==null?void 0:$.label)+"",a,s,i,u,p="Click outside the frame to close",y,c;return{c(){e=w("div"),l=w("div"),t=w("div"),n=w("p"),a=F(o),i=S(),u=w("p"),u.textContent=p,this.h()},l(d){e=C(d,"DIV",{class:!0});var x=D(e);l=C(x,"DIV",{class:!0});var m=D(l);t=C(m,"DIV",{class:!0,style:!0});var b=D(t);n=C(b,"P",{class:!0});var K=D(n);a=G(K,o),K.forEach(h),b.forEach(h),i=T(m),u=C(m,"P",{class:!0,["data-svelte-h"]:!0}),Z(u)!=="svelte-hpptvy"&&(u.textContent=p),m.forEach(h),x.forEach(h),this.h()},h(){var d;k(n,"class","font-italic m-t-auto m-x-auto m-b-5 inline-flex bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),k(t,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),k(t,"style",s=`background-image: url(${(d=r[0])==null?void 0:d.src});`),k(u,"class","text-[var(--accent-text)] text-0.7em"),k(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),k(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(d,x){M(d,e,x),v(e,l),v(l,t),v(t,n),v(n,a),v(l,i),v(l,u),y||(c=[N(l,"click",xe),N(l,"keydown",r[7]),N(l,"keypress",r[8]),N(l,"keyup",r[9]),N(l,"keyup",r[10]),N(e,"click",function(){ke(r[1])&&r[1].apply(this,arguments)}),N(e,"click",Ve),N(e,"keydown",r[3]),N(e,"keypress",r[4]),N(e,"keyup",r[5]),N(e,"keyup",r[6])],y=!0)},p(d,x){var m,b;r=d,x&1&&o!==(o=((m=r[0])==null?void 0:m.label)+"")&&H(a,o),x&1&&s!==(s=`background-image: url(${(b=r[0])==null?void 0:b.src});`)&&k(t,"style",s)},d(d){d&&h(e),y=!1,_e(c)}}}function De(r){let e,l=r[2]&&oe(r);return{c(){l&&l.c(),e=re()},l(t){l&&l.l(t),e=re()},m(t,n){l&&l.m(t,n),M(t,e,n)},p(t,[n]){t[2]?l?l.p(t,n):(l=oe(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:q,o:q,d(t){t&&h(e),l&&l.d(t)}}}const xe=r=>r.stopPropagation(),Ve=r=>r.stopPropagation();function Pe(r,e,l){let t,{screenshot:n=void 0}=e,{onClose:o=()=>{l(0,n=void 0)}}=e;function a(d){L.call(this,r,d)}function s(d){L.call(this,r,d)}function i(d){L.call(this,r,d)}function u(d){L.call(this,r,d)}function p(d){L.call(this,r,d)}function y(d){L.call(this,r,d)}function c(d){L.call(this,r,d)}function $(d){L.call(this,r,d)}return r.$$set=d=>{"screenshot"in d&&l(0,n=d.screenshot),"onClose"in d&&l(1,o=d.onClose)},r.$$.update=()=>{r.$$.dirty&1&&l(2,t=typeof n<"u")},[n,o,t,a,s,i,u,p,y,c,$]}class Se extends he{constructor(e){super(),me(this,e,Pe,De,pe,{screenshot:0,onClose:1})}}function ae(r,e,l){const t=r.slice();return t[12]=e[l],t[14]=l,t}function ie(r,e,l){const t=r.slice();return t[12]=e[l],t}function ce(r,e,l){const t=r.slice();return t[12]=e[l],t}function Te(r){let e,l,t,n,o,a,s,i,u,p,y,c,$,d;l=new Ce({props:{img:Q(r[0].project.logo),$$slots:{default:[Be]},$$scope:{ctx:r}}});const x=[Le,Ae],m=[];function b(j,f){return j[0].project.description?0:1}a=b(r),s=m[a]=x[a](r),p=new ve({});const K=[Ue,Re],R=[];function E(j,f){return j[4].length>0?0:1}return c=E(r),$=R[c]=K[c](r),{c(){e=w("div"),O(l.$$.fragment),t=S(),n=w("div"),o=w("div"),s.c(),i=S(),u=w("div"),O(p.$$.fragment),y=S(),$.c(),this.h()},l(j){e=C(j,"DIV",{class:!0});var f=D(e);z(l.$$.fragment,f),t=T(f),n=C(f,"DIV",{class:!0});var _=D(n);o=C(_,"DIV",{class:!0});var P=D(o);s.l(P),P.forEach(h),i=T(_),u=C(_,"DIV",{class:!0});var g=D(u);z(p.$$.fragment,g),g.forEach(h),y=T(_),$.l(_),_.forEach(h),f.forEach(h),this.h()},h(){k(o,"class","px-10px m-y-5"),k(u,"class","w-100% m-t-8"),k(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),k(e,"class","flex flex-col items-center overflow-x-hidden")},m(j,f){M(j,e,f),B(l,e,null),v(e,t),v(e,n),v(n,o),m[a].m(o,null),v(n,i),v(n,u),B(p,u,null),v(n,y),R[c].m(n,null),d=!0},p(j,f){const _={};f&1&&(_.img=Q(j[0].project.logo)),f&524289&&(_.$$scope={dirty:f,ctx:j}),l.$set(_);let P=a;a=b(j),a===P?m[a].p(j,f):(X(),V(m[P],1,1,()=>{m[P]=null}),W(),s=m[a],s?s.p(j,f):(s=m[a]=x[a](j),s.c()),I(s,1),s.m(o,null)),$.p(j,f)},i(j){d||(I(l.$$.fragment,j),I(s),I(p.$$.fragment,j),I($),d=!0)},o(j){V(l.$$.fragment,j),V(s),V(p.$$.fragment,j),V($),d=!1},d(j){j&&h(e),A(l),m[a].d(),A(p),R[c].d()}}}function Me(r){let e,l,t,n,o="Could not load project data...",a;return l=new ee({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=S(),n=w("p"),n.textContent=o,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=D(e);z(l.$$.fragment,i),t=T(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-18mwztv"&&(n.textContent=o),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,i){M(s,e,i),B(l,e,null),v(e,t),v(e,n),a=!0},p:q,i(s){a||(I(l.$$.fragment,s),a=!0)},o(s){V(l.$$.fragment,s),a=!1},d(s){s&&h(e),A(l)}}}function Ne(r){let e=r[0].project.name+"",l;return{c(){l=F(e)},l(t){l=G(t,e)},m(t,n){M(t,l,n)},p(t,n){n&1&&e!==(e=t[0].project.name+"")&&H(l,e)},d(t){t&&h(l)}}}function Oe(r){let e,l,t,n,o=r[12].label+"",a,s,i;return l=new ee({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),O(l.$$.fragment),t=S(),n=w("span"),a=F(o),s=S(),this.h()},l(u){e=C(u,"DIV",{class:!0});var p=D(e);z(l.$$.fragment,p),t=T(p),n=C(p,"SPAN",{});var y=D(n);a=G(y,o),y.forEach(h),p.forEach(h),s=T(u),this.h()},h(){k(e,"class","row-center gap-2")},m(u,p){M(u,e,p),B(l,e,null),v(e,t),v(e,n),v(n,a),M(u,s,p),i=!0},p(u,p){(!i||p&1)&&o!==(o=u[12].label+"")&&H(a,o)},i(u){i||(I(l.$$.fragment,u),i=!0)},o(u){V(l.$$.fragment,u),i=!1},d(u){u&&(h(e),h(s)),A(l)}}}function fe(r){let e,l;return e=new ge({props:{href:r[12].to,$$slots:{default:[Oe]},$$scope:{ctx:r}}}),{c(){O(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const o={};n&1&&(o.href=t[12].to),n&524289&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function ze(r){let e,l,t,n=r[12].name+"",o,a,s;return e=new ye({props:{src:Q(r[12].logo),alt:r[12].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){O(e.$$.fragment),l=S(),t=w("span"),o=F(n),a=S(),this.h()},l(i){z(e.$$.fragment,i),l=T(i),t=C(i,"SPAN",{class:!0});var u=D(t);o=G(u,n),u.forEach(h),a=T(i),this.h()},h(){k(t,"class","text-[0.9em]")},m(i,u){B(e,i,u),M(i,l,u),M(i,t,u),v(t,o),M(i,a,u),s=!0},p(i,u){const p={};u&1&&(p.src=Q(i[12].logo)),u&1&&(p.alt=i[12].name),e.$set(p),(!s||u&1)&&n!==(n=i[12].name+"")&&H(o,n)},i(i){s||(I(e.$$.fragment,i),s=!0)},o(i){V(e.$$.fragment,i),s=!1},d(i){i&&(h(l),h(t),h(a)),A(e,i)}}}function ue(r){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${se}/skills/${r[12].slug}`,$$slots:{default:[ze]},$$scope:{ctx:r}}}),{c(){O(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const o={};n&1&&(o.href=`${se}/skills/${t[12].slug}`),n&524289&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Be(r){let e,l,t,n,o,a=r[0].project.type+"",s,i,u,p,y,c,$,d,x;t=new we({props:{$$slots:{default:[Ne]},$$scope:{ctx:r}}}),p=new ve({});let m=Y(r[0].project.links),b=[];for(let f=0;f<m.length;f+=1)b[f]=fe(ce(r,m,f));const K=f=>V(b[f],1,1,()=>{b[f]=null});let R=Y(r[0].project.skills),E=[];for(let f=0;f<R.length;f+=1)E[f]=ue(ie(r,R,f));const j=f=>V(E[f],1,1,()=>{E[f]=null});return{c(){e=w("div"),l=w("div"),O(t.$$.fragment),n=S(),o=w("p"),s=F(a),i=S(),u=w("div"),O(p.$$.fragment),y=S(),c=w("div");for(let f=0;f<b.length;f+=1)b[f].c();$=S(),d=w("div");for(let f=0;f<E.length;f+=1)E[f].c();this.h()},l(f){e=C(f,"DIV",{class:!0});var _=D(e);l=C(_,"DIV",{class:!0});var P=D(l);z(t.$$.fragment,P),P.forEach(h),n=T(_),o=C(_,"P",{class:!0});var g=D(o);s=G(g,a),g.forEach(h),i=T(_),u=C(_,"DIV",{class:!0});var U=D(u);z(p.$$.fragment,U),U.forEach(h),y=T(_),c=C(_,"DIV",{class:!0});var le=D(c);for(let J=0;J<b.length;J+=1)b[J].l(le);le.forEach(h),$=T(_),d=C(_,"DIV",{class:!0});var ne=D(d);for(let J=0;J<E.length;J+=1)E[J].l(ne);ne.forEach(h),_.forEach(h),this.h()},h(){k(l,"class","text-0.9em"),k(o,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),k(u,"class","w-75%"),k(c,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),k(d,"class","row-center flex-wrap m-b-2"),k(e,"class","col-center p-y-20")},m(f,_){M(f,e,_),v(e,l),B(t,l,null),v(e,n),v(e,o),v(o,s),v(e,i),v(e,u),B(p,u,null),v(e,y),v(e,c);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(c,null);v(e,$),v(e,d);for(let P=0;P<E.length;P+=1)E[P]&&E[P].m(d,null);x=!0},p(f,_){const P={};if(_&524289&&(P.$$scope={dirty:_,ctx:f}),t.$set(P),(!x||_&1)&&a!==(a=f[0].project.type+"")&&H(s,a),_&1){m=Y(f[0].project.links);let g;for(g=0;g<m.length;g+=1){const U=ce(f,m,g);b[g]?(b[g].p(U,_),I(b[g],1)):(b[g]=fe(U),b[g].c(),I(b[g],1),b[g].m(c,null))}for(X(),g=m.length;g<b.length;g+=1)K(g);W()}if(_&1){R=Y(f[0].project.skills);let g;for(g=0;g<R.length;g+=1){const U=ie(f,R,g);E[g]?(E[g].p(U,_),I(E[g],1)):(E[g]=ue(U),E[g].c(),I(E[g],1),E[g].m(d,null))}for(X(),g=R.length;g<E.length;g+=1)j(g);W()}},i(f){if(!x){I(t.$$.fragment,f),I(p.$$.fragment,f);for(let _=0;_<m.length;_+=1)I(b[_]);for(let _=0;_<R.length;_+=1)I(E[_]);x=!0}},o(f){V(t.$$.fragment,f),V(p.$$.fragment,f),b=b.filter(Boolean);for(let _=0;_<b.length;_+=1)V(b[_]);E=E.filter(Boolean);for(let _=0;_<E.length;_+=1)V(E[_]);x=!1},d(f){f&&h(e),A(t),A(p),te(b,f),te(E,f)}}}function Ae(r){let e,l,t,n,o="No description",a;return l=new ee({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=S(),n=w("p"),n.textContent=o,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=D(e);z(l.$$.fragment,i),t=T(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-1ugej71"&&(n.textContent=o),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){M(s,e,i),B(l,e,null),v(e,t),v(e,n),a=!0},p:q,i(s){a||(I(l.$$.fragment,s),a=!0)},o(s){V(l.$$.fragment,s),a=!1},d(s){s&&h(e),A(l)}}}function Le(r){let e,l;return e=new Ee({props:{content:r[0].project.description}}),{c(){O(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){B(e,t,n),l=!0},p(t,n){const o={};n&1&&(o.content=t[0].project.description),e.$set(o)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Re(r){let e,l,t,n,o="No screenshots",a;return l=new ee({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=w("div"),O(l.$$.fragment),t=S(),n=w("p"),n.textContent=o,this.h()},l(s){e=C(s,"DIV",{class:!0});var i=D(e);z(l.$$.fragment,i),t=T(i),n=C(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(n)!=="svelte-s36p3y"&&(n.textContent=o),i.forEach(h),this.h()},h(){k(n,"class","font-300"),k(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){M(s,e,i),B(l,e,null),v(e,t),v(e,n),a=!0},p:q,i(s){a||(I(l.$$.fragment,s),a=!0)},o(s){V(l.$$.fragment,s),a=!1},d(s){s&&h(e),A(l)}}}function Ue(r){let e,l=Y(r[4]),t=[];for(let n=0;n<l.length;n+=1)t[n]=de(ae(r,l,n));return{c(){e=w("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=C(n,"DIV",{class:!0});var o=D(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(h),this.h()},h(){k(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(n,o){M(n,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(n,o){if(o&18){l=Y(n[4]);let a;for(a=0;a<l.length;a+=1){const s=ae(n,l,a);t[a]?t[a].p(s,o):(t[a]=de(s),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:q,o:q,d(n){n&&h(e),te(t,n)}}}function de(r){let e,l,t,n,o=r[12].label+"",a,s,i,u;function p(){return r[9](r[14])}return{c(){e=w("div"),l=w("div"),t=S(),n=w("p"),a=F(o),s=S(),this.h()},l(y){e=C(y,"DIV",{class:!0});var c=D(e);l=C(c,"DIV",{class:!0,style:!0}),D(l).forEach(h),t=T(c),n=C(c,"P",{class:!0});var $=D(n);a=G($,o),$.forEach(h),s=T(c),c.forEach(h),this.h()},h(){k(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),k(l,"style",`background-image: url(${r[12].src});`),k(n,"class","text-[var(--tertiary-text)] font-300"),k(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(y,c){M(y,e,c),v(e,l),v(e,t),v(e,n),v(n,a),v(e,s),i||(u=[N(e,"click",p),N(e,"keydown",r[5]),N(e,"keypress",r[6]),N(e,"keyup",r[7]),N(e,"keyup",r[8])],i=!0)},p(y,c){r=y},d(y){y&&h(e),i=!1,_e(u)}}}function Je(r){let e,l,t,n,o,a,s,i;e=new je({props:{title:r[2]}});const u=[Me,Te],p=[];function y(c,$){return c[0].project===void 0?0:1}return n=y(r),o=p[n]=u[n](r),s=new Se({props:{screenshot:r[3],onClose:r[10]}}),{c(){O(e.$$.fragment),l=S(),t=w("div"),o.c(),a=S(),O(s.$$.fragment),this.h()},l(c){z(e.$$.fragment,c),l=T(c),t=C(c,"DIV",{class:!0});var $=D(t);o.l($),$.forEach(h),a=T(c),z(s.$$.fragment,c),this.h()},h(){k(t,"class","pb-10 overflow-x-hidden col flex-1")},m(c,$){B(e,c,$),M(c,l,$),M(c,t,$),p[n].m(t,null),M(c,a,$),B(s,c,$),i=!0},p(c,[$]){const d={};$&4&&(d.title=c[2]),e.$set(d);let x=n;n=y(c),n===x?p[n].p(c,$):(X(),V(p[x],1,1,()=>{p[x]=null}),W(),o=p[n],o?o.p(c,$):(o=p[n]=u[n](c),o.c()),I(o,1),o.m(t,null));const m={};$&8&&(m.screenshot=c[3]),$&2&&(m.onClose=c[10]),s.$set(m)},i(c){i||(I(e.$$.fragment,c),I(o),I(s.$$.fragment,c),i=!0)},o(c){V(e.$$.fragment,c),V(o),V(s.$$.fragment,c),i=!1},d(c){c&&(h(l),h(t),h(a)),A(e,c),p[n].d(),A(s,c)}}}function qe(r,e,l){var x;let t,n,{data:o}=e;const{title:a}=be,s=((x=o.project)==null?void 0:x.screenshots)??[];let i;function u(m){L.call(this,r,m)}function p(m){L.call(this,r,m)}function y(m){L.call(this,r,m)}function c(m){L.call(this,r,m)}const $=m=>l(1,i=m),d=()=>l(1,i=void 0);return r.$$set=m=>{"data"in m&&l(0,o=m.data)},r.$$.update=()=>{r.$$.dirty&2&&l(3,t=typeof i<"u"&&s[i]?s[i]:void 0),r.$$.dirty&1&&l(2,n=o.project?`${o.project.name} - ${a}`:a)},[o,i,n,t,s,u,p,y,c,$,d]}class nt extends he{constructor(e){super(),me(this,e,qe,Je,pe,{data:0})}}export{nt as component,lt as universal};
