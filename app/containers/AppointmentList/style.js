import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`

export const AppointmentListWrapper = styled.View`
  marginTop: 10px;
  flexDirection: column;
  justifyContent: center;
`

export const TextWrapper = styled.View`
  flexDirection: row;
  justifyContent: center;
  alignItems: center;
`

export const AppointmentCard = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  margin: 5px 0px 5px 0px;
`

export const ButtonWrapper = styled.View`
  width: 30%;
  justifyContent: center;
`

export const TimingWrapper = styled.View`
  flexDirection: column;
  justifyContent: space-around;
`

export const DateWrapper = styled.View`
  flexDirection: row;
`

export const textProps = `
  fontWeight: bold;
`