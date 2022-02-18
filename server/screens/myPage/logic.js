import { getGroupByCode } from './database.js';

export const signedInGroup = async (code) => {
  console.log('signedInGroup');
  console.log(code);
  try {
    const group = await getGroupByCode(code);
    console.log(group);
    if (!group) {
      return {
        groupExists: false,
        error: 'group does not exist',
      };
    }
    return { groupExists: true, massage: 'group exist', name: group.groupName };
  } catch (e) {
    console.log(e);
    return { massage: 'ooppsss please try again' };
  }
};
