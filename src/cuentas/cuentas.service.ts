import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CuentasDTO } from './cuentas.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class CuentasService {
    constructor(private prisma: PrismaService) { }

    public async getAllCuentas() {
        return await this.prisma.cuentas.findMany();
    }

    public async getOneCuenta(id: number) {
        return await this.prisma.cuentas.findUnique({
            where: {
                id: id
            }
        })
    }

    public async updateMainCuenta(id: number, data: CuentasDTO) {
        const isValidData = await this.isValidData(data);

        if (!isValidData) {
            throw new Error('Los datos proporcionados no son válidos.');
        }
        const cuenta = await this.prisma.cuentas.update({
            where: {
                id: id,
            },
            data: {
                Nickname: data.Nickname,
                Username: data.Username,
                Password: data.Password,
                RPDisponibles: data.RPDisponibles,
                Nota: data.Nota,
                Estado: data.Estado,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
        });

        return cuenta;
    }

    public async getAllCuentasBanco() {
        return await this.prisma.cuentasBanco.findMany();
    }

    public async getOneCuentaBanco(id: number) {
        return await this.prisma.cuentasBanco.findUnique({
            where: {
                id: id
            }
        })
    }

    public async updateMainCuentaBanco(id: number, data: CuentasDTO) {
        const isValidData = await this.isValidData(data);

        if (!isValidData) {
            throw new Error('Los datos proporcionados no son válidos.');
        }
        const cuentaBanco = await this.prisma.cuentasBanco.update({
            where: {
                id: id,
            },
            data: {
                Nickname: data.Nickname,
                Username: data.Username,
                Password: data.Password,
                RPDisponibles: data.RPDisponibles,
                Nota: data.Nota,
                Estado: data.Estado,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
        });

        return cuentaBanco;
    }

    public async getAllCuentasCombo() {
        return await this.prisma.cuentasCombo.findMany();
    }

    public async getOneCuentaCombo(id: number) {
        return await this.prisma.cuentasCombo.findUnique({
            where: {
                id: id
            }
        })
    }

    public async updateMainCuentaCombo(id: number, data: CuentasDTO) {
        const isValidData = await this.isValidData(data);

        if (!isValidData) {
            throw new Error('Los datos proporcionados no son válidos.');
        }
        const cuentaCombo = await this.prisma.cuentasCombo.update({
            where: {
                id: id,
            },
            data: {
                Nickname: data.Nickname,
                Username: data.Username,
                Password: data.Password,
                RPDisponibles: data.RPDisponibles,
                Nota: data.Nota,
                Estado: data.Estado,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
        });

        return cuentaCombo;
    }

    public async getAvailableCuentas() {
        return await this.prisma.cuentas.findMany({
            where: {
                Estado: 'Disponible'
            }
        })
    }

    public async getAvailableCuentasBanco() {
        return await this.prisma.cuentasBanco.findMany({
            where: {
                Estado: 'Disponible'
            }
        })
    }

    public async getAvailableCuentasCombo() {
        return await this.prisma.cuentasCombo.findMany({
            where: {
                Estado: 'Disponible'
            }
        })
    }

    public async getUnavailableCuentas() {
        return await this.prisma.cuentas.findMany({
            where: {
                Estado: 'No Disponible'
            }
        })
    }

    public async getUnavailableCuentasBanco() {
        return await this.prisma.cuentasBanco.findMany({
            where: {
                Estado: 'No Disponible'
            }
        })
    }

    public async getUnavailableCuentasCombo() {
        return await this.prisma.cuentasCombo.findMany({
            where: {
                Estado: 'No Disponible'
            }
        })
    }

    public async DeleteCuenta(id: number) {
        return await this.prisma.cuentas.delete({
            where: {
                id: id
            }
        })
    }

    public async DeleteCuentaBanco(id: number) {
        return await this.prisma.cuentasBanco.delete({
            where: {
                id: id
            }
        })
    }

    public async DeleteCuentaCombo(id: number) {
        return await this.prisma.cuentasCombo.delete({
            where: {
                id: id
            }
        })
    }

    private async isValidData(data: CuentasDTO): Promise<boolean> {
        try {
            await validateOrReject(data, { skipMissingProperties: true });
            return true;
        } catch (error) {
            return false;
        }
    }
}
