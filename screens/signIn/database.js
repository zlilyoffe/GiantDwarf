import { userSchema } from '../signUp/database.js';
import mongoose from 'mongoose';

export const getUserByEmail = async (email) => {
  try {
    const User = mongoose.model('users', userSchema);
    const res = await User.findOne({ email });
    return res;
  } catch (e) {
    return handleError(e);
  }
};
