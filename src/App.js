import React, { useState, useEffect } from 'react';
import ApolloClient, { gql } from 'apollo-boost'
import { Grid, Container } from 'semantic-ui-react'
import Itinerary from './Components/Itinerary'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

const query = gql`
query {
  plan(
    fromPlace: "Pohjoinen Rautatienkatu 25, Helsinki::60.169392,24.925751"
    toPlace: "Kumpula, Helsinki::60.204020,24.962670"
    numItineraries: 3
  ) {
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
        route {
          shortName
        }
        trip {
          stops {
           	name
          }
        }
      }
    }
  }
}
`


//1163 pysäkki id
// pohjoinen rautatienkatu25
// lat 60.169392 lon: 24.925751

// Exactum
// lat: 60.204020 lon: 24.962670

// from: "Kamppi, Helsinki::60.168992,24.932366",
// toPlace: "Kumpula, Helsinki::60.204020,24.962670",

const App = () => {
  const [itineraries, setItineraries] = useState([])
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    client.query({ query })
      .then((response) => {
        setItineraries(response.data.plan.itineraries)
      })
  }, [time])

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 30000);





  return (
    <Container>
      KELLO ON {time}

      <Grid>
        <Grid.Column>
          {itineraries.
            map(Itinerary)}
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default App;