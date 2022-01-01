import express from 'express';
import { handleSignup } from '../controller/authController';


const router = express.Router();

// register route
router.post("/signup", handleSignup)



export default router;