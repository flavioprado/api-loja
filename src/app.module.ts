import { Module } from '@nestjs/common';
import * as path from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/database';
import { Cliente } from './clientes/entities/cliente.entity';
import { PedidosModule } from './pedidos/pedidos.module';
import { ItenspedidoModule } from './itenspedido/itenspedido.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT) || 3306,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true
      
    }),
    ClientesModule,
    PedidosModule,
    ItenspedidoModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {



}
