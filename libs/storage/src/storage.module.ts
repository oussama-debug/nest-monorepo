import { DynamicModule, Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import {
  STORAGE_MODULE_OPTIONS,
  StorageModuleOptions,
} from '../../common/src/services/storage/storage.options';

@Module({})
export class StorageModule {
  static register(options: StorageModuleOptions): DynamicModule {
    return {
      module: StorageModule,
      controllers: [],
      providers: [
        { provide: STORAGE_MODULE_OPTIONS, useValue: options },
        StorageService,
      ],
      exports: [StorageService],
    };
  }

  static registerAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<StorageModuleOptions> | StorageModuleOptions;
    inject?: any[];
  }): DynamicModule {
    return {
      module: StorageModule,
      controllers: [],
      providers: [
        {
          provide: STORAGE_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        StorageService,
      ],
      exports: [StorageService],
    };
  }
}
