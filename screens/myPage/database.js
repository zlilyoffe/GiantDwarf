import { groupSchemaModel } from '../createNewGroup/database.js';

export const getGroupByCode = async (groupCode) => {
  console.log('getGroupByCode');
  console.log(groupCode);
  const res = await groupSchemaModel.findOne({ code: groupCode });
  console.log('getGroupByCode2');
  console.log(res);
  return res;
};
