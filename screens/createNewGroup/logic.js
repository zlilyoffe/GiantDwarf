import { groupSchemaModel } from './database.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

export const creatGroup = async (groupName, numberOfParticipants) => {
  try {
    const creatGroup = new groupSchemaModel({
      groupName: groupName,
      numberOfParticipants: numberOfParticipants,
    });

    const data = await creatGroup.save();
    return data;
  } catch (e) {
    console.log(e);
  }
};
