'use client';

import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="relative w-full h-full bg-[#FCFCFC] overflow-hidden font-britti-sans text-[#202020]">
      <main className="absolute top-[177px] left-4 flex flex-col gap-[72px] max-w-[1255px]">
        {/* Page Heading */}
        <h1 className="text-[104px] leading-[88px] font-normal">Terms and Conditions</h1>

        {/* Intro Paragraph */}
        <section className="max-w-[800px] flex flex-col gap-10 text-[16px] leading-[17px] font-normal">
          <p>
            These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you
            (&ldquo;User&rdquo; or &ldquo;you&rdquo;) and Tracer.cloud Inc., a Delaware corporation, with its principal place of
            business located at 9 Wall Street, Suite 168, New York, NY 10005, United States
            (&ldquo;Tracer&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using the Tracer website (the &ldquo;Site&rdquo;), you
            agree to be bound by these Terms. If you do not accept these Terms in their entirety, you must
            not access or use the Site.
          </p>
        </section>

        {/* Sections */}
        <section className="flex flex-col gap-10 text-[16px] leading-[17px] font-normal max-w-[800px]">
          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">1. Use of the Site</h2>
            <p><strong>1.1 Eligibility:</strong> By accessing the Site, you represent and warrant that you have the legal capacity to enter into these Terms and to comply with them in full.</p>
            <p><strong>1.2 License:</strong> Subject to your compliance with these Terms, Tracer grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Site solely for informational and lawful purposes.</p>
            <p><strong>1.3 Restrictions:</strong> You shall not:
              <ul className="list-disc ml-6 mt-2">
                <li>Access or use the Site for any unlawful purpose or in violation of any applicable laws;</li>
                <li>Interfere with, disrupt, or compromise the integrity or performance of the Site;</li>
                <li>Attempt to gain unauthorized access to any portion of the Site, or any systems or networks connected to it.</li>
              </ul>
            </p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">2. Intellectual Property</h2>
            <p>All rights, title, and interest in and to the Site and its contents are and shall remain the exclusive property of Tracer.cloud Inc. or its licensors. All rights not expressly granted are reserved by Tracer.</p>
            <p>You may not reproduce, modify, distribute, create derivative works from, or publicly display any content from the Site without our prior written consent.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">3. Disclaimers</h2>
            <p>The Site is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied. Tracer disclaims all implied warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.</p>
            <p>We do not guarantee that the Site will be uninterrupted or error-free, nor do we make any representation regarding the accuracy or reliability of any information available through the Site.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">4. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, in no event shall Tracer, or its officers, directors, employees, agents, or affiliates, be liable for any indirect, incidental, consequential, special, or exemplary damages, including without limitation damages for loss of profits, loss of data, or other intangible losses, arising out of or relating to your access to or use of, or inability to access or use, the Site, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if Tracer has been advised of the possibility of such damages.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">5. Third-Party Content</h2>
            <p>The Site may contain links or references to third-party websites or services not owned or controlled by Tracer. We are not responsible for the content or practices of any such third parties and disclaim any liability in connection therewith.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">6. Modifications</h2>
            <p>We reserve the right to update or modify these Terms at any time. Any changes will take effect upon posting. Continued use of the Site after such changes constitutes acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">7. Governing Law and Jurisdiction</h2>
            <p>These Terms are governed by the laws of the State of Delaware. Any disputes arising from these Terms or the use of the Site shall be subject to the exclusive jurisdiction of the courts located within the State of Delaware.</p>
          </div>

          <div>
            <h2 className="text-[40px] leading-[38px] font-normal mb-4">8. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul className="mt-2 ml-4">
              <li><strong>Email:</strong> legal@tracer.cloud</li>
              <li><strong>Address:</strong> Tracer.cloud Inc., 9 Wall Street, Suite 168, New York, NY 10005</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
