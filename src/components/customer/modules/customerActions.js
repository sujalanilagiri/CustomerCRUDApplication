export const GET_CUSTOMERS_LIST = "GET_CUSTOMER_LIST";

export const GET_CUSTOMERS = "GET_CUSTOMERS";

export const SAVE_CUSTOMER = "SAVE_CUSTOMER";

export const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";

export const UPDATE_CUSTOMER_RESULT = "UPDATE_CUSTOMER_RESULT";

export const SAVE_CUSTOMER_RESULT = "SAVE_CUSTOMER_RESULT";

export function getCustomerList() {
  return {
    type: GET_CUSTOMERS
  };
}

export function saveCustomer(data) {
  return {
    type: SAVE_CUSTOMER,
    data:data
  };
}

export function deleteCustomer(name) {
  return {
    type: DELETE_CUSTOMER,
    customerName:name
  };
}

export function updateCustomer(customer) {
  return {
    type: UPDATE_CUSTOMER,
    updateCustomer:customer
  };
}