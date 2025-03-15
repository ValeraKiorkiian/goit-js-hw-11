import{a as m,S as f,i as a}from"./assets/vendor-zn2RWmSy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(i){return m("https://pixabay.com/api/",{params:{key:"49291442-2080f69002eb1568626ca7c49",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),g=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function h(i){const t=i.map(({largeImageURL:s,webformatURL:o,tags:e,likes:r,views:n,comments:p,downloads:u})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img src="${o}" alt="${e}" width="360" height="200" />
        </a>
        <div class="description-container">
        <div class="description">
          <p class="description-text">Likes</p>
          <span class="description-num">${r}</span>
        </div>
        <div class="description">
          <p class="description-text">Views</p>
          <span class="description-num">${n}</span>
        </div>
        <div class="description">
          <p class="description-text">Comments</p>
          <span class="description-num">${p}</span>
        </div>
        <div class="description">
          <p class="description-text">Downloads</p>
          <span class="description-num">${u}</span>
        </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",t),g.refresh()}function v(){c.innerHTML=""}const l=document.querySelector(".form"),d=document.querySelector(".loader");l.addEventListener("submit",L);function L(i){i.preventDefault();const t=i.currentTarget.elements.searchText.value.trim();t&&(v(),b(),y(t).then(({hits:s})=>{if(s.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again"});return}h(s)}).catch(s=>{console.log(s),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again"})}).finally(()=>{l.reset(),x()}))}function b(){d.style.display="flex"}function x(){d.style.display="none"}
//# sourceMappingURL=index.js.map
