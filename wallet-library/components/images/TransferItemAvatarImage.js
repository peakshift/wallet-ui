import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';


const TransfersListItemImage = styled(Image)`
  background-color: #D6D6D6;
  width: 40px;
  height: 40px;
  resize-mode: cover;
  border-radius: 20px;
  margin-right: 10px;
`


export class TransferItemAvatarImage extends React.Component {
  render() {
    return (
      <TransfersListItemImage
        source={this.props.source}
      />
    )
  }
}