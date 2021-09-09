export const calcPriceTotal = (price, quantity) => {
    return Math.round(price * quantity * 100) / 100;
}