/* eslint-disable import/prefer-default-export */
import { Schema, model } from 'mongoose';
import { UserType } from './types';

const UserSchema = new Schema<UserType>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

export const User = model('User', UserSchema);
