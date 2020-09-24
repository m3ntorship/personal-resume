export class AboutDto {
  readonly title: string;
  readonly description: string;
  readonly img: string;
  readonly label: string;
  readonly progressbars: [
    {
      readonly bgcolor: string,
      readonly progress: number,
      readonly label: string,
      readonly key: string,
      readonly icon: string,
    }
  ];
}