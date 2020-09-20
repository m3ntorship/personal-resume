import { Progressbar } from '../../types/aboutus';

export class CreateAboutusDto {
  readonly title: string;
  readonly paragraph: string;
  readonly leftSecImg: string;
  readonly btnLabel: string;
  readonly progressbars: Progressbar[];
}
