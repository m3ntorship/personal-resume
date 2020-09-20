import { Card } from '../../types/services';

export class CreateServicesDto {
  readonly title: string;
  readonly cards: Card[];
}