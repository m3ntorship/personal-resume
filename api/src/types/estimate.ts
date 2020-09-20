import { Document } from 'mongoose';

export interface Button {
  label: string;
  url: string;
};

export interface Estimate extends Document {
  subTitle: string;
  title: string;
  button: Button;
};