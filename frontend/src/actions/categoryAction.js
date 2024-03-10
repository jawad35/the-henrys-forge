import axios from "axios";

import {
  NEW_Category_SUCCESS,
  NEW_Category_FAIL,
  Get_All_Categories_SUCCESS,
  Get_ALl_Categories_FAIL,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
} from "../constants/categoryConstants";
import { BASE_URL } from "../globalUrl/Urls";
// Create Category
export const createCategory = (categoryData) => async (dispatch) => {
    try {
      // dispatch({ type: NEW_Category_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/admin/category/new`,
        categoryData,
        config
      );
  
      dispatch({
        type: NEW_Category_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_Category_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Get All Categories For Admin
export const getAdminCategories = () => async (dispatch) => {
    try {
      // dispatch({ type: Get_ALl_Categories_REQUEST });
      const { data } = await axios.get(`/api/v1/admin/categories`);
      dispatch({
        type: Get_All_Categories_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: Get_ALl_Categories_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Delete Category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/v1/admin/category/${id}`);
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};