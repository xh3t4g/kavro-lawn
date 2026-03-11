const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CfY9bawS.css","./gallery-CqhIPwSk.css"])))=>i.map(i=>d[i]);
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const P="modulepreload",L=function(t,r){return new URL(t,r).href},h={},g=function(r,c,s){let e=Promise.resolve();if(c&&c.length>0){let b=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),m=i?.nonce||i?.getAttribute("nonce");e=b(c.map(o=>{if(o=L(o,s),o in h)return;h[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(s)for(let p=a.length-1;p>=0;p--){const f=a[p];if(f.href===o&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":P,d||(l.as="script"),l.crossOrigin="",l.href=o,m&&l.setAttribute("nonce",m),document.head.appendChild(l),d)return new Promise((p,f)=>{l.addEventListener("load",p),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return e.then(a=>{for(const i of a||[])i.status==="rejected"&&n(i.reason);return r().catch(n)})};function E(){return`
        
    <header>
        <div class="header_container">
            <div class="header_text_container">
                <h3>Kavro</h3>

                <span>⋆⋆ все наши работы ⋆⋆</span>
            </div>

            <div class="header_link_kover">
                <nav>  
                    <a href="#" id="goHome">‹ Главное</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section>
            <div id="gallery_list">
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function O(){return`

    <header>
        <div class="header_container">
            <div class="header_text_container">
                <div class="Kavro_title_header">
                    <span><h3>K</h3></span>

                    <h3>avro</h3>
                </div>

                <span>Услуги в твоем районе</span>
            </div>

            <div class="header_link_gallery">
                <nav>  
                    <a href="#" id="goGallery">Галерея ›</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section class="section_Our_services">
            <div class="card_container">
                <div class="card_trova">
                    <div class="card_container_title_trova">
                    <h3>🌱 Покос травы</h3></div>

                    <div class="card_container_text_trova">
                        <span>Косим траву</span>
                        <span>Убираем траву</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Вывозим мусор</span>
                        <span>Чистим участок</span>
                    </div>

                    <div class="card_container_text_trova">
                        <span>Подравниваение</span>
                        <span>Удаление сорняков</span>
                    </div>
                </div>

                <div class="card_bild">
                    <div class="card_container_title_bild">
                        <h3>🛠 Разнорабочие</h3>
                    </div>
                    
                        <div class="card_container_text_bild">
                          <span>Вывоз хлама</span>  
                          <span>Демонтаж</span>
                        </div>
                        
                        <div class="card_container_text_bild">
                          <span>Сборка и ремонт</span>  
                          <span>Уборка после работ</span>
                        </div>

                        <div class="card_container_text_bild">
                          <span>Перенос и погрузка</span>  
                          <span>Мелкий ремонт</span>
                        </div>
                </div>
            </div>

            <div class="news">
                <a href="https://t.me/cnskfho" class="Telegram" target="_blank" rel="noopener">Написать в Telegram</a>

                <a href="https://wa.me/79931849236" class="WhatsApp" target="_blank" rel="noopener">Написать в WhatsApp</a>
            </div>
        </section>
    </main>

    <div class="footer_gradient"></div>
    
    <footer>
        <div class="footer_contetnt">
            <span>Kavro © 2026 - Делаем просто</span>
        </div>
        <div class="fog"></div>
    </footer>

    `}function j(t){const r=document.querySelector("#gallery_list");r.innerHTML="",t.forEach(c=>{let s=document.createElement("a");s.href=c.img,s.rel="noopener";let e=document.createElement("img");e.src=c.img,e.alt="",s.appendChild(e),r.appendChild(s)})}const _={currentPage:"home"},S=""+new URL("1-ubfdrqOD.jpg",import.meta.url).href,w=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T=""+new URL("2-CrAP1hrV.jpg",import.meta.url).href,k=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),M=""+new URL("3-NfXDj49L.jpg",import.meta.url).href,q=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),x=Object.entries(Object.assign({"../assets/images/1.jpg":w,"../assets/images/2.jpg":k,"../assets/images/3.jpg":q})).map(([t,r])=>({img:r.default}));function y(){const t=document.querySelector("#app");t.innerHTML="",_.currentPage==="home"&&(t.innerHTML=O(),g(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url)),_.currentPage==="gallery"&&(t.innerHTML=E(),g(()=>Promise.resolve({}),__vite__mapDeps([1]),import.meta.url),j(x)),A()}function v(t){_.currentPage=t,y()}function A(){const t=document.querySelector("#goHome"),r=document.querySelector("#goGallery");t&&t.addEventListener("click",()=>v("home")),r&&goGallery.addEventListener("click",()=>v("gallery"))}function H(){v("home"),y()}H();
