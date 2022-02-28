const initialState = {
  lawyer: [],
  categories: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "lawyer/profile/fetch/fulfilled":
      return {
        ...state,
        lawyer: action.payload,
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
        lawyer: action.payload
      };
    default:
      return state;
  }
};

export const loadLawyer = () => {
  return (dispatch) => {
    fetch("http://localhost:3006/lawyers/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "lawyer/profile/fetch/fulfilled", payload: data });
      });
  };
};

export const uploadAvatar = (file) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("img", file);

    fetch("http://localhost:3006/lawyers/updateImg", {
      method: "PATCH",
      headers: {
        // "Content-type": "application/json",
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
  return (dispatch) => {
    fetch("http://localhost:3006/categories")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "load/categories/fulfilled", payload: data });
      });
  };
};

export const editLawyersInfo = (name, surname, email) => {
  const editLawyersInfo = {
    name,
    surname,
    email
  }
  return (dispatch) => {
    fetch("http://localhost:3006/lawyers/edit", {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json',
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
