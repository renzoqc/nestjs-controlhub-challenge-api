import { Module } from '@nestjs/common'
import { FibonacciModule } from './domain/fibonacci/fibonacci.module'
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import { AppConfigService } from './config/providers/configuration.service'

@Module({
    imports: [
        WinstonModule.forRootAsync({
            useFactory: async () => ({
                transports: [
                    new winston.transports.Console({
                        level: AppConfigService.logs.level,
                        format: winston.format.combine(
                            winston.format.timestamp(),
                            nestWinstonModuleUtilities.format.nestLike(),
                        ),
                    }),
                ],
            }),
        }),
        FibonacciModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
