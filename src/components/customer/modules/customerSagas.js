import { takeEvery, put, call, select } from "redux-saga-effects";
import CustomerApi from "./customerApi";


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

function* watchsaga() {
    yield takeEvery("GET_CUSTOMERS", fetchData);
  }
  export const customerSagas = [watchsaga()];