import React, { useEffect, useState } from 'react';
import Blogs from './blogs';
import { getBlogs } from '../dao/dao'

export default function AllBlogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        (async () => {
            const blogs = await getBlogs();
            setBlogs(blogs ? blogs : []);
        })();
    },[]);

    return (
        <Blogs blogs = {blogs} />
    );
}