import { Controller, Get, Param } from '@nestjs/common'
import { FibonacciService } from '../services/fibonacci.service'

@Controller('fibonnaci')
export class FibonacciController {
    constructor(private fibonacciService: FibonacciService) {}

    @Get('value/:n')
    async getValue(
        @Param('n') n: string
    ): Promise<number> {
        return this.fibonacciService.getValue(parseInt(n));
    }
}
