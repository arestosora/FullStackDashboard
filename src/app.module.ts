import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { PedidosModule } from './pedidos/pedidos.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, PedidosModule, CuentasModule, DataModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
