const SET_AVAILABLE_SUSHI = "SET_AVAILABLE_SUSHI";

export const setAvailableSushi = (availableSushi) => {
    return {
        type: SET_AVAILABLE_SUSHI,
        availableSushi
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case SET_AVAILABLE_SUSHI: {
            return action.availableSushi;

        }
        default:
            return state;

    }
}

export default reducer