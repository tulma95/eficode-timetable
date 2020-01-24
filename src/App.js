import React, { useState, useEffect } from 'react';

import ApolloClient, { gql } from 'apollo-boost'
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

  const Itinerary = (itinerary) => {
    const totalDuration = new Date(null)
    totalDuration.setSeconds(itinerary.duration)
    return (
      <div key={itinerary.startTime}>
        ------------------------
       <p>total duration: {totalDuration.toISOString().substr(11, 8)}</p>
        {itinerary.legs.map(Leg)}
      </div>
    )
  }

  const Leg = (leg) => {
    const startTime = new Date(leg.startTime)
    const endTime = new Date(leg.endTime)
    return (
      <div key={startTime}>
        TIME: {startTime.toLocaleTimeString()}
        <br />
        {leg.mode} {leg.route ? leg.route.shortName : ''}
        <br />
        ENDTIME: {endTime.toLocaleTimeString()}
      </div>
    )
  }

  return (
    <div>
      KELLO ON {time}
      {
        itineraries.map(Itinerary)
      }
    </div>
  )
}

export default App;