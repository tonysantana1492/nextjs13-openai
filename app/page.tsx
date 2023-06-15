"use client";

import { FormEvent, useState } from "react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  const generateJoke = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error: any) {
      alert(error.message);
      return;
    }

    setLoading(false);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateJoke(prompt);
  };

  return (
    <div className="bg-zinc-900 min-h-screen flex justify-center items-start">
      <form onSubmit={onSubmit} className="bg-zinc-900 p-10 h-screen">
        <h1 className="text-2xl font-bold text-slate-200 mb-5">
          Generador de chistes de programadores
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Entre un tema"
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 rounded-md block bg-neutral-700 text-white w-full"
          value={prompt}
          autoFocus
        />
        <button
          type="submit"
          className="mt-8 bg-green-500 p-2 rounded-md block disabled:opacity-50 text-white"
          disabled={!prompt || loading}
        >
          {loading ? "Pensando..." : "Generar"}
        </button>
        {result && (
          <p className="text-xl font-bold text-white max-w-xs my-10">
            {result}
          </p>
        )}
      </form>
    </div>
  );
};

export default HomePage;
