import { FETCH_USER, CREATE_USER, UPDATE_USER, DELETE_USER} from '../actions/users';

export default function users (users = [], action) {
    switch(action.type) {
        case FETCH_USER :
            return action.payload;
        case CREATE_USER :
            return [...users, action.payload];
        case UPDATE_USER :
            return users.map((user) => (user.__id === action.payload.__id ? action.payload : user));
        case DELETE_USER : 
            return users.filter((user) => user.__id !== action.payload);
        default : 
            return users;

    }
}

