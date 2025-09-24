import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrainingSolutions } from "@/components/training-solutions"
import { ThreePillars } from "@/components/three-pillars"
import { WhatWeDo } from "@/components/what-we-do"
import { MissionVision } from "@/components/mission-vision"
import { LittleBlueBook } from "@/components/little-blue-book"
import { TrainingInsurance } from "@/components/training-insurance"
import { TrainingMatters } from "@/components/training-matters"
import { TrainingPrograms } from "@/components/training-programs"
import { BlogArticles } from "@/components/blog-articles"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrainingSolutions />
      <ThreePillars />
      <WhatWeDo />
      <MissionVision />
      <LittleBlueBook />
      <TrainingInsurance />
      <TrainingMatters />
      <TrainingPrograms />
      <BlogArticles />
      <NewsletterSignup />
    </div>
  )
}
