import { groupName } from './logic.js';

export const playPageRoute = async (req, res) => {
  console.log('req1n\n\n\n\n\n\n\n', req);
  const data = await groupName(req.body.groupId);
  res.json(data);
  // console.log(data);
  console.log('req', req.body);
};
