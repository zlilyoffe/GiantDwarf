import { groupSchemaModel } from '../createNewGroup/database.js';

export const getGroupByCode = async (groupCode, userId) => {
  console.log('getGroupByCode');
  console.log(groupCode);
  const res = await groupSchemaModel.findOne({ code: groupCode });
  console.log('getGroupByCode2');
  console.log(res);
  res.participants.push(userId);
  return res;
};

// export const getGroupById = async (groupId, userId) => {
//     const NewGroup = mongoose.model('groups', groupSchema);
//     const res = await NewGroup.findOne({ _id: groupId });
//     return res;
// };
