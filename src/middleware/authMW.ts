import exp, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const onlySignUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // verify
    const userData = await jwt.verify(req.cookies.token, process.env.TOKEN_SECRET as string);

    next();
     
    
  } catch (err) {
    res.status(401).send('you are not signed in!');
  }
};
