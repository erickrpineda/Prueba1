import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'rol'}}})
export class Rol extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'idrol', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  idrol?: number;

  @property({
    type: 'string',
    required: true,
    length: 30,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  @property({
    type: 'string',
    length: 100,
    mssql: {columnName: 'descripcion', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  descripcion?: string;

  @property({
    type: 'boolean',
    mssql: {columnName: 'estado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  estado?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Rol>) {
    super(data);
  }
}

export interface RolRelations {
  // describe navigational properties here
}

export type RolWithRelations = Rol & RolRelations;
