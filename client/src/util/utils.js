export const calcPriceTotal = (price, quantity) => {
    return Math.round(price * quantity * 100) / 100;
}

export const getTotalPrice = (items) => {
    let total = 0;
    items.forEach((item) => {
        total = total + item.totalPrice
    });
    return total;
}