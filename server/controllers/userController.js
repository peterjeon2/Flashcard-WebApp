import express from 'express';
import User from '../models/user.js'

const router = express.Router();


// @desc    Get Users
// @route   GET /users
// @access  Public

export const getUsers = async (req, res, next) => {

    try { 
        const users = await User.find();

        return res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// @desc    Get User
// @route   GET /users/:id
// @access  Public

export const getUser = async (req, res, next) => {
    const { id } = req.params;

    try { 
        const user = await User.findById(id);

        return res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// @desc    Add user
// @route   POST /users/create
// @access  Public

export const addUser = async (req, res, next) => {
    try { 
        const { first_name, last_name, email, date_joined} = req.body;
        
        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
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

// @desc    Update user
// @route   POST /users/:id/update
// @access  Public

export const updateUser = async (req, res, next) => {
    try { 
        const user = await User.findById(req.params.id);
        const { first_name, last_name, email, date_joined} = req.body

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'No user found'
            });
        }

        const updatedUser = { first_name, last_name, email, date_joined, _id: id};
        
        user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
        return res.status(200).json({
            success: true,
            data: {user}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc    Delete user
// @route   DELETE /users/:id/delete
// @access  Public

export const deleteUser = async (req, res, next) => {
    try { 
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'No user found'
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