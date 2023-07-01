import { Injectable } from '@nestjs/common'
import {
    AppConfig, LogConfig,
} from '../interfaces/configuration.interface'

@Injectable()
export class AppConfigService {
    get app(): AppConfig {
        return {
            port: process.env.PORT || '3000',
        }
    }

    static get logs():LogConfig  {
        return {
            level: process.env.LOG_LEVEL || 'info',
        }
    }
}
