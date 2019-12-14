import {
  ACTION_FETCHED,
  ACTION_FETCH_FAIL,
  ACTION_SELECTED_TICKET
} from "./tickets.constant";

interface IReducer {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
  ticketsSelected: any;
}

const initialState: IReducer = {
  isFetching: true,
  isFetched: false,
  data: {},
  ticketsSelected: {}
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case ACTION_FETCHED: {
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        data: { ...action.payload }
      };
    }
    case ACTION_FETCH_FAIL: {
      return {
        ...state,
        isFetched: false,
        isFetching: false
      };
    }
    case ACTION_SELECTED_TICKET: {
      const { id } = action.payload;
      let tickets: any = { ...state.ticketsSelected };
      if (!tickets[id]) {
        return {
          ...state,
          ticketsSelected: {
            ...tickets,
            [id]: {
              ...action.payload
            }
          }
        };
      }
      return {
        ...state,
        ticketsSelected: {
          ...Object.keys(tickets).reduce((object: any, key: any) => {
            if (key !== id) {
              object[key] = tickets[key];
            }
            return object;
          }, {})
        }
      };
    }
    default:
      return state;
  }
};
