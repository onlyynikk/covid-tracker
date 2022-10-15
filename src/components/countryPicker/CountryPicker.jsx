import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import './countryPicker.css'
import { fetchcountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountries, setFetchCountries] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      setFetchCountries(await fetchcountries())
    }
    fetchApi()
  }, [setFetchCountries])

  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value)
        }}
      >
        <option value="">Global</option>
        {fetchCountries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
