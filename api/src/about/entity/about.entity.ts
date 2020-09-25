import { Document } from 'mongoose';

export interface About extends Document {
  title: string;
  description: string;
  img: string;
  skills: [
    {
      id: string,
      level: number,
      label: string;
    }
  ];
}