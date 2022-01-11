import { creatGroup } from './logic.js';

export const creatGroupRoute = async (req, res) => {
  const data = await creatGroup(
    req.body.groupName,
    req.body.numberOfParticipants,
    req.body.code,
  );
  res.json(data);
};
