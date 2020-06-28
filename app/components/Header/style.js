import styled from 'styled-components/native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

export const HeaderWrapper = styled.View`
  flexDirection: row;
  height: ${hp('8%').toFixed(0)}px;
  backgroundColor: #deedfb;
  border: 1px solid #ffffff;
  borderBottomColor: rgb(24, 144, 255);
`

export const textProps = `
  fontWeight: bold;
  justifyContent: center;
  alignItems: center;
  fontSize: ${wp('6%').toFixed(0)}px;
`

export const Heading = styled.View`
  flex: 2;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: center;
  ${styleProps => styleProps.styleProps}
`

export const GoBack = styled.TouchableOpacity`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: center;
  marginLeft: 5px;
`