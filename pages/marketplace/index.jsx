import React from 'react'
import { HeaderMarket } from '../../components/Marketplace/HeaderMarket'
import { FormSection } from '../../components/Atoms/FormSection'
import { Cards } from '../../components/Marketplace/Cards'

const index = () => {
  return (
    <>
      <HeaderMarket />
      <Cards />
      <FormSection />
    </>
  )
}

export default index