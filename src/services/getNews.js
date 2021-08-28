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

let country = "us";
let category = "general";
export async function getNews(searchText, ...todo) {
  console.log(todo);
  if (todo.length > 0) {
    country = todo[0];
    category = todo[1];
  }

  if (searchText) {
    searchText = `&keywords=${searchText}`;
  }
  category = category === "Todas" ? "" : category;

  let query2 = "";
  if (category.length > 0) query2 = `&categories=${category}`;

  let query = `http://api.mediastack.com/v1/news?access_key=e576dfb414690307364c246207edcbc5&countries=ar${searchText}${query2}&countries=${country}`;
  // if (searchText) {
  //   query = `https://gnews.io/api/v4/search?q=${searchText}&token=559cf4be7f55ec0007a27d64101d2444`;
  // }

  return fetch(query, {
    method: "GET",
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.error(e));

  //https://newsapi.org/v2/top-headlines?country=us&category=business&
  // let url = `${API_BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
  // if (searchText) {
  //   url = `${API_BASE_URL}/top-headlines?q=${searchText}&country=${country}&category=${category}&apiKey=${API_KEY}`;
  // }
  // console.log(url);
  // return fetch(url)
  //   .then((data) => {
  //     return data.json();
  //   })
  //   .catch((e) => console.error(e));
}

export function getNewsQueryOptions() {
  return {
    enbled: false,
    staleTime: 300000,
    refetchOnMount: false,
  };
}
