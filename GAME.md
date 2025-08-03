## 🧩 Game Concept: **"Word Bloom"** *(working title)*

**Tagline:**
*“Unscramble the letters. Find all the words. Relax your mind.”*

### 🎯 Goal:

Given a scrambled set of letters, find all valid words of length 3 or more that can be formed.

---

## 🎮 Core Gameplay Loop

1. **Display** a random set of 6–8 letters (scrambled).
2. Player types or taps letters to form words.
3. Valid words are added to the word list and scored.
4. Player attempts to find all valid words before:

   * Time runs out *(optional)*, or
   * They choose to move to the next puzzle.

---

## 🧠 Game Rules

| Rule          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| Word Length   | Minimum of 3 letters                                                        |
| No Duplicates | Previously submitted words are not accepted again                           |
| Pangram Bonus | If the player finds a word using **all letters**, grant a large score bonus |
| Word List     | Use a filtered English dictionary (e.g., \~10–20k common words)             |
| Hints         | Optional hint system (show a letter, reveal one word, etc.)                 |

---

## 🧱 Structure

### 📦 Levels / Sessions

* Each level is a unique anagram set with 6–8 letters.
* Words range from 3 letters to 8 (max).
* Target: \~10–50 valid words per puzzle.
* Could preload 100–200 handcrafted sets or procedurally generate them.

### 🗂 Game Modes

* **Classic Mode**: No timer. Relax and find words at your own pace.
* **Timed Challenge**: Find as many words as possible in 2 minutes.
* **Daily Anagram**: A single puzzle that resets daily for all players.

---

## 💬 UI Mockup (Text-Based)

```
🟩🟦🟩 Word Bloom 🟩🟦🟩

Letters: 🅧 🅐 🅝 🅖 🅔 🅛 🅘

[ Type here: ]  ___________

Words Found:
✓ ANGEL
✓ LANE
✓ GAIN
_ _ _ _ _ 
_ _ _ _ _ _

[Hint]   [Shuffle]   [Submit]   [Give Up]
Score: 234     Words: 3/22
```

---

## 🎨 Design & Aesthetic

* **Style:** Minimalist, relaxing, warm colors (lavender, cream, teal)
* **Audio:** Calm lo-fi music, satisfying key clicks
* **Animations:** Subtle word pop-in when found, particle burst for pangrams

---

## 🧩 Content Strategy

* Word sets can be pre-generated from valid 6–8 letter base words
* Example base words:

  * **CANDLE** → CLEAN, CLAN, LAND, CANE, etc.
  * **STRING** → RING, STING, GRIN, GINS, etc.
* Filtered dictionary for appropriate, non-obscure English words
* Store word sets in a simple JSON format:

```json
{
  "base": "STRING",
  "letters": ["S", "T", "R", "I", "N", "G"],
  "answers": ["ring", "sting", "grin", "gins", "string", ...]
}
```

---

## 🏅 Scoring System

| Word Length | Points    |
| ----------- | --------- |
| 3 letters   | 5         |
| 4 letters   | 10        |
| 5 letters   | 20        |
| 6 letters   | 35        |
| 7+ letters  | 50        |
| Pangram     | +50 bonus |

Bonus for completing all words: +100
Streak bonus (e.g., 3+ correct in a row): +5%

---

## 💰 Monetization Plan

* **One-time purchase**: \~10–20 DKK (no ads, no IAPs)
* Optional upsell:

  * “Relax Pack” with 50 extra handcrafted puzzles
  * “Kids Pack” (simpler word sets)
  * “Scandinavian Pack” (Danish/Norwegian words)

---

## 🛠️ Tech Stack Suggestions

| Platform    | Tools                               |
| ----------- | ----------------------------------- |
| iOS/Android | Flutter, Unity, or Godot            |
| Web         | React or Svelte + localStorage      |
| Desktop     | Electron or Tauri (for Mac/Windows) |

---

Would you like help with:

* UI design mockup in Figma-style?
* First prototype in Flutter, Unity, or web?
* Word list generator or content pipeline?

Let’s pick the next step based on your tools and preferences.
