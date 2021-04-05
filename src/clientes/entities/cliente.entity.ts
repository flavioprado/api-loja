import { BaseEntity } from "../../base-entity/base-entity";
import { Entity, PrimaryColumn, Column } from "typeorm";
import { Endereco } from "../../interfaces/endereco.interface";

@Entity('cliente')
export class Cliente extends BaseEntity {

    @PrimaryColumn('uuid', {
        nullable: false,
        primary: true,
        name: 'cli_id',
    })
    id: string;

    @Column({
        nullable: false,
        unique: true,
        name: 'cli_numero',
    })
    numero: number;

    @Column('text', {
        nullable: false,
        name: 'cli_nome',
    })
    nome: string;

    @Column('text', {
        nullable: false,
        name: 'cli_tipo_pessoa',
    })
    tipoPessoa: string;

    @Column('text', {
        nullable: false,
        name: 'cli_cpfOrCnpj',
    })
    cpfOrCnpj: string;

    @Column('text', {
        nullable: true,
        name: 'cli_email',
    })
    email: string;

    @Column('text', {
        nullable: true,
        name: 'cli_telefone',
    })
    telefone: string;

    @Column("simple-json", {
        nullable: true,
        name: 'cli_endereco',
    })
    endereco: Endereco;
}
