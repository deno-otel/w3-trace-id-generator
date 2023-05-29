import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { SimpleIdGenerator } from "./simple-id-generator.ts";
Deno.test("SimpleIdGenerator", () => {
  const generator = new SimpleIdGenerator();

  const spanId = generator.generateSpanIdBytes();
  assertEquals(spanId.length, 8, "Span ID should be 8 bytes");
  assert(
    spanId.every((byte) => byte >= 0 && byte <= 255),
    "All bytes should be between 0 and 255",
  );
  assert(
    spanId.some((byte) => byte !== 0),
    "At least one byte should be non-zero",
  );

  const traceId = generator.generateTraceIdBytes();
  assertEquals(traceId.length, 16, "Trace ID should be 16 bytes");
  assert(
    traceId.every((byte) => byte >= 0 && byte <= 255),
    "All bytes should be between 0 and 255",
  );
  assert(
    traceId.some((byte) => byte !== 0),
    "At least one byte should be non-zero",
  );
});
