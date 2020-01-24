import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const Leg = (leg) => {
  const startTime = new Date(leg.startTime)
  const endTime = new Date(leg.endTime)

  const icon = chooseIconByMode(leg.mode)

  return (
    <Card key={startTime}>
      <Card.Content>
        <Card.Content>
          <Icon
            name={icon}
            size='large'
          />
        </Card.Content>
        TIME: {startTime.toLocaleTimeString()}
        <br />
        {leg.mode} {leg.route ? leg.route.shortName : ''}
        <br />
      </Card.Content>
    </Card>
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