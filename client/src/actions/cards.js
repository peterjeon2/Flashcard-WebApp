import * as api from '../utils/api';

export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARD = 'FETCH_CARD';
export const CREATE_CARD = 'CREATE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';


export const getCards = (userId, deckId) => async (dispatch) => {
    try {
        await api.fetchCards(userId, deckId).then((res) => {
            dispatch({ type: FETCH_CARDS, payload: res.data.data});
        });
    } catch (err) {
        console.log(err.message);
    }
};

export const getCard = (userId, deckId, cardId) => async (dispatch) => {
    try {
        const { card } = await api.fetchCard(userId, deckId, cardId);
        dispatch({ type: FETCH_CARD, payload: card});
    } catch (err) {
        console.log(err.message);
    }
};

export const createCard = (userId, deckId, newCard) => async (dispatch) => {
    try {
        const { card } = await api.createCard(userId, deckId, newCard);
        dispatch({ type: CREATE_CARD, payload: card });
    } catch (err) {
        console.log(err.message);
    }
};

export const updateCard = (cardId, updatedCard) => async (dispatch) => {
    try {
      const { card } = await api.updateCard(cardId, updatedCard);
  
      dispatch({ type: UPDATE_CARD, payload: card });
    } catch (err) {
      console.log(err.message);
    }
};

export const deleteCard = (userId, deckId, cardId) => async (dispatch) => {
  try {
    await api.deleteCard(userId, deckId, cardId);

    dispatch({ type: DELETE_CARD, payload: cardId });
  } catch (err) {
    console.log(err.message);
  }
};