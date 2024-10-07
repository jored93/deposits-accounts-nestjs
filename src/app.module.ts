import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositModule } from './deposits/infrastructure/deposit.module';
import { DepositOrmEntity } from './deposits/infrastructure/database/entities/deposit.orm-entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.dev',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [ DepositOrmEntity ],
        synchronize: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    DepositModule],
})
export class AppModule { }

