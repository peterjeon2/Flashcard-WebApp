import { getUserBrowser } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(user) {
    return { 
        type: RECEIVE_DATA,
        payload: user
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getUserBrowser().then((res) => {
            dispatch(receiveData(res.data))
        })
    }
}

