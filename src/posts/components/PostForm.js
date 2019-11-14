import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createPost} from '../action/postActions';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value});
    } 

    onSubmit = (e) => {
        e.preventDefault();
        const {title, body} = this.state;
        if (title !== '' && body !== '') {
            this.props.createPost({title, body});
            this.setState({title: '', body: ''});    
        }
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label><br/>
                        <input name="title" type="text" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body</label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost}) (PostForm);