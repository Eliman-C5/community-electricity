import Section from '../Wrappers/NormalAndFadeInSection'
import { ZonesProgress } from './ZonesProgress'
import { ZonesProgressMobile } from './ZonesProgressMobile'

export const Progress = () => {
  return (
    <>
      <ZonesProgress />
      <ZonesProgressMobile />
    </>
  )
}
