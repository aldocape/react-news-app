import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useQuery } from "react-query";
import { getNews } from "../services/getNews";

export default function News(props) {
  // const { articles } = props;
  const { currentSearch } = props;
  const { newsId } = useParams();

  const [isLoading, setisLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  const selectedDateFrom = null;
  const selectedDateTo = null;

  useEffect(() => {
    if (isLoading) {
      async function loadNews() {
        const res = await getNews(
          currentSearch,
          selectedDateFrom,
          selectedDateTo
        );

        setisLoading(false);

        // if (res) {
        //   if (res.status === "ok") {
        //     setNewsList(res.articles);
        //   }
        // } else {
        //   alert('Error al buscar los datos');
        // }
        console.log(res);
        if (res.message) {
          if (
            res.message ===
            "You have exceeded the DAILY quota for requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/contextualwebsearch/api/web-search"
          ) {
            setNewsList(res);
          }
        } else setNewsList(res.value);
      }
      loadNews();
    }
  }, [isLoading, newsList, currentSearch, selectedDateFrom, selectedDateTo]);

  function ordenarFecha(fecha) {
    return (
      fecha.substring(8, 10) +
      "/" +
      fecha.substring(5, 7) +
      "/" +
      fecha.substring(0, 4)
    );
  }

  // console.log(country);
  // console.log(category);
  // const { isLoading, isError, data, error } = useQuery(
  //   ["homeNews", currentSearch, country, category],
  //   () => getNews(currentSearch, country, category)
  // );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  let newsObject = null;

  for (const id in newsList) {
    if (newsId === newsList[id].id) {
      newsObject = newsList[id];
    }
  }

  // const { title, image, datePublished, description, author, snippet, url } =
  //   newsObject;

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  // console.log(data.articles[newsId]);

  // const { title, urlToImage, publishedAt, description, author, content, url } =
  //   data.articles[newsId];

  return newsObject ? (
    <div className="newsDetail">
      <strong>{newsObject.author}</strong>

      <a target="_blank" href={newsObject.url} rel="noreferrer">
        <h1>{newsObject.title}</h1>
      </a>
      <div style={{ margin: "20px 0" }}>
        Publicado: {ordenarFecha(newsObject.datePublished.substring(0, 10))} a
        las: {newsObject.datePublished.substring(11, 19)}
      </div>

      <img src={newsObject.image.url} alt={newsObject.image.url} />
      <p className="text-justified">{newsObject.description}</p>
      <p>{newsObject.snippet}</p>
    </div>
  ) : (
    ""
  );
}
