import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_LIST
} from "./customerActions";

const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
    case GET_CUSTOMERS_LIST:
      return {
        ...state,
        customerList: action.data
      };
      default:
      return state;
  }
};

export default customerReducer;
