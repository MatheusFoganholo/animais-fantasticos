!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e,n){const o=document.documentElement;function c(a){t.contains(a.target)||(t.removeAttribute("data-outside"),e.forEach(t=>{o.removeEventListener(t,c)}),n())}t.hasAttribute("data-outside")||(e.forEach(t=>{setTimeout(()=>{o.addEventListener(t,c)})}),t.setAttribute("data-outside",""))}function c(){const t=document.querySelectorAll("[data-numero]");let e;e=new MutationObserver((function(n){n[0].target.classList.contains("activate")&&(e.disconnect(),t.forEach(t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const c=setInterval(()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(c))},50*Math.random())}))}));const n=document.querySelector(".numeros");e.observe(n,{attributes:!0})}n.r(e),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');t.length&&e.length&&(e[0].classList.add("active-tab"),t.forEach((t,n)=>{t.addEventListener("click",()=>{!function(t){e.forEach(t=>{t.classList.remove("active-tab")}),e[t].classList.add("active-tab")}(n)})}))}(),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href"),n=document.querySelector(e).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}document.querySelectorAll('[data-menu="smooth"] a[href^="#"]').forEach(e=>{e.addEventListener("click",t)})}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt');function e(){this.classList.toggle("active"),this.nextElementSibling.classList.toggle("active")}t.length&&(t[0].classList.add("active"),t[0].nextElementSibling.classList.add("active"),t.forEach(t=>{t.addEventListener("click",e)}))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*window.innerHeight;function n(){t.forEach(t=>{t.getBoundingClientRect().top-e<0?t.classList.add("activate"):t.classList.contains("activate")&&t.classList.remove("activate")})}t.length&&(n(),window.addEventListener("scroll",n))}(),function(){const t=document.querySelector('[data-modal="open-modal"]'),e=document.querySelector('[data-modal="close-modal"]'),n=document.querySelector('[data-modal="container"]');function o(t){t.preventDefault(),n.classList.toggle("modal-active")}t&&e&&n&&(t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",(function(t){t.target===this&&o(t)})))}(),function(){function t(t){t.preventDefault(),this.classList.add("active-menu"),o(this,["touchstart","click"],()=>{this.classList.remove("active-menu")})}document.querySelectorAll("[data-dropdown]").forEach(e=>{["touchstart","click"].forEach(n=>{e.addEventListener(n,t)})})}(),function(){const t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function c(){e.classList.add("active"),t.classList.add("active"),o(e,n,()=>{e.classList.remove("active"),t.classList.remove("active")})}t&&n.forEach(e=>t.addEventListener(e,c))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,c=o.getDay(),a=o.getHours(),r=-1!==e.indexOf(c),i=a>=n[0]&&a<n[1];r&&i&&t.classList.add("open")}(),async function(t){try{const e=await fetch(t),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach(t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.species}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)}),c()}catch(t){console.log(t)}}("./animals-api.json"),fetch("https://blockchain.info/ticker").then(t=>t.json()).then(t=>{document.querySelector(".bitcoin").innerText=(100/t.BRL.sell).toFixed(4)}).catch(t=>{console.log(Error(t))})}]);