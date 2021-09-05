const API_BASE_URL = "https://api.adderou.cl/tyaas/";

export async function getHoroscope() {
  return fetch(`${API_BASE_URL}`, { method: "GET" })
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.error(e));
}
