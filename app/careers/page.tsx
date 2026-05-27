import { Metadata } from 'next'
import CareersPage from './CareersPage'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the ReviuCheck team. We are hiring passionate people to help transform customer feedback management with AI. View open positions.',
  keywords: 'careers, jobs, hiring, AI startup, machine learning jobs, engineering jobs',
  openGraph: {
    title: 'Careers - ReviuCheck',
    description: 'Join the ReviuCheck team and help transform customer feedback management.',
  },
}

export default function Careers() {
  return <CareersPage />
}
