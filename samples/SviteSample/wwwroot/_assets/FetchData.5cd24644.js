let t=document.createElement("style");t.innerHTML="",document.head.appendChild(t);import{S as e,i as n,s as r,e as a,a as s,c as o,f as l,n as c,d as m,o as d,t as h,g as u,b as f,h as i}from"./index.adb45b16.js";function p(t,e,n){const r=t.slice();return r[1]=e[n],r}function g(t){let e;return{c(){e=a("p"),e.innerHTML="<em>Loading...</em>"},m(t,n){o(t,e,n)},p:c,d(t){t&&m(e)}}}function b(t){let e,n,r,c,d=t[0],h=[];for(let e=0;e<d.length;e+=1)h[e]=C(p(t,d,e));return{c(){e=a("table"),n=a("thead"),n.innerHTML="<tr><th>Date</th> \n                <th>Temp. (C)</th> \n                <th>Temp. (F)</th> \n                <th>Summary</th></tr>",r=s(),c=a("tbody");for(let t=0;t<h.length;t+=1)h[t].c();f(e,"class","table")},m(t,a){o(t,e,a),l(e,n),l(e,r),l(e,c);for(let t=0;t<h.length;t+=1)h[t].m(c,null)},p(t,e){if(1&e){let n;for(d=t[0],n=0;n<d.length;n+=1){const r=p(t,d,n);h[n]?h[n].p(r,e):(h[n]=C(r),h[n].c(),h[n].m(c,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=d.length}},d(t){t&&m(e),i(h,t)}}}function C(t){let e,n,r,c,d,f,i,p,g,b,C,T,x,y=t[1].dateFormatted+"",F=t[1].temperatureC+"",L=t[1].temperatureF+"",H=t[1].summary+"";return{c(){e=a("tr"),n=a("td"),r=h(y),c=s(),d=a("td"),f=h(F),i=s(),p=a("td"),g=h(L),b=s(),C=a("td"),T=h(H),x=s()},m(t,a){o(t,e,a),l(e,n),l(n,r),l(e,c),l(e,d),l(d,f),l(e,i),l(e,p),l(p,g),l(e,b),l(e,C),l(C,T),l(e,x)},p(t,e){1&e&&y!==(y=t[1].dateFormatted+"")&&u(r,y),1&e&&F!==(F=t[1].temperatureC+"")&&u(f,F),1&e&&L!==(L=t[1].temperatureF+"")&&u(g,L),1&e&&H!==(H=t[1].summary+"")&&u(T,H)},d(t){t&&m(e)}}}function T(t){let e,n,r,d,h;function u(t,e){return t[0].length?b:g}let f=u(t),i=f(t);return{c(){e=a("div"),n=a("h1"),n.textContent="Weather forecast",r=s(),d=a("p"),d.textContent="This component demonstrates fetching data from the server.",h=s(),i.c()},m(t,a){o(t,e,a),l(e,n),l(e,r),l(e,d),l(e,h),i.m(e,null)},p(t,[n]){f===(f=u(t))&&i?i.p(t,n):(i.d(1),i=f(t),i&&(i.c(),i.m(e,null)))},i:c,o:c,d(t){t&&m(e),i.d()}}}function x(t,e,n){let{forecasts:r=[]}=e;return d(()=>{fetch("/api/weatherforecast").then(t=>t.json()).then(t=>{n(0,r=t)})}),t.$set=t=>{"forecasts"in t&&n(0,r=t.forecasts)},[r]}export default class extends e{constructor(t){super(),n(this,t,x,T,r,{forecasts:0})}}
