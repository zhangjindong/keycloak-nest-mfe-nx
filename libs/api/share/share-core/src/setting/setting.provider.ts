import { INestApplication, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { SETTING, SETTING_NAME } from './setting.constants';
import { SettingService } from './setting.service';

export const SettingProvider = {
  provide: SETTING,
  useFactory: async (setting: SettingService) => {
    const logger = new Logger(SETTING_NAME);
    try {
      logger.log('初始化 SettingProvider...');
      return (app: INestApplication) => setting.init(app);
    } catch (err) {
      logger.error('初始化 SettingProvider 出错');
      throw err;
    }
  },
  inject: [SettingService],
};
