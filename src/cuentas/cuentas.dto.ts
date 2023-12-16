import { IsInt, IsString, IsOptional, IsDate } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CuentasDTO {

  @IsString()
  Nickname: string;

  @IsString()
  Username: string;

  @IsString()
  Password: string;

  @IsInt()
  RPDisponibles: number;

  @IsOptional()
  @IsString()
  Nota: string | null;

  @IsString()
  Estado: string;

  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}
