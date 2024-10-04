import { Module } from '@nestjs/common';
import { DepositsModule } from './deposits/deposits.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [DepositsModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
