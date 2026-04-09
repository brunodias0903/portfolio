import BlackHoleBackground from '@/components/BlackHoleBackground'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TechStackSection from '@/components/TechStackSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectsSection from '@/components/ProjectsSection'
import EmpresaSection from '@/components/EmpresaSection'
import ContatoSection from '@/components/ContatoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <BlackHoleBackground />
      <Header />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <EmpresaSection />
        <ContatoSection />
      </main>
      <Footer />
    </div>
  )
}
