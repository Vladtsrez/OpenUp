import{A as m,S as i,a as f}from"./assets/vendor-571824b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function u(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=u(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".header-menu-open"),e=document.querySelector(".header-menu-list"),u=document.querySelectorAll(".header-menu-link"),t=document.querySelector(".mobile-container"),n=document.querySelector(".open-menu-button"),r=document.querySelector(".close-menu-button"),a=document.querySelectorAll(".mobile-menu-link"),y=document.querySelectorAll(".mobile-link");function w(){e.style.display==="flex"?(e.style.opacity="0",setTimeout(()=>{e.style.display="none"},250)):(e.style.display="flex",setTimeout(()=>{e.style.opacity="1"},150))}function d(){t.style.opacity="0",t.style.transform="translateX(100%)",setTimeout(()=>{t.style.display="none",t.classList.remove("mobile-menu-container")},300)}o.addEventListener("click",w),u.forEach(function(s){s.addEventListener("click",function(){e.style.display="none"})}),n.addEventListener("click",function(){t.classList.add("mobile-menu-container"),t.style.display="flex",t.style.opacity="0",t.style.transform="translateX(100%)",setTimeout(()=>{t.style.opacity="1",t.style.transform="translateX(0)"},150)}),r.addEventListener("click",d),a.forEach(function(s){s.addEventListener("click",d)}),y.forEach(function(s){s.addEventListener("click",d)}),document.addEventListener("keydown",function(s){s.key==="Escape"&&d()})});if("loading"in HTMLImageElement.prototype)document.querySelectorAll('img[loading="lazy"]').forEach(e=>{e.src=e.dataset.src});else{const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js",document.body.appendChild(o)}const h=document.querySelector(".accordion-container");new m(h,{duration:600,showMultiple:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",ariaEnabled:!0,collapse:!0,onlyChildNodes:!0,openOnInit:[],onOpen:o=>console.log("Open!",o)});new m(".accordion-container-about-me",{openOnInit:[0]});let l=".swiper-about-me",c=".long-arrow-right";screen.width<768?new i(l,{navigation:{nextEl:c},edgeSwipeThreshold:40,loop:!0,slidesPerView:2,mousewheel:!0,keyboard:!0,openOnInit:[0]}):screen.width<1400?new i(l,{navigation:{nextEl:c},loop:!0,slidesPerView:3,mousewheel:!0,keyboard:!0,openOnInit:[0]}):new i(l,{navigation:{nextEl:c},loop:!0,slidesPerView:6,mousewheel:!0,keyboard:!0,openOnInit:[0]});window.onresize=function(){screen.width<768?new i(l,{navigation:{nextEl:c},loop:!0,slidesPerView:2,mousewheel:!0,keyboard:!0}):screen.width<1400?new i(l,{navigation:{nextEl:c},loop:!0,slidesPerView:3,mousewheel:!0,keyboard:!0}):new i(l,{navigation:{nextEl:c},loop:!0,slidesPerView:6,mousewheel:!0,keyboard:!0})};document.body.style.overflowX="hidden";new i(".projects-swiper-container",{watchOverflow:!0,direction:"horizontal",slidesPerView:1,spaceBetween:50,navigation:{nextEl:".projects-swiper-button-next-custom",prevEl:".projects-swiper-button-prev-custom"},keyboard:{enabled:!0}});const p=document.querySelector(".reviews-list");async function v(){const o="https://portfolio-js.b.goit.study/api/reviews";try{return(await f(o)).data}catch(e){throw console.log(e),new Error("Failed to fetch reviews")}}async function g(){try{const e=(await v()).map(t=>`
        <li class='reviews-item swiper-slide' id='${t._id}'>
  <img class='reviews-photo' src="${t.avatar_url}" alt="author_photo">
  <h3 class='author-name'>${t.author}</h3>
  <p class='author-review'>${t.review}</p>
</li>`).join("");p.insertAdjacentHTML("beforeend",e);const u=new i(".review-swiper",{watchOverflow:!0,navigation:{nextEl:".right-btn",prevEl:".left-btn"},direction:"horizontal",slidesPerView:1,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}})}catch(o){p.textContent="NOT FOUND",console.log(o)}}g();
//# sourceMappingURL=commonHelpers.js.map
