import React, {useState, useEffect} from 'react';
import { getHoroscope } from '../services/getHoroscope';

import horoscope from '../data/horoscope.json';

const Horoscope = () => {

    const [isLoading, setisLoading] = useState(true);
    const [results, setResults] = useState(null);

    const signos = ['aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo', 'libra', 'sagitario', 'capricornio', 'acuario', 'piscis'];

    // console.log(horoscope.horoscopo);
    const horoscopo = horoscope.horoscopo;

    useEffect(() => {
        if (isLoading) {
          async function loadHoroscope() {
    
            const res = await getHoroscope();
    
    
            // if (res) {
            //   if (res.status === "ok") {
            //     setNewsList(res.articles);
            //   }
            // } else {
            //   alert('Error al buscar los datos');
            // }
            // console.log(res.horoscopo);
            
            setResults(res.horoscopo);
            
            // signos.map((e) => (hola[e] = results[e]));
            

            setisLoading(false);
          }
          loadHoroscope();
        }
      }, [isLoading, results]);

    return (
        <div>
            <h1>Horóscopo</h1>
            
            <ul style={{padding: '0'}}>
                {signos.map((e) => (
                    <>
                <li style={{width: '100%'}}>{horoscopo[e].nombre}<br />
                Amor: {horoscopo[e].amor}<br />
                Dinero: {horoscopo[e].dinero}<br />
                Salud: {horoscopo[e].salud}<br />
                </li>
                
                </>
                ))}
                
            </ul>
            {/* <HoroscList aries={results.aries} /> */}
            {/* <h2>{signos.map((e) => (results[e].amor))}</h2> */}
            {/* <ul>{results.horoscopo.map((e, i) => (
                <li>Hola</li>  ))}
            </ul> */}
        </div>
    )
}

export default Horoscope;

