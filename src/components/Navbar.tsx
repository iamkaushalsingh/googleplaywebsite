"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="font-semibold tracking-wide text-white">
          Singh Digital Group
        </h1>

        <div className="flex items-center gap-8 text-sm text-gray-400">

          <button
            onClick={() =>
              document.getElementById("apps")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition"
          >
            Apps
          </button>

          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-white transition"
          >
            About
          </button>

          <a
            href="/privacy-policy"
            className="hover:text-white transition"
          >
            Privacy
          </a>

        </div>
      </div>
    </nav>
  );
}