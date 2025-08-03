// src/pages/Game.tsx
import { useState, useEffect } from "react";
import { puzzle } from "../data/puzzle";

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

export default function Game() {
  const [input, setInput] = useState("");
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "pangram" | "duplicate" | "invalid" | "hint" | null>(null);
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setShuffledLetters(shuffleArray([...puzzle.baseWord]));
  }, []);

  const handleShuffle = () => {
    setShuffledLetters(shuffleArray([...puzzle.baseWord]));
  };

  const handleHint = () => {
    const unfoundWords = puzzle.validWords.filter(word => !foundWords.includes(word));
    if (unfoundWords.length === 0) return;

    const hintWord = unfoundWords[Math.floor(Math.random() * unfoundWords.length)];
    const hintLettersToShow = Math.ceil(hintWord.length * 0.4);
    
    const hint = [...hintWord].map((char, index) => {
      return index < hintLettersToShow ? char : '_';
    }).join('');

    setInput(hint);
    setScore(score - 20);
    setFeedback("hint");
    setTimeout(() => setFeedback(null), 1500);
  };

  const canBeFormed = (word: string, base: string): boolean => {
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

  const calculateScore = (word: string): number => {
    const length = word.length;
    if (length === 3) return 5;
    if (length === 4) return 10;
    if (length === 5) return 20;
    if (length === 6) return 35;
    if (length >= 7) return 50;
    return 0;
  };

  const handleSubmit = () => {
    const guess = input.trim().toLowerCase();

    if (guess.length === 0) return;

    if (foundWords.includes(guess)) {
      setFeedback("duplicate");
    } else if (
      canBeFormed(guess, puzzle.baseWord) &&
      puzzle.validWords.includes(guess)
    ) {
      let newPoints = calculateScore(guess);
      let isPangram = false;
      
      // Pangram bonus
      if (guess.length === puzzle.baseWord.length) {
        newPoints += 50;
        isPangram = true;
      }

      const newFoundWords = [...foundWords, guess];
      setFoundWords(newFoundWords);
      setScore(score + newPoints);
      setFeedback(isPangram ? "pangram" : "correct");

      if (newFoundWords.length === puzzle.validWords.length) {
        setIsCompleted(true);
      }
    } else {
      setFeedback("invalid");
    }

    setInput("");
    setTimeout(() => setFeedback(null), 1500);
  };

  const handlePlayAgain = () => {
    setFoundWords([]);
    setScore(0);
    setIsCompleted(false);
    setShuffledLetters(shuffleArray([...puzzle.baseWord]));
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center gap-4 bg-gradient-to-b from-yellow-50 to-pink-100 text-gray-800">
      {isCompleted && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-lg mb-4">You found all the words!</p>
            <p className="text-xl font-semibold mb-6">Final Score: {score}</p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold mt-4">🧩 Anagram Challenge</h1>

      <p className="text-xl">
        Letters:{" "}
        <span className="font-mono text-2xl tracking-widest">
          {shuffledLetters.join(" ").toUpperCase()}
        </span>
      </p>

      <input
        className="border-2 p-2 rounded w-64 text-center text-lg shadow bg-white"
        type="text"
        placeholder="Enter a word"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded shadow"
          onClick={handleShuffle}
        >
          Shuffle
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow"
          onClick={handleHint}
        >
          Hint (-20)
        </button>
      </div>

      {feedback && (
        <p className={`text-lg font-semibold ${{
          correct: "text-green-600",
          pangram: "text-purple-600",
          duplicate: "text-yellow-600",
          invalid: "text-red-600",
          hint: "text-blue-600",
        }[feedback]}`}>
          {{
            correct: "✅ Correct!",
            pangram: "🎉 Pangram!",
            duplicate: "⚠️ Already found",
            invalid: "❌ Invalid word",
            hint: "🤔 Here's a hint...",
          }[feedback]}
        </p>
      )}

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">
          Found Words ({foundWords.length} / {puzzle.validWords.length})
        </h2>
        <ul className="bg-white rounded p-4 shadow min-h-[120px]">
          {foundWords.length === 0 ? (
            <li className="text-gray-500 italic">No words found yet</li>
          ) : (
            foundWords.map((word, i) => <li key={i}>{word}</li>)
          )}
        </ul>
      </div>

      <p className="text-lg mt-4 font-semibold">Score: {score}</p>

      <div className="mt-8 w-full max-w-md h-24 bg-gray-300 rounded flex items-center justify-center text-gray-700">
        [Ad Banner Placeholder]
      </div>
    </main>
  );
}
