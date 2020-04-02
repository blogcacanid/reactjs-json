import React, { Component } from 'react';

import './GetLocalDatas.css'

import posts from './news.json';

class GetLocalDatas extends Component {
    constructor(props){
        super(props);
        this.state = {            
            posts :posts            
        };
    }

    render() {
        const {posts} = this.state;
        return(
            <div>
                <ol className="item">
                {
                    posts.map(post => (
                        <li key={post.id} align="start">
                            <div>
                                <p className="title"><a style={{ textDecoration: 'none' }} href={post.WebURL}>{post.HeadLine}</a></p>
                                <p className="body">{post.Story}</p>
                            </div>
                        </li>
                    ))
                }
                </ol>
            </div>
        );
    }
  }
  
  export default GetLocalDatas;