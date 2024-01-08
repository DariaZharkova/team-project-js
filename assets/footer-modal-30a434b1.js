import{a as l,b as k}from"./vendor-f89adc3e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await l.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await l.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await l.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await l.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await l.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return await l.post(this._baseURL+this._subscriptionURL,s)}catch(s){throw s}},order:async function(t){try{return(await l.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}};class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let o=0;o<s.length;o++)"dataset"in s[o]&&"jsname"in s[o].dataset&&(this[s[o].dataset.jsname]=s[o])}}function U(e,t){const s=k.create(e,{onShow:a=>{document.addEventListener("keydown",o),a.element().querySelector(t).onclick=a.close},onClose:()=>{document.removeEventListener("keydown",o)}});function o(a){a.key==="Escape"&&s.close()}s.show()}const R="/team-project-js/assets/icons-5c405266.svg#close-icon",S="/team-project-js/assets/icons-5c405266.svg#shopping-cart-icon";async function M(e,t){const o=e.target.closest(t).dataset.productid,{name:a,desc:r,img:n,category:h,price:c,size:m,popularity:j}=await _.product(o);let y="Add to",v=i.loadCart();"products"in v&&v.products.findIndex(f=>f.productId===o)!==-1&&(y="Remove from");const C=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${R}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${n}"
            alt="${a}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${a}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${h}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${m}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${j}</span>
            </p>       
          <p class="modal-product-prop-dscr">${r}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${y}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${S}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;U(C,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",w=>{const f=w.target.closest(".modal-product-cart");let d=i.loadCart(),I=!0;if("products"in d){const L=d.products.findIndex(E=>E.productId===o);L!==-1&&(d.products.splice(L,1),f.querySelector(".baskettext").innerHTML="Add to",I=!1)}I&&("products"in d?d.products.push({productId:o,amount:1}):d={email:"",products:[{productId:o,amount:1}]},f.querySelector(".baskettext").innerHTML="Remove from"),i.saveCart(d)})}const D="/team-project-js/assets/icons-5c405266.svg#discount-icon",b="/team-project-js/assets/icons-5c405266.svg#discount-cart",g="/team-project-js/assets/icons-5c405266.svg#discount-checked";async function B(){const t=new p;t.discountList.innerHTML="";const s=await _.discount(),o=[];let a=0;for(s.length<2?a=s.length:a=2;a>0;a--){let c=Math.floor(Math.random()*s.length);o.push(s[c]),s.splice(c,1)}let r=i.loadCart();const n=[];"products"in r&&(r=r.products,r.forEach(c=>n.push(c.productId)));const h=[];o.forEach(c=>{let m=b;n.includes(c._id)&&(m=g),h.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${D}" class="discount-show"  data-productId="${c._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${c._id}">
              <img
                class="discount-image discount-show"
                src="${c.img}"
                width="114"
                height="114"
                alt="${c.name}"
                data-productId="${c._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${c._id}">
              <p class="discount-title discount-show"  data-productId="${c._id}">${c.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${c._id}">
                <span class="discount-price discount-show"  data-productId="${c._id}">$${c.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${c._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${c._id}">
                    <use href="${m}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",h.join(""))}function $(e){let t=i.loadCart(),s=!1;return"products"in t&&t.products.forEach(o=>{if(o.productId===e){s=!0;return}}),s}function x(e){let t=i.loadCart();$(e)||("products"in t?t.products.push({productId:e,amount:1}):t={email:"",products:[{productId:e,amount:1}]},i.saveCart(t))}function N(e,t){const s=new p;s[`${t}${e}`].href.baseVal===`${b}`&&(s[`${t}${e}`].href.baseVal=`${g}`)}function q(e,t){const s=new p;s[`${t}${e}`].href.baseVal===`${g}`&&(s[`${t}${e}`].href.baseVal=`${b}`)}function T(e){const t=new p;for(var s in t)if(s.indexOf(e)===0){let o=t[s].dataset.productid;$(o)?N(o,e):q(o,e)}}function F(e){e.target.classList.contains("discount-buy")?x(e.target.dataset.productid):e.target.classList.contains("discount-show")&&M(e,".discount-show")}function O(){const e=new p;let t=0,s=i.loadCart();"products"in s&&(t=s.products.length),e.headerCartNumber.textContent=t}const i={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const o=JSON.stringify(s);localStorage.setItem(t,o)}catch(o){throw o}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),T("discountIcon"),O()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},u={_closeModalBtn:document.querySelector(".js-close-modal"),_backdrop:document.querySelector(".js-backdrop"),_modalImg:document.querySelector(".modal__food-basket"),_modal:document.querySelector(".modal-inner"),ESC_KEY_CODE:"Escape",open:function(){window.addEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.addEventListener("click",this.close.bind(this)),this._backdrop.addEventListener("click",this.backdrop.bind(this)),document.body.classList.add("show-modal")},close:function(){window.removeEventListener("keydown",this.esc.bind(this)),this._closeModalBtn.removeEventListener("click",this.close.bind(this)),this._backdrop.removeEventListener("click",this.backdrop.bind(this)),document.body.classList.remove("show-modal")},backdrop:function(t){t.currentTarget===t.target&&this.close()},esc:function(t){t.code===this.ESC_KEY_CODE&&this.close()}},P=document.querySelector(".footer-form");async function H(e){e.preventDefault();const t=e.target.elements.email.value;await _.subscribe(t).then(s=>{u._modalImg.style.display="block",u._modal.innerHTML=`
        
          <div class="modal__title--wrap">
          <p class="modal__title">
            Thanks for subscribing for
            <span class="modal__accent-text">new</span>
            products
          </p>
        </div>
        <div class="modal__description--wrap">
          <p class="modal__description">
            We promise you organic and high-quality products that will meet your
            expectations. Please stay with us and we promise you many pleasant
            surprises.
          </p>
        </div>
        
            `,u.open(),P.reset()}).catch(s=>{u._modalImg.style.display="none",u._modal.innerHTML=`
      
      <div class="modal__title--wrap">
        <p class="modal__title">
          This
          <span class="modal__accent-text">email address </span>
          has already been entered
        </p>
      </div>
      <div class="modal__description--wrap">
        <p class="modal__description">
          You have already subscribed to our new products. Watch for offers at
          the mailing address.
        </p>
      </div>`,u.open()})}export{u as M,P as a,x as b,R as c,O as d,b as e,_ as f,M as g,g as h,B as i,F as j,i as l,H as p,p as r};
//# sourceMappingURL=footer-modal-30a434b1.js.map
