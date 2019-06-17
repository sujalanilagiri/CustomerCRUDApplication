
import {takeEvery,call,put,select} from "redux-saga/effects";
import CustomerApi from "./customerApi";

export const getSavedCustomer = state => state.customers.savedCustomer;

export const getSelectedCustomer = state => state.customers.selectedCustomer;

export const getUpdatedCustomer = state => state.customers.updatedCustomer;
function* fetchData(action) {
  try {
    const data = yield call(CustomerApi.get);
    if (data) {
      yield put({ type: "GET_CUSTOMERS_LIST", data });
    }
  } catch (e) {
    console.log("Error" + e);
  }
}

function* postData(action) {
  try {
    const ch = yield select(getSavedCustomer);
    const val = yield call(CustomerApi.post, ch);
    if (val) {
      yield put({ type: "SAVE_CUSTOMER_RESULT", val });
      yield put({ type: 'GET_CUSTOMERS' })
    }
  } catch (e) {
    console.log("Error" + e);
  }
}

function* deleteCustomer(action) {
  try {
    const customerToDelete = yield select(getSelectedCustomer);
    const val = yield call(CustomerApi.delete, customerToDelete);
    if (val) {
      yield put({ type: "DELETE_CUSTOMER_RESULT", val });
      yield put({ type: 'GET_CUSTOMERS' })
    }
  } catch (e) {
    console.log("Error" + e);
  }
}
function* updateCustomer(action) {
  try {
    const updatedCustomer = yield select(getUpdatedCustomer);
    const val = yield call(CustomerApi.put, updatedCustomer);
    if (val) {
      yield put({ type: "UPDATE_CUSTOMER_RESULT", val });
      yield put({ type: 'GET_CUSTOMERS' })
    }
  } catch (e) {
    console.log("Error" + e);
  }
}

function* watchsaga() {
    yield takeEvery("GET_CUSTOMERS", fetchData);
    yield takeEvery("SAVE_CUSTOMER", postData);
    yield takeEvery("DELETE_CUSTOMER",deleteCustomer);
    yield takeEvery("UPDATE_CUSTOMER",updateCustomer);
  }
  export const customerSagas = [watchsaga()];