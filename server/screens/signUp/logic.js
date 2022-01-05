import { userSchemaModel } from './database.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export const signedUpUser = async (fullName, userName, email, password) => {
  try {
    const saltPassword = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(password, saltPassword);

    const signedUpUser = new userSchemaModel({
      fullName: fullName,
      userName: userName,
      email: email,
      password: securePassword,
    });

    const data = await signedUpUser.save();
    return data;
  } catch (e) {
    console.log(e);
  }
};
