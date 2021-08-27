// import React, { useState, useEffect, useContext } from 'react';
import React, { useState, useEffect } from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import Header from './Header';
import DrawerComp from './Drawer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selectors from './Selectors';
import News from '../page/News';
import Home from '../page/Home';
// import { getNews } from "../services/getNews";

// import { NewsContext } from '../context/NewsContext';

// import newsData from "../data/newsdata.json";

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing(2),
    }
}));

const Container = () => {

    const [newsList, setNewsList] = useState([]);
    const [country, setCountry] = useState("ar");
    const [category, setCategory] = useState("politics");
    const [isLoading, setisLoading] = useState(false);
    const [currentSearch, setcurrentSearch] = useState("");
    const [userData, setuserData] = useState(null);
  
    // useEffect(() => {
    //   if (isLoading || newsList.length === 0) {
    //     async function loadNews() {
    //       const res = await getNews(country, category);
  
    //       setisLoading(false);
  
    //       if (res) {
    //         if (res.status === "ok") {
    //           setNewsList(res.articles);
    //         }
    //       } else {
    //         alert('Error al buscar los datos');
    //       }
    //     }
    //     loadNews();
    //   }
    // }, [isLoading, newsList, category, country]);    

    const classes = styles();
    const [open, setOpen] = useState(false);

    const openAction = () => {
      setOpen(!open);
    }

    // const newsContext = useContext(NewsContext);

    return (
      <Router>
        <div className={classes.root}>
          <Header 
            openAction={openAction}
            currentSearch={currentSearch}
            setcurrentSearch={setcurrentSearch}
            userData={userData}
            setuserData={setuserData}
          />
          <Hidden xsDown>
            <DrawerComp variant="permanent" open={true} setcurrentSearch={setcurrentSearch} />
          </Hidden>

          <Hidden smUp>
            <DrawerComp variant="temporary" open={open} setcurrentSearch={setcurrentSearch} onClose={openAction} />
          </Hidden>
          
          <div className={classes.content}>
            <div className={classes.toolbar}></div>
              <Switch>
                <Route path="/news/:newsId">
                  <div className="container">
                      <div className="leftPanel">
                          <News country={country} category={category} currentSearch={currentSearch} />
                      </div>
                  </div>
                </Route>
                <Route path="/clima">
                  <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        Contenido de sección Clima
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/horoscopo">
                <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        Contenido de sección Horóscopo
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/suscribite">
                  <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        Contenido de sección Suscribite
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/contacto">
                <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        Contenido de sección Contacto
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/">
                    <div className="container">
                        <div className="leftPanel">
                            
                            <Selectors country={country} setCountry={setCountry} category={category} setCategory={setCategory} setNewsList={setNewsList} setisLoading={setisLoading} />
                            <Home country={country} category={category} currentSearch={currentSearch} />

                        </div>
                        {/* <div className="rightPanel">
                            <Banners />
                        </div> */}
                    </div>
                </Route>
              </Switch>
          </div>
        </div>
      </Router>
  );

}

export default Container;