import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';

const SummaryImageContainer = styled(Image)`
  backgroundColor: gray;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
  border-width: 2px;
  border-color: white;
`

export class CircleAvatarImage extends React.Component {
  render() {
    return (
      <SummaryImageContainer
        source={this.props.source}
      />
    )
  }
}