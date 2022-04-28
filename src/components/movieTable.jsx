import React, { Component } from 'react'
import './movieTable.css'
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import FilterGenre from './common/filterGenre';
import  {genres}  from '../services/fakeGenreService';
import _ from 'lodash'
import Navbar from './navbar';

class Movies extends Component {


    state = { 
        movies : getMovies(),
        pageSize: 4,
        currentPage: 1,
        genres: genres,
        currentGenre: 'All Genres',
        sortColumn:{path: 'title', order:'asc'}
        
        
     } 

     numMovies=()=>{

        if (this.state.currentGenre=='All Genres'){
            return this.state.movies.length === 0 ? <h3>no movies in the database</h3> : <h3>Showing  {this.state.movies.length} movies in the database.</h3> 
        }
        else{
            const movies = this.state.movies.filter(movie=>(
                movie.genre.name == this.state.currentGenre
            ))

            return movies.length === 0 ? <h3>no movies in the database</h3> : <h3>Showing  {movies.length} movies in the database.</h3> 

        }
        

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

     handlePageChange =(page)=>{
         this.setState({currentPage:page})
     }

     handleGenreChange = (genre)=>{
        this.setState({currentGenre: genre, currentPage:1})
     }

     handleSort = (path)=>{
         const sortColumn = {...this.state.sortColumn};
         if (sortColumn.path===path){
             sortColumn.order = (sortColumn.order === 'asc')? 'desc':'asc'
         }
         else{
            sortColumn.path= path
            sortColumn.order= 'asc'

         }
         this.setState({sortColumn: sortColumn})
     }

     renderSortIcon = (path)=>{
        if (path !== this.state.sortColumn.path) return null
        if (this.state.sortColumn.order == 'asc') return <i className="fa fa-sort-asc"></i>
        else return <i className="fa fa-sort-desc"></i>
    }
  

    



    render() { 
        const filtered_movies = this.state.currentGenre==='All Genres' ? this.state.movies : this.state.movies.filter(movie=>(
            movie.genre.name == this.state.currentGenre
        ));
        
        const sorted_movies = _.orderBy(filtered_movies, [this.state.sortColumn.path], [this.state.sortColumn.order])
        const paginated_movies = sorted_movies.slice((this.state.currentPage-1) * this.state.pageSize, (this.state.currentPage-1) * this.state.pageSize+4);
        return (

            <div class="container">
                <Navbar />
  <div class="row">
    <div class="col-3">
      <FilterGenre 
      genres={this.state.genres} 
      onGenreChange={this.handleGenreChange}
      currentGenre= {this.state.currentGenre}
      />

    </div>
    <div class="col-8">
    <div>
                {this.numMovies()}
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
            <td> <button onClick={()=>this.handleDelete(item)} className='btn btn-danger'>Delete</button> </td>
            <td><Like onLike={()=> this.handleLike(item)} liked={item.liked}/> </td>
            </tr>
            
            )}
  </tbody>

            </table>
            <Pagination 
            itemsCount={filtered_movies.length} 
            pageSize={this.state.pageSize} 
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}/>
            </div>
    </div>

  </div>
</div>




        );
    }
}
 
export default Movies;