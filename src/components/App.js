import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';

//componente con el formulario para añadir películas:
import AddMovie from './AddMovie';

var finLista = false;

class App extends Component {

  constructor() {
    super();
   
    this.state = {
      movies: initialMovies
    };
  }


  //Método llamado por el botón Ver Más para cargar más películas:
  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };  //usa el operador spread para copiar el estado de "movies" en "currentMovies"
    var newMovies = Object.assign( currentMovies, additionalMovies );  //con Object.assign unimos las 2 listas
   
    //si se han cargado las pelis adicionales, quitamos el botón Ver más
    finLista = true;

    this.setState({ movies: newMovies });
  }

  //Método para añadir las películas del formulario a la lista mediante el objeto State:
  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
  }

  //Añadimos una función Bind para evitar errores de compilación en React
  //Esta funcion añade los métodos al objeto this:
  loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  addMovieToGallery = this.addMovieToGallery.bind( this );

  render() {
    let claseBoton = "add-movies";
    //si se ha ejecutado loadAdditionalMovies, ocultamos el botón Ver más
    if (finLista) { claseBoton = claseBoton + " ocultar"; }
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
          {
            Object
              .keys(this.state.movies)
              .map(key => <Movie key={key} meta={this.state.movies[key]} />)
          }
          <div className={claseBoton}><button onClick={this.loadAdditionalMovies}>Ver más...</button></div>
        </div>
        <AddMovie addMovie={this.addMovieToGallery} />
      </div>
    );
  }
}

export default App;
