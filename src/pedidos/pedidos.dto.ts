import { IsString, IsUrl, IsDate } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class PedidosDTO {

  @IsString()
  Cuentas_Asignadas: string;

  @IsString()
  SN: string;

  @IsString()
  UserID: string;

  @IsString()
  Pedido: string;

  @IsString()
  Estado: string;

  @IsUrl()
  Comprobante: string;

  @IsString()
  GuildID: string;

  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @Transform(({ value }) => new Date(value))
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}
