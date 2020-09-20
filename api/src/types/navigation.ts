import { Document } from 'mongoose';

export interface Link {
  title: string;
  linkUrl: string;
}

export interface Navigation extends Document {
  links: Link[];
  downloadbtn: string;
}