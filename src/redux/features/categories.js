const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "category/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "category/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case "category/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default categories;

export const fetchAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "category/fetch/pending" });
    try {
      const res = await fetch("http://localhost:3003/categories");
      const json = await res.json();

      dispatch({ type: "category/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "category/fetch/rejected", error: e.toString() });
    }
  };
};
