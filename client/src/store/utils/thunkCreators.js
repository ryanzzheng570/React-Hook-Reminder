import axios from "axios"
import { setAvailableSushi } from "../availableSushi";
import {
    checkoutAddSushi,
    checkoutModifySushi,
    checkoutRemoveSushi,
    checkoutAddDeliveryMethod,
    checkoutAddContactInfo
} from "../checkout";


export const fetchSushi = () => async (dispatch) => {
    const { data } = await axios.get(`api/sushi`);
    const avilableSushi = data.filter((sushi) => sushi.isAvail === true);
    dispatch(setAvailableSushi(avilableSushi));
}

export const addSushiToCart = (order) => (dispatch) => {
    dispatch(checkoutAddSushi(order));
}

export const modifyCartSushi = (checkoutItemId, quantity) => (dispatch) => {
    dispatch(checkoutModifySushi(checkoutItemId, quantity))
}

export const removeSushiFromCart = (checkoutItemId) => (dispatch) => {
    dispatch(checkoutRemoveSushi(checkoutItemId));
}

export const addDeliveryMethod = (deliverymMethod, time, isPayingCash) => (dispatch) => {
    dispatch(checkoutAddDeliveryMethod(deliverymMethod, time, isPayingCash))
}

export const addContactInfo = (name, phone, email) => (dispatch) => {
    dispatch(checkoutAddContactInfo(name, phone, email))
}