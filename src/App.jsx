import "./App.css";

import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getNews } from "./services/getNews";
import { NewsContext } from './context/NewsContext';

import clsx from 'clsx';

import { Hidden, makeStyles } from '@material-ui/core';
import Header from '../src/components/Header';
import DrawerComp from '../src/components/Drawer';
import Selectors from '../src/components/Selectors';
import News from './page/News';
import Home from './page/Home';
import Banners from './page/Banners';
import Weather from "./components/Weather";
import Horoscope from "./components/Horoscope";

const drawerWidth = 300;
const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      padding: 0
    },
}));

const App = () => {

    const [newsList, setNewsList] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
    const [selectedDateTo, setSelectedDateTo] = useState(new Date());
    const [currentSearch, setcurrentSearch] = useState("Argentina");
    
    const { userContext } = useContext(NewsContext);
  
    useEffect(() => {
      if (isLoading) {
        async function loadNews() {

          const res = await getNews(currentSearch, selectedDateFrom, selectedDateTo);
  
          setisLoading(false);

  
          // if (res) {
          //   if (res.status === "ok") {
          //     setNewsList(res.articles);
          //   }
          // } else {
          //   alert('Error al buscar los datos');
          // }
          
          if (res.message) {
            if(res.message === "You have exceeded the DAILY quota for requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/contextualwebsearch/api/web-search") {
              setNewsList(res)
            }
          } else setNewsList(res.value);
        }
        loadNews();
      }
    }, [isLoading, newsList, currentSearch, selectedDateFrom, selectedDateTo]);    

    const classes = styles();

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
      <Router>
        <div className={classes.root}>
          <Header 
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            currentSearch={currentSearch}
            setcurrentSearch={setcurrentSearch}
          />
          <DrawerComp 
            className={classes.drawer} 
            variant="persistent" 
            open={open} 
            handleDrawerClose={handleDrawerClose}
            classes={{
            paper: classes.drawerPaper,
            }} 
            setcurrentSearch={setcurrentSearch}
            setisLoading={setisLoading}
            setNewsList={setNewsList}
            setSelectedDateFrom={setSelectedDateFrom}
            setSelectedDateTo={setSelectedDateTo}
          />

          <main className={clsx(classes.content, { [classes.contentShift]: open })}>

            <div className={classes.toolbar}></div>

              <Switch>
                <Route path="/news/:newsId">
                  <div className="container">
                      <div className="leftPanel">
                          <News newsList={newsList} currentSearch={currentSearch} isLoading={isLoading} />
                      </div>
                  </div>
                </Route>
                <Route path="/clima">
                  <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        <Weather />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/horoscopo">
                <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                      <Horoscope />
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
                            
                            <Selectors newsList={newsList} setNewsList={setNewsList} isLoading={isLoading} setisLoading={setisLoading} selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom} selectedDateTo={selectedDateTo} setSelectedDateTo={setSelectedDateTo} />
                            <Home newsList={newsList} isLoading={isLoading} />

                        </div>
                        {userContext?"":
                        <div className="rightPanel">
                          <Hidden smDown>
                            <Banners />
                          </Hidden>
                        </div>}
                    </div>
                </Route>
              </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;