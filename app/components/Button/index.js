import React from 'react'
import Text from '../Text'
import { ButtonStyle, buttonTextStyle } from './style'

export const Button = ({ buttonText, styleProps, ...props }) => (
  <ButtonStyle styleProps={styleProps} {...props}>
    <Text text={buttonText} styleProps={buttonTextStyle} />
  </ButtonStyle>
)

export default Button
