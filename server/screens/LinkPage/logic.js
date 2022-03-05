import { groupSchema } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getLinkByGroup } from './database.js';

export const groupLink = async (groupId) => {
  try {
    const group = await getLinkByGroup(groupId);
    if (!group) {
      return { groupExists: false, error: 'group does not exist' };
    }
    return { codeResult: group.code };
  } catch (e) {
    console.log(e);
  }
};
