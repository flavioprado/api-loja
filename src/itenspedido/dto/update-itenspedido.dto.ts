import { PartialType } from '@nestjs/mapped-types';
import { CreateItenspedidoDto } from './create-itenspedido.dto';

export class UpdateItenspedidoDto extends PartialType(CreateItenspedidoDto) {}
