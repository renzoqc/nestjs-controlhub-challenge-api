import { HttpStatus, ValidationPipe } from '@nestjs/common'
import { NestApplication } from '@nestjs/core'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { FibonacciController } from './fibonacci.controller'
import { FibonacciService } from '../services/fibonacci.service'
import {
    fibonacciServiceMock,
} from '../__mocks__/mock-fibonacci'

describe('FibonacciController', () => {
    let controller: FibonacciController
    let app: NestApplication

    beforeEach(async () => {
        jest.clearAllMocks()
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FibonacciController],
            providers: [
                {
                    provide: FibonacciService,
                    useValue: fibonacciServiceMock,
                },
            ],
        })
            .compile()

        controller = module.get<FibonacciController>(FibonacciController)
        app = module.createNestApplication()
        app.useGlobalPipes(new ValidationPipe())

        await app.init()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    describe('GET - /value/:n', () => {
        it('should call rigth methods', async () => {
            fibonacciServiceMock.getValue.mockResolvedValue(2)
            const res = await request(app.getHttpServer()).get('/fibonnaci/value/3')
            expect(res.status).toEqual(HttpStatus.OK)
            expect(res.text).toEqual('2')
        })
    })
})
