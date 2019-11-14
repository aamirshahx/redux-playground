import React from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';

export default function PostApp() {
    return (
        <>
            <PostForm />
            <hr/>
            <Post />
        </>
    )
}