import{A as E,S as d,a as L,b as k}from"./assets/vendor-d93669fe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".header-menu-open"),t=document.querySelector(".header-menu-list"),r=document.querySelectorAll(".header-menu-link"),e=document.querySelector(".mobile-container"),n=document.querySelector(".open-menu-button"),o=document.querySelector(".close-menu-button"),l=document.querySelectorAll(".mobile-menu-link"),f=document.querySelectorAll(".mobile-link");function w(){t.style.display==="flex"?(t.style.opacity="0",setTimeout(()=>{t.style.display="none"},250)):(t.style.display="flex",setTimeout(()=>{t.style.opacity="1"},150))}function u(){e.style.opacity="0",e.style.transform="translateX(100%)",setTimeout(()=>{e.style.display="none",e.classList.remove("mobile-menu-container")},300)}s.addEventListener("click",w),r.forEach(function(c){c.addEventListener("click",function(){t.style.display="none"})}),n.addEventListener("click",function(){e.classList.add("mobile-menu-container"),e.style.display="flex",e.style.opacity="0",e.style.transform="translateX(100%)",setTimeout(()=>{e.style.opacity="1",e.style.transform="translateX(0)"},150)}),o.addEventListener("click",u),l.forEach(function(c){c.addEventListener("click",u)}),f.forEach(function(c){c.addEventListener("click",u)}),document.addEventListener("keydown",function(c){c.key==="Escape"&&u()})});if("loading"in HTMLImageElement.prototype)document.querySelectorAll('img[loading="lazy"]').forEach(t=>{t.src=t.dataset.src});else{const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(s)}const O=document.querySelector(".accordion-container");new E(O,{duration:600,showMultiple:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",ariaEnabled:!0,collapse:!0,onlyChildNodes:!0,openOnInit:[],onOpen:s=>console.log("Open!",s)});new E(".accordion-container-about-me",{openOnInit:[0]});let m=".swiper-about-me",p=".long-arrow-right";screen.width<768?new d(m,{navigation:{nextEl:p},edgeSwipeThreshold:40,loop:!0,slidesPerView:2,mousewheel:!0,keyboard:!0,openOnInit:[0]}):screen.width<1400?new d(m,{navigation:{nextEl:p},loop:!0,slidesPerView:3,mousewheel:!0,keyboard:!0,openOnInit:[0]}):new d(m,{navigation:{nextEl:p},loop:!0,slidesPerView:6,mousewheel:!0,keyboard:!0,openOnInit:[0]});window.onresize=function(){screen.width<768?new d(m,{navigation:{nextEl:p},loop:!0,slidesPerView:2,mousewheel:!0,keyboard:!0}):screen.width<1440?new d(m,{navigation:{nextEl:p},loop:!0,slidesPerView:3,mousewheel:!0,keyboard:!0}):new d(m,{navigation:{nextEl:p},loop:!0,slidesPerView:6,mousewheel:!0,keyboard:!0})};document.body.style.overflowX="hidden";new d(".projects-swiper-container",{watchOverflow:!0,direction:"horizontal",slidesPerView:1,spaceBetween:50,navigation:{nextEl:".projects-swiper-button-next-custom",prevEl:".projects-swiper-button-prev-custom"},keyboard:{enabled:!0}});const g=document.querySelector(".reviews-list");async function S(){const s="https://portfolio-js.b.goit.study/api/reviews";try{return(await L(s)).data}catch(t){throw console.log(t),new Error("Failed to fetch reviews")}}async function x(){try{const t=(await S()).map(e=>`
        <li class='reviews-item swiper-slide' id='${e._id}'>
  <img class='reviews-photo' src="${e.avatar_url}" alt="author_photo">
  <h3 class='author-name'>${e.author}</h3>
  <p class='author-review'>${e.review}</p>
</li>`).join("");g.insertAdjacentHTML("beforeend",t);const r=new d(".review-swiper",{watchOverflow:!0,keyboard:!0,navigation:{nextEl:".right-btn",prevEl:".left-btn"},direction:"horizontal",slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}catch(s){g.textContent="NOT FOUND",console.log(s)}}x();document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("modal"),t=document.getElementsByClassName("close")[0],r=document.getElementById("overlay");t.onclick=function(){s.style.display="none",r.style.display="none"};function e(){s.style.display="none",r.style.display="none"}r.addEventListener("click",function(){e()}),document.addEventListener("keydown",function(i){i.key==="Escape"&&e()});const n=52,o=document.getElementById("comment");o.addEventListener("input",function(){if(o.value.length>n){const i=o.value.slice(0,n);o.value=i+"..."}});const l=document.getElementById("form-footer");l.addEventListener("submit",function(i){i.preventDefault();const a=document.getElementById("email").value,y=document.getElementById("comment").value;if(!a.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){u("Please enter a valid email address.");return}f(a,y)});async function f(i,a){try{const h=JSON.stringify({email:i,comment:a}),v=await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:h});if(!v.ok)throw new Error("Server error");const b=await v.json();console.log(v),w(b),l.reset()}catch{u("Failed to submit your request. Please try again later.")}}function w(i){const a=document.getElementById("modal-title"),y=document.getElementById("modal-text"),h=document.getElementById("overlay");a.innerHTML=JSON.stringify(i.title,null,2).replace(/^"(.*)"$/,"$1"),y.innerHTML=JSON.stringify(i.message,null,2).replace(/^"(.*)"$/,"$1"),s.style.display="block",h.style.display="block"}function u(i){alert(i)}document.querySelector(".footer-button").addEventListener("click",function(){const i=document.getElementById("email").value,a=document.getElementById("comment").value;f(i,a)})});k.init();
//# sourceMappingURL=commonHelpers.js.map
