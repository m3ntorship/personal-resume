import { Document } from 'mongoose';

export interface Button {
  title: string;
  url: string;
}

export interface Card {
  cardTitle: string;
  details: string;
  button: Button;
  key: string;
}

export interface Services extends Document {
  title: string;
  cards: Card[];
}