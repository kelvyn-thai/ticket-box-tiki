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
  total: number;
}

const initialState: IReducer = {
  isFetching: true,
  isFetched: false,
  data: {},
  ticketsSelected: {},
  total: 0
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
      const { id, details } = action.payload;
      let tickets: any = { ...state.ticketsSelected };
      const price = details.price_float;
      if (!tickets[id]) {
        return {
          ...state,
          ticketsSelected: {
            ...tickets,
            [id]: {
              ...action.payload
            }
          },
          total: state.total + price
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
        },
        total: state.total - price
      };
    }
    default:
      return state;
  }
};
