import { signedUpUser } from './logic.js';

export const signUpRoute = async (req, res) => {
  const data = await signedUpUser(
    req.body.fullName,
    req.body.userName,
    req.body.email,
    req.body.password
  );
  res.json(data);
};
