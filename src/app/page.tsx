"use client";

import Navbar from "../components/Navbar";
import FadeInSection from "../components/FadeInSection";
import ScrollProgress from "../components/ScrollProgress";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <ScrollProgress />
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 24px 80px", position: "relative", overflow: "hidden",
      }}>
        {/* Subtle background texture */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,98,42,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(42,107,200,0.05) 0%, transparent 50%)`,
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 780 }}>

            <div className="fade-up" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "5px 14px", borderRadius: 100,
              background: "rgba(200,98,42,0.08)", border: "1px solid rgba(200,98,42,0.2)",
              marginBottom: 32, fontSize: "0.78rem", fontWeight: 500, color: "var(--accent)",
              letterSpacing: "0.08em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              INDIE SOFTWARE COMPANY · INDIA
            </div>

            <h1 className="fade-up fade-up-2" style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 1.0, letterSpacing: "-0.02em",
              marginBottom: 32, color: "var(--text)",
            }}>
              Designing apps<br />
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>people love.</span>
            </h1>

            <p className="fade-up fade-up-3" style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "var(--muted)",
              maxWidth: 560, lineHeight: 1.8, marginBottom: 48,
            }}>
              Singh Digital Group builds focused mobile experiences combining thoughtful design with
              modern engineering. Our apps are built for real users — starting with India.
            </p>

            <div className="fade-up fade-up-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#apps" style={{
                padding: "14px 32px", borderRadius: 100,
                background: "var(--text)", color: "white",
                fontWeight: 500, fontSize: "0.95rem",
                transition: "opacity 0.2s", display: "inline-flex", alignItems: "center", gap: 8,
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >View Our Work ↓</a>
              <a href="mailto:singhdigitalgroup@gmail.com" style={{
                padding: "14px 32px", borderRadius: 100,
                border: "1px solid var(--border)", color: "var(--muted)",
                fontWeight: 400, fontSize: "0.95rem",
                transition: "all 0.2s", background: "transparent",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a1814"; e.currentTarget.style.color = "#1a1814"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
              >Get in Touch</a>
            </div>
          </div>

          {/* Stats row */}
          <div className="fade-up fade-up-5" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: 1, marginTop: 80, background: "var(--border)",
            borderRadius: 16, overflow: "hidden",
            maxWidth: 600,
          }}>
            {[["203", "Quotes"], ["13", "Categories"], ["5", "Languages"], ["₹99", "Per Year"]].map(([num, label]) => (
              <div key={label} style={{
                background: "var(--bg)", padding: "24px 20px", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", color: "var(--accent)" }}>{num}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section id="apps" style={{ padding: "100px 24px", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeInSection>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: "var(--accent)" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--accent)" }}>OUR APPS</span>
            </div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: 60 }}>
              What we've built.
            </h2>
          </FadeInSection>

          <FadeInSection>
            <div style={{
              background: "var(--card)", borderRadius: 24,
              border: "1px solid var(--border)",
              overflow: "hidden",
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}>
              {/* App info */}
              <div style={{ padding: "48px 40px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "4px 12px", borderRadius: 100,
                  background: "rgba(200,98,42,0.08)", border: "1px solid rgba(200,98,42,0.15)",
                  marginBottom: 24, fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.08em",
                }}>📱 ANDROID · FREE + PREMIUM</div>

                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
                  ShubhVichar
                </h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 32, fontSize: "1rem" }}>
                  Daily motivational quotes built for India. 203 quotes across 13 categories in Hindi, Hinglish,
                  Marathi, Gujarati & English. Works fully offline with optional Gemini AI generation.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                  {["React Native", "Expo", "Firebase", "RevenueCat", "AdMob", "Gemini AI"].map(tag => (
                    <span key={tag} style={{
                      padding: "4px 12px", borderRadius: 100,
                      background: "var(--bg)", border: "1px solid var(--border)",
                      fontSize: "0.78rem", color: "var(--muted)",
                    }}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="https://play.google.com/store/apps/details?id=com.singhdigitalgroup.subhvichar"
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      padding: "12px 28px", borderRadius: 100,
                      background: "var(--text)", color: "white",
                      fontWeight: 500, fontSize: "0.9rem", transition: "opacity 0.2s",
                      display: "inline-flex", alignItems: "center", gap: 8,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >▶ Google Play</a>
                  <Link href="/privacy-policy" style={{
                    padding: "12px 28px", borderRadius: 100,
                    border: "1px solid var(--border)", color: "var(--muted)",
                    fontSize: "0.9rem", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >Privacy Policy</Link>
                </div>
              </div>

              {/* Phone mockup */}
              <div style={{
                background: "linear-gradient(135deg, #f0ede8, #e8e4df)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "48px 32px", minHeight: 400,
              }}>
                <div style={{
                  width: 200,
                  background: "#0a0a0a", borderRadius: 36, padding: 10,
                  border: "2px solid rgba(0,0,0,0.15)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
                }}>
                  <div style={{ borderRadius: 28, overflow: "hidden", background: "#080818" }}>
                    <div style={{ padding: "10px 16px 6px", display: "flex", justifyContent: "space-between", fontSize: "0.6rem", color: "rgba(255,255,255,0.5)" }}>
                      <span>9:41</span><span>●●●</span>
                    </div>
                    <div style={{ padding: "4px 14px 10px" }}>
                      <div style={{ fontWeight: 900, fontSize: "0.95rem", color: "white" }}>ShubhVichar</div>
                      <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.35)" }}>Good morning ☀️</div>
                    </div>
                    <div style={{ padding: "0 10px 10px", display: "flex", gap: 6 }}>
                      {["🌅 Morning", "💼 Hustle"].map((c, i) => (
                        <span key={i} style={{
                          padding: "3px 8px", borderRadius: 20, fontSize: "0.5rem", whiteSpace: "nowrap",
                          background: i === 0 ? "rgba(124,92,252,0.5)" : "rgba(255,255,255,0.07)",
                          color: i === 0 ? "white" : "rgba(255,255,255,0.5)",
                        }}>{c}</span>
                      ))}
                    </div>
                    <div style={{ padding: "0 10px 10px" }}>
                      <div style={{
                        borderRadius: 16, padding: "16px 14px",
                        background: "linear-gradient(135deg, #0f0c29, #302b63)",
                        minHeight: 130, display: "flex", flexDirection: "column", justifyContent: "center", gap: 6,
                      }}>
                        <div style={{ fontSize: "1.4rem", color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>"</div>
                        <div style={{ fontSize: "0.65rem", color: "white", fontStyle: "italic", lineHeight: 1.5 }}>Build in silence. Let success make the noise.</div>
                        <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.4)" }}>— ShubhVichar</div>
                      </div>
                    </div>
                    <div style={{ padding: "0 10px 14px", display: "flex", gap: 6 }}>
                      <div style={{ flex: 1, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "rgba(255,255,255,0.5)" }}>📸</div>
                      <div style={{ flex: 2, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #7C3AED, #6d28d9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", color: "white", fontWeight: 700 }}>🔄 New</div>
                      <div style={{ flex: 1, height: 32, borderRadius: 10, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.55rem", color: "rgba(255,255,255,0.5)" }}>📤</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeInSection>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: "var(--accent2)" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--accent2)" }}>ABOUT US</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 60, alignItems: "start" }}>
              <div>
                <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 24 }}>
                  Engineering with<br /><span style={{ fontStyle: "italic", color: "var(--accent2)" }}>intent.</span>
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 16 }}>
                  Singh Digital Group is an indie software company building focused mobile experiences.
                  We combine thoughtful design with modern engineering principles.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                  Based in Kolkata, India — building apps for the next billion users.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)", borderRadius: 16, overflow: "hidden" }}>
                {[
                  { emoji: "🚀", label: "Mobile First" },
                  { emoji: "🇮🇳", label: "Made for India" },
                  { emoji: "🎨", label: "Design Focused" },
                  { emoji: "⚡", label: "Fast & Offline" },
                ].map(({ emoji, label }) => (
                  <div key={label} style={{ background: "var(--card)", padding: "28px 24px", textAlign: "center" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{emoji}</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--text)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "80px 24px 120px", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeInSection>
            <div style={{
              background: "var(--text)", borderRadius: 24, padding: "clamp(40px, 6vw, 80px)",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
            }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "white", marginBottom: 16 }}>
                Have an idea?<br /><span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>Let's talk.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: 420, lineHeight: 1.8, marginBottom: 40 }}>
                Whether it's an app idea, a collaboration, or just to say hello — we'd love to hear from you.
              </p>
              <a href="mailto:singhdigitalgroup@gmail.com" style={{
                padding: "14px 36px", borderRadius: 100,
                background: "white", color: "var(--text)",
                fontWeight: 600, fontSize: "1rem",
                transition: "opacity 0.2s", display: "inline-flex", alignItems: "center", gap: 8,
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >✉️ singhdigitalgroup@gmail.com</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid var(--border)", padding: "32px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 12,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem" }}>Singh Digital Group</span>
          <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>© {new Date().getFullYear()} Singh Digital Group</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy-policy" style={{ fontSize: "0.85rem", color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >Privacy Policy</Link>
            <Link href="/support" style={{ fontSize: "0.85rem", color: "var(--muted)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}