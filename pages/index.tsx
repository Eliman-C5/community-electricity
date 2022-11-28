import { Header } from '../components/HomePage/Header'
import { AboutSection } from '../components/HomePage/AboutSection'
import { DappSection } from '../components/HomePage/DappSection'
import { ServicesSection } from '../components/HomePage/ServicesSection'
import { ElectricAccount } from '../components/HomePage/ElectricAccount'
import { Partners } from '../components/HomePage/Partners'
import { Media } from '../components/HomePage/Media'

export default function Home() {
  return (
    <>
      <Header />
      <AboutSection />
      <DappSection />
      <ServicesSection />
      <ElectricAccount />
      <Partners />
      <Media />
    </>
  )
}