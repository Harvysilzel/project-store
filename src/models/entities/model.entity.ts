import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Model {

    @PrimaryGeneratedColumn({ type: 'int4' })
  id?: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  description: string;

  @Column({ type: 'int4', nullable: false })
  anno: number;

}
