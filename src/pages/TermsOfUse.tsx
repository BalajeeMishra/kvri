import { Link } from 'react-router';

export default function TermsOfUsePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the KVRI website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use this website. KVRI reserves the right to update these terms at any time, and continued use of the site constitutes acceptance of those changes.",
    },
    {
      title: "2. Use of Website",
      content:
        "You may use this website for lawful purposes only. Permitted uses include browsing program information, making donations, and engaging with community resources. Prohibited uses include automated scraping of content, sending unsolicited communications (spam), misrepresenting your identity or affiliation, attempting to gain unauthorized access to any part of the website, and distributing malicious code or content.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of KV Rao International Foundation (KVRI) and is protected by applicable copyright and intellectual property laws. Unauthorized reproduction, distribution, or use of any content without prior written permission from KVRI is strictly prohibited.",
    },
    {
      title: "4. Donation Terms",
      content:
        "All donations made through the KVRI website are final and non-refundable unless a processing error has occurred. Receipts will be issued for all contributions. Donors are responsible for verifying any tax benefits with their tax advisors.",
    },
    {
      title: "5. Disclaimer of Warranties",
      content:
        'This website is provided "as is" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. KVRI does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
    },
    {
      title: "6. Limitation of Liability",
      content:
        "To the fullest extent permitted by law, KVRI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website, even if KVRI has been advised of the possibility of such damages. Our total liability for any claim shall not exceed the amount you paid, if any, for access to the website.",
    },
    {
      title: "7. Governing Law",
      content:
        "These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Andhra Pradesh, India.",
    },
    {
      title: "8. Changes to Terms",
      content:
        "KVRI reserves the right to modify or replace these Terms of Use at any time at its sole discretion. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the website following any modifications constitutes your acceptance of the revised terms.",
    },
    {
      title: "9. Contact Us",
      content:
        "If you have any questions about these Terms of Use or require clarification on any provision, please contact our legal team at info@kvri.in. We aim to respond to all inquiries within five business days. Written correspondence may be sent to KV Rao International Foundation, Anusha Enclave, Tanuku, India.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-800">Terms of Use</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl font-extrabold mb-3"
            style={{ color: "#0D2B45" }}
          >
            Terms of Use
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Last updated: November 13, 2026
          </p>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Please read these Terms of Use carefully before using the KVRI
            website. These terms govern your access to and use of all content,
            services, and features available through kvri.in.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-xl font-bold mb-3"
                style={{
                  color: "#0D2B45",
                  borderLeft: "3px solid #F47C20",
                  paddingLeft: "1rem",
                }}
              >
                {section.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed pl-4">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
