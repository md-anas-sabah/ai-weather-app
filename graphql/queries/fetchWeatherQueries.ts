import {gql} from '@apollo/client'

const fetchWeatherQuery = gql`
  query MyQuery   {
    myQuery(
      $current_weather: String
      $daily: String = "weathercode, temperature_2m_max, temperature_2m_min, apparent_temperature_min,apparent_temperature_max,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"   
      $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
      $latitude: String!
      $longitude: String!
      $timezone: String
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_sum
        temperature_2m_max
        temperature_2m_min
        time
        weathercode
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        temperature_2m_max
        precipitation_sum
        temperature_2m_min
        time
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        is_day
        dewpoint_2m
        rain
        precipitation_probability
        showers
        relativehumidity_2m
        snowfall
        snow_depth
        time
        temperature_2m
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        is_day
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      longitude
      latitude
      timezone_abbreviation
      timezone
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery