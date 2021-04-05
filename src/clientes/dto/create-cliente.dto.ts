import { Endereco } from "src/interfaces/endereco.interface";

export class CreateClienteDto {
    nome: string;
    tipoPessoa: string;
    cnpj: string;
    email: string;
    telefone: string;
    endereco: Endereco;    
}
