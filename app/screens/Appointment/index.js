import React from 'react'
import { Header } from '../../components'
import { AppointmentList } from '../../containers'

const Appointments = ({ route, navigation }) => (
  <>
    <Header headerText='Appointments' goBack={() => navigation?.goBack()} />
    <AppointmentList route={route} navigation={navigation} />
  </>
)

export default Appointments
