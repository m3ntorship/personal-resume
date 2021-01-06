import { Document } from 'mongoose';

export interface Estimate extends Document {
  title: string;
  subTitle: string;
  img: string;
}