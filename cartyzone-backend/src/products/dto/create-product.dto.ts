import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  product: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  rating: number;
  @IsNumber()
  @IsNotEmpty()
  instock: number;
  @IsString()
  @IsNotEmpty()
  category: string;
  // @IsNotEmpty()
  // @IsDate()
  // created_At: Date;
  // @IsNotEmpty()
  // @IsDate()
  // edited_At: Date;
  // @IsString()
  // @IsNotEmpty()
  // _id: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
