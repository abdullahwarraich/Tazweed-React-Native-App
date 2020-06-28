import React from 'react'

import { TextWrapper } from './style'

const Text = ({ text, styleProps }) => (
  <TextWrapper styleProps={styleProps}>{text}</TextWrapper>
)

export default Text
