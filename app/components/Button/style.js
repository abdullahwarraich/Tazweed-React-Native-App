import styled from 'styled-components/native'

export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  border: 1px solid rgb(24, 144, 255);
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  borderRadius: 20px;
  ${styleProps => styleProps.styleProps}
`

export const buttonTextStyle = `
  color: rgb(24, 144, 255);
`
