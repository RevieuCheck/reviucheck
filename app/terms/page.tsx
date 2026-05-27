import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ReviuCheck Terms of Service. Read the terms governing your use of the ReviuCheck platform and services.',
  keywords: 'terms of service, terms, conditions, user agreement, ReviuCheck terms',
  openGraph: {
    title: 'Terms of Service - ReviuCheck',
    description: 'Read the terms governing your use of ReviuCheck.',
  },
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="March 15, 2026"
      sections={[
        {
          title: 'Acceptance of Terms',
          content: 'By accessing or using ReviuCheck, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of changes.',
        },
        {
          title: 'Account Registration',
          content: 'You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate, current, and complete information during registration.',
        },
        {
          title: 'Subscription and Billing',
          content: 'Our services are provided on a subscription basis. Fees are billed in advance on a monthly or annual basis, depending on your plan. All payments are non-refundable except as expressly stated in our refund policy. We may change our fees with 30 days notice.',
        },
        {
          title: 'Service Usage',
          content: 'You agree to use our services in compliance with all applicable laws and regulations. You may not use our services for any illegal or unauthorized purpose. We reserve the right to suspend or terminate access for violations of these terms.',
        },
        {
          title: 'Intellectual Property',
          content: 'Our platform, including its code, design, and content, is protected by intellectual property laws. You retain ownership of any data you submit to our platform. We claim no intellectual property rights over your content.',
        },
        {
          title: 'Data Protection',
          content: 'We process your data in accordance with our Privacy Policy and applicable data protection laws. You retain all rights to your data. We implement appropriate security measures to protect your data.',
        },
        {
          title: 'Limitation of Liability',
          content: 'ReviuCheck shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability is limited to the amount you have paid us in the 12 months preceding the claim.',
        },
        {
          title: 'Service Level Agreement',
          content: 'We strive to maintain 99.9% uptime for our platform. Enterprise customers are covered by a formal SLA with service credits for downtime. Scheduled maintenance will be communicated in advance.',
        },
        {
          title: 'Termination',
          content: 'Either party may terminate the agreement at any time. You may cancel your subscription at any time, with changes taking effect at the next billing cycle. We may terminate for breach of terms with 30 days notice.',
        },
        {
          title: 'Governing Law',
          content: 'These terms are governed by the laws of the State of California, United States. Any disputes shall be resolved through binding arbitration in San Francisco, California.',
        },
      ]}
    />
  )
}
