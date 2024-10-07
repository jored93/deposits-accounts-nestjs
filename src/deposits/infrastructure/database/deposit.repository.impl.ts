import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Deposit } from '../../domain/entities/deposit.entity';
import { DepositOrmEntity } from './entities/deposit.orm-entity';
import { DepositRepository } from '../../domain/repositories/deposit.repository';
import { DepositMapper } from './deposit.mapper';

@Injectable()
export class DepositRepositoryImpl implements DepositRepository {
    constructor(
        @InjectRepository(DepositOrmEntity)
        private readonly depositRepository: Repository<DepositOrmEntity>,
    ) { }

    async save(deposit: Deposit): Promise<Deposit> {
        const ormEntity = DepositMapper.toOrmEntity(deposit);
        const savedEntity = await this.depositRepository.save(ormEntity);
        return DepositMapper.toDomainEntity(savedEntity);
    }

    async findById(id: string): Promise<Deposit | null> {
        const ormEntity = await this.depositRepository.findOneBy({ id });
        return ormEntity ? DepositMapper.toDomainEntity(ormEntity) : null;
    }

    async findAll(): Promise<Deposit[]> {
        const ormEntities = await this.depositRepository.find();
        return ormEntities.map(ormEntity => DepositMapper.toDomainEntity(ormEntity));
    }

    async findByAccountId(accountId: string): Promise<Deposit[]> {
        // Usa el método `find` para obtener todos los registros que coincidan con el `accountId`
        const ormEntities = await this.depositRepository.find({
            where: { accountId }, // Usar el parámetro `where` para especificar la condición
        });

        // Mapear cada entidad ORM a una entidad de dominio
        return ormEntities.map(ormEntity => DepositMapper.toDomainEntity(ormEntity));
    }


    async findByDateRange(startDate: Date, endDate: Date): Promise<Deposit[]> {
        // Usar `find` con la condición `createdAt` entre el rango de fechas
        const ormEntities = await this.depositRepository.find({
            where: {
                createdAt: Between(startDate, endDate), // Usar `Between` para especificar el rango de fechas
            },
        });

        // Mapear cada entidad ORM a una entidad de dominio
        return ormEntities.map(ormEntity => DepositMapper.toDomainEntity(ormEntity));
    }

}
