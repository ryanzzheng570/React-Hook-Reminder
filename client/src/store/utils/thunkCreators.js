import axios from "axios"
import { setAvailableSushi } from "../availableSushi";

export const fetchSushi = () => async (dispatch) => {
    const { data } = await axios.get(`api/sushi`);
    const avilableSushi = data.filter((sushi) => sushi.isAvail === true);
    dispatch(setAvailableSushi(avilableSushi));
}