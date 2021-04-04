import express from 'express';
var router = express.Router();
import card_controller from '../controllers/cardController'
import deck_controller from '../controllers/deckController'
import user_controller from '../controllers/userController'

router.get('/', deck_controller.index);

/// CARD ROUTES ///

// GET request for creating a card. NOTE This must come before routes that display card (uses id).
router.get('/user/:id/deck/:id/card/create', card_controller.card_create_get);

// POST request for creating card.
router.post('/user/:id/deck/:id/card/create', card_controller.card_create_post);

// GET request to delete card.
router.get('/user/:id/deck/:id/card/:id/delete', card_controller.card_delete_get);

// POST request to delete card.
router.post('/user/:id/deck/:id/card/:id/delete', card_controller.card_delete_post);

// GET request to update card.
router.get('/user/:id/deck/:id/card/:id/update', card_controller.card_update_get);

// POST request to update card.
router.post('/user/:id/deck/:id/card/:id/update', card_controller.card_update_post);

/// USER ROUTES ///

// GET request for creating user. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating user.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete user.
router.get('/user/:id/delete', user_controller.user_delete_get);

// POST request to delete user.
router.post('/user/:id/delete', user_controller.user_delete_post);

// GET request to update user.
router.get('/user/:id/update', user_controller.user_update_get);

// POST request to update user.
router.post('/user/:id/update', user_controller.user_update_post);

// GET request for one user.
router.get('/user/:id', user_controller.user_detail);

/// deck ROUTES ///

// GET request for creating a deck. NOTE This must come before route that displays deck (uses id).
router.get('/user/:id/deck/create', deck_controller.deck_create_get);

//POST request for creating deck.
router.post('/user/:id/deck/create', deck_controller.deck_create_post);

// GET request to delete deck.
router.get('/user/:id/deck/:id/delete', deck_controller.deck_delete_get);

// POST request to delete deck.
router.post('/user/:id/deck/:id/delete', deck_controller.deck_delete_post);

// GET request to update deck.
router.get('/user/:id/deck/:id/update', deck_controller.deck_update_get);

// POST request to update deck.
router.post('/user/:id/deck/:id/update', deck_controller.deck_update_post);

// GET request for one deck.
router.get('/user/:id/deck/:id', deck_controller.deck_detail);

// GET request for list of all deck.
router.get('/user/:id/decks', deck_controller.deck_list);
