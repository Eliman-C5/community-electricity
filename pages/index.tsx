import { Header } from '../components/HomePage/Header'
import { Navbar } from '../components/Navbar'
import { AboutSection } from '../components/HomePage/AboutSection'
import { DappSection } from '../components/HomePage/DappSection'
import { InnovativeServices } from '../components/HomePage/InnovativeServices'
import { ElectricAccount } from '../components/HomePage/ElectricAccount'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutSection />
      <DappSection />
      <InnovativeServices />
      {/* Solo para completar maquetado, pero se volverá un componente */}
      <div className="grid place-content-center my-[80px]">
        <img src="/images/video.png" alt="" />
      </div>
      <ElectricAccount />
    </>
  )
}