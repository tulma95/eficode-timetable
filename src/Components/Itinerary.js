import React from 'react'
import { Card } from 'semantic-ui-react'
import Leg from './Leg'

const Itinerary = (itinerary) => {
  const totalDuration = new Date(null)
  totalDuration.setSeconds(itinerary.duration)
  return (
    <Card key={itinerary.startTime}>
      <Card.Content>
        <Card.Header>
          total duration: {totalDuration.toISOString().substr(11, 8)}
        </Card.Header>
        {itinerary.legs.map(Leg)}
      </Card.Content>
    </Card>
  )
}


export default Itinerary