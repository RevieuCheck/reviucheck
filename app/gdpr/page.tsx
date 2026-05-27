import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'GDPR',
  description: 'ReviuCheck GDPR compliance. Learn about your rights under GDPR and how we protect personal data of EU residents.',
  keywords: 'GDPR, data protection, EU data privacy, personal data, ReviuCheck GDPR, data processing',
  openGraph: {
    title: 'GDPR - ReviuCheck',
    description: 'Learn about ReviuCheck GDPR compliance.',
  },
}

export default function GDPR() {
  return (
    <LegalPage
      title="GDPR Compliance"
      lastUpdated="March 15, 2026"
      sections={[
        {
          title: 'Our Commitment',
          content: 'ReviuCheck is fully committed to GDPR compliance. We have implemented comprehensive measures to protect the personal data of EU residents and ensure transparency in our data processing activities. Our Data Protection Officer oversees GDPR compliance.',
        },
        {
          title: 'Data Processing Agreement',
          content: 'We offer a Data Processing Agreement (DPA) to all our customers. The DPA outlines our commitments regarding data processing, subprocessing, and data subject rights. Contact us at privacy@reviucheck.com to request our DPA.',
        },
        {
          title: 'Data Controller vs Processor',
          content: 'ReviuCheck acts as a data processor for customer review data. Our customers are the data controllers, determining the purposes and means of processing. We process data only on documented instructions from our customers.',
        },
        {
          title: 'Data Subject Rights',
          content: 'We support all data subject rights under GDPR including: right to access, right to rectification, right to erasure (right to be forgotten), right to restrict processing, right to data portability, and right to object to processing.',
        },
        {
          title: 'Data Transfer',
          content: 'For customers in the European Economic Area (EEA), we ensure adequate data protection for transfers outside the EEA through Standard Contractual Clauses (SCCs) and, where applicable, reliance on adequacy decisions.',
        },
        {
          title: 'Data Breach Notification',
          content: 'In the event of a personal data breach, we will notify affected customers within 24 hours of becoming aware. We will provide details of the breach, its impact, and remediation steps. We will also notify supervisory authorities as required.',
        },
        {
          title: 'Subprocessors',
          content: 'We maintain an up-to-date list of subprocessors who may process personal data. These include cloud infrastructure providers (AWS), monitoring services, and customer support tools. Customers will be notified of any changes to subprocessors.',
        },
        {
          title: 'Data Retention & Deletion',
          content: 'Personal data is retained only for as long as necessary to provide our services. Upon contract termination, we will delete or return all personal data within 30 days, unless legal obligations require longer retention.',
        },
        {
          title: 'Contact Our DPO',
          content: 'Our Data Protection Officer can be reached at dpo@reviucheck.com. For data subject requests, please contact privacy@reviucheck.com. You also have the right to lodge a complaint with your local data protection supervisory authority.',
        },
      ]}
    />
  )
}
