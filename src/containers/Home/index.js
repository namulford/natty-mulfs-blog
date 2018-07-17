import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <form>
                <div className="HomePage">
                    <h1>Natty Mulf's Awesome Blog</h1>
                </div>
                <div>
                    <li>
                        <Link to="/posts">View Blogs</Link>
                    </li>
                    <li>
                        <Link to="/add-post">Add a new blog post!</Link>
                    </li>
                </div>
            </form>

        )
    }
}

export default Home;