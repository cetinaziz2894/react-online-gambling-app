import React from 'react'
import { Container, Image } from 'semantic-ui-react';

export default function Header() {
    return (
        <Container fluid>
            <Image src={process.env.PUBLIC_URL +"images/react_redux.png"} size={'medium'} className="header-image mt-2 mb-2"/>
        </Container>
    )
}
