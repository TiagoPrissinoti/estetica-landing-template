import { MotionConfig } from 'motion/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Treatments } from '@/components/sections/Treatments'
import { Results } from '@/components/sections/Results'
import { About } from '@/components/sections/About'
import { Differentials } from '@/components/sections/Differentials'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { Contact } from '@/components/sections/Contact'
import { FloatingSocialButtons } from '@/components/ui/FloatingSocialButtons'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="conteudo"><Hero /><Treatments /><Results /><About /><Differentials /><Testimonials /><CTA /><Contact /></main>
      <Footer />
      <FloatingSocialButtons />
    </MotionConfig>
  )
}

export default App
