import { giantInfo } from './logic.js';

export const getMyGiantById = async (req, res) => {
  const data = await giantInfo(req.body.groupId);
  res.json(data);
};
