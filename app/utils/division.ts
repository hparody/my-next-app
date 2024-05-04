export const ERROR_MESSAGE_ZERO = "Error: divisor must be different from zero.";

export function division(a: number, b: number) {
  if (b === 0) return ERROR_MESSAGE_ZERO;
  return a / b;
}
