import { modifyCheckoutSushi } from "./utils/reducerFunctions";

const CHECKOUT_ADD_SUSHI = "CHECKOUT_ADD_SUSHI";
const CHECKOUT_MODIFY_SUSHI = "CHECKOUT_MODIFY_SUSHI";

export const checkoutAddSushi = (sushi) => {
    return {
        type: CHECKOUT_ADD_SUSHI,
        sushi
    };
};

export const checkoutModifySushi = (checkoutItemId, quantity) => {
    return {
        type: CHECKOUT_MODIFY_SUSHI,
        payload: {
            checkoutItemId,
            quantity
        }
    }
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case CHECKOUT_ADD_SUSHI: {
            return [...state, action.sushi];
        }
        case CHECKOUT_MODIFY_SUSHI: {
            return modifyCheckoutSushi(
                state,
                action.payload.checkoutItemId,
                action.payload.quantity
            )
        }
        default:
            return state;

    }
}

export default reducer