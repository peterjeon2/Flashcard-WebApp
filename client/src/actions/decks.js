import * as api from '../utils/api';

export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_DECK = 'FETCH_DECK';
export const CREATE_DECK = 'CREATE_DECK';
export const UPDATE_DECK = 'UPDATE_DECK';
export const DELETE_DECK = 'DELETE_DECK';


export const getDecks = (userId) => async (dispatch) => {
    try {
        await api.fetchDecks(userId).then((res) => {
            dispatch({ type: FETCH_DECKS, payload: res.data.data});
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const getDeck = (userId, deckId) => async (dispatch) => {
    try {
        const { deck } = await api.fetchDeck(userId, deckId);
        dispatch({ type: FETCH_DECK, payload: deck});
    } catch (err) {
        console.log(err.message);
    }
};

export const createDeck = (userId, newDeck) => async (dispatch) => {
    try {
        const { deck } = await api.createDeck(userId, newDeck);
        dispatch({ type: CREATE_DECK, payload: deck });
    } catch (err) {
        console.log(err.message);
    }
};

export const updateDeck = (deckId, updatedDeck) => async (dispatch) => {
    try {
      const { deck } = await api.updateUser(deckId, updatedDeck);
  
      dispatch({ type: UPDATE_DECK, payload: deck });
    } catch (err) {
      console.log(err.message);
    }
};

export const deleteDeck = (userId, deckId) => async (dispatch) => {
  try {
    await api.deleteDeck(userId, deckId);

    dispatch({ type: DELETE_DECK, payload: deckId });
  } catch (err) {
    console.log(err.message);
  }
};