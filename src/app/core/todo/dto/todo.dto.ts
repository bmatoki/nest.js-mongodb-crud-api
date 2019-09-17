import { IsNotEmpty, IsString } from 'class-validator';

export class TodoDTO {

  @IsNotEmpty()
    @IsString()
    public name: string;

  @IsNotEmpty()
    @IsString()
    public todo: string;

}
