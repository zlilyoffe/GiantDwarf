import { groupSchema } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getGroupName } from './database.js';

export const groupName = async (groupId) => {
  try {
    const group = await getGroupName(groupId);
    if (!group) {
      return { groupExists: false, error: 'group does not exist' };
    }
    return { groupName: group.groupName };
  } catch (e) {
    console.log(e);
  }
};
