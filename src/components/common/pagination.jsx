import React, { Component } from 'react'
import _ from 'lodash'

class Pagination extends Component {
    

    
    pageActive = (page)=>{

        return this.props.currentPage == page ? "page-item active" : "page-item" 
    }

    


    render() { 
        const {itemsCount, pageSize, currentPage} = this.props;
        const pagesCount = Math.ceil(itemsCount/pageSize);
        if (pagesCount===1) return null;

        const pages = _.range(1,pagesCount+1);
        
        return (    
           

            <nav>
                <ul className="pagination">

                    {pages.map(page=>(
                        <li key={page} className={this.pageActive(page)}>
                            <a  className="page-link" onClick={()=> this.props.onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;