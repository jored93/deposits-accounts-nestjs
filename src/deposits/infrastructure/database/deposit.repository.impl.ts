import { Injectable } from '@nestjs/common';
import { Deposit } from '../../domain/entities/deposit.entity';
import { DepositRepository } from '../../domain/repositories/deposit.repository';

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

    async findAll(): Promise<Deposit[]> {
        return this.deposits;
    }

    async findByAccountId(accountId: string): Promise<Deposit[]> {
        return this.deposits.filter(deposit => deposit.accountId === accountId);
    }

    async findByDateRange(startDate: Date, endDate: Date): Promise<Deposit[]> {
        return this.deposits.filter(
            deposit => deposit.createdAt >= startDate && deposit.createdAt <= endDate,
        );
    }
}
