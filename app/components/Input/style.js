import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const InputField = styled.TextInput`
  height: ${hp('6%').toFixed(0)}px;
  borderColor: rgb(24, 144, 255);
  borderWidth: 1px;
  ${styleProps => styleProps.styleProps}
`
