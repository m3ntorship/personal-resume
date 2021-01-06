export class AboutDto {
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly skills: [
    {
      readonly id: string;
      readonly level: number;
      readonly label: string;
    }
  ];
}