import HeroSection from '@/components/HeroSection'
import EmpresaSection from '@/components/EmpresaSection'
import ContatoSection from '@/components/ContatoSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* TODO: Seção de Projetos */}
      <EmpresaSection />
      <ContatoSection />
    </main>
  )
}
