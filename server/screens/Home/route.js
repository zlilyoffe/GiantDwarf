import { signedInGroup } from './logic.js';
// import { mergeGroupUsers } from './logic.js';

export const myPageRoute = async (req, res) => {
  // console.log('userId?', req.body.userId);
  const data = await signedInGroup(req.body.groupCode, req.body.userId);
  res.json(data);
  console.log('data:');
  console.log(data);
};

// export const joinGroupRoute = async (req, res) => {
//   const data = await mergeGroupUsers(req.body.groupId, req.body.userId);
//   res.json(data);
// };
