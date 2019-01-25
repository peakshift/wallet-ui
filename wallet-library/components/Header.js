import React from 'react';
import styled from 'styled-components'
import { View } from 'react-native';
import { HeaderImage } from "./images/HeaderImage";
import { HeaderButton } from "./buttons/HeaderButton";


const ViewHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const HeaderItem = styled(View)`
  flex: 1;
  padding-horizontal: 10px;
`

const HeaderCenterItem = styled(View)`
  padding-horizontal: 10px;
`


export class Header extends React.Component {
  render() {
    return (
      <ViewHeader>
        <HeaderItem>
        </HeaderItem>

        <HeaderCenterItem>
          <HeaderImage source={this.props.imageSource} />
        </HeaderCenterItem>

        <HeaderItem>
          <HeaderButton
            text={this.props.rightButtonText}
            action={this.props.rightButtonAction}
          />
        </HeaderItem>
      </ViewHeader>
    )
  }
}