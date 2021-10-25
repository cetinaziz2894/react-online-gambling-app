import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import SearchBar from './shared/SearchBar';
import { Button, Grid, Icon, Item } from 'semantic-ui-react';

import { logout } from "../actions/auth";

export default function MainHeader() {

    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);
    const logOutHandler = () => {
        const username = localStorage.getItem('username');
        dispatch(logout(username));
      };

    return (
        <Grid>
            <Grid.Column width={10}>
                <Item>
                <Grid columns={2}>
                    <Grid.Row>
                    <Grid.Column width={3} centered="true">
                        <Item.Image className="profile_image"  textalign={'right'} size='large' src={process.env.PUBLIC_URL +user?.avatar} circular />
                    </Grid.Column>
                    <Grid.Column textalign={'left'} width={12}>
                        <Item.Content>
                            <Item.Header as='b'>{user?.name}</Item.Header>
                            <Item.Meta>{user?.event}</Item.Meta>
                        </Item.Content>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="pt-0">
                        <Button secondary onClick={() => logOutHandler()}>
                            <Icon name='chevron left' />Log Out
                        </Button>
                    </Grid.Row>
                </Grid>
                </Item>
            </Grid.Column>
            <Grid.Column width={6}>
                <SearchBar />
            </Grid.Column>
        </Grid>
    )
}
