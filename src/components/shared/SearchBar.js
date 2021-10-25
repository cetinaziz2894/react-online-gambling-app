import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { searchGamesByTitle } from '../../actions/content';

export default function SearchBar() {
    const [q, setQ] = useState("");
    const { games } = useSelector(state => state.content);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(searchGamesByTitle(games,q));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [q])
    return(
        <Input icon='search' placeholder='Search Game' value={q} onChange={(e) => {
            setQ(e.target.value);}
        } size={'small'}/>
    )
}