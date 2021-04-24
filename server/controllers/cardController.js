import express from 'express';
import Card from '../models/Card.js'

const router = express.Router();

// @desc    Get Cards
// @route   GET /users/:userId/decks/:deckId/cards
// @access  Public

export const getCards = async (req, res, next) => {
    const { deckId }  = req.params;

    try { 
        const cards = await Card.find({ deckId: deckId}).exec();

        return res.status(200).json({
            success: true,
            data: cards
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc    Get individual Card
// @route   GET /users/:userId/decks/:deckId/cards/:id
// @access  Public

export const getCard = async (req, res, next) => {
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
            error: 'Server Error'
        });
    }
}

// @desc    Add Card
// @route   POST /users/:userId/decks/:deckId/cards/create
// @access  Public

export const addCard = async (req, res, next) => {
    try { 
        const { word, definition, userId, deckId} = req.body;
        
        const newCard = await Card.create({ word, definition, userId, deckId});

        return res.status(201).json({
            success: true,
            data: newCard
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

export const updateCard = async (req, res, next) => {
    try { 
        const { id } = req.params;
        const card = await Card.findById(id);
        const { word, definition, userId, deckId } = req.body;

        if (!card) {
            return res.status(404).json({
                success: false,
                error: 'No Card found'
            });
        }

        const cardDetail = { word, definition, userId, deckId};
        
        const updatedCard = await Card.findByIdAndUpdate(id, cardDetail, { new: true });
        return res.status(200).json({
            success: true,
            data: updatedCard
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

export const deleteCard = async (req, res, next) => {
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

export default router;