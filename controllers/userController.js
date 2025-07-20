import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.JWT_SECRET;
const expiration = '2h';

export const getUsers = async (req, res) => {
   try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.error(error)
        res.status(400).json({error: error.message})
    }
}
export const getUserByID = async (req,res) => {
    try {
        const {id} = req.params;
            const user = await User.findById(id)
            res.status(201).json(user);
    } catch (error) {
        console.error(error)
        res.status(400).json({error: error.message})
    }
}

//register new User
export const postUser = async (req, res) => {
      try {
        const newUser = await User.create(req.body)
        res.json(newUser);
    } catch (error) {
         console.error(error)
        res.status(400).json({error: error.message})
    }
}

export const userLogin = async(req,res) => {
    const {email, password} = req.body;
    try {
             const user = await User.findOne({email: email})
        console.log('User', user)

        if(!user){
            return res.status(400).json({message: "Incorrect email or password"})
        }

        //compare the password with hashed pwd
        const correctPw = await user.isCorrectPassword(password);
        if(!correctPw){
            return res.status(400).json({ message: "Incorrect email or password" });
        }

        //Create a JWT token
                const payload ={
                    _id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                }
        
                const token = jwt.sign({data: payload}, secret, {expiresIn: expiration})
                // res.json({Message: "Success", user: user})
                res.json({token, user})
    } catch (error) {
        console.error(error)
    res.status(500).json({error: "Server Error"});
    }
    res.json(req.body)
}

export const updateUser = async (req,res)=> {
    try {
              const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json(user)
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
    }
}

export const deleteUser = async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json(user)
    } catch (error) {
        console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
    }
}