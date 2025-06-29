
import { greet } from '../src';

describe('SayHello Tests', () => {
  it('Greet the user provided name', () => {
    expect(greet('Bertrand')).toEqual('Hello, Bertrand');
  });
});
