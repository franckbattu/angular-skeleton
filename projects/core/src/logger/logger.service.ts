/**
 * Abstract LoggerService class that defines the structure for logging services.
 */
export abstract class LoggerService {
  /**
   * Logs a message with an `Info` level of severity.
   * @param message - The message to log.
   */
  abstract info(message: string): void;
  /**
   * Logs a message with a `Warn` level of severity.
   * @param message - The message to log
   */
  abstract warn(message: string): void;
  /**
   * Logs a message with an `Error` level of severity.
   * @param message - The message to log
   */
  abstract error(message: string): void;
  /**
   * Logs a message with a `Debug` level of severity.
   * @param message - The message to log
   */
  abstract debug(message: string): void;
}
