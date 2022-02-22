const initialState = {
    lawyer: []
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'lawyer/load/fulfilled':
            return {
                ...state,
                lawyer: action.payload
            }
        case 'lawyer/profile/image/fulfilled':
            return {
                ...state,
                lawyer: {
                    ...state.lawyer,
                    img: action.payload,
                },
            };
        default:
            return state;
    }
}

export const loadLawyers = () => {
    return (dispatch) => {
        fetch("http://localhost:3005/lawyers")
            .then((res) => res.json())
            .then((data) => {
                dispatch({type: 'lawyer/load/fulfilled', payload: data})
            })
    }
}

export const uploadAvatar = (file) => {
    return (dispatch) => {
        const formData = new FormData();
        formData.append('img', file);

        fetch('http://localhost:3005/lawyers/updateImg', {
            method: 'PATCH',
            headers: {
                // "Content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'lawyer/profile/image/fulfilled', payload: data });
            });
    };
};


