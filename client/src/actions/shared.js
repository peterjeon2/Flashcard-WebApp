import { getUserBrowser } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(data) {
    return { 
        type: RECEIVE_DATA,
        user: data
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            getUserBrowser()
        ]).then((data) => {
            dispatch(receiveData(data))
        })
    }
}

