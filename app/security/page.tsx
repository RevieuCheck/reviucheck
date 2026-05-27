import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Security',
  description: 'ReviuCheck enterprise-grade security. Learn about our encryption, compliance, and data protection measures.',
  keywords: 'security, encryption, SOC2, data protection, enterprise security, ReviuCheck security',
  openGraph: {
    title: 'Security - ReviuCheck',
    description: 'Learn about ReviuCheck enterprise-grade security.',
  },
}

export default function Security() {
  return (
    <LegalPage
      title="Security"
      lastUpdated="March 15, 2026"
      sections={[
        {
          title: 'Overview',
          content: 'Security is foundational to ReviuCheck. We implement enterprise-grade security measures to protect your data, including encryption at rest and in transit, access controls, and continuous monitoring. Our platform is SOC2 Type II compliant.',
        },
        {
          title: 'Encryption',
          content: 'All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We use industry-standard encryption protocols to ensure your data remains secure during transmission and storage. Database backups are also encrypted.',
        },
        {
          title: 'Access Control',
          content: 'We implement role-based access control (RBAC) with least privilege principles. Multi-factor authentication (MFA) is required for all team members. Access logs are maintained and regularly audited.',
        },
        {
          title: 'Infrastructure Security',
          content: 'Our infrastructure runs on AWS with multiple availability zones for redundancy. We use VPC isolation, security groups, and network ACLs. Regular vulnerability scans and penetration tests are conducted by third-party security firms.',
        },
        {
          title: 'Compliance',
          content: 'ReviuCheck is SOC2 Type II compliant. We are GDPR and CCPA compliant. Enterprise customers can request our SOC2 report and security documentation. We also support HIPAA compliance for healthcare customers.',
        },
        {
          title: 'Incident Response',
          content: 'We have a documented incident response plan that includes detection, containment, eradication, and recovery procedures. Security incidents are escalated within 15 minutes and communicated to affected customers within 24 hours.',
        },
        {
          title: 'Data Backup & Recovery',
          content: 'Automated backups are performed daily with point-in-time recovery. Backups are encrypted and stored in separate geographic regions. Our RPO is 1 hour and RTO is 4 hours for critical systems.',
        },
        {
          title: 'Vendor Security',
          content: 'All third-party vendors undergo security reviews before integration. We maintain a vendor risk management program with regular assessments. Vendor access is limited to the minimum necessary for service delivery.',
        },
        {
          title: 'Employee Security',
          content: 'All employees undergo security awareness training upon hire and annually. Background checks are performed. Access to production systems requires MFA and is granted on a need-to-know basis.',
        },
        {
          title: 'Report a Vulnerability',
          content: 'We welcome responsible disclosure of security vulnerabilities. Please report any issues to security@reviucheck.com. We will respond within 24 hours and work with you to resolve the issue. We offer a bug bounty program for qualifying findings.',
        },
      ]}
    />
  )
}
