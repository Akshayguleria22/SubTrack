import mongoose from 'mongoose'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js'



export const signUp = async (req, res, next) => {
    //session is the series of operaton for starting transaction for keeping atomic
    const session = await mongoose.startSession();

    session.startTransaction();

    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409
            throw error;
        }

        //for encrypting and securing data
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)

        //creating user
        const newUser = await User.create([{ name, email, password: hashed }], { session })
        
        //assigning token with jwt key
        const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
        await session.commitTransaction()
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                token,
                user:newUser[0]
            }
        })
    } catch (error) {
        //aborting if transaction failed
        await session.abortTransaction()
        session.endSession()
        next(error);
    }
}


export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            const error = new Error('User not found')
            error.statusCode = 404
            throw error
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            const error = new Error('Invalid password')
            error.statusCode = 401
            throw error
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
        res.status(200).json({
            success: true,
            message: "User signed In successfully",
            data: {
                token,
                user
            }
        })
    } catch (error) {
        next(error)
    }
}
  
export const signOut = async (req, res, next) => {
    
}
