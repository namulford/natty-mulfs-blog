import React, { Component } from 'react'
import { Link } from 'react-router';


class Posts extends Component {
    render() {
        let posts = this.props.posts;
        
        if (this.props.loading) {
            return (
                <div>
                    Loading...
                </div>
            );
        }

        return (
            <form>
                <div className="Posts">
                    { Object.keys(posts).map(function(key) {
                        return (
                            <div key={key}>
                            <h1>
                                { posts[key].title }
                                </h1> 
                                <p>
                                { posts[key].body }
                                </p>
                            </div>
                        );
                    })}

                </div>
                <div>
                    <h2>
                        <Link to="/add-post">Add New Blog</Link>
                    </h2>
                </div>

            </form>
            
        );
    }
}
export default Posts;