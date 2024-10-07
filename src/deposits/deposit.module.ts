import { Module } from '@nestjs/common';
import { DepositController } from './infrastructure/controllers/deposit.controller';
import { DepositRepositoryImpl } from './infrastructure/database/deposit.repository.impl';
import { GetAllDepositsUseCase } from './application/use-cases/get-all-deposits.use-case';
import { GetDepositByIdUseCase } from './application/use-cases/get-deposit-by-id.use-case';
import { GetDepositsByAccountIdUseCase } from './application/use-cases/get-deposits-by-account-id.use-case';
import { GetDepositsByDateRangeUseCase } from './application/use-cases/get-deposits-by-date-range.use-case';

@Module({
    controllers: [DepositController],
    providers: [
        GetAllDepositsUseCase,
        GetDepositByIdUseCase,
        GetDepositsByAccountIdUseCase,
        GetDepositsByDateRangeUseCase,
        { provide: 'DepositRepository', useClass: DepositRepositoryImpl },
    ],
})
export class DepositModule { }
