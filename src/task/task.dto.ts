import { IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
