import { groupSchema, groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';

export const getGroupName = async (groupId) => {
  console.log('bla', groupId);
  const Group = groupSchemaModel;
  const res = await Group.findOne({ _id: groupId });
  return res;
};
