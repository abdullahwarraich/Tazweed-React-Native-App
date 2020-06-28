import React from 'react'
import Text from '../Text'
import Button from '../Button'
import { HeaderWrapper, GoBack, Heading, textProps } from './style'

const Header = ({ headerText, goBack }) => (
  <HeaderWrapper>
    {goBack ? (
      <GoBack onPress={goBack}>
        <Text text='back' />
      </GoBack>
    ) : null}
    <Heading styleProps={goBack ? `` : `justifyContent: center;`}>
      <Text text={headerText} styleProps={textProps} />
    </Heading>
  </HeaderWrapper>
)

export default Header
