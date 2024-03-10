import axios from "axios";
import { ADMIN_BANNER_FAIL, ADMIN_BANNER_GET_SUCCESS, ADMIN_BANNER_REQUEST, ADMIN_BANNER_SUCCESS, ADMIN_BANNER_UPDATE_RESET, ADMIN_BANNER_UPDATE_SUCCESS } from "../constants/bannerConstants";
import { BASE_URL } from "../globalUrl/Urls";
// Create Banner
export const createBanner = (productData) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BANNER_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/admin/banner/new`,
        productData,
        config
      );
  
      dispatch({
        type: ADMIN_BANNER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_BANNER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const GetBanner = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BANNER_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.get(
        `/api/v1/admin/banner`,
        config
      );
  
      dispatch({
        type: ADMIN_BANNER_GET_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_BANNER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const updateBanner = (bannerData) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_BANNER_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/admin/updatebanner`,
        bannerData,
        config
      );
      dispatch({
        type: ADMIN_BANNER_UPDATE_SUCCESS,
        payload: data,
      });
    dispatch({type:ADMIN_BANNER_UPDATE_RESET});
    } catch (error) {
      dispatch({
        type: ADMIN_BANNER_FAIL,
        payload: error.response.data.message,
      });
    }
  };