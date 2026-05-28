import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'ReviuCheck Terms of Service. Read the terms governing your use of the ReviuCheck platform and services under Indian law.',
  keywords: 'terms of service, terms, conditions, user agreement, ReviuCheck terms, India',
  openGraph: {
    title: 'Terms of Service - ReviuCheck',
    description: 'Read the terms governing your use of ReviuCheck.',
  },
}

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="May 28, 2026"
      sections={[
        {
          title: 'Acceptance of Terms',
          content: 'By accessing or using ReviuCheck, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services. These terms are an electronic record under the Information Technology Act, 2000 and the rules made thereunder. We reserve the right to update these terms at any time, and continued use constitutes acceptance of changes.',
        },
        {
          title: 'Account Registration',
          content: 'You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate, current, and complete information during registration. You must be at least 18 years of age to create an account.',
        },
        {
          title: 'Subscription and Billing',
          content: 'Our services are provided on a subscription basis. Fees are billed in advance on a monthly or annual basis, depending on your plan. All payments are processed in Indian Rupees (INR) or other currencies as displayed. Prices are inclusive of applicable taxes including GST. All payments are non-refundable except as expressly stated in our refund policy. We may change our fees with 30 days notice.',
        },
        {
          title: 'Service Usage',
          content: 'You agree to use our services in compliance with all applicable Indian laws and regulations. You may not use our services for any illegal or unauthorized purpose, including violation of the Information Technology Act, 2000. We reserve the right to suspend or terminate access for violations of these terms.',
        },
        {
          title: 'Intellectual Property',
          content: 'Our platform, including its code, design, and content, is protected by intellectual property laws of India. You retain ownership of any data you submit to our platform. We claim no intellectual property rights over your content. You grant us a license to use your content solely for providing our services to you.',
        },
        {
          title: 'Data Protection',
          content: 'We process your data in accordance with our Privacy Policy and applicable Indian data protection laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. You retain all rights to your data. We implement appropriate security measures to protect your data.',
        },
        {
          title: 'Limitation of Liability',
          content: 'ReviuCheck shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability is limited to the amount you have paid us in the 12 months preceding the claim, subject to the provisions of the Information Technology Act, 2000.',
        },
        {
          title: 'GST and Taxation',
          content: 'All applicable taxes including Goods and Services Tax (GST) will be charged as per Indian tax laws. You are responsible for providing accurate GST registration details if applicable. Tax invoices will be issued for all transactions as required under Indian law.',
        },
        {
          title: 'Termination',
          content: 'Either party may terminate the agreement at any time. You may cancel your subscription at any time, with changes taking effect at the next billing cycle. We may terminate for breach of terms with 30 days notice. Upon termination, your access to the platform will cease and your data will be handled in accordance with our Privacy Policy.',
        },
        {
          title: 'Governing Law and Dispute Resolution',
          content: 'These terms are governed by the laws of India. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh. Any disputes shall first be attempted to be resolved through amicable negotiation, failing which they shall be resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in Noida, Uttar Pradesh.',
        },
        {
          title: 'Contact Us',
          content: 'If you have any questions about these Terms of Service, please contact us at contact@reviucheck.com or write to us at ReviuCheck, Noida, Uttar Pradesh, India.',
        },
      ]}
    />
  )
}
