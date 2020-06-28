import React, { useEffect, useState } from 'react'
import Toast from 'react-native-tiny-toast'
import { ListView, Text, Loader, Button, Seprator } from '../../components'
import { getAppointments, bookAppointment } from '../../apis'
import { dateFormat } from '../../utils'
import {
  Container,
  AppointmentListWrapper,
  TextWrapper,
  AppointmentCard,
  ButtonWrapper,
  TimingWrapper,
  DateWrapper,
  textProps
} from './style'

const AppointmentList = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [fetchList, setFetchList] = useState(false)
  const [appointmentList, setAppointmentList] = useState([])

  const { sellerId, sellerName } = route.params

  useEffect(() => {
    setLoading(true)
    getAppointments(sellerId)
      .then(list => {
        setLoading(false)
        setAppointmentList(list)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [fetchList, sellerId])

  const _bookAppointment = id => {
    bookAppointment(id)
      .then(response => {
        setFetchList(!fetchList)
        Toast.showSuccess('Appointment submitted.')
      })
      .catch(error => {
        Toast.show('Something went wrong, please try again.')
      })
  }

  const _renderItem = ({ item }) => (
    <AppointmentCard>
      <TimingWrapper>
        <DateWrapper>
          <Text text='Start time: ' />
          <Text text={dateFormat(item.startDate)} />
        </DateWrapper>
        <DateWrapper>
          <Text text='End time: ' />
          <Text text={dateFormat(item.endDate)} />
        </DateWrapper>
      </TimingWrapper>
      <ButtonWrapper>
        <Button onPress={() => _bookAppointment(item._id)} buttonText='Book' />
      </ButtonWrapper>
    </AppointmentCard>
  )

  const _keyExtractor = (item, index) => index.toString()

  const _listEmptyComponent = () =>
    loading ? (
      <Loader />
    ) : (
      <TextWrapper>
        <Text text='No appointment available' />
      </TextWrapper>
    )

  const _itemSeprator = () => <Seprator />

  return (
    <Container>
      <TextWrapper>
        <Text text={sellerName} styleProps={textProps} />
      </TextWrapper>
      <AppointmentListWrapper>
        <ListView
          dataList={appointmentList}
          _renderItem={_renderItem}
          _keyExtractor={_keyExtractor}
          _listEmptyComponent={_listEmptyComponent}
          _itemSeprator={_itemSeprator}
        />
      </AppointmentListWrapper>
    </Container>
  )
}

export default AppointmentList
