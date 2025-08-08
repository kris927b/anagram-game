// src/data/puzzles.ts
export interface Puzzle {
  baseWord: string;
  validWords: string[];
}

export const puzzles: Puzzle[] = [
  {
    baseWord: "stare",
    validWords: [
      "stare", "stear", "steer", "sear", "seer", "tear", "tare", "rate",
      "seat", "seta", "east", "eats", "eras", "ears", "are", "ars",
      "ate", "ear", "eat", "era", "ers", "eta", "ras", "rat", "ree",
      "res", "ret", "sae", "sar", "sat", "sea", "see", "ser", "set",
      "tae", "tar", "tas", "tea", "tee", "tes", "tsar"
    ],
  },
  {
    baseWord: "string",
    validWords: [
      "string", "sting", "ring", "grin", "gins", "sign", "sing",
      "trig", "rigs", "grit", "girt", "stir", "rig", "rin", "sin",
      "sir", "sit", "tin", "tis", "ins", "git", "gin"
    ],
  },
  {
    baseWord: "candle",
    validWords: [
      "candle", "claned", "cleaned", "clan", "land", "cane", "acne",
      "clad", "dale", "deal", "dean", "lace", "lade", "lead", "lean",
      "lend", "ale", "and", "ane", "cad", "can", "cel", "dal", "dan",
      "del", "den", "end", "lac", "lad", "lea", "led", "nae"
    ],
  },
];
