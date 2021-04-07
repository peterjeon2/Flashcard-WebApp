import express from 'express';
const router = express.Router();
import card_controller from '../controllers/cardController'
import deck_controller from '../controllers/deckController'
import user_controller from '../controllers/userController'

router.get('/', deck_controller.index);

/// CARD ROUTES ///

// GET request for cards.

router.get('/users/:id/decks/:id/cards', card_controller.getCards);

// GET request for individual card.

router.get('/users/:id/decks/:id/cards/:id', card_controller.getCard);

// POST request for creating a card.
router.get('/users/:id/decks/:id/cards/create', card_controller.addCard);

// DELETE request to delete card.
router.get('/users/:id/decks/:id/cards/:id/delete', card_controller.deleteCard);

// PUT request to update card.
router.get('/users/:id/decks/:id/cards/:id/update', card_controller.updateCard);

/// USER ROUTES ///

// GET request for individual user.

router.get('/users/:id', user_controller.getUser);

// POST request for creating a user.
router.get('/users/create', user_controller.createUser);

// DELETE request to delete card.
router.get('/users/:id/delete', user_controller.deleteUser);

// PUT request to update user.
router.get('/users/:id/update', user_controller.updateUser);

/// deck ROUTES ///

// GET request for decks.

router.get('/users/:id/decks', deck_controller.getDecks);

// GET request for individual deck.

router.get('/users/:id/decks/:id', deck_controller.getDeck);

// POST request for creating a deck.
router.get('/users/:id/decks/:id/create', deck_controller.addDeck);

// DELETE request to delete deck.
router.get('/users/:id/decks/:id/delete', deck_controller.deleteDeck);

// PUT request to update deck.
router.get('/users/:id/decks/update', deck_controller.updateDeck);
