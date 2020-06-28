import React from 'react'
import { InputField } from './style'

const Input = ({ styleProps, ...props }) => (
  <InputField styleProps={styleProps} {...props} />
)

export default Input
