import { Document } from 'mongoose';

export class Header extends Document{
  name: string;
  bio: string;
  avatar: string;
}