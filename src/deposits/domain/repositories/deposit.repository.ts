import { Deposit } from "../entities/deposit.entity";

export abstract class DepositRepository {
    abstract save(deposit: Deposit): Promise<Deposit>;
    abstract findById(id: string): Promise<Deposit | null>;
    abstract findAll(): Promise<Deposit[]>;
    abstract findByAccountId(accountId: string): Promise<Deposit[]>;
    abstract findByDateRange(startDate: Date, endDate: Date): Promise<Deposit[]>;
}