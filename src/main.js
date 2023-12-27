import refsAPI from './js/refs.js';
import { drawDiscount, discountOnClick } from './js/discount.js';


// Test RenderProuctList
import './js/renderProductList.js'

//draw discount products
drawDiscount();

//get DOM tree
const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);
