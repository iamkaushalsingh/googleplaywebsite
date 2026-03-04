"use client";

import FadeInSection from "../../components/FadeInSection";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Support() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--text)", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "120px 24px 100px" }}>

        <FadeInSection>
          <div style={{ marginBottom: 16 }}>
            <Link href="/" style={{ fontSize: "0.85rem", color: "var(--muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              ← Back to Home
            </Link>
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: 12 }}>
            App Support
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 64 }}>
            ShubhVichar by Singh Digital Group · We typically respond within 24 hours.
          </p>
        </FadeInSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <FadeInSection>
            <section style={{
              padding: "32px", borderRadius: 16,
              background: "var(--bg2)", border: "1px solid var(--border)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✉️</div>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 12 }}>Contact Support</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                For any issues, bug reports, or questions about ShubhVichar, email us directly.
              </p>
              <a href="mailto:singhdigitalgroup@gmail.com" style={{
                padding: "12px 32px", borderRadius: 100,
                background: "var(--text)", color: "white",
                fontWeight: 500, fontSize: "0.95rem", display: "inline-block",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >singhdigitalgroup@gmail.com</a>
            </section>
          </FadeInSection>

          <FadeInSection>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.8rem", marginBottom: 24 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                {
                  q: "How do I upgrade to Premium?",
                  a: "Open the app → tap the '👑 Premium' banner at the bottom of the home screen → tap 'Get Premium' → complete the purchase through Google Play."
                },
                {
                  q: "How do I restore my Premium purchase?",
                  a: "Open the app → go to the Premium screen → tap 'Restore Purchases'. Make sure you're signed in with the same Google account used for the original purchase."
                },
                {
                  q: "The app is showing an error loading quotes. What should I do?",
                  a: "ShubhVichar works offline with 203 built-in quotes. If you're seeing errors, try closing and reopening the app. If the issue persists, contact us."
                },
                {
                  q: "How do I cancel my subscription?",
                  a: "Go to Google Play Store → tap your profile icon → Payments & subscriptions → Subscriptions → ShubhVichar Premium → Cancel subscription."
                },
                {
                  q: "Can I use the app in Hindi or other Indian languages?",
                  a: "Yes! ShubhVichar supports Hindi, Hinglish, Marathi, Gujarati, and English. Tap the flag icon 🌐 on the home screen to select your language."
                },
                {
                  q: "How do I enable or disable daily notifications?",
                  a: "Go to Settings (⚙️ icon) → toggle Daily Notifications on or off. You can also set your preferred notification time."
                },
              ].map(({ q, a }) => (
                <div key={q} style={{
                  padding: "20px 24px", borderRadius: 12,
                  background: "var(--card)", border: "1px solid var(--border)",
                }}>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{q}</div>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>{a}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <section style={{ padding: "24px", borderRadius: 12, background: "var(--bg2)", border: "1px solid var(--border)" }}>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--text)" }}>Company:</strong> Singh Digital Group<br />
                <strong style={{ color: "var(--text)" }}>App:</strong> ShubhVichar<br />
                <strong style={{ color: "var(--text)" }}>Email:</strong> <a href="mailto:singhdigitalgroup@gmail.com" style={{ color: "var(--accent)" }}>singhdigitalgroup@gmail.com</a><br />
                <strong style={{ color: "var(--text)" }}>Location:</strong> Kolkata, India
              </p>
            </section>
          </FadeInSection>

        </div>
      </div>
    </main>
  );
}