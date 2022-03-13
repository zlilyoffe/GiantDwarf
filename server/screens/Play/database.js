import { groupSchema, groupSchemaModel } from '../createNewGroup/database.js';
import mongoose from 'mongoose';

export const getGroup = async (groupId) => {
  console.log('bla', groupId);
  const Group = groupSchemaModel;
  const res = await Group.findOne({ _id: groupId });
  console.log('group info', res);
  return res;
};
