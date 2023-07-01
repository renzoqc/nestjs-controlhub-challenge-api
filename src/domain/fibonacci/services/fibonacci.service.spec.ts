import { Test, TestingModule } from '@nestjs/testing'
import { FibonacciService } from './fibonacci.service'

describe('FibonacciService', () => {
    let service: FibonacciService

    beforeEach(async () => {
        jest.clearAllMocks()
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FibonacciService,
            ],
        }).compile()

        service = module.get<FibonacciService>(FibonacciService)
    })

    it('should be d' +
        'efined', () => {
        expect(service).toBeDefined()
    })

    describe('getAccessToken', () => {
        it('should call the right methods', async () => {
            const result = await service.getValue(2)
            expect(result).toEqual(1)
        })
    })
})
