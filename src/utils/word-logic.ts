// src/utils/word-logic.ts
export const canBeFormed = (word: string, base: string): boolean => {
  const baseChars = [...base];
  for (const char of word) {
    const index = baseChars.indexOf(char);
    if (index === -1) {
      return false; // Character not in base word
    }
    baseChars.splice(index, 1); // Use each character only once
  }
  return true;
};
