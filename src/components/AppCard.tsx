"use client";

export default function AppCard() {
  return (
  <section
  id="apps"
  className="min-h-screen px-10 lg:px-24 py-32"
>
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-16">
      Selected Work
    </h2>

    <div className="grid md:grid-cols-2 gap-12">

      <div className="border border-white/10 p-10 rounded-2xl hover:border-white/30 transition">
        <h3 className="text-2xl font-semibold mb-4">
          Daily Motivation App
        </h3>
        <p className="text-gray-400 mb-6">
          Designed and developed a minimalist Android app delivering
          daily motivational quotes with clean UI architecture.
        </p>
        <p className="text-gray-500 text-sm">
          React Native · UI Architecture · State Management
        </p>
      </div>

      <div className="border border-white/10 p-10 rounded-2xl hover:border-white/30 transition">
        <h3 className="text-2xl font-semibold mb-4">
          Developer Portfolio System
        </h3>
        <p className="text-gray-400 mb-6">
          Custom interactive portfolio built using Next.js and
          Tailwind with modular component structure.
        </p>
        <p className="text-gray-500 text-sm">
          Next.js · Tailwind · Motion Systems
        </p>
      </div>

    </div>
  </div>
</section>
  );
}