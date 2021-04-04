import Deck from '../models/deck'

exports.index = function(req,res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.deck_list = function(req, res) {
    res.send('NOT IMPLEMENTED: deck list');
};

exports.deck_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: deck detail: ' + req.params.id);
};

exports.deck_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: deck create GET');
};

exports.deck_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: deck create POST');
};

exports.deck_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: deck delete GET');
};

exports.deck_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: deck delete POST');
};

exports.deck_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: deck update GET');
};

exports.deck_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: deck update POST');
};