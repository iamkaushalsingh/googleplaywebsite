"use client";

import ParticleField from "../components/ParticleField";
import TiltCard from "../components/TiltCard";
import FadeInSection from "../components/FadeInSection";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center px-10 lg:px-24 overflow-hidden">
        <ParticleField />

        <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-6">
             Singh Digital Group
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Designing systems that
              <span className="text-white"> create momentum.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Modern mobile experiences built with scalable architecture,
              performance focus, and intentional interaction systems.
            </p>

            <button
              onClick={() =>
                document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              View Work
            </button>
          </div>

          <div className="hidden lg:block">
            <TiltCard>
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20 shadow-2xl">
                <p className="text-gray-500 text-sm mb-4">Current Focus</p>
                <h3 className="text-2xl font-semibold mb-4">
                  High-performance frontend engineering
                </h3>
                <p className="text-gray-400">
                  Next.js · React · UI Architecture ·
                  Motion Systems · Performance Optimization
                </p>
              </div>
            </TiltCard>
          </div>

        </div>
      </section>

      {/* APPS SECTION */}
      <section
        id="apps"
        className="min-h-screen px-10 lg:px-24 py-32"
      >
        <div className="max-w-6xl mx-auto">

          <FadeInSection>
            <h2 className="text-4xl font-bold mb-16">
              Selected Work
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div className="border border-white/10 p-10 rounded-2xl hover:border-white/30 transition">
              <h3 className="text-2xl font-semibold mb-4">
                Daily Motivation App
              </h3>
              <p className="text-gray-400 mb-6">
                Minimal Android app delivering daily motivational quotes
                with clean UI architecture and scalable structure.
              </p>
              <p className="text-gray-500 text-sm">
                React Native · State Management · UI Architecture
              </p>
            </div>
          </FadeInSection>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <FadeInSection>
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-8">
              Engineering with Intent
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Singh Digital Group builds focused digital systems combining
              thoughtful design with modern frontend engineering
              principles and performance optimization strategies.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/10 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Singh Digital Group. All rights reserved.
        </p>

        <a
          href="/privacy-policy"
          className="block mt-4 text-gray-400 hover:text-white transition"
        >
          Privacy Policy
        </a>
      </footer>

    </main>
  );
}