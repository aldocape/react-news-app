import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getNews } from "../services/getNews";

export default function News(props) {
  // const { articles } = props;
  const { currentSearch, country, category } = props;
  const { newsId } = useParams();

  // console.log(country);
  // console.log(category);
  const { isLoading, isError, data, error } = useQuery(
    ["homeNews", currentSearch, country, category],
    () => getNews(currentSearch, country, category)
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  // console.log(data.articles[newsId]);

  const { title, urlToImage, publishedAt, description, author, content, url } =
    data.articles[newsId];

  return (
    <div className="newsDetail">
      <strong>{author}</strong>

      <a target="_blank" href={url} rel="noreferrer">
        <h1>{title}</h1>
      </a>
      <div style={{ margin: "20px 0" }}>
        Fecha de publicación: {publishedAt}
      </div>

      <img src={urlToImage} alt={urlToImage} />
      <p className="text-justified">{description}</p>
      <p>{content}</p>
    </div>
  );
}
