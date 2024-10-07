import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

export class GetDepositsByDateRangeUseCase {
    constructor(private readonly depositRepository: DepositRepository) { }

    async execute(startDate: Date, endDate: Date): Promise<Deposit[]> {
        return this.depositRepository.findByDateRange(startDate, endDate);
    }
}