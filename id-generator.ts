export interface IdGenerator {
  /**
   * Returns a new span ID as a 8-byte array.
   */
  generateSpanIdBytes(): Uint8Array;
  /**
   * Returns a new trace ID as a 16-byte array.
   */
  generateTraceIdBytes(): Uint8Array;
}
