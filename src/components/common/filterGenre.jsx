import React, { Component } from 'react';
import './filterGenre.css'

class FilterGenre extends Component {
 
    render() { 
        console.log(this.props.currentGenre)
        console.log(this.props.genres)
        return (
        <div class="list-group">

            {this.props.genres.map(genre=>(
                <button id='clickable' onClick={()=> this.props.onGenreChange(genre.name)} type="button" className={ genre.name===this.props.currentGenre ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>
                    {genre.name}
                </button>
            ))}
            
  
            
    </div>
        );
    }
}
 
export default FilterGenre;