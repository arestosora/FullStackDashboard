import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DataService, PrismaService],
  controllers: [DataController]
})
export class DataModule {}
