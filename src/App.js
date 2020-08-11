import React from 'react';
import Header from './Components/Layout/Header';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import AuthContextProvider from './contexts/AuthContext'

function App(props) {
  return (
    <AuthContextProvider>
      <Header />
      <h1>Hola Mundo</h1>
      
      <Card className="col-sm-3">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    
    </AuthContextProvider>
  );
}

export default App;
