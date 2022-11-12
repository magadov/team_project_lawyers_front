import { serverUrl } from '../../serverUrl';

const initialState = {
  lawyer: [],
  categories: [],
  services: [],
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
    case "create/services/rejected":
      return {
        ...state,
        error: action.error,
      };
    case "create/services/fulfilled":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    case "DELETE_SERVICES":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    case "DELETE_SERVICES_REJECTED":
      return {
        ...state,
        error: action.error,
      };
    case "LOAD_SERVICES":
      return {
        ...state,
        services: action.payload
      }
    case "LOAD_SERVICES_REJECTED":
      return {
        ...state,
        error: action.error,
      };
    case "add/services/fulfilled":
      return {
        ...state,
        lawyer: { ...state.lawyer, ...action.payload },
      };
    case "DELETE_SERV":
      return {
        ...state,
        lawyer: {...state.lawyer, ...action.payload }
      }
    case "DELETE_SERV_REJECTED":
      return {
        ...state,
        error: action.message
      }
    default:
      return state;
  }
};

export const loadLawyer = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${serverUrl}/lawyers/profile`, {
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

    fetch(`${serverUrl}/lawyers/updateImg`, {
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
      const res = await fetch(`${serverUrl}/categories`);
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
    fetch(`${serverUrl}/lawyers/edit`, {
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
      const res = await fetch(`${serverUrl}/lawyers/profile`, {
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
      const res = await fetch(`${serverUrl}/lawyers/add`, {
        method: "PATCH",
        body: JSON.stringify({ text, price }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await res.json();
      dispatch({ type: "create/services/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "create/services/rejected", error: e.message });
    }
  };
};

export const deleteServices = (id) => {
  return async (dispatch) => {
    try {
     const res = await fetch(`${serverUrl}/lawyers/service/${id}/delete/`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      const json =  await res.json()
      console.log(json)
      dispatch({
        type: "DELETE_SERVICES",
        payload: json,
      });
    }catch (e) {
      dispatch({type: "DELETE_SERVICES_REJECTED", error: e.message })
    }
  };
};

export const loadServices = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${serverUrl}/services`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      const json =  await res.json()
      dispatch({
        type: "LOAD_SERVICES",
        payload: json,
      });
    }catch (e) {
      dispatch({type: "LOAD_SERVICES_REJECTED", error: e.message })
    }
  };
};
export const addServices = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${serverUrl}/lawyers/service/add/${id}`, {
        method: "PATCH",
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

export const deleteServ = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${serverUrl}/lawyers/service/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      const json =  await res.json()
      dispatch({
        type: "DELETE_SERV",
        payload: json,
      });
    }catch (e) {
      dispatch({type: "DELETE_SERV_REJECTED", error: e.message })
    }
  };
};
