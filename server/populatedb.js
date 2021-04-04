var userArgs = process.argv.slice(2);

import async from 'async'
import Card from './models/card.js'
import Deck from './models/deck.js'
import User from './models/user.js'

import mongoose from 'mongoose';
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var cards = []
var decks = []
var users = []

function deckCreate(name, creator, date_created, language, cards, cb) {
    var deck_detail = {name, creator, date_created, language};

    if (cards) deck_detail.cards = cards;

    var deck = new Deck(deck_detail);

    deck.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Deck: ' + deck);
        decks.push(deck)
        cb(null, deck)
    });
}
function cardCreate(word, definition, creator, cb) {
    var card_detail = {word, definition, creator};

    var card = new Card(card_detail);

    card.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New Card: ' + card);
        cards.push(card)
        cb(null, card)
    });
}

function userCreate(first_name, last_name, email, date_joined, decks, cb ) {
    var user_detail = {first_name, last_name, email, date_joined};

    if (decks) user_detail.decks = decks;

    var user = new User(user_detail);

    user.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New User: ' + user);
        users.push(user)
        cb(null, user)
    });
}

function createUsers(cb) {
    async.series([
        function(callback) {
          userCreate('Peter', 'Jeon', 'peterjeon2@gmail.com', '2020-06-06', false, callback);
        },
        function(callback) {
          userCreate('Irene', 'Jeon', 'irenejeon@gmail.com','2020-09-12', false, callback);
        },
        function(callback) {
          userCreate('Isaac', 'Jeon', 'isaacjeon@gmail.com','2021-03-01', false, callback);
        }],
        cb);
}

function createDecks(cb) {
    async.series([
        function(callback) {
            deckCreate('Korean flashcard deck', users[0],'2021-03-01', 'korean', false, callback);
        },
        function(callback) {
            deckCreate('spanish flashcard deck', users[1], '2021-03-01', 'korean', false, callback);
        }],
        cb);
}

function createCards(cb) {
    async.series([
        function(callback) {
            cardCreate('hello', 'hola', users[1], callback);
        },
        function(callback) {
            cardCreate('poor', 'pobre', users[1], callback);
        },
        function(callback) {
            cardCreate('hello', '긴장한', users[0], callback);
        },
        function(callback) {
            cardCreate('economics', '경제학', users[0], callback);
        }],
        cb);
}

function updateSets(cb) {


}

function updateUsers(cb) {

}
async.series([
    createUsers,
    createDecks,
    createCards
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('cards: '+ cards);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
