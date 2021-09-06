import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 236,
    },
    // height: 450,
    // overflow: "hidden",
    marginBottom: 15,
  },
  media: {
    height: 140,
  },
  title: {
    margin: 10,
  },
}));

function ordenarFecha(fecha) {
  return (
    fecha.substring(8, 10) +
    "/" +
    fecha.substring(5, 7) +
    "/" +
    fecha.substring(0, 4)
  );
}

export default function Home(props) {
  const { newsList, isLoading } = props;
  const classes = useStyles();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return newsList.message ===
    "You have exceeded the DAILY quota for requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/contextualwebsearch/api/web-search" ? (
    <ul className="newsList">
      <li>{newsList.message}</li>
    </ul>
  ) : (
    <ul className="newsList">
      {newsList.map((e, i) => (
        <li key={e.id}>
          <Card className={classes.root}>
            <CardActionArea>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {e.provider.name}
              </Typography>
              <Link to={`/news/${e.id}`}>
                <CardMedia
                  className={classes.media}
                  image={e.image.url ? e.image.url : "./no-image.png"}
                  title={e.image.url}
                  alt={e.image.url}
                />
              </Link>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Publicado: {ordenarFecha(e.datePublished.substring(0, 10))}
                  <br />A las: {e.datePublished.substring(11, 19)}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={`/news/${e.id}`}>{e.title}</Link>
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
              <Link to={`/news/${e.id}`}>
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
