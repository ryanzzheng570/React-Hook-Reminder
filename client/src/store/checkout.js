import {
    modifyCheckoutSushi,
    removeCheckoutSushi,
    addSushiToCheckout
} from "./utils/reducerFunctions";

const CHECKOUT_ADD_SUSHI = "CHECKOUT_ADD_SUSHI";
const CHECKOUT_MODIFY_SUSHI = "CHECKOUT_MODIFY_SUSHI";
const CHECKOUT_REMOVE_SUSHI = "CHEKCOUT_REMOVE_SUSHI";
const CHECKOUT_ADD_DELIVERY_METHOD = "CHECKOUT_ADD_DELIVERY_METHOD";
const CHECKOUT_ADD_CONTACT_INFO = "CHECKOUT_ADD_CONTACT_INFO";

export const checkoutAddSushi = (sushi) => {
    return {
        type: CHECKOUT_ADD_SUSHI,
        payload: {
            sushi
        }
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

export const checkoutRemoveSushi = (checkoutItemId) => {
    return {
        type: CHECKOUT_REMOVE_SUSHI,
        payload: {
            checkoutItemId
        }
    }
}

export const checkoutAddDeliveryMethod = (deliveryMethod, time, isPayingCash) => {
    return {
        type: CHECKOUT_ADD_DELIVERY_METHOD,
        payload: {
            deliveryMethod,
            time,
            isPayingCash
        }
    }
}

export const checkoutAddContactInfo = (name, phone, email) => {
    return {
        type: CHECKOUT_ADD_CONTACT_INFO,
        payload: {
            name,
            phone,
            email
        }
    }
}

const initialState = {
    items: [],
    delivery: {
        method: '',
        time: '',
        isPayingCash: false
    },
    contact: {
        name: '',
        phone: '',
        email: ''
    },
    isPaid: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_ADD_SUSHI: {
            return addSushiToCheckout(state, action.payload.sushi);
        }
        case CHECKOUT_MODIFY_SUSHI: {
            return modifyCheckoutSushi(
                state,
                action.payload.checkoutItemId,
                action.payload.quantity
            );
        }
        case CHECKOUT_REMOVE_SUSHI: {
            return removeCheckoutSushi(state, action.payload.checkoutItemId);
        }
        case CHECKOUT_ADD_DELIVERY_METHOD: {
            return {
                ...state, delivery: {
                    method: action.payload.deliveryMethod,
                    time: action.payload.time,
                    isPayingCash: action.payload.isPayingCash
                }
            };
        }
        case CHECKOUT_ADD_CONTACT_INFO: {
            return {
                ...state, contact: {
                    name: action.payload.name,
                    phone: action.payload.phone,
                    email: action.payload.email
                }
            }
        }
        default: {
            return state;
        }

    }
}

export default reducer