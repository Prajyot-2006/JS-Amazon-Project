import { cart } from "../../data/02-cart.js";
import { getProduct } from "../../data/01-products.js";
import { getDeliveryOption } from "../../data/03-deliveryOptions.js";

export function renderpaymentSummary() {
    let productPriceCents = 0
    let shippingPriceCents = 0
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents = productPriceCents + product.priceCents * cartItem.quantity;
        const deliveryOption = getDeliveryOption(cartItem.getDeliveryOptionId);
        shippingPriceCents = shippingPriceCents + deliveryOption.priceCents
    });
    console.log(productPriceCents);
    console.log(shippingPriceCents);
}

// just fucking mkake sure why 0 is there in console and dry run so hard 