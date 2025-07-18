
import { cart } from "../../data/02-cart.js";
import { getProduct } from "../../data/01-products.js";
import { getDeliveryOption } from "../../data/03-deliveryOptions.js";

export function renderpaymentSummary() {
    let productPriceCents = 0
    let shippingPriceCents = 0

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents = productPriceCents + product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents = shippingPriceCents + deliveryOption.priceCents
    });

    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    const taxCents = Math.round(totalBeforeTaxCents * 0.1);
    const totalCents = totalBeforeTaxCents + taxCents;

    const paymentSummaryHTML = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">$${(productPriceCents/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${(shippingPriceCents/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${(totalBeforeTaxCents/100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${(taxCents / 100).toFixed(2)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${(totalCents / 100).toFixed(2)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

}


