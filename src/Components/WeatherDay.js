import React from 'react';
import Weather from './WeatherDay/Weather.js'

class WeatherDay extends React.Component{
  render(){
  return(
        <>
           {this.props.weatherData.map(weather => (
                <Weather weather={weather} />
              ))}
        </>
  )
  }
  }

export default WeatherDay;