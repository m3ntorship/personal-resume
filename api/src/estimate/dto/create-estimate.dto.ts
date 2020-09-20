import { Button } from '../../types/estimate';

export class CreateEstimateDto {
  readonly subTitle: string;
  readonly title: string;
  readonly button: Button;
}