import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

const flexContainer = {
    display: 'flex',
    justifyContent: 'center',
  }

  const linkStyle = {
    border: '2px solid grey',
    padding: '10px',
    margin: '30px',
    fontSize: '150%'    
}

const flexBlog = {
    justifyContent: 'left',
    textAlign: 'left',
    wordWrap: 'break-word',
    border: '2px solid black'
}

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
            <Grid>
                <Col style={flexContainer}>
                    <Link to="/home" style={linkStyle}>Home</Link>
                    <Link to="/add-post" style={linkStyle}>Add a new blog post!</Link>
                </Col>
                <Col className="Posts" style={flexBlog}>
                    { Object.keys(posts).map(function(key) {
                        return (
                            <Col key={key}>
                                <h1>
                                { posts[key].title }
                                </h1> 
                                <p>
                                { posts[key].body }
                                </p>
                            </Col>
                        );
                    })}
                </Col>
            </Grid>
        );
    }
}
export default Posts;