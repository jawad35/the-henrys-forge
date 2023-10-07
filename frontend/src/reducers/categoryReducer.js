import {
   Get_ALl_Categories_FAIL,
   Get_ALl_Categories_REQUEST,
   Get_All_Categories_SUCCESS,
   DELETE_CATGEORY_REQUEST,
   DELETE_CATEGORY_SUCCESS,
   DELETE_CATEGORY_FAIL,
   DELETE_CATEGORY_RESET,
   NEW_Category_FAIL,
   NEW_Category_REQUEST,
   NEW_Category_SUCCESS,
   NEW_Category_RESET
  } from "../constants/categoryConstants";
  
  export const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case Get_ALl_Categories_REQUEST:
        return {
          loading: true,
          categories: [],
        };
      // case Get_All_Categories_SUCCESS:
      //   return {
      //     loading: false,
      //     categories: action.payload.categories,
      //   };
      case Get_All_Categories_SUCCESS:
        return {
          loading: false,
          categories: action.payload.categories,
          success:action.payload.success
        };
      case Get_ALl_Categories_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
    //   case CLEAR_ERRORS:
    //     return {
    //       ...state,
    //       error: null,
    //     };
      default:
        return state;
    }
  };
  
  export const newCategoryReducer = (state = { categoryData: {} }, action) => {
    switch (action.type) {
      case NEW_Category_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_Category_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          category: action.payload.categoryData,
        };
      case NEW_Category_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_Category_RESET:
        return {
          ...state,
          success: false,
        };
      // case CLEAR_ERRORS:
      //   return {
      //     ...state,
      //     error: null,
      //   };
      default:
        return state;
    }
  };
  
  export const categoryReducer = (state = {Rcategory:{}, isDeleted:false}, action) => {
    switch (action.type) {
      case DELETE_CATGEORY_REQUEST:
        break
      case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload.isDeleted,
          success:action.payload.isDeleted,
        };
      case DELETE_CATEGORY_FAIL:
        break
      case DELETE_CATEGORY_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      default:
        return state;
    }
  };

  