import { giantInfo } from './logic.js';

export const getUserGiantRoute = async (req, res) => {
  const data = await giantInfo(req.body.groupId);
  res.json(data);
};
