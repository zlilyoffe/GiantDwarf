import { signedInUser } from './logic.js';

export const signInRoute = async (req, res) => {
  const data = await signedInUser(req.body.email, req.body.password);
  res.json(data);
  console.log(data);
};
