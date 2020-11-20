import React from 'react';

export default function Blogs() {

    async function getBlogs() {
        try {
            const response = await fetch('http://localhost:3100/blogs',{
                mode : 'no-cors',
            });
            console.log(response);
        } catch(error) {
            console.error(error);
        }
    }
    return <button onClick = {getBlogs}>Blogs</button>
}