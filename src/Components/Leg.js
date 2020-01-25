import React from 'react';
import { Card, Icon, Divider, Grid } from 'semantic-ui-react'
import { formatDate } from '../utils/helperFunctions'

const Leg = (leg) => {
  const startTime = formatDate(new Date(leg.startTime))

  const icon = chooseIconByMode(leg.mode)

  const routeInfo = ({ from, to }) => {
    return (
      <Card.Content>
        {from.name} <br />
        <Icon name='arrow down' /> <br />
        {to.name}
      </Card.Content >
    )
  }

  const walkInfo = leg => {
    return `${leg.distance.toFixed(0)}m to ${leg.to.name}`
  }

  return (

    <Grid.Column textAlign='center' key={startTime}>
      <Card centered>
        <Card.Content>

          <Card.Content>
            <Icon
              name={icon}
              size='large'
            />
          </Card.Content>

          departure: {startTime}
          <Divider />

          < Card.Content >
            {leg.mode} {leg.trip && leg.trip.routeShortName}
          </Card.Content>

          {leg.mode === 'WALK' ?
            <Card.Content content={walkInfo(leg)} />
            : <Card.Content content={routeInfo(leg)} />
          }

        </Card.Content>
      </Card >
    </Grid.Column>

  )
}

const chooseIconByMode = (mode) => {
  if (mode === 'BUS') {
    return 'bus'
  } else if (mode === 'TRAM') {
    return 'train'
  } else if (mode === 'SUBWAY') {
    return 'subway'
  } else {
    return 'blind'
  }
}

export default Leg;