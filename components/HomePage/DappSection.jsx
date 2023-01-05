import { dappSection } from '../../data/text'
import Section from '../Wrappers/NormalAndFadeInSection'
import {GluCardsWrapper} from '../Atoms/GluCardsWrapper'
import {GluWrapper} from '../Atoms/GluWrapper'

export const DappSection = () => {

  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-0 md:gap-28">
      
        <GluWrapper 
          gluTitle={'app'}
          gluImg='/images/glu movil.png'
          subtitle={dappSection}
        />
        
        <GluCardsWrapper 
          arr={dappSection}
          lastListItem={4}
        />
        
      </div>
    </Section>
  )
}
