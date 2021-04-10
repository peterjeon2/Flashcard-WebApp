import Card from '../models/card'

// @desc    Get Cards
// @route   GET /users/:userId/decks/:deckId/cards
// @access  Public

exports.getCards = async (req, res, next) => {
    try { 
        const cards = await Card.find();

        return res.status(200).json({
            success: true,
            data: cards
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


// @desc    Get individual Card
// @route   GET /users/:userId/decks/:deckId/cards/:id
// @access  Public

exports.getCard = async (req, res, next) => {
    const { id } = req.params;

    try { 
        const card = await Card.findById(id);

        return res.status(200).json({
            success: true,
            data: card
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// @desc    Add Card
// @route   POST /users/:userId/decks/:deckId/cards/create
// @access  Public

exports.addCard = async (req, res, next) => {
    try { 
        const { word, definition, userId, deckId} = req.body;
        
        const card = await Card.create(req.body);

        return res.status(201).json({
            success: true,
            data: card
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

// @desc    Update card
// @route   Put /users/:userId/decks/:deckId/cards/:id/update
// @access  Public

exports.updateCard = async (req, res, next) => {
    try { 
        const card = await Card.findById(req.params.id);
        const { word, definition, userId, deckId } = req.body;

        if (!card) {
            return res.status(404).json({
                success: false,
                error: 'No Card found'
            });
        }

        const updatedCard = { word, definition, userId, deckId, _id: id};
        
        card = await Card.findByIdAndUpdate(id, updatedCard, { new: true });
        return res.status(200).json({
            success: true,
            data: {card}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc    Delete Card
// @route   DELETE /users/:userId/decks/:deckId/cards/:id/delete
// @access  Public

exports.deleteCard = async (req, res, next) => {
    try { 
        const card = await Card.findById(req.params.id);

        if (!card) {
            return res.status(404).json({
                success: false,
                error: 'No Card found'
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

