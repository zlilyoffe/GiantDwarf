import { groupName } from './logic.js';

export const playPageRoute = async (req, res) => {
  const data = await groupName(req.body.groupId);
  res.json(data);
  // console.log(data);
};
