export async function getNews(country = "ar", category = "politics") {
  const PUBLIC_KEY = "2da01aeea7ac496ba6283a2ffda45116";

  return fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${PUBLIC_KEY}`
  )
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .catch((e) => console.error(e));
}
