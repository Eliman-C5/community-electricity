import React from 'react'
import { Experts } from '../../components/Team/Experts'
import { Members } from '../../components/Team/Members'
import { TeamHeader } from '../../components/Team/TeamHeader'
import { TeamText } from '../../components/Team/TeamText'

const index = () => {
  return (
    <>
      <TeamHeader />
      <TeamText />
      <Members />
      <Experts />
    </>
  )
}

export default index