import { generateId } from "./generate-id.ts";
import { IdGenerator } from "./id-generator.ts";

/**
 * A simple implementation of {@link IdGenerator} that generates random trace and span IDs.
 */
export class SimpleIdGenerator implements IdGenerator {
  generateSpanIdBytes(): Uint8Array {
    return generateId(8);
  }
  generateTraceIdBytes(): Uint8Array {
    return generateId(16);
  }
}
