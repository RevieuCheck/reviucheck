import { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the ReviuCheck team. Contact sales, support, or general inquiries. We typically respond within 24 hours.',
  keywords: 'contact, sales, support, get in touch, demo request, ReviuCheck contact',
  openGraph: {
    title: 'Contact Us - ReviuCheck',
    description: 'Get in touch with the ReviuCheck team.',
  },
}

export default function Contact() {
  return <ContactPage />
}
