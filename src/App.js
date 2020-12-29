import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  // Requesting the event data from NASA API w/ useState
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  // fetch the api data asyncronously using async/await
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // Pulls Events array from api using destructuring
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()

    //console.log(eventData);
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
