import React, { useState, useEffect, useContext } from 'react';
// import React, { useState } from 'react';
import clsx from 'clsx';
import { Hidden, makeStyles } from '@material-ui/core';
import Header from './Header';
import DrawerComp from './Drawer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selectors from './Selectors';
import News from '../page/News';
import Home from '../page/Home';
import Banners from '../page/Banners';
import { getNews } from "../services/getNews";

import { NewsContext } from '../context/NewsContext';

// import newsData from "../data/newsdata.json";
const drawerWidth = 300;
const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    // content: {
    //     flexGrow: 1,
    //     backgroundColor: theme.palette.background.default,
    //     // padding: theme.spacing(2),
    // },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      // padding: theme.spacing(3),
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

const Container = () => {

    const [newsList, setNewsList] = useState([]);
    // const [country, setCountry] = useState("us");
    // const [category, setCategory] = useState("general");

    let fechaDesde = new Date();
    // fechaDesde = fechaDesde.toISOString();
    // fechaDesde = fechaDesde.substring(8, 10) + "/" + fechaDesde.substring(5, 7) + "/" + fechaDesde.substring(0, 4);

    let fechaHasta = new Date();
    // fechaHasta = fechaHasta.toISOString();
    // fechaHasta = fechaHasta.substring(8, 10) + "/" + fechaHasta.substring(5, 7) + "/" + fechaHasta.substring(0, 4);
    
    console.info("Fecha desde state", fechaDesde);
    const [selectedDateFrom, setSelectedDateFrom] = useState(fechaDesde);
    const [selectedDateTo, setSelectedDateTo] = useState(fechaHasta);

    
    const [isLoading, setisLoading] = useState(false);
    const [currentSearch, setcurrentSearch] = useState("Argentina");
    const [userData, setuserData] = useState(null);
  
    useEffect(() => {
      if (isLoading || newsList.length === 0) {
        async function loadNews() {
          // console.info("datefrom", selectedDateFrom);
          const res = await getNews(currentSearch, selectedDateFrom, selectedDateTo);
  
          setisLoading(false);

          console.log(res);
  
          // if (res) {
          //   if (res.status === "ok") {
          //     setNewsList(res.articles);
          //   }
          // } else {
          //   alert('Error al buscar los datos');
          // }
          // console.log(res);
          if (res.message) {
          if(res.message === "You have exceeded the DAILY quota for requests on your current plan, BASIC. Upgrade your plan at https://rapidapi.com/contextualwebsearch/api/web-search") {alert('Se ha alcanzado el máximo de requests');}
          }
          else setNewsList(res.value);
        }
        loadNews();
      }
    }, [isLoading, newsList, currentSearch, selectedDateFrom, selectedDateTo]);    

    // console.log(newsList);
    const classes = styles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    // const openAction = () => {
    //   setOpen(!open);
    // }

    return (
      <Router>
        <div className={classes.root}>
          <Header 
            open={open}
            // openAction={openAction}
            handleDrawerOpen={handleDrawerOpen}
            currentSearch={currentSearch}
            setcurrentSearch={setcurrentSearch}
            userData={userData}
            setuserData={setuserData}
            
          />
          {/* <Hidden xsDown>
            <DrawerComp variant="temporary" open={open} openAction={openAction} setcurrentSearch={setcurrentSearch} />
          </Hidden> */}

          {/* <Hidden smUp> */}
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
          {/* </Hidden> */}

          <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
          
          {/* <div className={classes.content}> */}
            <div className={classes.toolbar}></div>
              <Switch>
                <Route path="/news/:newsId">
                  <div className="container">
                      <div className="leftPanel">
                          {/* <News country={country} category={category} currentSearch={currentSearch} /> */}
                          <News currentSearch={currentSearch} />
                      </div>
                  </div>
                </Route>
                <Route path="/clima">
                  <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                        <img src="./captura-clima.png" alt="clima" />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/horoscopo">
                <div className="container">
                    <div className="leftPanel">
                      <div className="content">
                      <img src="./captura-horoscopo.png" alt="horoscopo" />
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
                            <Home newsList={newsList} selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom} selectedDateTo={selectedDateTo} setSelectedDateTo={setSelectedDateTo} currentSearch={currentSearch} />

                        </div>
                        <div className="rightPanel">
                          <Hidden smDown>
                            <Banners />
                          </Hidden>
                        </div>
                    </div>
                </Route>
              </Switch>
          {/* </div> */}
          </main>
        </div>
      </Router>
  );

}

export default Container;