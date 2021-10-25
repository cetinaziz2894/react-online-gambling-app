import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from 'semantic-ui-react'
import { getCategories, filterGamesByCategories } from '../actions/content';

export default function Categories() {
    const [isLoaded, setIsLoaded] = useState(false);

    const { categories, games } = useSelector(state => state.content);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCategories())
        .then(() => {
          setIsLoaded(true);
        })
        .catch(() => {
          setIsLoaded(false);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
        <div>
            {
                isLoaded && categories.map((item,i) => <Header as="h2" onClick={() => dispatch(filterGamesByCategories(games,item.id))} key={i} size='large' className="mb-05 mt-0 pb-0 cursor-pointer">
                  {item.name}</Header>)
            }
        </div>
    )
}
