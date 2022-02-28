import {
  MAP_DATA_FAIL,
  MAP_DATA_REQUEST,
  MAP_DATA_SUCCESS,
} from "../constants/mapDataConstants";
import axios from "axios";

export const map = (mapname, location) => async (dispatch) => {
  try {
    dispatch({ type: MAP_DATA_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/createeventnote",config
    );

    dispatch({ type: MAP_DATA_SUCCESS, payload: data });

    localStorage.setItem("MapInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: MAP_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
