import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PedidosDTO } from './pedidos.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class PedidosService {
    constructor(private prisma: PrismaService) { }

    public async getAll() {
        return await this.prisma.pedidos.findMany();
    }

    public async getOne(id: number) {
        const pedido = await this.prisma.pedidos.findUnique({
            where: {
                id: id
            }
        })

        return pedido;
    }

    public async editOne(id: number, data: PedidosDTO) {
        const isValidData = await this.isValidData(data);

        if (!isValidData) {
            throw new Error('Los datos proporcionados no son válidos.');
        }

        const pedido = await this.prisma.pedidos.update({
            where: {
                id: id,
            },
            data: {
                Cuentas_Asignadas: data.Cuentas_Asignadas,
                SN: data.SN,
                UserID: data.UserID,
                Pedido: data.Pedido,
                Estado: data.Estado,
                Comprobante: data.Comprobante,
                GuildID: data.GuildID,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
        });

        return pedido;
    }

    public async deletePedido(id: number) {
        return await this.prisma.pedidos.delete({
            where: {
                id: id
            }
        })
    }

    private async isValidData(data: PedidosDTO): Promise<boolean> {
        try {
            await validateOrReject(data, { skipMissingProperties: true });
            return true;
        } catch (error) {
            return false;
        }
    }
}
