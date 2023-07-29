import {Column, PrimaryGeneratedColumn, Entity } from 'typeorm';


@Entity()
export class User{
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column({type:'string', length: 100, nullable: false})
    name: string;

    @Column({type:'string', length: 70, nullable: false})
    password: string;

    @Column({type:'string', length: 100, nullable: false})
    email: string;

    @Column({type:'string', length: 12, nullable: false})
    sexo: string;

    @Column({type:'boolean', default: true})
    active: Boolean;


}