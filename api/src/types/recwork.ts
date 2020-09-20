import { Document } from 'mongoose';

export interface Item {
  id: string;
  title: string;
};

export interface ImgUrl {
  id: string;
  url: string;
};

export interface Button {
  title: string;
  url: string;
}

export interface Recwork extends Document {
  title: string;
  listItems: Item[];
  imgUrl: ImgUrl[];
  button: Button;
}