const initialState = {
  lawyer: [],
  categories: [],
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "lawyer/profile/fetch/fulfilled":
      return {
        ...state,
        lawyer: action.payload,
      };
    case "lawyer/profile/fetch/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "lawyer/profile/image/fulfilled":
      return {
        ...state,
        lawyer: {
          ...state.lawyer,
          img: action.payload,
        },
      };
    case "load/categories/fulfilled":
      return {
        ...state,
        categories: action.payload,
      };
    case "edit/lawyer/fulfilled":
      return {
        ...state,
        lawyer: action.payload,
      };
    case "lawyer/myList/fetch/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "lawyer/myList/fetch/fulfilled":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    case "add/services/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "add/services/fulfilled":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    case "DELETE_SERVICES":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    default:
      return state;
  }
};

export const loadLawyer = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3003/lawyers/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "lawyer/profile/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "lawyer/profile/fetch/rejected", error: e.message });
    }
  };
};

export const uploadAvatar = (file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("img", file);

    fetch("http://localhost:3003/lawyers/updateImg", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "lawyer/profile/image/fulfilled", payload: data });
      });
  };
};

export const loadCategories = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3003/categories");
      const json = await res.json();
      dispatch({ type: "load/categories/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "load/categories/rejected", error: e.message });
    }
  };
};

export const editLawyersInfo = (name, surname, email) => {
  const editLawyersInfo = {
    name,
    surname,
    email,
  };
  return (dispatch) => {
    fetch("http://localhost:3003/lawyers/edit", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(editLawyersInfo),
    })
      .then((res) => res.json())
      .then((edit) => {
        dispatch({ type: "edit/lawyer/fulfilled", payload: edit });
      });
  };
};

export const loadMyList = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3003/lawyers/profile", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "lawyer/myList/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "lawyer/myList/fetch/rejected", error: e.message });
    }
  };
};

export const createServices = (text, price) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3003/lawyers/add", {
        method: "PATCH",
        body: JSON.stringify({ text, price }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "add/services/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "add/services/rejected", error: e.message });
    }
  };
};

export const deleteServices = (id) => {
  return async (dispatch) => {
    try {
     const res = await fetch(`http://localhost:3003/lawyers/service/${id}/delete/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      const json =  await res.json()
      dispatch({
        type: "DELETE_SERVICES",
        payload: json,
      });
    }catch (e) {
      dispatch({type: "DELETE_SERVICES_REJECTED", error: e.message })
    }
  };
};
