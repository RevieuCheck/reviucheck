import { Metadata } from 'next'
import ApiDocsPage from './ApiDocsPage'

export const metadata: Metadata = {
  title: 'API Documentation',
  description: 'ReviuCheck API documentation. Integrate AI-powered review analysis and response generation with our simple REST API.',
  keywords: 'API documentation, REST API, integration, developer docs, ReviuCheck API, SDK',
  openGraph: {
    title: 'API Documentation - ReviuCheck',
    description: 'Integrate AI-powered review analysis with ReviuCheck API.',
  },
}

export default function ApiDocs() {
  return <ApiDocsPage />
}
