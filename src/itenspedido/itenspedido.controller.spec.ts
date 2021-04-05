import { Test, TestingModule } from '@nestjs/testing';
import { ItenspedidoController } from './itenspedido.controller';
import { ItenspedidoService } from './itenspedido.service';

describe('ItenspedidoController', () => {
  let controller: ItenspedidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItenspedidoController],
      providers: [ItenspedidoService],
    }).compile();

    controller = module.get<ItenspedidoController>(ItenspedidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
