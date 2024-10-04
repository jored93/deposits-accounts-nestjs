import { Deposit } from "../entities/deposit.entity";

export abstract class DepositRepository {
    abstract save(deposit: Deposit): Promise<void>;
    abstract findById(id: string): Promise<Deposit | null>;
}