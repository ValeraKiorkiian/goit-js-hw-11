import{a as c,S as d,i as l}from"./assets/vendor-Dn3QujGD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();c.defaults.baseURL="https://pixabay.com/api/";function m(o){const s={key:"49291442-2080f69002eb1568626ca7c49",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get("",{params:s}).then(e=>e.data).catch(e=>{throw e})}const p=document.querySelector(".gallery");function f(o){const s=o.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img src="${e.previewURL}" alt="${e.tags}" width="" height="" />
        </a>
        <div class="description">
          <p class="gallet-item-text">Likes</p>
          <span>${e.likes}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Views</p>
          <span>${e.views}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Comments</p>
          <span>${e.comments}</span>
        </div>
        <div class="description">
          <p class="gallet-item-text">Downloads</p>
          <span>${e.downloads}</span>
        </div>
      </li>`).join("");p.innerHTML=s}function h(){p.innerHTML=""}const u=document.querySelector(".form");let n=new d(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionPosition:"bottom"});n.on("show.simplelightbox",function(){});n.on("error.simplelightbox",function(o){console.log(o)});u.addEventListener("submit",g);function g(o){o.preventDefault();const s=o.currentTarget.elements.searchText.value.trim();s&&(h(),u.reset(),m(s).then(e=>{if(e.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again"});return}console.log(e.hits),f(e.hits),n.refresh()}).catch(e=>{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again"})}))}
//# sourceMappingURL=index.js.map
