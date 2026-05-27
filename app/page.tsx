import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import PreRegistration from '@/components/PreRegistration'
import FAQ from '@/components/FAQ'
import FounderSection from '@/components/FounderSection'

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-purple-800/20 rounded-full blur-[80px]" />
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <FounderSection />
      <Pricing />
      <PreRegistration />
      <FAQ />
    </>
  )
}
