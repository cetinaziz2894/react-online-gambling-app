import React from 'react'
import { Container, Image } from 'semantic-ui-react';

export default function Header() {
    return (
        <Container fluid>
            <Image src={process.env.PUBLIC_URL +"images/logo.svg"} size={'big'} className="header-image"/>
        </Container>
    )
}
