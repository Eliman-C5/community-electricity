import React from 'react'
import { FormSection } from '../../components/Atoms/FormSection'
import { Cards } from '../../components/Programs/Cards'
import { ProgramsHeader } from '../../components/Programs/ProgramsHeader'
import { ProgramsText } from '../../components/Programs/ProgramsText'

const index = () => {
  return (
    <>
      <ProgramsHeader />
      <ProgramsText />
      <Cards />
      <FormSection />
    </>
  )
}

export default index