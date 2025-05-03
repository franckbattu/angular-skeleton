import { ConsoleLoggerService } from './console-logger.service';
import { inject, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('ConsoleLoggerService', () => {
  let service: ConsoleLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLoggerService, provideZonelessChangeDetection()],
    });

    service = TestBed.inject(ConsoleLoggerService);
  });

  // TODO: remove after update to Angular 20
  afterEach(() => TestBed.resetTestingModule());

  it('should ConsoleLoggerService be injected', inject([ConsoleLoggerService], (service: ConsoleLoggerService) =>
    expect(service).toBeTruthy(),
  ));

  it('should log an info message', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    const message = 'Test Info Message';

    service.info(message);

    expect(consoleSpy).toHaveBeenCalledWith(`[INFO] ${message}`);
  });

  it('should log a warning message', () => {
    const consoleSpy = vi.spyOn(console, 'warn');
    const message = 'Test Warn Message';

    service.warn(message);

    expect(consoleSpy).toHaveBeenCalledWith(`[WARN] ${message}`);
  });

  it('should log an error message', () => {
    const consoleSpy = vi.spyOn(console, 'error');
    const message = 'Test Error Message';

    service.error(message);

    expect(consoleSpy).toHaveBeenCalledWith(`[ERROR] ${message}`);
  });

  it('should log a debug message', () => {
    const consoleSpy = vi.spyOn(console, 'debug');
    const message = 'Test Debug Message';

    service.debug(message);

    expect(consoleSpy).toHaveBeenCalledWith(`[DEBUG] ${message}`);
  });
});
