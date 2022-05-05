import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import styled  from 'styled-components';


const Container = styled.div`

`;
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu/>
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
