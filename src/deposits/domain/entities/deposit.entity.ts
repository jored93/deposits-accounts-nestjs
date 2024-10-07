export class Deposit {
    constructor(
        public readonly id: string,
        public readonly accountId: string,
        public readonly amount: number,
        public readonly createdAt: Date,
    ) { }

    validateAmount(): void {
        if (this.amount <= 0) {
            throw new Error('Amount must be greater than zero.');
        }
    }
}
