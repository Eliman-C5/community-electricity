import React from 'react'
import { Benefits } from '../../components/InnovationZones/Benefits'
import { Progress } from '../../components/InnovationZones/Progress'
import { ZonesHeader } from '../../components/InnovationZones/ZonesHeader'
import { ZonesText } from '../../components/InnovationZones/ZonesText'

const index = () => {
  return (
    <>
      <ZonesHeader/>
      <ZonesText/>
      <Progress />
      <Benefits />
    </>
  )
}

export default index