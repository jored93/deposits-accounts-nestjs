import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositController } from './controllers/deposit.controller';
import { DepositRepositoryImpl } from './database/deposit.repository.impl';
import { GetAllDepositsUseCase } from '../application/use-cases/get-all-deposits.use-case';
import { GetDepositByIdUseCase } from '../application/use-cases/get-deposit-by-id.use-case';
import { GetDepositsByAccountIdUseCase } from '../application/use-cases/get-deposits-by-account-id.use-case';
import { GetDepositsByDateRangeUseCase } from '../application/use-cases/get-deposits-by-date-range.use-case';
import { DepositOrmEntity } from './database/entities/deposit.orm-entity';

@Module({
    imports: [
        // Importar el `TypeOrmModule` y registrar la entidad `DepositOrmEntity`
        TypeOrmModule.forFeature([DepositOrmEntity]),
    ],
    controllers: [DepositController],
    providers: [
        GetAllDepositsUseCase,
        GetDepositByIdUseCase,
        GetDepositsByAccountIdUseCase,
        GetDepositsByDateRangeUseCase,
        // Registrar el repositorio como proveedor
        DepositRepositoryImpl,
        { provide: 'DepositRepository', useClass: DepositRepositoryImpl },
    ],
    exports: [
        DepositRepositoryImpl, // Exportar el repositorio si se necesita en otros módulos
    ],
})
export class DepositModule { }

