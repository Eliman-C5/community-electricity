import { teamExperts } from "../../data/text"
import Section from '../Wrappers/NormalAndFadeInSection'
import { TeamMembersMobile } from './TeamMembersMobile'
import { TeamMembers } from './TeamMembers'
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageProvider"

export const Experts = () => {

  const { spanishIsActive } = useContext( LanguageContext )

  return (
    <Section>
      <h4 className='title-mobile md:text-[35px] pl-4 max-w-[1135px] mx-auto mt-28 md:mt-0'>
      {
        spanishIsActive ?
        'Equipo asesor' :
        'Advisory Team'
      }
      </h4>
      <TeamMembers cards={teamExperts} />
      <TeamMembersMobile cards={teamExperts} prev='prev-experts' next='next-experts' />
    </Section>
  )
}
