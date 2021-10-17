import React from "react";
import Post from "./Post"; 
import moment from 'moment';

const posts = [
    {
        name: "Felicia",
        message: "Hi peeps",
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        comments: [ 
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {            
                name: "Jason Todd",
                message: "lol"
            }
        ]
    },
    {
        name: "Michael Myers",
        message: "Bye Felicia",
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        comments: [ 
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {            
                name: "Jason Todd",
                message: "lol"
            }
        ]
    },
    {
        name: "Jason Todd",
        message: "Hello! Is it me you're looking for?",
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        comments: [ 
            {
                name: "Michael Myers",
                message: "First to comment"
            },
            {            
                name: "Jason Todd",
                message: "be quiet Michael!"
            },
            {
                name: "Felicia",
                message: "This chat is toxic XD"
            }
        ]
    }
]


function Posts() {
    return (
            <>
            { posts.map((post, i) => (<Post key={i} name={post.name} message={post.message} date={post.date} comments={post.comments} />)) }
            </>
    )
};

export default Posts;