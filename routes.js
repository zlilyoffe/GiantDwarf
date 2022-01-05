import express from 'express';
import { signUpRoute } from './screens/signUp/route.js';
export const router = express.Router();


router.post('/api/signUp', signUpRoute);
