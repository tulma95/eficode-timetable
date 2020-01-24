import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { formatDate } from '../utils/helperFunctions'

const Leg = (leg) => {
  const startTime = formatDate(new Date(leg.startTime))

  const icon = chooseIconByMode(leg.mode)

  const routeInfo = ({ from, to }) => {
    return (
      <Card.Content>
        {from.name} <br />
        to <br />
        {to.name}
      </Card.Content >
    )
  }

  return (
    <Card key={startTime}>
      <Card.Content>
        <Card.Content>
          <Icon
            name={icon}
            size='large'
          />
        </Card.Content>
        departure: {startTime}
        < Card.Content >
          {leg.mode} {leg.trip && leg.trip.routeShortName}
        </Card.Content>
        {leg.mode === 'WALK' ?
          <Card.Content content={`${leg.distance.toFixed(0)}m`} />
          : <Card.Content content={routeInfo(leg)} />
        }
      </Card.Content>
    </Card >
  )
}

const chooseIconByMode = (mode) => {
  if (mode === 'BUS') {
    return 'bus'
  } else if (mode === 'TRAM') {
    return 'train'
  } else {
    return 'blind'
  }
}

export default Leg;