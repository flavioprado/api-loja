import {
    Column,    
    BeforeInsert,
    BeforeUpdate,
  } from 'typeorm';
  
  import { v4 as uuidv4 } from 'uuid';

  /**
   * Classe Base para entidades de banco
   */
  export class BaseEntity {
    id: string;
  
    @Column('boolean', {
      nullable: false,
      name: 'std_ind_ativo',
      default: true,
    })
    ativo: boolean;
  
    @Column({
      nullable: true,
      name: 'std_dt_inc',
      type: 'timestamp',
    })
    dataInclusao: Date;
  
    @Column({
      nullable: true,
      name: 'std_dt_atz',
      type: 'timestamp',
    })
    dataAtualizacao: Date;
  
    @Column('text', {
      nullable: true,
      name: 'std_usr_inc',
    })
    usuarioInclusao: string;
  
    @Column('text', {
      nullable: true,
      name: 'std_usr_atz',
    })
    usuarioAtualizacao: string;
  
    @BeforeInsert()
    protected beforeInsert() {
      if (!this.id) {
        this.id = uuidv4();
      }
      this.dataInclusao = new Date();
      this.dataAtualizacao = new Date();
    }
  
    @BeforeUpdate()
    protected beforeUpdate() {
      this.dataAtualizacao = new Date();
    }
  }
  