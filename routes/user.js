// import express from 'express'
// import bcrypt from 'bcrypt'
// import {User} from '../models/User.js'
// import mongoose from 'mongoose'

// const router = express.Router();

// router.post('/signup', async (req, res)=>{
//     const {username, email, password} =req.body;
//     const user = User.find({email})
//     if(user){
//         return req.json({message: 'user already existed'});
//     }
//     const hashpassword = await bcrypt.hash(password, 10)
//     const newUser = new User({
//         email,
//         password:hashpassword,
//        username
//     })
//     await newUser.save()
//     return res.json({message: "sign up succesfully"})
// })

// export {router as UserRouter}


import express from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/User.js'

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            
        });
        await newUser.save();
        return res.json({ message: "Sign up successful" });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export { router as UserRouter }
