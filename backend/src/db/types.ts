import { UUID } from 'crypto';

export interface UserType {
  email: string;
  id: string;
  name: string;
  passwordHash: UUID;
}
