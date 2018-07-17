import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

const headerStyle = {
    color: 'pink',
    border: '10px solid black',
    padding: '10px',
    margin: '30px',
    fontSize: '200%',
    backgroundColor: 'grey',
    textAlign: 'center'
}

const linkStyle = {
    border: '2px solid grey',
    padding: '10px',
    margin: '30px',
    fontSize: '150%'    
}

const flexContainer = {
    display: 'flex',
    justifyContent: 'center',
  }

class Home extends Component {
    render() {
        return (
            <Grid>
                <Col style={headerStyle}>
                    <h1>Natty Mulf's Awesome Blog</h1>
                </Col>
                <Col style={flexContainer}>
                    <Link to="/posts" style={linkStyle}>View Blogs</Link>
                    <Link to="/add-post" style={linkStyle}>Add a new blog post!</Link>
                </Col>
            </Grid>
        )
    }
}

export default Home;