import {FETCH_POST, NEW_POST} from './types';

// export function fetchPost1() {
//     return function(dispatch) {
//         dispatch({})
//     }
// }

export const fetchPost = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({type: FETCH_POST, payload: posts}));
    };
};

export const createPost = (post) => {
    const fetchOptions = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    };

    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts', fetchOptions)
        .then(res => res.json())
        .then(post => dispatch({type: NEW_POST, payload: post}))
    }
}