import { FETCH_CARDS, FETCH_CARD, CREATE_CARD, UPDATE_CARD, DELETE_CARD} from '../actions/cards'
    
export default function cards (state = [], action) {
    switch(action.type) {
        case FETCH_CARDS:
            return action.payload;
        case FETCH_CARD:
            return action.payload;
        case CREATE_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
        case UPDATE_CARD:
            return {
                ...state,
                cards: state.cards.map((card) => card._id === action.payload._id ? action.payload : card)                
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.payload)
            };
        default:
            return state;
    }
}