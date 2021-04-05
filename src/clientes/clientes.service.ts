import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(Cliente) private repo: Repository<Cliente>,
    // @InjectRepository(Pedido) private repoItem: Repository<Pedido>,
    // private produtoService: ProdutoService,

  ) { }

  async create(createClienteDto: CreateClienteDto) {
    let numero: number = 1;
    let result = await this.repo.createQueryBuilder("cliente")
      .select("cliente.numero")
      .orderBy("cliente.numero", "DESC")
      .limit(1)
      .getOne();

    if (result) {
      numero = result.numero;
      numero++;
      console.log(numero);
    }

    const entity = this.repo.create(createClienteDto); // cria a entity
    entity.numero = numero;
    return this.repo.save(entity);
  }

  async findAll() {
    const opts = {
      order: {
        numero: 'DESC',
      },
    } as FindManyOptions; // todo order by nome

    return await this.repo.find(opts);
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
