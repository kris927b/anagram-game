// src/utils/word-logic.test.ts
import { canBeFormed } from './word-logic';

describe('canBeFormed', () => {
  it('should return true for valid words', () => {
    expect(canBeFormed('cat', 'cater')).toBe(true);
    expect(canBeFormed('react', 'cater')).toBe(true);
  });

  it('should return false for invalid words', () => {
    expect(canBeFormed('hello', 'cater')).toBe(false);
    expect(canBeFormed('reacts', 'cater')).toBe(false);
  });

  it('should handle duplicate letters correctly', () => {
    expect(canBeFormed('apple', 'aplex')).toBe(false);
    expect(canBeFormed('book', 'boko')).toBe(true);
  });
});
