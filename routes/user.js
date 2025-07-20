import express from "express"
import User from '../models/User.js'
import verifyJWT from "../middleware/verifyJWT.js";
import { getUsers, postUser, getUserByID, userLogin, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/AllUsers', getUsers)
router.get('/:id', verifyJWT, getUserByID)
router.post('/register', postUser)
router.post('/login', userLogin);
router.patch('/:id', verifyJWT, updateUser)
router.delete('/:id', verifyJWT, deleteUser)

export default router;
