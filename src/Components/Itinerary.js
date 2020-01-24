import React from 'react'
import { Card, Grid, Icon } from 'semantic-ui-react'
import Leg from './Leg'
import { formatDate } from '../utils/helperFunctions'


const Itinerary = ({ itinerary, startLocation, destination }) => {
  const totalDuration = new Date(null)
  totalDuration.setSeconds(itinerary.duration)

  const startTime = formatDate(new Date(itinerary.startTime))
  const endTime = formatDate(new Date(itinerary.endTime))


  return (
    <Grid.Column>
      <Card key={itinerary.startTime}>
        <Card.Content>

          <Card.Header as='h2'>
            {startTime}
            <Icon name='arrow right' />
            {endTime}
          </Card.Header >

          <Card.Header>
            total duration: {totalDuration.toISOString().substr(11, 5)}
          </Card.Header>

          <Card.Description>
            {startLocation} <br />
            to <br />
            {destination}
          </Card.Description>

          {itinerary.legs.map(Leg)}

        </Card.Content>
      </Card>
    </Grid.Column >
  )
}


export default Itinerary