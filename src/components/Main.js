import React from 'react';
import { useSelector } from "react-redux";
import { Container, Segment } from 'semantic-ui-react';
import Content from './Content';
import MainHeader from './MainHeader';
import Header from "./Header";
import { Redirect } from 'react-router-dom';

export default function Main() {
    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
        <>
        <Header />
        <Container fluid>
            <Segment className="main container">
                <MainHeader />
                <Content />
            </Segment>
        </Container>
        </>
    )
}
