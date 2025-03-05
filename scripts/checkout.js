import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
//import '../data/cart-class.js'
// import '../data/car.js'

async function loadPage() {
  try {
    //throw 'error 1'
    await loadProductsFetch();
  } catch (error) {
    console.log('error, please try again later')
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
 loadProductsFetch().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/
