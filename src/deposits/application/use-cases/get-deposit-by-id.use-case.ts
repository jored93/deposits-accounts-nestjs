import { Inject, Injectable } from '@nestjs/common';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

@Injectable()
export class GetDepositByIdUseCase {
    constructor(
        @Inject('DepositRepository')
        private readonly depositRepository: DepositRepository,
    ) { }

    async execute(id: string): Promise<Deposit | null> {
        return this.depositRepository.findById(id);
    }
}