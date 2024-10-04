import { v4 as uuidv4 } from "uuid";
import { PrimitiveDeposit } from './deposit.interface'

export class Deposit {
    constructor(private attributes: PrimitiveDeposit) { }

    static create(createDeposit: {
        amount: number;
        accountId: string;
    }): Deposit {
        return new Deposit({
            id: uuidv4(),
            amount: createDeposit.amount,
            accountId: createDeposit.accountId,
        });
    }

    toValue(): PrimitiveDeposit {
        return {
            id: this.attributes.id,
            amount: this.attributes.amount,
            accountId: this.attributes.accountId,
        };
    }
}