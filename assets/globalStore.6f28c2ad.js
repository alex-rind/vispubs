import{v as d,c as f,b as g}from"./QIcon.f17a1a33.js";import{x as m,o as p,n as y,k as w,h as a,d as v,c as b,K as x,L as S,r as T,m as E}from"./index.afab137d.js";import{c,g as k}from"./Ripple.06868c73.js";let l,s=0;const n=new Array(256);for(let t=0;t<256;t++)n[t]=(t+256).toString(16).substring(1);const L=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const o=new Uint8Array(e);return t.getRandomValues(o),o}}return e=>{const o=[];for(let r=e;r>0;r--)o.push(Math.floor(Math.random()*256));return o}})(),u=4096;function j(){(l===void 0||s+16>u)&&(s=0,l=L(u));const t=Array.prototype.slice.call(l,s,s+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,n[t[0]]+n[t[1]]+n[t[2]]+n[t[3]]+"-"+n[t[4]]+n[t[5]]+"-"+n[t[6]]+n[t[7]]+"-"+n[t[8]]+n[t[9]]+"-"+n[t[10]]+n[t[11]]+n[t[12]]+n[t[13]]+n[t[14]]+n[t[15]]}function q(){let t;const e=w();function o(){t=void 0}return m(o),p(o),{removeTick:o,registerTick(r){t=r,y(()=>{t===r&&(d(e)===!1&&t(),t=void 0)})}}}function A(){let t=null;const e=w();function o(){t!==null&&(clearTimeout(t),t=null)}return m(o),p(o),{removeTimeout:o,registerTimeout(r,h){o(),d(e)===!1&&(t=setTimeout(r,h))}}}let C=!1;{const t=document.createElement("div");t.setAttribute("dir","rtl"),Object.assign(t.style,{width:"1px",height:"1px",overflow:"auto"});const e=document.createElement("div");Object.assign(e.style,{width:"1000px",height:"1px"}),document.body.appendChild(t),t.appendChild(e),t.scrollLeft=-1e3,C=t.scrollLeft>=0,t.remove()}const B=a("div",{class:"q-space"});var O=f({name:"QSpace",setup(){return()=>B}});const H={name:String};function N(t={}){return(e,o,r)=>{e[o](a("input",{class:"hidden"+(r||""),...t.value}))}}function D(t){return v(()=>t.name||t.for)}var P=f({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const o=v(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>a("div",{class:o.value,role:"toolbar"},g(e.default))}});const I=[null,document,document.body,document.scrollingElement,document.documentElement];function R(t,e){let o=k(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return I.includes(o)?window:o}function U(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function V(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let i;function z(){if(i!==void 0)return i;const t=document.createElement("p"),e=document.createElement("div");c(t,{width:"100%",height:"200px"}),c(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return o===r&&(r=e.clientWidth),e.remove(),i=o-r,i}function K(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}function F(){return b(x)}const X=S("globalStore",()=>{const t=F(),e=T(localStorage.getItem("darkMode")!=="false");return t.dark.set(!e.value),E(e,o=>{localStorage.setItem("darkMode",o.toString()),t.dark.set(!e.value)}),{darkMode:e}});export{P as Q,q as a,A as b,H as c,N as d,U as e,V as f,R as g,z as h,X as i,O as j,K as k,D as l,C as r,j as u};
