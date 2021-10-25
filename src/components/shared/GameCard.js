import React from 'react'
import { useDispatch } from 'react-redux';
import { Image, Grid, Item, Button, Icon } from 'semantic-ui-react';
import { openModal } from "../../actions/modal";

export default function GameCard(props) {
    const dispatch = useDispatch();

    const {name, code, description,icon} = props;
    
    return (
        <>
            <Grid>
                <Grid.Column width={6}>
                <Image src={process.env.PUBLIC_URL +`/${icon}`} size={'medium'} verticalAlign={'middle'} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Grid.Row>
                        <Grid.Column>
                            <Item.Content>
                                <Item.Header as='h4' className="pb-0 mb-0">{name}</Item.Header>
                                <Item.Description>{description}
                                </Item.Description>
                            </Item.Content>
                            <Button className="mt-1" floated="right" secondary onClick={() => dispatch(openModal(true,code))}>
                                Play<Icon name='chevron right' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
      </>
    )
}
