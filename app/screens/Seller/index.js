import React from 'react'
import { Header } from '../../components'
import { SellerList } from '../../containers'

const Sellers = ({ navigation }) => (
  <>
    <Header headerText='Seller List' />
    <SellerList navigation={navigation} />
  </>
)

export default Sellers
