import { groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';

export const getGroupsByUserId = async (userId) => {
  const Group = groupSchemaModel;
  const res = await Group.find({
    participants: {
      $all: [userId],
    },
  });
  console.log('getGroupsByUserId', res);
  return res;
};
