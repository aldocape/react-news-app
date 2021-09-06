
import React, {useState, useEffect} from 'react';
import { getWeather } from '../services/getWeather';

const Weather = () => {

    const [isLoading, setisLoading] = useState(true);
    const [results, setResults] = useState([]);

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
            
            setResults(res[0]);
            
            setisLoading(false);
          }
          loadWeather();
        }
    }, [isLoading, results]);

    if (isLoading) {
      return <span>Loading...</span>;
    }    

    return (
      <div>
          <h1 style={{marginLeft: '15px', color: '#082032'}}>El clima en General Roca</h1>
        
            <div style={{width: '95%', display: 'flex', justifyContent: 'space-between'}}>
            
            <div style={{width: '40%', marginLeft: '15px'}}>
            <h2><p style={{ display:'inline-block' }}>{results.WeatherText}</p>
                <img style={{ verticalAlign: 'middle' }} src={`https://developer.accuweather.com/sites/default/files/${(results.WeatherIcon.toString().length > 1)?results.WeatherIcon.toString():`0${results.WeatherIcon.toString()}`}-s.png`} alt="weather-icon" />
            </h2>
            
            <h3 style={{color: '#827717', backgroundColor: '#f9fbe7', borderBottom: '1px solid rgb(215, 215, 215)', padding: '15px'}}>
              La visibilidad es de: {results.Visibility.Metric.Value} km 
            </h3>  

            <h3 style={{color: '#00695c', backgroundColor: '#e0f2f1', borderBottom: '1px solid rgb(215, 215, 215)', padding: '15px'}}>
            La humedad relativa es: {results.RelativeHumidity} %
            </h3>  
            
            <h3 style={{color: '#0277bd', backgroundColor: '#eceff1', borderBottom: '1px solid rgb(215, 215, 215)', padding: '15px'}}>
              Mínima: {results.Temperature.Metric.Value} °
            </h3>

            <h3 style={{color: '#ff6f00', backgroundColor: '#ffecb3', borderBottom: '1px solid rgb(215, 215, 215)', padding: '15px'}}>
              Máxima: {results.Temperature.Metric.UnitType} °
            </h3>      
            </div>

            <div style={{width: '40%'}}>
              {/* <h3 style={{width: '100%', backgroundColor: '#e3e3e3'}}>Hola</h3> */}
              <img style={{width: '100%'}} src='./foto-clima.jpg' alt='foto-clima' />
            </div>        
            </div>

            
            

        </div>

    )
}

export default Weather;

