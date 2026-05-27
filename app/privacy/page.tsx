import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'ReviuCheck Privacy Policy. Learn how we collect, use, and protect your personal data. GDPR and CCPA compliant.',
  keywords: 'privacy policy, data protection, GDPR, CCPA, personal data, ReviuCheck privacy',
  openGraph: {
    title: 'Privacy Policy - ReviuCheck',
    description: 'Learn how ReviuCheck handles your data.',
  },
}

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="March 15, 2026"
      sections={[
        {
          title: 'Information We Collect',
          content: 'We collect information you provide directly to us, including your name, email address, company name, and billing information when you create an account or contact us. We also automatically collect certain technical information when you use our service, including IP address, browser type, device information, and usage data.',
        },
        {
          title: 'How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send technical notices and support messages, respond to your comments and questions, and communicate with you about our products and services.',
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption at rest and in transit, regular security audits, and strict access controls. We comply with SOC2 Type II standards and GDPR requirements.',
        },
        {
          title: 'Data Sharing',
          content: 'We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our platform, under strict confidentiality agreements. These include cloud infrastructure providers, payment processors, and analytics services.',
        },
        {
          title: 'Data Retention',
          content: 'We retain your personal information for as long as your account is active or as needed to provide you services. You can request deletion of your data at any time. We will delete or anonymize your information upon request, subject to legal requirements.',
        },
        {
          title: 'Your Rights',
          content: 'Depending on your location, you may have rights regarding your personal data including: access, correction, deletion, portability, and objection to processing. To exercise these rights, contact us at privacy@reviucheck.com. We will respond within 30 days.',
        },
        {
          title: 'Cookies',
          content: 'We use cookies and similar tracking technologies to improve your experience, analyze usage, and personalize content. You can control cookie preferences through your browser settings. We use essential cookies for platform operation, analytics cookies to understand usage, and functional cookies to remember your preferences.',
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this Privacy Policy from time to time. We will notify you of material changes via email or through our platform. Continued use of our service after changes constitutes acceptance of the updated policy.',
        },
        {
          title: 'Contact Us',
          content: 'If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@reviucheck.com or write to us at 123 Market Street, San Francisco, CA 94105.',
        },
      ]}
    />
  )
}
