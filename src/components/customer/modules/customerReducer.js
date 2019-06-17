import {
  GET_CUSTOMERS,
  GET_CUSTOMERS_LIST,
  SAVE_CUSTOMER,
  DELETE_CUSTOMER,
  SAVE_CUSTOMER_RESULT,
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_RESULT
} from "./customerActions";

const customerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
    case GET_CUSTOMERS_LIST:
      return {
        ...state,
        customerList: action.data
      };
    case SAVE_CUSTOMER:
      return {
        ...state,
        savedCustomer: action.data
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        selectedCustomer: action.customerName
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        updatedCustomer: action.updateCustomer
      };

    case SAVE_CUSTOMER_RESULT:
      return {
        ...state,
        response: action.val,
    
      };

    case UPDATE_CUSTOMER_RESULT:
          return {
            ...state,
            response: action.val,
        
          };
    default:
      return {
        ...state,
        customerList: action.data
      };
  }
};

export default customerReducer;
