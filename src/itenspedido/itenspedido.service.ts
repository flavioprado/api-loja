import { Injectable } from '@nestjs/common';
import { CreateItenspedidoDto } from './dto/create-itenspedido.dto';
import { UpdateItenspedidoDto } from './dto/update-itenspedido.dto';

@Injectable()
export class ItenspedidoService {
  create(createItenspedidoDto: CreateItenspedidoDto) {
    return 'This action adds a new itenspedido';
  }

  findAll() {
    return `This action returns all itenspedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itenspedido`;
  }

  update(id: number, updateItenspedidoDto: UpdateItenspedidoDto) {
    return `This action updates a #${id} itenspedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} itenspedido`;
  }
}
