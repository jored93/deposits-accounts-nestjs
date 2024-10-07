import { Deposit } from '../../domain/entities/deposit.entity';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepositRepositoryImpl implements DepositRepository {
    private deposits: Deposit[] = [];

    async save(deposit: Deposit): Promise<Deposit> {
        this.deposits.push(deposit);
        return deposit;
    }

    async findById(id: string): Promise<Deposit | null> {
        return this.deposits.find(deposit => deposit.id === id) || null;
    }
}
