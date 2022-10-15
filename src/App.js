import React, { useEffect, useState } from 'react'

import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/'

import coronaImage from './images/image.png'

function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData()
      setData(data)
    }
    fetch()
  }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchData(country)
    setData(data)
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img src={coronaImage} alt="covid" className={styles.image} />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  )
}

export default App
