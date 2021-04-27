import { combineReducers } from 'redux'

import cards from './cards'
import decks from './decks'
import users from './users'

export default combineReducers({
    cards,
    decks,
    users,
});