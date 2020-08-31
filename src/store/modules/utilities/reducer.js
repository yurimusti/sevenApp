const INITIAL_STATE = {
  list: [],
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@list/GET_LIST_SUCCESS":
      return {
        ...state,
        list: action.payload,
      };

    case "@list/LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
