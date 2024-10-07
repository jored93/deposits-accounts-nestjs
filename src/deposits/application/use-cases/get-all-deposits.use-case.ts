import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

export class GetAllDepositsUseCase {
  constructor(private readonly depositRepository: DepositRepository) {}

  async execute(): Promise<Deposit[]> {
    return this.depositRepository.findAll();
  }
}
