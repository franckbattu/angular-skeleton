import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { ConsoleLoggerService } from './console-logger.service';
import { LoggerService } from './logger.service';

export function provideLoggers(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LoggerService,
      useClass: ConsoleLoggerService,
    },
  ]);
}
