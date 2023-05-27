import { assertExists } from "https://deno.land/std@0.181.0/testing/asserts.ts";
import { SimpleIdGenerator } from "./mod.ts";

Deno.test("mod.ts", () => {
  assertExists(SimpleIdGenerator);
});
