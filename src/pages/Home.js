import React from 'react';

import { Box, TextInput } from 'grommet';
import { Search } from "grommet-icons";

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">iPlusBolg</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="home">IT Blog</Nav.Link>
                <Nav.Link href="board">게시판</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Home;