import{s as l,n as r,W as _,d as m}from"./scheduler.7a274a43.js";import{S as p,i as h}from"./index.28409b7f.js";import{u,T as d}from"./params.7f6ba827.js";function S(o,t){const e={},i={},s={$$scope:1};let f=o.length;for(;f--;){const a=o[f],c=t[f];if(c){for(const n in a)n in c||(i[n]=1);for(const n in c)s[n]||(e[n]=c[n],s[n]=1);o[f]=c}else for(const n in a)s[n]=1}for(const a in i)a in e||(e[a]=void 0);return e}function T(o){let t;return document.title=t=u(o[0],d),{c:r,l(e){_("svelte-gorrxo",document.head).forEach(m)},m:r,p(e,[i]){i&1&&t!==(t=u(e[0],d))&&(document.title=t)},i:r,o:r,d:r}}function g(o,t,e){let{title:i}=t;return o.$$set=s=>{"title"in s&&e(0,i=s.title)},[i]}class E extends p{constructor(t){super(),h(this,t,g,T,l,{title:0})}}export{E as T,S as g};
