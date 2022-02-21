import { groupSchema, groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';

export const getGroupName = async (groupId) => {
  try {
    const Group = groupSchemaModel;
    const res = await Group.findOne({ _id: groupId });
    return res;
  } catch (e) {
    return handleError(e);
  }
};
