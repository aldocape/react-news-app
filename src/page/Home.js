import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getNews, getNewsQueryOptions } from "../services/getNews";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 285,
  },
  media: {
    height: 140,
  },
  title: {
    margin: 10,
  },
});

export default function Home(props) {
  const { currentSearch, country, category } = props;
  const classes = useStyles();
  // console.log('Rendering home');
  // console.log(searchText);
  const { isLoading, isError, data, error } = useQuery(
    ["homeNews", currentSearch, country, category],
    () => getNews(currentSearch, country, category),
    getNewsQueryOptions
  );

  console.log(data);

  if (isLoading) {
    // return <span>Loading...</span>;
    return <span></span>;
  }

  console.log(data);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // const { news, currentSearch } = props;

  return data.status === "error" ? (
    <ul className="newsList">
      <li>{data.message}</li>
    </ul>
  ) : (
    <ul className="newsList">
      {data.articles.map((e, i) => (
        <li key={e.url}>
          <Card className={classes.root}>
            <CardActionArea>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {e.author}
              </Typography>
              <Link to={`/news/${i}`}>
                <CardMedia
                  className={classes.media}
                  image={e.image ? e.image : "./no-image.png"}
                  title={e.url}
                  alt={e.url}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={`/news/${i}`}>{e.title}</Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {e.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartir
              </Button>
              <Link to={`/news/${i}`}>
                <Button size="small" color="primary">
                  Seguir leyendo...
                </Button>
              </Link>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
}
