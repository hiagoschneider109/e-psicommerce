import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Container>
        <h1>Salut!!!</h1>
      </Container>
    );
  }
}
