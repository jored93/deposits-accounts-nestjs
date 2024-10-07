import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('deposits')
export class DepositOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    accountId: string;

    @Column('decimal')
    amount: number;

    @Column({ type: 'timestamptz' })
    createdAt: Date;
}
