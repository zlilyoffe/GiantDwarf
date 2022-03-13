import { groupSchemaModel } from './database.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export const creatGroup = async (groupName, numberOfParticipants, userId) => {
  try {
    const creatGroup = new groupSchemaModel({
      groupName: groupName,
      numberOfParticipants: numberOfParticipants,
      code: (Math.random() + 1).toString(36).substring(7),
      participants: [],
    });

    const data = await creatGroup.save();
    return { id: data._id };
  } catch (e) {
    console.log(e);
  }
};
