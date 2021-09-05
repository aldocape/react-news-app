import React, {useState, useEffect} from 'react';
import { getWeather } from '../services/getWeather';

const Weather = () => {

    const [isLoading, setisLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [temperature, setTemperature] = useState("");
    const [visibility, setVisibility] = useState("");

    useEffect(() => {
        if (isLoading) {
          async function loadWeather() {
    
            const res = await getWeather();
            
            
    
    
            // if (res) {
            //   if (res.status === "ok") {
            //     setNewsList(res.articles);
            //   }
            // } else {
            //   alert('Error al buscar los datos');
            // }
            console.log(res[0]);
            
            setResults(res[0]);
            setTemperature(res[0].Temperature.Metric.Value);
            setVisibility(res[0].Visibility.Metric.Value);
            setisLoading(false);
          }
          loadWeather();
        }
      }, [isLoading, results]);

    return (
        <div>
            <h1>El tiempo en General Roca</h1>
            <h2>{results.WeatherText} 
                <img src={`https://developer.accuweather.com/sites/default/files/${results.WeatherIcon}-s.png`} alt="weather-icon" />
            </h2>
            <h3>La humedad relativa es: {results.RelativeHumidity} %</h3>
            <h3>La temperatura es: {temperature} grados</h3>
            <h3>La visibilidad es de: {visibility} km </h3>
        </div>
    )
}

export default Weather;

