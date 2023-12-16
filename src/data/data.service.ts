import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DataService {
    constructor(private prisma: PrismaService) { }

    public async getChartData(startDate: Date, endDate: Date) {
        const data = await this.prisma.pedidos.findMany({
            where: {
                createdAt: {
                    gte: startDate, // Fecha de inicio
                    lte: endDate,   // Fecha de fin
                },
            },
        });
        
        const ordersByDate = new Map<string, number>();

        for (const order of data) {
            const orderDate = order.createdAt.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
            if (ordersByDate.has(orderDate)) {
                ordersByDate.set(orderDate, ordersByDate.get(orderDate) + 1);
            } else {
                ordersByDate.set(orderDate, 1);
            }
        }

        // Convertir el mapa a un formato que se pueda utilizar en el gráfico
        const chartData = [];
        ordersByDate.forEach((count, date) => {
            chartData.push({ date, count });
        });

        return chartData;
    }
}
