import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

export class GetDepositByIdUseCase {
    constructor(private readonly depositRepository: DepositRepository) { }

    async execute(id: string): Promise<Deposit | null> {
        return this.depositRepository.findById(id);
    }
}