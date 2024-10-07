import { Inject, Injectable } from '@nestjs/common';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

@Injectable()
export class GetDepositsByDateRangeUseCase {
    constructor(
        @Inject('DepositRepository')
        private readonly depositRepository: DepositRepository,
    ) {}

    async execute(startDate: Date, endDate: Date): Promise<Deposit[]> {
        return this.depositRepository.findByDateRange(startDate, endDate);
    }
}