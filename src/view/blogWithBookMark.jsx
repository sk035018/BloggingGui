import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import Blog from './blog';

export default function BlogWithBookMark({blog}) {
    const [isBookMarked, setBookMarked] = useState(false);

return (
    <>
        <FaBookmark 
        className = 'flex-shift'
        color = {isBookMarked ? "white" : "grey"}
        title = {isBookMarked ? "BookMarked" : "Add to BookMarks"}
        onClick= {() => {
            setBookMarked(isBookMarked => !isBookMarked);
            console.log(isBookMarked);
        }} 
        />
        <Blog {...blog} />
    </>
);
}