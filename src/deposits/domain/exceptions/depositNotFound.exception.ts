export class DepositNotFoundException extends Error {
    constructor(public readonly id: string) {
        super(`Deposit not found ${id}`);
    }
}