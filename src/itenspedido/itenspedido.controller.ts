import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItenspedidoService } from './itenspedido.service';
import { CreateItenspedidoDto } from './dto/create-itenspedido.dto';
import { UpdateItenspedidoDto } from './dto/update-itenspedido.dto';

@Controller('itenspedido')
export class ItenspedidoController {
  constructor(private readonly itenspedidoService: ItenspedidoService) {}

  @Post()
  create(@Body() createItenspedidoDto: CreateItenspedidoDto) {
    return this.itenspedidoService.create(createItenspedidoDto);
  }

  @Get()
  findAll() {
    return this.itenspedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itenspedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItenspedidoDto: UpdateItenspedidoDto) {
    return this.itenspedidoService.update(+id, updateItenspedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itenspedidoService.remove(+id);
  }
}
