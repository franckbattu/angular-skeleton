import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

/**
 * Implementation of LoggerService used to display logs directly in the Console
 */
@Injectable()
export class ConsoleLoggerService implements LoggerService {
  info(message: string): void {
    console.log(`[INFO] ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN] ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR] ${message}`);
  }

  debug(message: string): void {
    console.debug(`[DEBUG] ${message}`);
  }
}
