import React from 'react';

export default function Blog({ authorName, content, description }) {

    return (
        <div style = {{width: '400px'}}>
            <h2 style = {{width: '400px'}}>Content : <u> {content} </u></h2>
            <p style = {{width: '400px'}}>Description : {description}</p>
            <h3 className = 'shift'> By : {authorName} </h3>
        </div>
    );
}