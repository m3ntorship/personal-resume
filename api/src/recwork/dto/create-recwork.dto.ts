import { Item, ImgUrl, Button } from '../../types/recwork'

export class CreateRecworkDto {
  readonly title: string;
  readonly listItems: Item[];
  readonly imgUrl: ImgUrl[];
  readonly button: Button;
}
