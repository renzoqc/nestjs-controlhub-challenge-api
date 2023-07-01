import { Module } from '@nestjs/common'
import { FibonacciController } from './controllers/fibonacci.controller'
import { FibonacciService } from './services/fibonacci.service'
import { AppConfigModule } from '../../config/config.module'
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [AppConfigModule, HttpModule],
    controllers: [FibonacciController],
    providers: [FibonacciService],
})
export class FibonacciModule {}
