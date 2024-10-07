import { uuid as uuidv4 } from 'uuidv4';

import { Deposit } from '../../domain/entities/deposit.entity';
import { DepositRepository } from '../../domain/repositories/deposit.repository';

export class RegisterDepositUseCase {
    constructor(private readonly depositRepository: DepositRepository) { }

    async execute(accountId: string, amount: number): Promise<Deposit> {
        const deposit = new Deposit(
            uuidv4(),
            accountId,
            amount,
            new Date(),
        );

        deposit.validateAmount();
        return this.depositRepository.save(deposit);
    }
}
