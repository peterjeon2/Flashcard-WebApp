import express from 'express';
const router = express.Router();
import { getCards, getCard, addCard, deleteCard, updateCard } from '../controllers/cardController.js'
import { getDecks, getDeck, addDeck, deleteDeck, updateDeck } from '../controllers/deckController.js'
import { getUsers , getUser, addUser, deleteUser, updateUser } from '../controllers/userController.js'

/// CARD ROUTES ///

// GET request for cards.

router.get('/users/:userId/decks/:deckId/cards', getCards);

// GET request for individual card.

router.get('/users/:userId/decks/:deckId/cards/:id', getCard);

// POST request for creating a card.
router.post('/users/:userId/decks/:deckId/cards/create', addCard);

// DELETE request to delete card.
router.delete('/users/:userId/decks/:deckId/cards/:id/delete', deleteCard);

// PATCH request to update card.
router.patch('/users/:userId/decks/:deckId/cards/:id/update', updateCard);

/// USER ROUTES ///

// GET request for users.

router.get('/users', getUsers);

// GET request for individual user.

router.get('/users/:id', getUser);

// POST request for creating a user.
router.post('/users/create', addUser);

// DELETE request to delete card.
router.delete('/users/:id/delete', deleteUser);

// PATCH request to update user.
router.patch('/users/:id/update', updateUser);

/// deck ROUTES ///

// GET request for decks.

router.get('/users/:userId/decks', getDecks);

// GET request for individual deck.

router.get('/users/:userId/decks/:id', getDeck);

// POST request for creating a deck.
router.post('/users/:userId/decks/:id/create', addDeck);

// DELETE request to delete deck.
router.delete('/users/:userId/decks/:id/delete', deleteDeck);

// PATCH request to update deck.
router.patch('/users/:userId/decks/update', updateDeck);

export default router;