import { userSchema } from '../signUp/database.js';
import mongoose from 'mongoose';

export const getUserByEmail = async (em, password) => {
  try {
    const User = mongoose.model('myPage', userSchema);
    const res = await User.findOne({ email: em });
    return res;
  } catch (e) {
    return handleError(e);
  }
};
