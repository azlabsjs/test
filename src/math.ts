export function sum(...x: number[]) {
  return x.reduce((carry, current) => {
    carry += current;

    return carry;
  }, 0);
}

export function multiply(x: number, y: number) {
  return x * y;
}

export function divide(x: number, y: number) {
  if (y === 0) {
    throw new Error(`division error, cannot divide by ${y}`);
  }
  return x / y;
}

export function pow(x: number, y: number) {
  return x ** y;
}
