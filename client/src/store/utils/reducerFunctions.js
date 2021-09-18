import { calcPriceTotal } from "../../util/utils";

export const modifyCheckoutSushi = (state, checkoutItemId, quantity) => {
    let stateCopy = [...state];
    const sushiIndex = stateCopy.findIndex((item) => item.checkoutItemId === checkoutItemId);
    stateCopy[sushiIndex].quantity = quantity;
    stateCopy[sushiIndex].totalPrice = calcPriceTotal(stateCopy[sushiIndex].singlePrice, quantity)
    return stateCopy;
}

export const removeCheckoutSushi = (state, checkoutItemId) => {
    let stateCopy = [...state];
    return stateCopy.filter((sushi) => sushi.checkoutItemId !== checkoutItemId);
}