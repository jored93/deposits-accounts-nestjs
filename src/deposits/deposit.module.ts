import { Module } from '@nestjs/common';
import { DepositController } from './infrastructure/controllers/deposit.controller';
import { RegisterDepositUseCase } from './application/use-cases/register-deposit.use-case';
import { DepositRepositoryImpl } from './infrastructure/database/deposit.repository.impl';

@Module({
    controllers: [DepositController],
    providers: [
        RegisterDepositUseCase,
        { provide: 'DepositRepository', useClass: DepositRepositoryImpl },
    ],
})
export class DepositModule { }
