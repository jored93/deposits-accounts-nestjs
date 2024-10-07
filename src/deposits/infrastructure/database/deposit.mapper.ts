import { Deposit } from '../../domain/entities/deposit.entity';
import { DepositOrmEntity } from './entities/deposit.orm-entity';

export class DepositMapper {
    static toOrmEntity(deposit: Deposit): DepositOrmEntity {
        const ormEntity = new DepositOrmEntity();
        ormEntity.id = deposit.id;
        ormEntity.accountId = deposit.accountId;
        ormEntity.amount = deposit.amount;
        ormEntity.createdAt = deposit.createdAt;
        return ormEntity;
    }

    static toDomainEntity(ormEntity: DepositOrmEntity): Deposit {
        return new Deposit(
            ormEntity.id,
            ormEntity.accountId,
            ormEntity.amount,
            ormEntity.createdAt,
        );
    }
}
