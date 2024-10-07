import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

export class GetDepositsByAccountIdUseCase {
    constructor(private readonly depositRepository: DepositRepository) { }

    async execute(accountId: string): Promise<Deposit[]> {
        return this.depositRepository.findByAccountId(accountId);
    }
}