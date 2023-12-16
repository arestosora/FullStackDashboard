import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { DataService } from './data.service'; // Asegúrate de importar correctamente el servicio

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('chart')
  public async getChartData(@Query('startDate') startDate: string, @Query('endDate') endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new BadRequestException('Invalid date format');
    }

    const chartData = await this.dataService.getChartData(start, end);
    return chartData;
  }
}
