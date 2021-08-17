import { useParams } from "react-router-dom";

export default function News(props) {
  const { articles } = props;
  const { newsId } = useParams();
  const { title, urlToImage, publishedAt, description, author, content, url } =
    articles[newsId];

  console.log(articles);

  return (
    <div className="newsDetail">
      <strong className="d-inline-block mb-3 text-primary">{author}</strong>

      <a
        target="_blank"
        className="text-decoration-none"
        href={url}
        rel="noreferrer"
      >
        <h1>{title}</h1>
      </a>
      <div className="mb-3 mt-3 text-muted">
        Fecha de publicación: {publishedAt}
      </div>

      <img src={urlToImage} alt={urlToImage} />
      <p className="text-justified">{description}</p>
      <p>{content}</p>
    </div>
  );
}
