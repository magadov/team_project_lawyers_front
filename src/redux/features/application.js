const initialState = {
  signIn: false,
  error: null,
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
    default:
      return state;
  }
}

export const createLawyer = (login, password, name, surname) => {
  return async dispatch => {
    dispatch({type: 'application/signIn/pending'});

    const response = await fetch('http://localhost:3002/lawyers/lawyer', {
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