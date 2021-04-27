import axios from 'axios';

// User APIs
export const getUserBrowser = () => axios.get(`/getUser`, {withCredentials: true});
export const fetchUsers = () => axios.get(`/users`);
export const fetchUser = (id) => axios.get(`/users/${id}`);
export const createUser = (newUser) => axios.post('/users/create', newUser);
export const updateUser = (id, updatedUser) => axios.patch(`/users/${id}/update`, updatedUser);
export const deleteUser = (id) => axios.delete(`/users/${id}/delete`);

// Deck APIs

export const fetchDecks = (userId) => axios.get(`/users/${userId}/decks`);
export const fetchDeck = (userId, deckId) => axios.get(`/users/${userId}/decks/${deckId}`);
export const createDeck = (userId, newDeck) => axios.post(`/users/${userId}/decks/create`, newDeck);
export const updateDeck = (deckId, updatedDeck) => axios.patch(`/users/${updatedDeck.userId}/decks/${deckId}/update`, updatedDeck);
export const deleteDeck = (userId, deckId) => axios.delete(`/users/${userId}/decks/${deckId}/delete`);

// Card APIs

export const fetchCards = (userId, deckId) => axios.get(`/users/${userId}/decks/${deckId}`);
export const fetchCard = (userId, deckId, cardId) => axios.get(`/users/${userId}/decks/${deckId}/cards/${cardId}`);
export const createCard  = (userId, deckId, newCard) => axios.post(`/users/${userId}/decks/${deckId}/cards/create`, newCard);
export const updateCard = (cardId, updatedCard) => axios.patch(`/users/${updatedCard.userId}/decks/${updatedCard.deckId}/cards/${cardId}/update`, updatedCard);
export const deleteCard = (userId, deckId, cardId) => axios.delete(`/users/${userId}/decks/${deckId}/cards/${cardId}/delete`);

