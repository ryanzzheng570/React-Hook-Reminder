const CHECKOUT_ADD_SUSHI = "CHECKOUT_ADD_SUSHI";

export const checkoutAddSushi = (sushi) => {
    return {
        type: CHECKOUT_ADD_SUSHI,
        sushi
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case CHECKOUT_ADD_SUSHI: {
            return [...state, action.sushi];
        }
        default:
            return state;

    }
}

export default reducer