"use client";

import FadeInSection from "../../components/FadeInSection";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen px-6 lg:px-24 py-24">

      <div className="max-w-4xl mx-auto">

        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-20">
            Privacy Policy
          </h1>
        </FadeInSection>

        <div className="space-y-20 text-gray-400 leading-relaxed text-lg">

          <FadeInSection>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Overview
              </h2>
              <p>
                Kaushal Labs operates the Daily Motivation application.
                This page explains how information is handled when using
                our services.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Information Collection
              </h2>
              <p>
                The application does not collect personally identifiable
                information directly. However, third-party services may
                collect limited technical information such as device data,
                usage statistics, or anonymous identifiers.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Third-Party Services
              </h2>

              <ul className="list-disc ml-6 space-y-3">
                <li>Google AdMob (Advertising)</li>
                <li>Google Analytics (If integrated)</li>
              </ul>

              <p className="mt-6">
                These services operate under their own privacy policies.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Data Security
              </h2>
              <p>
                We strive to use commercially acceptable means to protect
                information. However, no method of transmission over the
                internet is completely secure.
              </p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contact
              </h2>
              <p>
                For any questions regarding this Privacy Policy,
                please contact:
              </p>

              <p className="mt-6 text-white">
                singhdigitalgroup@gmail.com
              </p>
            </section>
          </FadeInSection>

        </div>

      </div>

    </main>
  );
}