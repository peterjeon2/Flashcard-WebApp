import express from 'express';
import Deck from '../models/Deck.js';

const router = express.Router();

// @desc    Get Decks
// @route   GET /users/:id/decks
// @access  Public

export const getDecks = async (req, res, next) => {
    const {userId}  = req.params;
  
    try {
        const decks = await Deck.find({ userId: userId}).exec();

        return res.status(200).json({
            success: true,
            data: decks
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
}


// @desc    Get individual Deck
// @route   GET /users/:userId/decks/:id
// @access  Public

export const getDeck = async (req, res, next) => {
    const {id} = req.params;

    try { 
        const deck = await Deck.findById(id);

        return res.status(200).json({
            success: true,
            data: deck
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
}

// @desc    Add deck
// @route   POST /users/:userId/decks/create
// @access  Public

export const addDeck = async (req, res, next) => {
    try { 
        const { name, userId, description} = req.body;
        const cards = []
        const newDeck = await Deck.create({ name, userId, description, cards});

        return res.status(201).json({
            success: true,
            data: newDeck
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
// @route   PATCH /users/:userId/decks/:id/update
// @access  Public

export const updateDeck = async (req, res, next) => {
    try { 
        const { id } = req.params;
        const deck = await Deck.findById(id);
        const { name, description} = req.body;
        const { userId, cards } = deck

        if (!deck) {
            return res.status(404).json({
                success: false,
                error: 'No deck found'
            });
        }

        const deckDetail = { name, userId, description, cards};
        
        const updatedDeck = await Deck.findByIdAndUpdate(id, deckDetail, { new: true });
        return res.status(200).json({
            success: true,
            data: updatedDeck
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        });
    }
}


// @desc    Delete deck
// @route   DELETE /users/:userId/decks/:id/delete
// @access  Public

export const deleteDeck = async (req, res, next) => {
    try { 
        const { id } = req.params;
        const deck = await Deck.findById(id);

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

export default router;