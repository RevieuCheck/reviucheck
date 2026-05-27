import { Metadata } from 'next'
import AboutPage from './AboutPage'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ReviuCheck - our mission to transform customer feedback management with AI-powered technology. Founded in 2024, serving 500+ businesses.',
  keywords: 'about ReviuCheck, company mission, AI review management company, team',
  openGraph: {
    title: 'About Us - ReviuCheck',
    description: 'Learn about ReviuCheck and our mission.',
  },
}

export default function About() {
  return <AboutPage />
}
