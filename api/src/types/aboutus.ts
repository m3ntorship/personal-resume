import { Document } from 'mongoose';

export interface Progressbar {
  bgcolor: string;
  progress: number;
  label: string;
  id: string;
  icon: string;
};

export interface Aboutus extends Document {
  title: string;
  paragraph: string;
  leftSecImg: string;
  btnLabel: string;
  progressbars: Progressbar[];
}