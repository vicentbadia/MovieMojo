import React, { Component } from 'react';
 
class AddMovie extends Component {

  //Método para añadir la película:
  addNewMovie(e) {
    e.preventDefault();
    var movie =  {
      title: this.title.value,
      year: this.year.value,
      description: this.description.value,
      poster: this.poster.value
    };
    this.props.addMovie( movie );
  }

  render() {
    return (
      //el atributo REF guarda el campo de cada formulario como una propiedad de la clase del componente
      <form className="movie-form" onSubmit={(e) => this.addNewMovie(e)}>
        <p>Add a Movie</p>
        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" />
        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" />
        <textarea ref={ ( input ) => this.description = input} placeholder="Description">
        </textarea>
        <button type="submit">Añadir Peli</button>
      </form>
    );
  }
}
 
export default AddMovie;