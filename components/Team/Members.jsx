import { teamMembers } from "../../data/text"
import Section from '../Wrappers/NormalAndFadeInSection'
import { TeamMembersMobile } from './TeamMembersMobile'
import { TeamMembers } from './TeamMembers'

export const Members = () => {
  return (
    <Section>
      <TeamMembers cards={teamMembers} />
      <TeamMembersMobile cards={teamMembers} />
    </Section>
  )
}
