import React, { Component } from 'react';
import { Link } from 'react-router';

class AddPost extends Component {
    constructor() {
        super();

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    state = {
        title: '',
        body: ''
    };

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleChangeBody = (e) => {
        this.setState({
            body: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.firebaseRef.push({
            title: this.state.title,
            body: this.state.body
        });

        this.setState({
            title: '',
            body: ''
        });
    }

    handleClear = (e) => {
        this.setState({
            title: '',
            body: ''
        });
    }

    render() {
        return (
            <form>
                <h2 style={{ height: 50 }}>
                    <Link to="/posts">View Blogs</Link>
                </h2>
                <h2>
                    <Link to="/home">Home</Link>
                </h2>
                <div className="AddPost">
                    <label>Title</label>
                    <input
                        type="text"
                        size={40}
                        placeholder="Write the title of your post"
                        onChange={ this.handleChangeTitle }
                        value={ this.state.title }
                    />
                </div>
                <div>
                    <label>Body</label>
                    <input 
                        type="text"
                        size={100}
                        placeholder="Write the body of your blog"
                        onChange= { this.handleChangeBody }
                        value={ this.state.body }
                    />
                </div>
                    <button
                        type="submit"
                        onClick={ this.handleSubmit }
                    >
                    Submit
                    </button>
                    <button
                        type="cancel"
                        onClick={ this.handleClear }>
                    Clear
                    </button>
            </form>
            
        );
    }
}

export default AddPost;