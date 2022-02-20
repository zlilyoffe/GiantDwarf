import { signedInGroup } from './logic.js';

export const myPageRoute = async (req, res) => {
  const data = await signedInGroup(req.body.groupCode);
  res.json(data);
  console.log('data:');
  console.log(data);
};
