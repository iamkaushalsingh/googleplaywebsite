"use client";

import FadeInSection from "../../components/FadeInSection";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 64 }}>
            Last updated: March 2026 · ShubhVichar by Singh Digital Group
          </p>
        </FadeInSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Overview</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                Singh Digital Group operates the ShubhVichar application. This Privacy Policy explains how we handle
                information when you use our app. We are committed to protecting your privacy and being transparent
                about our data practices.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Information We Collect</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 16 }}>
                ShubhVichar does not collect personally identifiable information directly. The app stores your
                preferences (selected language, category, notification settings) locally on your device only.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                However, third-party services integrated into the app may collect limited technical information
                such as device identifiers, usage statistics, and anonymous analytics data as described below.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Third-Party Services</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 20 }}>
                Our app integrates the following third-party services, each governed by their own privacy policies:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "Google AdMob", desc: "Used to display advertisements to free users. May collect device information and ad interaction data.", link: "https://policies.google.com/privacy" },
                  { name: "RevenueCat", desc: "Used to manage in-app purchases and subscriptions. Handles purchase validation and subscription status.", link: "https://www.revenuecat.com/privacy" },
                  { name: "Firebase (Google)", desc: "Used for push notifications. May collect device tokens for notification delivery.", link: "https://firebase.google.com/support/privacy" },
                  { name: "Google Gemini AI", desc: "Optional AI-powered quote generation. Prompts are sent to Google's AI API when this feature is enabled.", link: "https://policies.google.com/privacy" },
                ].map(({ name, desc, link }) => (
                  <div key={name} style={{
                    padding: "20px 24px", borderRadius: 12,
                    background: "var(--bg2)", border: "1px solid var(--border)",
                  }}>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 6 }}>{name}</div>
                    <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 8 }}>{desc}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: "var(--accent)" }}>
                      View Privacy Policy ↗
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Advertising & Premium</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                Free users of ShubhVichar may see banner advertisements served by Google AdMob. These ads
                may be personalized based on your device settings and Google's ad policies. You can opt out
                of personalized ads in your device settings under Google → Ads.
                Premium subscribers (₹99/year) enjoy an ad-free experience.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Data Storage</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                All app preferences, quote history, and settings are stored locally on your device using
                AsyncStorage. We do not operate our own servers or databases. No personal data is transmitted
                to Singh Digital Group's servers.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Children's Privacy</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                ShubhVichar is not directed at children under the age of 13. We do not knowingly collect
                personal information from children. If you believe a child has provided personal information
                through our app, please contact us immediately.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Changes to This Policy</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9 }}>
                We may update this Privacy Policy from time to time. Any changes will be reflected on this page
                with an updated date. We encourage you to review this policy periodically.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section style={{
              padding: "32px", borderRadius: 16,
              background: "var(--bg2)", border: "1px solid var(--border)",
            }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", marginBottom: 16 }}>Contact Us</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 16 }}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: "0.9rem" }}><strong>Company:</strong> <span style={{ color: "var(--muted)" }}>Singh Digital Group</span></div>
                <div style={{ fontSize: "0.9rem" }}><strong>Email:</strong> <a href="mailto:singhdigitalgroup@gmail.com" style={{ color: "var(--accent)" }}>singhdigitalgroup@gmail.com</a></div>
                <div style={{ fontSize: "0.9rem" }}><strong>Location:</strong> <span style={{ color: "var(--muted)" }}>Kolkata, India</span></div>
              </div>
            </section>
          </FadeInSection>

        </div>
      </div>
    </main>
  );
}