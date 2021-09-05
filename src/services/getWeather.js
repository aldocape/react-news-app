const API_KEY = "PSmm4h3qVHJ3IG5AKLRLuEpsRtpsumay";
const API_BASE_URL = "http://dataservice.accuweather.com/currentconditions/v1";

export async function getWeather() {
  let query = `${API_BASE_URL}/10206?apikey=${API_KEY}&language=es-ar&details=true`;

  return fetch(query)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.error(e));
}
