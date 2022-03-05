import { getGroupByCode } from './database.js';
// import { getGroupById } from './database.js';

export const signedInGroup = async (code, userId) => {
  console.log('signedInGroup');
  console.log(code);
  console.log(userId);
  try {
    const group = await getGroupByCode(code, userId);
    console.log('my group:', group);
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

// export const mergeGroupUsers = async (groupId, userId) => {
//   try {
//     const newGroup = await getGroupById(groupId, userId);
//     if (!newGroup) {
//       return { error: 'oppsss there is problame' };
//     }
//     if (groupId == group.groupId);
//     return { groupExists: true };
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const signedInUser = async (email, password) => {
//   try {
//     const user = await getUserByEmail(email, password);
//     if (!user) {
//       return { userExists: false, error: 'User does not exist' };
//     }
//     const match = await bcrypt.compare(password, user.password);
//     return { userExists: match ? true : false };
//   } catch (e) {
//     console.log(e);
//   }
// };
