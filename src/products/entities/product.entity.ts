import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{ //aqui llamamos a la tabla de la bd producto.//
    @PrimaryGeneratedColumn({type: 'int4'}) //este decorado referecia la primarykey//
    id: number;

    @Column({type:'varchar', length: 100, nullable: false})
    name: string;

    @Column({type:'varchar', length: 300, nullable: false})
    description: string;

    @Column({type:'int4', nullable: false})
    price: number;

    @Column({type: 'int8', nullable: false})
    strock: number;
}