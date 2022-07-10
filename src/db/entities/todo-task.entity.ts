import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TaskStatus {
  Pending = 'Pending',
  Completed = 'Completed',
}

@Entity()
export class TodoTask extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
  })
  status: TaskStatus;
}
