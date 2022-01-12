import React from 'react'

const DataList = ({ itemComponent: ItemComponent, dataList }) =>
  dataList.map(({ id }, index) => <ItemComponent key={id || index} dataId={id} />)

export default DataList
