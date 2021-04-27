import { FETCH_USERS, FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER} from '../actions/users.js';
import { RECEIVE_DATA } from '../actions/shared.js';

export default function users (state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
            return action.payload;
        case FETCH_USER :
            return action.payload;
        case CREATE_USER :
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case UPDATE_USER :
            return {
                ...state,
                users: state.users.map((user) => (user.__id === action.payload.__id ? action.payload : user))
            };
        case DELETE_USER : 
            return {
                ...state,
                users: state.users.filter((user) => user.__id !== action.payload)
            };
        case RECEIVE_DATA :
            return action.payload;
        default : 
            return state;
    }
}

