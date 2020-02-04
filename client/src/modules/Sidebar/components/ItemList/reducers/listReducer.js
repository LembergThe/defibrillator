import {
  SET_LOADING,
  SUCCESS_LOAD_DATA,
  FAIL_LOAD_DATA,
  SET_PAGE,
  SET_PER_PAGE
} from '../consts';

const initialState = {
  loading: false,
  error: null,
  data: [],
  page: 1,
  perPage: 10
};

export default function listReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // LOAD
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
        error: null
      };
    case SUCCESS_LOAD_DATA:
      return {
        ...state,
        data: payload
      };
    case FAIL_LOAD_DATA:
      return {
        ...state,
        error: payload
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload
      };
    case SET_PER_PAGE:
      return {
        ...state,
        perPage: payload
      };
    default:
      return state;
  }
}

export function defsFilterSelector(state) {
  return state.defs.data.filter(def =>
    def.address
      .toLowerCase()
      .includes(state.filter.toLowerCase())
  );
}