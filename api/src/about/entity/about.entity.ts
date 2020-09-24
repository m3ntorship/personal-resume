import { Document } from 'mongoose';


export interface About extends Document {
  title: string;
  description: string;
  img: string;
  label: string;
  progressbars: [
    {
      bgcolor: string,
      progress: number,
      label: string,
      key: string,
      icon: string,
    }
  ];
}