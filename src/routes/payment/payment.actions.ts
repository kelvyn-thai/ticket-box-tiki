import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_FETCH
} from "./payment.constant";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { apiPayment } from "./payment.services";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTION_FETCH_FAIL
});

export const actionFetch = (payload: any) => ({
  type: ACTION_FETCH,
  payload
});

function* actionFetchContent(action: { type: string; payload: any }) {
  try {
    const { data } = yield call(apiPayment, action.payload);
    yield delay(1000);
    if (data.status > 0) {
      yield put(actionFetched(data.data));
    }
  } catch (error) {
    yield put(actionFetchFail());
  }
}

function* watchFetchContent() {
  yield takeEvery(ACTION_FETCH, actionFetchContent);
}

export default [watchFetchContent];
