import { getUserGroups } from './logic.js';

export const getUserGroupsRoute = async (req, res) => {
  // console.log('userGroupsRoute', req.body);
  const data = await getUserGroups(req.body.userId);
  res.json(data);
};
