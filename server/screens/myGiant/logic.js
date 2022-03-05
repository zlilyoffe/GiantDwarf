import { groupSchema } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getGiantByGroup } from './database.js';

export const giantInfo = async (groupId) => {
  try {
    const giant = await getGiantByGroup(groupId);
    if (!giant) {
      return { groupExists: false, error: 'giant does not exist' };
    }
    return { giantName: giant.giantName };
  } catch (e) {
    console.log(e);
  }
};
