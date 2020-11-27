import React from 'react';
import image from './images.jpg';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import BlogWithBookMark from './blogWithBookMark';

export default function Blogs({ blogs }) {
    
    return (
        <List className='root'>
            {blogs.map((blog, index) => (
                <ListItem key={index} className = 'root' style={{backgroundImage: `url(${image})`, margin: '10px'}}>
                    <BlogWithBookMark blog={blog} />
                    <Divider variant="inset" component="li" />
                </ListItem>
                )
            )}
        </List>
    );
}
