import { Inject, Injectable } from '@nestjs/common';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

@Injectable()
export class GetDepositsByAccountIdUseCase {
    constructor(
        @Inject('DepositRepository')
        private readonly depositRepository: DepositRepository,
    ) { }

    async execute(accountId: string): Promise<Deposit[]> {
        return this.depositRepository.findByAccountId(accountId);
    }
}