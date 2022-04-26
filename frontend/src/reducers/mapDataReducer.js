import {
  MAP_DATA_FAIL,
  MAP_DATA_REQUEST,
  MAP_DATA_SUCCESS,
} from "../constants/mapDataConstants";



export const MapListReducer = (state = { maps: [] }, action) => {
  switch (action.type) {
    case MAP_DATA_REQUEST:
      return { loading: true };
    case MAP_DATA_SUCCESS:
      return { loading: false, maps: action.payload };
    case MAP_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};