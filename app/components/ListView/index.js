import React from 'react'
import { FlatList } from 'react-native'

const ListView = ({
  dataList,
  _renderItem,
  _keyExtractor,
  _listEmptyComponent,
  _itemSeprator
}) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    removeClippedSubviews={false}
    data={dataList}
    renderItem={_renderItem}
    keyExtractor={_keyExtractor}
    ListEmptyComponent={_listEmptyComponent}
    ItemSeparatorComponent={_itemSeprator}
  />
)

export default ListView
