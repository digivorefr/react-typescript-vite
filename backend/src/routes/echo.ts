import { NextFunction, Response } from 'express';
import { Request } from 'types';

type RequestParams = {
  speech?: string;
};

export default async function getEcho(req: Request, res: Response, next: NextFunction) {
  const speech = (req.params as RequestParams).speech || 'Hello World!';
  let echo = speech;
  const lastChar = speech[speech.length - 1];
  for (let i = 0; i < 10; i += 1) {
    echo += lastChar;
  }
  res.status(200).send(echo);
  return next();
}
