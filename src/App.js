import React, { useState } from 'react';
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Container, Header } from 'semantic-ui-react'
import Itinerary from './Components/Itinerary'
import { formatDate } from './utils/helperFunctions'


const getItineraries = gql`
query {
  plan(
  fromPlace: "Pohjoinen Rautatienkatu 25, Helsinki::60.169392,24.925751", 
  toPlace: "Exactum, Gustaf Hällströmin Katu 2 B, Helsinki::60.204868,24.963030", 
  numItineraries: 3) {
    from {
      name
    }
    to {
      name
    }
    itineraries {
      startTime
      endTime
      duration
      legs {
        startTime
        endTime
        mode
        duration
        distance
        from {
          name
        }
        to {
          name
        }
        trip {
          routeShortName
        }
      }
    }
  }
}
`

const App = () => {
  const { loading, error, data } = useQuery(getItineraries, {
    pollInterval: 30000
  })

  const [time, setTime] = useState(formatDate(new Date()))

  setInterval(() => {
    setTime(formatDate(new Date()))
  }, 30000);

  if (loading) return <div className="ui active centered inline loader"></div>
  if (error) return <div>{error}</div>

  return (
    <Container textAlign='center'>
      <Header as='h1' dividing content={`Current time ${time}`} />
      <Grid stackable columns={3}>
        <Grid.Row>
          {data.plan.itineraries.map(itinerary => (
            <Itinerary
              key={itinerary.startTime}
              startLocation={data.plan.from.name}
              destination={data.plan.to.name}
              itinerary={itinerary}
            />))}
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default App;