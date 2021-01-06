import { Document } from 'mongoose';

export interface Links extends Document {
  title: string;
  url: string;
}