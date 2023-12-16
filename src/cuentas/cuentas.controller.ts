import { Controller, Get, Param, UseGuards, Put, Body, Delete } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CuentasDTO } from './cuentas.dto';

@Controller('cuentas')
export class CuentasController {
    constructor(private cuentasService: CuentasService) { }

    @UseGuards(JwtGuard)
    @Get('main')
    public async getAllCuentasForRiotPoints() {
        return this.cuentasService.getAllCuentas();
    }

    @Get('main/availables')
    public async getAllAvailableCuentasForRiotPoints() {
        return this.cuentasService.getAvailableCuentas();
    }

    @Get('main/unavailables')
    public async getAllUnavailableCuentasForRiotPoints() {
        return this.cuentasService.getUnavailableCuentas();
    }

    @UseGuards(JwtGuard)
    @Get('main/:id')
    public async getOneCuenta(@Param("id") id: number) {
        return this.cuentasService.getOneCuenta(id);
    }

    @UseGuards(JwtGuard)
    @Put('main/:id')
    public async updateMainCuenta(@Param("id") id: number, @Body() data: CuentasDTO) {
        const cuenta = await this.cuentasService.updateMainCuenta(id, data);
        return cuenta;
    }
    @UseGuards(JwtGuard)
    @Get('banco')
    public async getAllCuentasForBanco() {
        return this.cuentasService.getAllCuentasBanco();
    }

    @UseGuards(JwtGuard)
    @Get('banco/availables')
    public async getAllAvailableCuentasForBanco() {
        return this.cuentasService.getAvailableCuentasBanco();
    }

    @UseGuards(JwtGuard)
    @Get('banco/unavailables')
    public async getAllUnavailableCuentasForBanco() {
        return this.cuentasService.getUnavailableCuentasBanco();
    }


    @UseGuards(JwtGuard)
    @Get('banco/:id')
    public async getOneCuentaBanco(@Param("id") id: number) {
        return this.cuentasService.getOneCuentaBanco(id);
    }

    @UseGuards(JwtGuard)
    @Put('banco/:id')
    public async updateMainCuentaBanco(@Param("id") id: number, @Body() data: CuentasDTO) {
        const cuentaBanco = await this.cuentasService.updateMainCuentaBanco(id, data);
        return cuentaBanco;
    }

    @UseGuards(JwtGuard)
    @Get('combo')
    public async getAllCuentasForCombo() {
        return this.cuentasService.getAllCuentasCombo();
    }

    @UseGuards(JwtGuard)
    @Get('combo/availables')
    public async getAllAvailablesCuentasForCombo() {
        return this.cuentasService.getAllCuentasCombo();
    }

    @UseGuards(JwtGuard)
    @Get('combo/unavailables')
    public async getAllUnavailablesCuentasForCombo() {
        return this.cuentasService.getUnavailableCuentasCombo();
    }


    @UseGuards(JwtGuard)
    @Get('combo/:id')
    public async getOneCuentaCombo(@Param("id") id: number) {
        return this.cuentasService.getOneCuentaCombo(id);
    }

    @UseGuards(JwtGuard)
    @Put('combo/:id')
    public async updateMainCuentaCombo(@Param("id") id: number, @Body() data: CuentasDTO) {
        const cuentaCombo = await this.cuentasService.updateMainCuentaCombo(id, data);
        return cuentaCombo;
    }

    @UseGuards(JwtGuard)
    @Delete('main/delete/:id')
    public async DeleteMainCuenta(@Param("id") id: number) {
        return this.cuentasService.DeleteCuenta(id);
    }

    @UseGuards(JwtGuard)
    @Delete('combo/delete/:id')
    public async DeleteCuentaCombo(@Param("id") id: number) {
        return this.cuentasService.DeleteCuentaCombo(id);
    }

    @UseGuards(JwtGuard)
    @Delete('banco/delete/:id')
    public async DeleteCuentaBanco(@Param("id") id: number) {
        return this.cuentasService.DeleteCuentaBanco(id);
    }
}
