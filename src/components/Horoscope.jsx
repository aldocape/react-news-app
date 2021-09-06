import React, {useState, useEffect} from 'react';
import { getHoroscope } from '../services/getHoroscope';

// import horoscope from '../data/horoscope.json';

const Horoscope = () => {

    const [isLoading, setisLoading] = useState(true);
    const [results, setResults] = useState(null);

    const signos = ['aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo', 'libra', 'sagitario', 'capricornio', 'acuario', 'piscis'];

    // console.log(horoscope.horoscopo);
    // const horoscopo = horoscope.horoscopo;

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
    
    if (isLoading) {
    return <span>Loading...</span>;
    }

    return (
        <div>
            <h1 style={{marginLeft: '15px', color: '#082032'}}>Horóscopo</h1>
            
            <ul style={{padding: '0'}}>
                {signos.map((e) => (
                    <>
                <li style={{width: '100%', margin: '20px 0', display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{width: '10%', marginLeft: '10px', marginTop: '45px'}}>
                    <img src={`./horoscope-images/${e}.png`} alt={e} style={{width:'100%', maxHeight: '100px', display: 'inline-block'}} />
                    </div>
                    <div style={{width: '80%'}}>
                <p style={{display: 'inline-block', backgroundColor: '#EEE', padding: '15px', color: '#082032'}}>
                Amor: {results[e].amor}<br /><br />
                Dinero: {results[e].dinero}<br /><br />
                Salud: {results[e].salud}<br />
                </p>
                </div>
                </li>
                
                </>
                ))}
                
            </ul>
        </div>
    )
}

export default Horoscope;

