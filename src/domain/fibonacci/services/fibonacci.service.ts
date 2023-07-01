import { Injectable } from '@nestjs/common'

@Injectable()
export class FibonacciService {
    private fibonacciCache: { [n: number]: number } = {}

    getValue(n: number): number {
        if (n <= 1) return n

        if (!this.fibonacciCache.hasOwnProperty.call(n)) {
            this.fibonacciCache[n] = this.getValue(n - 1) + this.getValue(n - 2);
        }

        return this.fibonacciCache[n];
    }
}
