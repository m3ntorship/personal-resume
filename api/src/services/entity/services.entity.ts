import { Document } from 'mongoose';
import { Card } from './card.entity';

export interface Services extends Document {
  title: string;
  cards: Card[];
}