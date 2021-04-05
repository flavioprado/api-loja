import { Test, TestingModule } from '@nestjs/testing';
import { ItenspedidoService } from './itenspedido.service';

describe('ItenspedidoService', () => {
  let service: ItenspedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItenspedidoService],
    }).compile();

    service = module.get<ItenspedidoService>(ItenspedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
