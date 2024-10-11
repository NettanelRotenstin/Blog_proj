import exp, { Request, Response } from 'express'
import { loginServise } from '../service/authService';

const login = async (req: Request, res: Response) => {
  try {
    const token = await loginServise(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.username}! so good to see you again!!`,
    });
  } catch (err) {
    res.status(400).send('token is faild');
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token")
    res.status(200).json({ msg: 'you logged out!' })
  } catch (err) {
    res.sendStatus(500)
  }
};

module.exports = {
  login,
  logout
};