import { superNodeSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import {GluCardsWrapper} from '../Atoms/GluCardsWrapper'
import {GluWrapper} from '../Atoms/GluWrapper'
import { CommunityGif } from '../Atoms/CommunityGif'

export const SuperNodeSection = () => {
  return (
      <Section>
      
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-28">
      
          <GluWrapper 
            gluTitle={'super node'}
            gluImg='/images/glu-internet.png'
            subtitle={superNodeSection}
          />
        
          <GluCardsWrapper 
            arr={superNodeSection}
            lastListItem={2}
          />
        
        </div>
        
      </Section>
  )
}
