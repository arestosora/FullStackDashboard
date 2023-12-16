import { Controller, Get, Param, UseGuards, Put, Body, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { PedidosDTO } from './pedidos.dto';

@Controller('pedidos')
export class PedidosController {
    constructor(private pedidosService: PedidosService) { }

    @UseGuards(JwtGuard)
    @Get()
    public async getAllPedidos() {
        return this.pedidosService.getAll();
    }

    @UseGuards(JwtGuard)
    @Get(':id')
    public async getOnePedido(@Param("id") id: number) {
        return this.pedidosService.getOne(id)
    }

    @UseGuards(JwtGuard)
    @Put('edit/:id')
    public async editOne(@Param("id") id: number, @Body() data: PedidosDTO) {
        const pedido = await this.pedidosService.editOne(id, data);
        return pedido;
    }

    @UseGuards(JwtGuard)
    @Delete('delete/:id')
    public async deleteOne(@Param("id") id: number) {
        const pedido = await this.pedidosService.deletePedido(id);
        return pedido;
    }
}
