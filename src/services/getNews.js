// export async function getNews(country = "ar", category = "politics") {
//   const PUBLIC_KEY = "2da01aeea7ac496ba6283a2ffda45116";

//   return fetch(
//     `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${PUBLIC_KEY}`
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .catch((e) => console.error(e));
// }

const API_KEY = "2da01aeea7ac496ba6283a2ffda45116";
const API_BASE_URL = "https://newsapi.org/v2";
// const country = "AR";
// const category = "business";

let country = "ar";
let category = "business";
export async function getNews(searchText, ...todo) {
  console.log(todo);
  if (todo.length > 0) {
    country = todo[0];
    category = todo[1];
  }
  //https://newsapi.org/v2/top-headlines?country=us&category=business&
  let url = `${API_BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
  if (searchText) {
    url = `${API_BASE_URL}/everything?q=${searchText}&sortBy=date&apiKey=${API_KEY}`;
  }
  console.log(url);
  return fetch(url)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.error(e));
}

export function getNewsQueryOptions() {
  return {
    enbled: false,
    staleTime: 300000,
    refetchOnMount: false,
  };
}
