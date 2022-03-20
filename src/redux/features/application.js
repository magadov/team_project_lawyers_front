const initialState = {
  signIn: false,
  doLogin: false,
  error: null,
  token: localStorage.getItem('token')
};

export default function application(state = initialState, action) {
  switch(action.type) {
    case 'application/signIn/pending':
      return {
        ...state,
        signIn: true,
        error: null
      }
    case 'application/signIn/fulfilled':
      return {
        ...state,
        signIn: false,
      }

    case 'application/signIn/rejected':
      return {
        ...state,
        signIn: false,
        error: action.error
      }
    case 'application/login/pending':
      return {
        ...state,
        doLogin: true,
        error: null
      }
    case 'application/login/fulfilled':
      return {
        ...state,
        doLogin: false,
        token: action.payload.token
      }

    case 'application/login/rejected':
      return {
        ...state,
        doLogin: false,
        error: action.error
      }
    default:
      return state;
  }
}

export const createLawyer = (login, password, name, surname) => {
  return async dispatch => {
    dispatch({type: 'application/signIn/pending'});

    const response = await fetch('http://localhost:3003/lawyers/lawyer', {
      method: 'POST',
      body: JSON.stringify({ login, password, name, surname }),
      headers: {
        "Content-type": "application/json"
      }
    });
    const json = await response.json()

    if(json.error){
      dispatch({type: 'application/signIn/rejected', error: json.error });
    }else {
      dispatch({type: 'application/signIn/fulfilled', payload: json })
    }
  }
}

export const auth = (login, password) => {
  return async dispatch => {
    dispatch({ type: 'application/login/pending' });

    const response = await fetch('http://localhost:3003/lawyers/login', {
      method: 'POST',
      body: JSON.stringify({login, password}),
      headers: {
        "Content-type": "application/json"
      }
    });

    const json = await response.json();

    if(json.error){
      dispatch({ type: 'application/login/rejected', error:json.error});
    } else {
      dispatch({ type: 'application/login/fulfilled', payload: json});

      localStorage.setItem('token',json.token)
    }
  }
}