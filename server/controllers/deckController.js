import Deck from '../models/deck'

// @desc    Get Decks
// @route   GET /users/:id/decks
// @access  Public

exports.getDecks = async (req, res, next) => {
    try { 
        const decks = await Deck.find();

        return res.status(200).json({
            success: true,
            data: decks
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


// @desc    Get individual Deck
// @route   GET /users/:id/decks/:id
// @access  Public

exports.getDeck = async (req, res, next) => {
    const { id } = req.params;

    try { 
        const deck = await Deck.findById(id);

        return res.status(200).json({
            success: true,
            data: deck
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// @desc    Add deck
// @route   POST /users/:id/decks/create
// @access  Public

exports.addDeck = async (req, res, next) => {
    try { 
        const { name, user, date_created, description, cards} = req.body;
        
        const deck = await Deck.create(req.body);

        return res.status(201).json({
            success: true,
            data: deck
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}

// @desc    Update deck
// @route   POST /users/:id/decks/:id/update
// @access  Public

exports.updateDeck = async (req, res, next) => {
    try { 
        const deck = await Deck.findById(req.params.id);
        const { name, user, date_created, description, cards} = req.body;

        if (!deck) {
            return res.status(404).json({
                success: false,
                error: 'No deck found'
            });
        }

        const updatedDeck = { name, user, date_created, description, cards, _id: id};
        
        deck = await Deck.findByIdAndUpdate(id, updatedDeck, { new: true });
        return res.status(200).json({
            success: true,
            data: {deck}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc    Delete deck
// @route   DELETE /users/:id/decks/:id/delete
// @access  Public

exports.deleteDeck = async (req, res, next) => {
    try { 
        const deck = await Deck.findById(req.params.id);

        if (!deck) {
            return res.status(404).json({
                success: false,
                error: 'No deck found'
            });
        }

        await user.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

