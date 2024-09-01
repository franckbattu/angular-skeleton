import { Provider } from '@angular/core';
import { ConsoleLoggerService } from './console-logger.service';
import { LoggerService } from './logger.service';

export const loggerProviders: Provider[] = [
  ConsoleLoggerService,
  {
    provide: LoggerService,
    useExisting: ConsoleLoggerService,
  },
];
