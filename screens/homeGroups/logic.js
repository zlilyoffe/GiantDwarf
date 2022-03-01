import { groupSchema, groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';
import { getGroupsByUserId } from './database.js';

export const getUserGroups = async (userId) => {
  try {
    const groups = await getGroupsByUserId(userId);
    console.log(groups);
    if (!groups) {
      return {
        groupExists: false,
        error: 'groups does not exists',
      };
    }
    const groupNames = groups.map((group) => group.groupName);
    return { groupsExists: true, massage: 'groups exists', groupNames };
  } catch (e) {
    console.log(e);
    return { massage: 'ooppsss please try again' };
  }
};
