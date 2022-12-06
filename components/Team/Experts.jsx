import { teamExperts } from "../../data/text"
import Section from '../Wrappers/NormalAndFadeInSection'
import { TeamMembersMobile } from './TeamMembersMobile'
import { TeamMembers } from './TeamMembers'

export const Experts = () => {
  return (
    <Section>
      <h4 className='title-mobile md:text-[35px] pl-4 max-w-[1135px] mx-auto mt-28 md:mt-0'>Field of Experts</h4>
      <TeamMembers cards={teamExperts} />
      <TeamMembersMobile cards={teamExperts} prev='prev-experts' next='next-experts' />
    </Section>
  )
}
