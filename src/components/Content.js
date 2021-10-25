import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header, Grid, Divider, Message } from 'semantic-ui-react';
import { getGames } from '../actions/content';
import Categories from './Categories';
import GameCard from './shared/GameCard';
import GameModal from './shared/GameModal';

export default function Games() {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const { games, filteredGames } = useSelector(state => state.content);
    useEffect(() => {
      dispatch(getGames())
        .then(() => {
          setIsLoaded(true);
        })
        .catch(() => {
          setIsLoaded(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
      <>
        <Grid>
            <Grid.Column width={10}>
                <Header as='h2'>Games</Header>
                <Divider />
                {
                  isLoaded && <>
                    {
                      filteredGames 
                      ?
                       <>
                        {
                          filteredGames.length > 0 
                          ?
                          filteredGames.map((item,i) => (
                            <GameCard name={item.name} icon={item.icon} description={item.description} code={item.code}  key={i}/>))
                          : 
                          <Message negative>
                            <Message.Header>We're sorry, no game found.</Message.Header>
                          </Message>
                        }
                       </>  
                      : 
                        games.map((item,i) => (
                          <GameCard name={item.name} icon={item.icon} description={item.description} code={item.code}  key={i}/>))
                    }
                  </>    
                }
            </Grid.Column>
            <Grid.Column width={6}>
                <Header as='h2'>Categories</Header>
                <Divider />
                <Categories />
            </Grid.Column>
        </Grid>
        <Grid>
          <GameModal />
        </Grid>
      </>
    )
}
