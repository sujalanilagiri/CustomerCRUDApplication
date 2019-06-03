import { all } from "redux-saga/effects";
import { customerSagas } from "../components/customer/modules/customerSagas";

export default function* sagas() {
  yield all([...customerSagas]);
}