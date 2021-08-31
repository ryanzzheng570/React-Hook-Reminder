import axios from "axios"
import { setAvailableSushi } from "../availableSushi";
import { serverAddress } from "../../util/constants";

export const fetchSushi = () => async (dispatch) => {
    const { data } = await axios.get(`${serverAddress}/sushi`);
    const avilableSushi = data.filter((sushi) => sushi.isAvail === true);
    dispatch(setAvailableSushi(avilableSushi));
}