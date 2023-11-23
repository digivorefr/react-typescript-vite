import * as Express from 'express';
import { Session, SessionData } from 'express-session';

export interface Request extends Express.Request {
  session: Session & Partial<SessionData> & {
    userId?: string,
  };
}
