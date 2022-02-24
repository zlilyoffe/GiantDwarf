import { groupSchemaModel } from '../createNewGroup/database.js';

export const getGroupByCode = async (groupCode, userId) => {
  // console.log('getGroupByCode');
  // console.log(groupCode);
  const res = await groupSchemaModel.findOneAndUpdate(
    { code: groupCode },
    { $push: { participants: userId } }
  );
  // console.log('getGroupByCode2');
  // console.log(res);
  // const numberOfParticipants = res.participants;
  // db.groupSchemaModel.update({ $push: { participants: userId } });
  // numberOfParticipants.push(userId);
  return res;
};
