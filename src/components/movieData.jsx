import React, { Component } from 'react';

class MovieData extends Component {

    


    render() { 
        const {paginated_movies, onDelete, onLike} =this.props

        return (
            <table className='table table-dark'>
                <thead>
    <tr>
      <th className='clickable' onClick={()=> this.handleSort("title")} scope="col">Title {this.renderSortIcon("title")}</th>
      <th className='clickable' onClick={()=> this.handleSort("genre.name")} scope="col">Genre {this.renderSortIcon("genre.name")}</th>
      <th className='clickable' onClick={()=> this.handleSort("numberInStock")} scope="col">Stock {this.renderSortIcon("numberInStock")}</th>
      <th className='clickable' onClick={()=> this.handleSort("dailyRentalRate")} scope="col">Rate {this.renderSortIcon("dailyRentalRate")}</th>
      <th scope='col'></th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
                {paginated_movies.map(item=>
            
            <tr key={item._id}>    
            <th scope='row'>{item.title}</th>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td> <button onClick={()=>this.props.onDelete(item)} className='btn btn-danger'>Delete</button> </td>
            <td><Like onLike={()=> this.props.onLike(item)} liked={item.liked}/> </td>
            </tr>
            
            )}
  </tbody>

            </table>



        );
    }
}
 
export default MovieData;