import { Module } from '@nestjs/common';
import { DepositModule } from './deposits/deposit.module';

@Module({
  imports: [DepositModule],
})
export class AppModule { }

