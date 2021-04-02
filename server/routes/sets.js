var express = require('express');
var router = express.Router();
var card_controller = require('../controllers/cardController');
var set_controller = require('../controllers/setController');
var user_controller = require('../controllers/userController');

router.get('/', set_controller.index);

/// CARD ROUTES ///

// GET request for creating a card. NOTE This must come before routes that display card (uses id).
router.get('/card/create', card_controller.card_create_get);

// POST request for creating card.
router.post('/card/create', card_controller.card_create_post);

// GET request to delete card.
router.get('/card/:id/delete', card_controller.card_delete_get);

// POST request to delete card.
router.post('/card/:id/delete', card_controller.card_delete_post);

// GET request to update card.
router.get('/card/:id/update', card_controller.card_update_get);

// POST request to update card.
router.post('/card/:id/update', card_controller.card_update_post);

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

/// SET ROUTES ///

// GET request for creating a set. NOTE This must come before route that displays set (uses id).
router.get('/set/create', set_controller.set_create_get);

//POST request for creating set.
router.post('/set/create', set_controller.set_create_post);

// GET request to delete set.
router.get('/set/:id/delete', set_controller.set_delete_get);

// POST request to delete set.
router.post('/set/:id/delete', set_controller.set_delete_post);

// GET request to update set.
router.get('/set/:id/update', set_controller.set_update_get);

// POST request to update set.
router.post('/set/:id/update', set_controller.set_update_post);

// GET request for one set.
router.get('/set/:id', set_controller.set_detail);

// GET request for list of all set.
router.get('/sets', set_controller.set_list);
