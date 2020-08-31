import { all } from "redux-saga/effects";

import utilities from "./utilities/sagas";

export default function* rootSaga() {
  return yield all([utilities]);
}
