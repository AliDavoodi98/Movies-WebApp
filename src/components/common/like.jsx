import React, { Component } from 'react';

class Like extends Component {


    getLikedSit = ()=>{
        
        return this.props.liked ? "fa fa-heart" :"fa fa-heart-o"
    }

    render() { 
        return (
            <i onClick={this.props.onLike} className={this.getLikedSit()} aria-hidden="true"></i>

        );
    }
}
 
export default Like;