import { generateId } from "./generate-id.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.181.0/testing/asserts.ts";

const notAllTheSame = (array: Uint8Array): boolean => {
  const first = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== first) {
      return true;
    }
  }
  return false;
};

Deno.test("generates a one byte ID", () => {
  const id = generateId(1);
  assertEquals(id.length, 1);
});

Deno.test("generates an 8 byte ID", () => {
  const id = generateId(8);
  assertEquals(id.length, 8);
  assert(notAllTheSame(id));
});

Deno.test("generates an 11 byte ID", () => {
  const id = generateId(11);
  assertEquals(id.length, 11);
  assert(notAllTheSame(id));
});
