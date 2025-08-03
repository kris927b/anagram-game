// src/pages/Game.tsx
import { useState } from "react";
import { puzzle } from "../data/puzzle";

export default function Game() {
  const [input, setInput] = useState("");
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "duplicate" | "invalid" | null>(null);

  const handleSubmit = () => {
    const guess = input.trim().toLowerCase();

    if (guess.length === 0) return;

    if (foundWords.includes(guess)) {
      setFeedback("duplicate");
    } else if (puzzle.validWords.includes(guess)) {
      setFoundWords([...foundWords, guess]);
      setScore(score + guess.length);
      setFeedback("correct");
    } else {
      setFeedback("invalid");
    }

    setInput("");
    setTimeout(() => setFeedback(null), 1500);
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center gap-4 bg-gradient-to-b from-yellow-50 to-pink-100 text-gray-800">
      <h1 className="text-3xl font-bold mt-4">🧩 Anagram Challenge</h1>

      <p className="text-xl">
        Base word:{" "}
        <span className="font-mono text-2xl tracking-wide">
          {puzzle.baseWord.toUpperCase()}
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
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {feedback && (
        <p className={`text-lg font-semibold ${{
          correct: "text-green-600",
          duplicate: "text-yellow-600",
          invalid: "text-red-600",
        }[feedback]}`}>
          {{
            correct: "✅ Correct!",
            duplicate: "⚠️ Already found",
            invalid: "❌ Invalid word",
          }[feedback]}
        </p>
      )}

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">
          Found Words ({foundWords.length})
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
