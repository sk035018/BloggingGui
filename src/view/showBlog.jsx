import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Blogs from './blogs';
import { getBlog } from '../dao/dao';
import { useParams, useHistory } from 'react-router-dom';

export default function ShowBlog() {

    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const _blog = await getBlog(+id);
            if(_blog) {
                setBlog(_blog)
            } else {
                window.alert("No Such Blog Found");
                history.push('/viewblog');
            }
        })();
    }, [id, history]);

    return (
        <List className='root'>
            <>
                <Blogs blogs={[blog]} />
                <Divider variant="inset" component="li" />
            </>
        </List>
    );
}
