import { userSchema } from '../signUp/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getUserByEmail } from './database.js';

export const signedInUser = async (email, password) => {
  try {
    const user = await getUserByEmail(email, password);
    if (!user) {
      return { userExists: false, error: 'User does not exist' };
    }
    const match = await bcrypt.compare(password, user.password);
    return { userExists: match ? true : false };
  } catch (e) {
    console.log(e);
  }
};
