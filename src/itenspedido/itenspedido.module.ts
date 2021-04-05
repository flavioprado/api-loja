import { Module } from '@nestjs/common';
import { ItenspedidoService } from './itenspedido.service';
import { ItenspedidoController } from './itenspedido.controller';

@Module({
  controllers: [ItenspedidoController],
  providers: [ItenspedidoService]
})
export class ItenspedidoModule {}
