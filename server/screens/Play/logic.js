import { groupSchema } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { getGroup } from './database.js';

export const groupName = async (groupId) => {
  console.log('logic', groupId);
  try {
    const group = await getGroup(groupId);
    if (!group) {
      return { groupExists: false, error: 'group does not exist' };
    }
    return { groupName: group.groupName, numberOfParticipants: group.numberOfParticipants, participants: group.participants };
  } catch (e) {
    console.log(e);
  }
};
