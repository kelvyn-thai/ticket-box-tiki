import { ACTION_FETCHED, ACTION_FETCH_FAIL } from "./content.constant";
import { formatTimeByHours, formatTimeByDate } from "src/shared/utils";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
}

const initialState: IReducer = {
  isFetching: true,
  isFetched: false,
  data: {}
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: object;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHED: {
      const { time_start, time_end }: any = action.payload;
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: {
          ...action.payload,
          time_start_formated: formatTimeByHours(time_start),
          time_end_formated: formatTimeByHours(time_end),
          show_time_formated: formatTimeByDate(time_start)
        }
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
