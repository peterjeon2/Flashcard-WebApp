import express from 'express';
const router = express.Router();
import card_controller from '../controllers/cardController'
import deck_controller from '../controllers/deckController'
import user_controller from '../controllers/userController'

router.get('/', deck_controller.index);

/// CARD ROUTES ///

// GET request for cards.

router.get('/users/:userId/decks/:deckId/cards', card_controller.getCards);

// GET request for individual card.

router.get('/users/:userId/decks/:deckId/cards/:id', card_controller.getCard);

// POST request for creating a card.
router.post('/users/:userId/decks/:deckId/cards/create', card_controller.addCard);

// DELETE request to delete card.
router.delete('/users/:userId/decks/:deckId/cards/:id/delete', card_controller.deleteCard);

// PATCH request to update card.
router.patch('/users/:userId/decks/:deckId/cards/:id/update', card_controller.updateCard);

/// USER ROUTES ///

// GET request for individual user.

router.get('/users/:id', user_controller.getUser);

// POST request for creating a user.
router.post('/users/create', user_controller.createUser);

// DELETE request to delete card.
router.delete('/users/:id/delete', user_controller.deleteUser);

// PATCH request to update user.
router.patch('/users/:id/update', user_controller.updateUser);

/// deck ROUTES ///

// GET request for decks.

router.get('/users/:userId/decks', deck_controller.getDecks);

// GET request for individual deck.

router.get('/users/:userId/decks/:id', deck_controller.getDeck);

// POST request for creating a deck.
router.post('/users/:userId/decks/:id/create', deck_controller.addDeck);

// DELETE request to delete deck.
router.delete('/users/:userId/decks/:id/delete', deck_controller.deleteDeck);

// PATCH request to update deck.
router.patch('/users/:userId/decks/update', deck_controller.updateDeck);
