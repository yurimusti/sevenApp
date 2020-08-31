import { takeLatest, call, all, put } from "redux-saga/effects";
import { getList } from "./call";
import { notification } from "antd";

export function* getListSaga() {
  yield put({ type: "@list/LOADING", payload: true });
  try {
    const { data } = yield call(getList);
    yield put({ type: "@list/GET_LIST_SUCCESS", payload: data });
    yield put({ type: "@list/LOADING", payload: false });
  } catch (error) {
    notification.error({ message: "Erro", description: "Error API." });
    yield put({ type: "@list/LOADING", payload: false });
  }
}

export default all([takeLatest("@list/GET_LIST", getListSaga)]);
