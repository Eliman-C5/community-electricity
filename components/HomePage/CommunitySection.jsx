import {  communitySection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import {GluCardsWrapper} from '../Atoms/GluCardsWrapper'
import {GluWrapper} from '../Atoms/GluWrapper'

export const CommunitySection = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-28">
      
        <GluWrapper 
          gluTitle={'community'}
          gluImg=''
          video={true}
          subtitle={communitySection}
        />
        
        <GluCardsWrapper 
          arr={communitySection}
          lastListItem={2}
        />
        
      </div>
    </Section>
  )
}
