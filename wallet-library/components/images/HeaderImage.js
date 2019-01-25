import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';


const HeaderImageContainer = styled(Image)`
  resize-mode: contain;
  width: 150px;
`


export class HeaderImage extends React.Component {
  render() {
    return (
      <HeaderImageContainer
       source={this.props.source}
     />
    )
  }
}