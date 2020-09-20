import { Post } from '../../types/updpost';

export class CreateUpdpostDto {
  readonly postsHeader: string;
  readonly posts: Post[];
}