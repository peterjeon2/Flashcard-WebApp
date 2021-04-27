import { FETCH_DECKS, FETCH_DECK, CREATE_DECK, UPDATE_DECK, DELETE_DECK} from '../actions/decks.js';

export default function decks (state = [], action) {
    switch(action.type) {
        case FETCH_DECKS:
            return action.payload;
        
        case FETCH_DECK:
            return action.payload;
        case CREATE_DECK:
            return {
                ...state,
                decks: [...state.decks, action.payload]

            }
        case UPDATE_DECK:
            return {
                ...state,
                decks: state.decks.map((deck) => deck._id === action.payload._id ? action.payload : deck)                
            }
        case DELETE_DECK:
            return {
                ...state,
                decks: state.decks.filter(deck => deck._id !== action.payload)
            }
        default:
            return state;
    }
}