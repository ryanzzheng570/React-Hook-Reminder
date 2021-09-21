import { calcPriceTotal } from "../../util/utils";

export const addSushiToCheckout = (state, newSushi) => {
    const stateCopy = { ...state };
    stateCopy.items.push(newSushi);
    return stateCopy;
}

export const modifyCheckoutSushi = (state, checkoutItemId, quantity) => {
    let stateCopy = { ...state };
    let { items } = stateCopy;
    const sushiIndex = items.findIndex((item) => item.checkoutItemId === checkoutItemId);
    items[sushiIndex].quantity = quantity;
    items[sushiIndex].totalPrice = calcPriceTotal(items[sushiIndex].singlePrice, quantity)
    stateCopy.items = items;
    return stateCopy;
}

export const removeCheckoutSushi = (state, checkoutItemId) => {
    let stateCopy = { ...state };
    stateCopy.items = stateCopy.items.filter((sushi) => sushi.checkoutItemId !== checkoutItemId);
    return stateCopy;
}