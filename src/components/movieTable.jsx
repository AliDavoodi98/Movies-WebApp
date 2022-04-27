import React, { Component } from 'react'
import './movieTable.css'
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';


class Movies extends Component {


    state = { 
        movies : getMovies(),
        
        
     } 

     numMovies=()=>{
        return this.state.movies.length === 0 ? <h3>no movies in the database</h3> : <h3>Showing  {this.state.movies.length} movies in the database.</h3> 

     }

     handleDelete=(item)=>{
        const movies_list = this.state.movies.filter(m=> m._id !== item._id);
        this.setState({movies: movies_list});
     }

     handleLike =(item)=>{
        const movies_list = [...this.state.movies]
        const index = movies_list.indexOf(item)
        movies_list[index].liked = !movies_list[index].liked 
        this.setState({movies: movies_list})
     }


     setMovies(){
          
        return this.state.movies.map(item=>
            
            <tr key={item._id}>    
            <th scope='row'>{item.title}</th>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td> <button onClick={()=>this.handleDelete(item)} className='btn btn-danger'>Delete</button> </td>
            <td><Like onLike={()=> this.handleLike(item)} liked={item.liked}/> </td>
            </tr>
            
            )
         
         
     }

    render() { 

        return (
            

            <div>
                {this.numMovies()}
            <table className='table table-dark'>
                <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope='col'></th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
    {this.setMovies()}
  </tbody>

            </table>
            </div>



        );
    }
}
 
export default Movies;