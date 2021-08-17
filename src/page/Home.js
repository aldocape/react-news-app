import { Link } from "react-router-dom";

export default function Home(props) {
  const { news } = props;
  let x = 0;
  if (props.column === "2") {
    x = 10;
  }
  return (
    <div className="col-5">
      <ul className="list-unstyled m-3">
        {news.map((e, i) => {
          return (
            <li key={e.url} className="card mt-4 mb-4 p-3">
              <strong className="d-inline-block mb-3 text-primary">
                {e.author}
              </strong>
              <Link
                to={`/news/${i + x}`}
                className="nav-link p-0 mb-3 text-justified"
              >
                <h3>{e.title}</h3>
              </Link>
              <img src={e.urlToImage} alt={e.urlToImage} />
              <div className="mb-3 mt-3 text-muted">
                Fecha de publicación: {e.publishedAt}
              </div>
              <p className="text-justified">{e.description}</p>
            </li>
          );
        })}
        {props.column === "1" ? (
          <li key="coco" className="card mt-4 mb-4 p-3">
            <strong className="d-inline-block mb-3 text-primary">
              Liga de la Justicia
            </strong>
            <Link to="/news/" className="nav-link p-0 mb-3 text-justified">
              <h3>
                Último momento!! El Capitán Coco nuevamente salva el planeta con
                sus superpoderes!
              </h3>
            </Link>
            <img src="../../coco.gif" alt="coco" />
            <div className="mb-3 mt-3 text-muted">
              Fecha de publicación: 9 de agosto de 2021
            </div>
            <p className="text-justified">
              Haciendo uso de sus habilidades extraordinarias, en esta ocasión
              impidió que un asteroide impactara contra la Tierra
            </p>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
