import { Inject, Injectable } from '@nestjs/common';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { Deposit } from '../../domain/entities/deposit.entity';

@Injectable()
export class GetAllDepositsUseCase {
  constructor(
    @Inject('DepositRepository')
    private readonly depositRepository: DepositRepository,
  ) {}

  async execute(): Promise<Deposit[]> {
    return this.depositRepository.findAll();
  }
}

