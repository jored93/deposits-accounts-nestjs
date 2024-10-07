import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetAllDepositsUseCase } from '../../application/use-cases/get-all-deposits.use-case';
import { GetDepositByIdUseCase } from '../../application/use-cases/get-deposit-by-id.use-case';
import { GetDepositsByAccountIdUseCase } from '../../application/use-cases/get-deposits-by-account-id.use-case';
import { GetDepositsByDateRangeUseCase } from '../../application/use-cases/get-deposits-by-date-range.use-case';

@Controller('deposits')
export class DepositController {
    constructor(
        private readonly getAllDepositsUseCase: GetAllDepositsUseCase,
        private readonly getDepositByIdUseCase: GetDepositByIdUseCase,
        private readonly getDepositsByAccountIdUseCase: GetDepositsByAccountIdUseCase,
        private readonly getDepositsByDateRangeUseCase: GetDepositsByDateRangeUseCase,
    ) { }

    @Get()
    async getAllDeposits() {
        return this.getAllDepositsUseCase.execute();
    }

    @Get(':id')
    async getDepositById(@Param('id') id: string) {
        return this.getDepositByIdUseCase.execute(id);
    }

    @Get('account/:accountId')
    async getDepositsByAccountId(@Param('accountId') accountId: string) {
        return this.getDepositsByAccountIdUseCase.execute(accountId);
    }

    @Get('date-range')
    async getDepositsByDateRange(
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string,
    ) {
        return this.getDepositsByDateRangeUseCase.execute(new Date(startDate), new Date(endDate));
    }
}
