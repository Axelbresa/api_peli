import React from 'react'
import { MoviesGrid } from "./components/MoviesGrid";
import style from "./css/MovieCard.module.css"
import MovieDetail from './pages/MovieDetail';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import PaginaEntrada from './pages/PaginaEntrada';



export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={style.titulo}>Movies</h1></Link>

      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId"> <MovieDetail /> </Route>
          <Route exact path="/"> <PaginaEntrada /> </Route>
          <Route path="/">404</Route>
        </Switch>
        {/* {<MoviesGrid />} */}
      </main>
    </Router>
  );
}