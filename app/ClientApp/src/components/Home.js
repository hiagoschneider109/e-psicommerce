import React, { Component } from 'react';
import styled from 'styled-components';
import Products from './Products';
import Slider from './Slider'
const Container = styled.div`
  
`;
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Container>
        <Slider/>
        <Products />
      </Container>
    );
  }
}
