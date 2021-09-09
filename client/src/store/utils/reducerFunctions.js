export const modifyCheckoutSushi = (state, checkoutItemId, quantity) => {
    let stateCopy = [...state];
    const sushiIndex = stateCopy.findIndex((item) => item.checkoutItemId === checkoutItemId);
    stateCopy[sushiIndex].quantity = quantity;
    stateCopy[sushiIndex].totalPrice = stateCopy[sushiIndex].singlePrice * quantity;
    return stateCopy;
}