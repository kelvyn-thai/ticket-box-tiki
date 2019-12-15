import {
  ACTION_FETCH_FAIL,
  ACTION_FETCHED,
  ACTION_FETCH
} from "./payment.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
}

const initialState: IReducer = {
  isFetching: false,
  isFetched: false,
  data: {}
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCH: {
      return { ...state, isFetching: true };
    }
    case ACTION_FETCHED: {
      return {
        ...state,
        data: { ...action.payload },
        isFetched: true,
        isFetching: false
      };
    }
    case ACTION_FETCH_FAIL: {
      return {
        ...state,
        isFetched: false,
        isFetching: false
      };
    }
    default:
      return state;
  }
};
