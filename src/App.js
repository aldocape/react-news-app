import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import newsData from "./data/newsdata.json";
import Home from "./page/Home";
import News from "./page/News";
import Header from "./components/Header";
import { getNews } from "./services/getNews";
import Banners from "./page/Banners";

function App(props) {
  const [newsList, setNewsList] = useState([]);
  // const newsList = newsData;
  const [country, setCountry] = useState("ar");
  const [category, setCategory] = useState("politics");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (isLoading || newsList.length === 0) {
      async function loadNews() {
        const res = await getNews(country, category);

        setisLoading(false);

        if (res) {
          if (res.status === "ok") {
            setNewsList(res.articles);
          }
        }
      }
      loadNews();
    }
  }, [isLoading, newsList, category, country]);

  let newsList1 = [];
  let newsList2 = [];

  if (newsList.length) {
    newsList1 = newsList.slice(0, 9);
    newsList2 = newsList.slice(10, 19);
  }

  return (
    <div className="App">
      <Router>
        <Header
          setNewsList={setNewsList}
          setCountry={setCountry}
          setCategory={setCategory}
          setisLoading={setisLoading}
        />

        <Switch>
          <Route path="/news/:newsId">
            <div className="container m-0 p-0">
              <div className="row">
                <News articles={newsList} />
                <Banners />
              </div>
            </div>
          </Route>
          <Route path="/">
            <div className="container m-0 p-0">
              <div className="selectContainer">
                <select
                  className="form-select selector"
                  id="countrySelector"
                  name="countrySelector"
                >
                  <option value="ar" defaultValue>
                    Argentina
                  </option>
                  <option value="br">Brasil</option>
                  <option value="us">Estados Unidos</option>
                  <option value="it">Italia</option>
                </select>
                <select
                  style={{ margin: "0 1vw" }}
                  className="form-select selector"
                  id="catSelector"
                  name="categorySelector"
                >
                  <option value="politics" defaultValue>
                    Política
                  </option>
                  <option value="sports">Deportes</option>
                  <option value="business">Economía</option>
                </select>

                <button
                  className="btn btn-info"
                  onClick={() => {
                    setNewsList([]);
                    const countrySelector =
                      document.getElementById("countrySelector");
                    const categorySelector =
                      document.getElementById("catSelector");
                    setCountry(countrySelector.value);
                    setCategory(categorySelector.value);
                    setisLoading(true);
                  }}
                >
                  Buscar
                </button>
              </div>
              <div className="row">
                <Home news={newsList1} column="1" />
                <Home news={newsList2} column="2" />
                <Banners />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
