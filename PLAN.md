# Anagram Game - MVP Plan

The goal of this MVP is to:

* Let users play a single round of the anagram game
* Handle input validation, scoring, and visual feedback
* Run fully in-browser (no backend)
* Include a simple UI/UX and basic polish

---

## ✅ **MVP Development Plan: Anagram Challenge**

### 🧩 1. **Project Setup**

* [x] Initialize project using Vite + React + TypeScript
* [x] Install & configure Tailwind CSS
* [x] Scaffold the base game layout

---

### 🔤 2. **Game Logic & State**

* [x] Define a single game puzzle (`{ baseWord: "stare", validWords: [...] }`)
* [x] Load the puzzle into game state on load
* [x] Implement logic to check user-submitted words:

  * [x] Are all letters from the base word?
  * [x] Is the word in the valid word list?
  * [x] Is it not already found?

---

### 🎮 3. **Gameplay Features**

* [x] Add working **submit** button logic (validate + update word list)
* [x] Add **score tracking** based on word length (e.g. 1 point per letter)
* [x] Add **letter shuffling**
* [x] Add **"Hint"** button (show first letter of a valid, unfound word)
* [x] Show **completion screen** when all words are found or user gives up

---

### 📱 4. **UI/UX Polishing**

* [x] Add animations/feedback on correct/incorrect submissions
* [x] Display list of all found words
* [ ] Show remaining word count / progress bar
* [ ] Add mobile responsiveness (Tailwind makes this easier)
* [ ] Improve accessibility (keyboard input, aria roles)

---

### 🧪 5. **Testing & Polish**

* [ ] Add a few more puzzles (hardcoded or in a local JSON file)
* [ ] Add simple unit tests for the word checking logic (optional)
* [ ] Handle edge cases (e.g., empty input, repeat letters)

---

### 💸 6. **Monetization MVP (Optional for now)**

* [x] Add a placeholder banner ad section
* [ ] Plan for rewarded hints / remove ads as potential paid upgrades

---

### 📦 7. **Deployment**

* [ ] Clean build
* [ ] Deploy to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)
* [ ] Add favicon and metadata for social sharing

---

## ⏱ Timeline Suggestion (if you want to sprint MVP)

| Day   | Goal                           |
| ----- | ------------------------------ |
| Day 1 | Game UI + logic scaffolding    |
| Day 2 | Word validation + score logic  |
| Day 3 | Add shuffle + hint + polish UI |
| Day 4 | Add 2–3 puzzles + test         |
| Day 5 | Polish + deploy                |

---

Would you like this broken down into GitHub issues or checklists to track progress? Or start on **step 2 — defining the puzzle and validation logic**?
