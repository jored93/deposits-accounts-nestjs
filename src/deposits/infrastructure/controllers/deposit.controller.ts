import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDepositUseCase } from '../../application/use-cases/register-deposit.use-case';

@Controller('deposits')
export class DepositController {
    constructor(private readonly registerDepositUseCase: RegisterDepositUseCase) { }

    @Post()
    async register(@Body() depositDto: { accountId: string; amount: number }) {
        const { accountId, amount } = depositDto;
        return this.registerDepositUseCase.execute(accountId, amount);
    }
}
