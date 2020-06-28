import React, { useEffect, useState } from 'react'
import {
  Input,
  KeyboardDismiss,
  ListView,
  Text,
  Loader,
  Button,
  Seprator
} from '../../components'
import { getSellers } from '../../apis'
import {
  Container,
  InputWrapper,
  SellerListWrapper,
  SellerCard,
  EmptyWrapper,
  BookingButtonWrapper,
  inputStyle
} from './style'

const SellerList = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [sellerList, setSellerList] = useState([])

  useEffect(() => {
    setLoading(true)
    getSellers(searchValue)
      .then(list => {
        setLoading(false)
        setSellerList(list)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [searchValue])

  const _renderItem = ({ item }) => (
    <SellerCard>
      <Text text={item.name} />
      <BookingButtonWrapper>
        <Button
          onPress={() =>
            navigation.navigate('Appointments', {
              sellerId: item._id,
              sellerName: item.name
            })
          }
          buttonText='Bookings'
        />
      </BookingButtonWrapper>
    </SellerCard>
  )

  const _keyExtractor = (item, index) => index.toString()

  const _listEmptyComponent = () =>
    loading ? (
      <Loader />
    ) : (
      <EmptyWrapper>
        <Text text='No seller list available' />
      </EmptyWrapper>
    )

  const _itemSeprator = () => <Seprator />

  return (
    <KeyboardDismiss>
      <Container>
        <InputWrapper>
          <Input
            styleProps={inputStyle}
            placeholder='Search seller'
            onChangeText={text => setSearchValue(text)}
            value={searchValue}
          />
        </InputWrapper>
        <SellerListWrapper>
          <ListView
            dataList={sellerList}
            _renderItem={_renderItem}
            _keyExtractor={_keyExtractor}
            _listEmptyComponent={_listEmptyComponent}
            _itemSeprator={_itemSeprator}
          />
        </SellerListWrapper>
      </Container>
    </KeyboardDismiss>
  )
}

export default SellerList
