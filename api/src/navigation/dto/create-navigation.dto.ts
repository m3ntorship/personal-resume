import { Link } from '../../types/navigation'

export class CreateNavigationDto {
  readonly links: Link[];
  readonly downloadbtn: string;
}
