import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import closeIcon from '../img/icons.svg#close-icon';
import { form } from '/js/footer-modal.js';
import { postEmail } from '/js/footer-modal.js';
import { onOpenModal } from './footer-modal.js';

import { totalCartSum, checkout } from './totalcartsum.js';
import { drawHeaderCartNumber } from './discount.js';
import refsAPI from './refs.js';

//const cartContainer = document.querySelector('.cart-products-order-container');
//const cartEmpty = document.querySelector('.cart-empty-product');

export async function drawProductCart() {
  let cart = localStorageApi.loadCart();
  console.log(cart);

  const productsInCart = [];
  if ('products' in cart) {
    if (cart.products.length) {
      cart.products.forEach(({ productId }) =>
        getProductApi(productId).then(resp => productsInCart.push(resp))
      );
      cartEmpty.style.display = 'none';
    }
  }
  // console.log(productsInCart);

  cartContainer.innerHTML = cartMarkup(productsInCart);

  document
    .querySelector('.cart-product-delete-btn')
    .addEventListener('click', event => {
      const id = event.target.dataset.productid;
      let cart = localStorageApi.loadCart();
      if ('products' in cart) {
        const resalt = cart.products.findIndex(
          product => product.productId === id
        );
        if (resalt !== -1) {
          cart.products.splice(resalt, 1);
        }
      }
      localStorageApi.saveCart(cart);
    });

  document
    .querySelector('.cart-delete-button')
    .addEventListener('click', () => {
      cartEmpty.style.display = 'block';
      localStorageApi.deleteCart();
    });
}

async function getProductApi(id) {
  const product = await fetchAPI.product(id);
  return product;
}

function cartMarkup(products) {
  return products
    .map(({ _id, name, img, category, price, size }) => {
      return `
             <div class="cart-product-container">
            <div class="cart-delete-all">
            <button type="button" class="cart-delete-button"> Delete All
                <span class="cart-close-icon">
                    <svg class="cart-icon-close" width="24" height="24">
                    <use href="${closeIcon}"></use>
                    </svg>
                </span>
            </button>
            </div>

            <ul class="cart-products-list">
            <li class="cart-product" data-productId="${_id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${img}"
                alt="${name}"
              />
            </div>

            <div class="cart-product-card">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${name}</h3>
              <button data-productId="${_id}" type="button" class="cart-product-delete-btn">
              <svg class="cart-icon-close" width="18" height="18">
                    <use href="${closeIcon}"></use>
                    </svg>
              </button>
            </div>

            <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${size}</span>
                  </p>
                  <p class="cart-product-price">$${price}</p>
            </div>
          </li>
          </ul>
          </div>

          <div class="cart-order-container">
            <h2 class="order-title">Your order</h2>

          <div class="order-container">
            <p class="order-text">Total</p>
            <p class="order-sum-text">Sum:</p>
            <p class="order-total-sum">${price.toFixed(2)}</p>
          </div>

          <div class="order-input-checkout">
            <label class="order-label-chekout" for="email"></label>
            <span class="order-mail-span">Mail:</span>
            <input
                class="order-email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            />
            <button class="order-checkout-button" type="submit">Checkout</button>
          </div>

          </div>`;
    })
    .join('');
}
const cart = localStorageApi.loadCart();
function calculateTotalSum(cart) {
  let totalSum = 0;
  if ('products' in cart) {
    totalSum = cart.products.reduce((sum, product) => {
      return sum + product.price;
    }, 0);
  }
  return totalSum;
}

//const totalSumElement = document.querySelector('.order-total-sum');
//const totalSum = calculateTotalSum(cart);
//totalSumElement.textContent = `$${totalSum.toFixed(2)}`;

drawHeaderCartNumber();
totalCartSum();

const frondEnd = new refsAPI();

frondEnd.buttonCheckout.addEventListener('click', checkout);

form.addEventListener('submit', postEmail);
