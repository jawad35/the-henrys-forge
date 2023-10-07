import { ADMIN_BANNER_FAIL, ADMIN_BANNER_GET_SUCCESS, ADMIN_BANNER_REQUEST, ADMIN_BANNER_SUCCESS, ADMIN_BANNER_UPDATE_RESET, ADMIN_BANNER_UPDATE_SUCCESS } from "../constants/bannerConstants";

export const newBannerReducer = (state = { banner: {}, loadingb:false }, action) => {
    switch (action.type) {
      case ADMIN_BANNER_REQUEST:
        return {
          ...state,
          loadingb: true,
        };
      case ADMIN_BANNER_SUCCESS:
        return {
          loadingb: false,
          successb: action.payload.success,
          banner: action.payload.banner,
        };
      case ADMIN_BANNER_FAIL:
        return {
          ...state,
          loadingb: false,
          error: action.payload,
        };
      // case ADMIN_BANNER_REST:
      //   return {
      //     ...state,
      //     success: false,
      //   };
    //   case CLEAR_ERRORS:
    //     return {
    //       ...state,
    //       error: null,
    //     };
      default:
        return state;
    }
  };

  export const getBannerReducer = (state = { banner: {}, loadingb:true }, action) => {
    switch (action.type) {
      case ADMIN_BANNER_REQUEST:
        return {
          ...state,
          loadingb: true,
        };
      case ADMIN_BANNER_GET_SUCCESS:
        return {
          loadingb: false,
          successb: action.payload.success,
          banner: action.payload.banner,
        };
      case ADMIN_BANNER_FAIL:
        return {
          ...state,
          loadingb: false,
          error: action.payload,
        };
      // case ADMIN_BANNER_REST:
      //   return {
      //     ...state,
      //     success: false,
      //   };
    //   case CLEAR_ERRORS:
    //     return {
    //       ...state,
    //       error: null,
    //     };
      default:
        return state;
    }
  };

  export const updateBannerReducer = (state = { success:false }, action) => {
    switch (action.type) {
      case ADMIN_BANNER_UPDATE_SUCCESS:
        return {
          success: action.payload.success,
        };
        case ADMIN_BANNER_UPDATE_RESET:
          return {
            success: false,
          };  
      default:
        return state;
    }
  };