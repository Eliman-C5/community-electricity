import { teamExperts } from "../../data/text"
import Section from '../Wrappers/NormalAndFadeInSection'
import { TeamMembersMobile } from './TeamMembersMobile'
import { TeamMembers } from './TeamMembers'

export const Experts = () => {
  return (
    <Section>
      <h4 className='title-mobile md:title pl-4'>Field of Experts</h4>
      <TeamMembers cards={teamExperts} />
      <TeamMembersMobile cards={teamExperts} />
    </Section>
  )
}
