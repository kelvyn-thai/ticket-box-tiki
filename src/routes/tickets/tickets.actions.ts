import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_FETCH
} from "./tickets.constant";
import { call, put, takeEvery } from "redux-saga/effects";
import { apiGetTicketsById } from "./tickets.services";

export const actionFetched = (payload: any) => ({
  type: ACTION_FETCHED,
  payload
});

export const actionFetchFail = () => ({
  type: ACTION_FETCH_FAIL
});

function* actionFetchContent(action: { type: string; payload: any }) {
  try {
    const { data } = yield call(apiGetTicketsById, action.payload.id);
    if (data.status > 0) {
      yield put(actionFetched(data.data));
    }
  } catch (error) {
    console.log(error);
    yield put(actionFetchFail());
  }
}

function* watchFetchContent() {
  yield takeEvery(ACTION_FETCH, actionFetchContent);
}

export default [watchFetchContent];
