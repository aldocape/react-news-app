const API_KEY = "e6ff51ae40msh31d44bb7cec9ff0p1d4af9jsn37e17f435457";
const API_BASE_URL = "https://contextualwebsearch-websearch-v1.p.rapidapi.com";

export async function getNews(
  currentSearch,
  selectedDateFrom = null,
  selectedDateTo = null
) {
  let fechaDesde;
  let fechaHasta;

  if (selectedDateFrom) {
    fechaDesde = selectedDateFrom.toISOString();
    fechaDesde =
      fechaDesde.substring(8, 10) +
      "/" +
      fechaDesde.substring(5, 7) +
      "/" +
      fechaDesde.substring(0, 4);

    console.log(selectedDateFrom);
    fechaDesde =
      fechaDesde.substring(6, 10) +
      "-" +
      fechaDesde.substring(3, 5) +
      "-" +
      fechaDesde.substring(0, 2) +
      "T00:00:00";

    // selectedDateFrom = selectedDateFrom.replace(/:/gi, "%3A");
  }
  if (selectedDateTo) {
    fechaHasta = selectedDateTo.toISOString();
    fechaHasta =
      fechaHasta.substring(8, 10) +
      "/" +
      fechaHasta.substring(5, 7) +
      "/" +
      fechaHasta.substring(0, 4);

    fechaHasta =
      fechaHasta.substring(6, 10) +
      "-" +
      fechaHasta.substring(3, 5) +
      "-" +
      fechaHasta.substring(0, 2) +
      "T23:59:59";
  }

  // let query = `http://api.mediastack.com/v1/news?access_key=e576dfb414690307364c246207edcbc5&countries=ar${searchText}${query2}&countries=${country}`;
  // if (searchText) {
  //   query = `https://gnews.io/api/v4/search?q=${searchText}&token=559cf4be7f55ec0007a27d64101d2444`;
  // }

  let query = `${API_BASE_URL}/api/search/NewsSearchAPI?q=${currentSearch}&pageNumber=1&pageSize=20&autoCorrect=true&withThumbnails=true&fromPublishedDate=${fechaDesde}&toPublishedDate=${fechaHasta}`;

  return fetch(query, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.error(e));
}
