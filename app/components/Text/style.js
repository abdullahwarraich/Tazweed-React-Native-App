import styled from 'styled-components/native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const TextWrapper = styled.Text`
  color: black;
  fontSize: ${wp('4%').toFixed(0)}px;
  ${styleProps => styleProps.styleProps}
`
