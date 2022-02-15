import { groupLink } from './logic.js';

export const linkPageRoute = async (req, res) => {
  const data = await groupLink(req.body.groupId);
  res.json(data);
  console.log(data);
};
