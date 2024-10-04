import { DepositRepository } from 'src/deposits/domain/repositories/deposit.repository';
import { CreateDepositDto } from './createDeposit.dto';
import { Deposit } from 'src/deposits/domain/entities/deposit.entity'
import { PrimitiveDeposit } from 'src/deposits/domain/entities/deposit.interface';

export class CreateDepositUseCase {
    constructor(private readonly depositRepository: DepositRepository) {}
    async execute(createDepositDto: CreateDepositDto): Promise<{payment: PrimitiveDeposit}> {
        const deposit = Deposit.create(createDepositDto);
        await this.depositRepository.save(deposit);
        return {
            payment: deposit.toValue(),
        }
    }
}