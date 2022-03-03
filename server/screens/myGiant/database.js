import { groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';

export const getGiantByGroup = async (groupId) => {
  const Group = groupSchemaModel;
  const res = await Group.find({
    participants: {//find something- connection between userid-group-userid
      $all: [userId],
    },
  });
  return res;
};
