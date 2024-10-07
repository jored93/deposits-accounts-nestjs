import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositController } from './controllers/deposit.controller';
import { DepositRepositoryImpl } from './database/deposit.repository.impl';
import { DepositOrmEntity } from './database/entities/deposit.orm-entity';
import { GetAllDepositsUseCase } from '../application/use-cases/get-all-deposits.use-case';
import { GetDepositByIdUseCase } from '../application/use-cases/get-deposit-by-id.use-case';
import { GetDepositsByAccountIdUseCase } from '../application/use-cases/get-deposits-by-account-id.use-case';
import { GetDepositsByDateRangeUseCase } from '../application/use-cases/get-deposits-by-date-range.use-case';

@Module({
    imports: [
        TypeOrmModule.forFeature([DepositOrmEntity]),
    ],
    controllers: [DepositController],
    providers: [
        GetAllDepositsUseCase,
        GetDepositByIdUseCase,
        GetDepositsByAccountIdUseCase,
        GetDepositsByDateRangeUseCase,
        DepositRepositoryImpl,
        {
            provide: 'DepositRepository',
            useClass: DepositRepositoryImpl,
        },
    ],
    exports: [
        DepositRepositoryImpl,
        { provide: 'DepositRepository', useClass: DepositRepositoryImpl },
    ],
})
export class DepositModule { }
